import { getDB, saveDB, insertDB } from "./db.js";

// create new note
export const createNote = async (note, tags) => {
	const data = {
		tags,
		content: note,
		id: Date.now(),
	};

	await insertDB(data);
	return data;
};

// get all notes
export const getAllNotes = async () => {
	const { notes } = await getDB();
	return notes;
};

// find a note
export const findNote = async (filter) => {
	const notes = await getAllNotes();
	return notes.filter((note) =>
		note.content.toLowerCase().includes(filter.toLowerCase())
	);
};

// remove note
export const removeNote = async (id) => {
	const notes = await getAllNotes();
	const match = notes.find((note) => note.id === id);

	if (match) {
		const newNotes = notes.filter((note) => note.id !== id);
		await saveDB({ notes: newNotes });
		return id;
	}
};

// remove all notes
export const removeAllNotes = async () => {
	await saveDB({ notes: [] });
};
