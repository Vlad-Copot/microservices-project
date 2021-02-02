let DB_URI = "mongodb://localhost:27017/microservices";

// check if there is a uri defined for the database
if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
