// db.js
import Dexie from "dexie";

export const db = new Dexie("mydb");
db.version(1).stores({
    cars: "++id, make, model, price", // Primary key and indexed props
});
