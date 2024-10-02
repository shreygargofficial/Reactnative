import { openDatabaseAsync } from 'expo-sqlite';


export async function dbSetUp() {
    try {
        let db = await openDatabaseAsync('place');
        await db.runAsync(`CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, camera TEXT NOT NULL, location TEXT NOT NULL)`);
        console.log('Database setup complete');
        return db;
    }
    catch (e) {
        console.error("Creating error ", e)
    }

}


export async function insertPlace(title, image, camera, location) {
    try {
        let db = await dbSetUp()
        const result = await db.runAsync('INSERT INTO places (title, image,camera,location) VALUES (?, ?, ? , ?)', title, image, camera, location);
        console.log(result.lastInsertRowId, result.changes);
        return result;
    }
    catch (e) {
        console.error("Insertion Error ", e)
    }
}

export async function getPlace() {
    try {
        let db = await dbSetUp()
        const result = await db.getAllAsync(`select * from places`);
        return result;
    }
    catch (e) {
        console.error("get Error ", e);
        throw new Error(e)
    }
}



export async function getPlaceById(id) {
    try {
        let db = await dbSetUp()
        const result = await db.getFirstAsync(`select * from places where id=${id}`);
        return result;
    }
    catch (e) {
        console.error("get Error ", e);
        throw new Error(e)
    }
}


