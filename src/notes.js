import { getDB, saveDB, insertDB } from "./db";

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
	const allNotes = await getDB();
	return allNotes.notes;
};

// find a note
export const findNote = async (filter) => {
	const allNotes = await getDB();
	return allNotes.filter((note) =>
		note.content.toLowerCase().includes(filter.toLowerCase())
	);
};

// remove note
export const removeNote = async (id) => {
	const allNotes = getAllNotes();
	const match = allNotes.find((note) => note.id === id);

	if (match) {
		const notes = notes.filter((note) => note.id !== id);
		await saveDB(notes);
		return db;
	}
};

// remove all notes

export const removeAllNotes = async () => {
	await saveDB({ notes: [] });
};
