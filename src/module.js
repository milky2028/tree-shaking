import Dexie from "dexie";
import Loki from "@coretech/lokidb";

const db = new Dexie("my-db");
db.version(1).stores({
  friends: "++id, name, age",
});

const db2 = new Loki("db");
db2.addCollection("some-collection");

console.log(db);
console.log(db2);
