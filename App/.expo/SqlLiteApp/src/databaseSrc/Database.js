import SQLite from "react-native-sqlite-storage";
import { DatabaseInitialization } from "./DatabaseInitialization";
import { DATABASE } from "./Constants";
import { DropboxDatabaseSync } from "../sync/dropbox/DropboxDatabaseSync";
class DatabaseImpl {
    constructor() {
        this.databaseSync = new DropboxDatabaseSync();
    }
    open() {
        SQLite.DEBUG(true);
        SQLite.enablePromise(true);
        let databaseInstance;
        return SQLite.openDatabase({
            name: DATABASE.FILE_NAME,
            location: "default"
        })
            .then(db => {
            databaseInstance = db;
            console.log("[db] Database open!");
            const databaseInitialization = new DatabaseInitialization();
            return databaseInitialization.updateDatabaseTables(databaseInstance);
        })
            .then(() => {
            this.database = databaseInstance;
            return databaseInstance;
        });
    }
    close() {
        if (this.database === undefined) {
            return Promise.reject("[db] Database was not open; unable to close.");
        }
        return this.database.close().then(status => {
            console.log("[db] Database closed.");
            this.database = undefined;
        });
    }
    createList(newListTitle) {
        return this.getDatabase()
            .then(db => db.executeSql("INSERT INTO List (title) VALUES (?);", [newListTitle]))
            .then(([results]) => {
            const { insertId } = results;
            console.log(`[db] Added list with title: "${newListTitle}"! InsertId: ${insertId}`);
            return this.databaseSync.upload();
        });
    }
    getAllLists() {
        console.log("[db] Fetching lists from the db...");
        return this.getDatabase()
            .then(db => db.executeSql("SELECT list_id as id, title FROM List ORDER BY id DESC;"))
            .then(([results]) => {
            if (results === undefined) {
                return [];
            }
            const count = results.rows.length;
            const lists = [];
            for (let i = 0; i < count; i++) {
                const row = results.rows.item(i);
                const { title, id } = row;
                console.log(`[db] List title: ${title}, id: ${id}`);
                lists.push({ id, title });
            }
            return lists;
        });
    }
    addListItem(text, list) {
        if (list === undefined) {
            return Promise.reject(Error(`Could not add item to undefined list.`));
        }
        return this.getDatabase()
            .then(db => db.executeSql("INSERT INTO ListItem (text, list_id) VALUES (?, ?);", [
            text,
            list.id
        ]))
            .then(([results]) => {
            console.log(`[db] ListItem with "${text}" created successfully with id: ${results.insertId}`);
            return this.databaseSync.upload();
        });
    }
    getListItems(list, orderByDone = false) {
        if (list === undefined) {
            return Promise.resolve([]);
        }
        return this.getDatabase()
            .then(db => db.executeSql(`SELECT item_id as id, text, done FROM ListItem WHERE list_id = ? ${orderByDone ? "ORDER BY done" : ""};`, [list.id]))
            .then(([results]) => {
            if (results === undefined) {
                return [];
            }
            const count = results.rows.length;
            const listItems = [];
            for (let i = 0; i < count; i++) {
                const row = results.rows.item(i);
                const { text, done: doneNumber, id } = row;
                const done = doneNumber === 1 ? true : false;
                console.log(`[db] List item text: ${text}, done? ${done} id: ${id}`);
                listItems.push({ id, text, done });
            }
            console.log(`[db] List items for list "${list.title}":`, listItems);
            return listItems;
        });
    }
    updateListItem(listItem) {
        const doneNumber = listItem.done ? 1 : 0;
        return this.getDatabase()
            .then(db => db.executeSql("UPDATE ListItem SET text = ?, done = ? WHERE item_id = ?;", [listItem.text, doneNumber, listItem.id]))
            .then(([results]) => {
            console.log(`[db] List item with id: ${listItem.id} updated.`);
            return this.databaseSync.upload();
        });
    }
    deleteList(list) {
        console.log(`[db] Deleting list titled: "${list.title}" with id: ${list.id}`);
        return this.getDatabase()
            .then(db => {
            return db
                .executeSql("DELETE FROM ListItem WHERE list_id = ?;", [list.id])
                .then(() => db);
        })
            .then(db => db.executeSql("DELETE FROM List WHERE list_id = ?;", [list.id]))
            .then(() => {
            console.log(`[db] Deleted list titled: "${list.title}"!`);
            return this.databaseSync.upload();
        });
    }
    getDatabase() {
        if (this.database !== undefined) {
            return Promise.resolve(this.database);
        }
        return this.open();
    }
}
export const database = new DatabaseImpl();
