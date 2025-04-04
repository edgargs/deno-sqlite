import { Database } from "@sqlite";

//const peopleDb = new Database(":memory:");
const peopleDb = new Database("people.db");

peopleDb.exec(
  "CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT not null, age INTEGER not null)",
);

export const db = {
  insertPerson: (name: string, age: number) => {
    peopleDb.exec("INSERT INTO people (name, age) VALUES (?, ?)", name, age);
    return peopleDb.lastInsertRowId;
  },
  getAllPeople: () => {
    return peopleDb.prepare("SELECT * FROM people").all();
  },
  updatePerson: (id: number, name: string, age: number) => {
    peopleDb.prepare("UPDATE people SET name = ?, age = ? WHERE id = ?").run(
      name,
      age,
      id,
    );
  },
  deletePerson: (id: number) => {
    peopleDb.prepare("DELETE FROM people WHERE id = ?").run(id);
  },
};