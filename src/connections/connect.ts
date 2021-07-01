import mongoose, { connection } from "mongoose";

export type TInput = {
  db: string;
};

export default ({ db }: TInput) => {
  const connect = () => {
    mongoose
      .createConnection(db, { useNewUrlParser: true })
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch((error) => {
        console.error(`Error connecting to database ${db}: `, error);
        return process.exit(1);
      });
  };
  return connection;
};
