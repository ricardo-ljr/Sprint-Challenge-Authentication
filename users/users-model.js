const db = require("../database/dbConfig");

module.exports = {
  getAll,
  add,
  find,
  findBy,
  findById
};

function getAll() {
  return db("users");
}

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
