import Mongoose from "mongoose";
let database: Mongoose.Connection;

export const connect = (uri: string): Mongoose.Connection => {
  if (database) {
    return database;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });

  return database;
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};