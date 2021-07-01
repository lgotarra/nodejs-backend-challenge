import mongoose from "mongoose";
import connect, { TInput } from "./connect";
//Import Schemas for each db
import ListSchema from "../schemas/list.schema";
import UserSchema from "../schemas/user.schema";

const dbDefault = process.env.DB_DEFAULT;
//Other databases URLs. Add them to .env

/*
 *
 * Connection list w/ Schemas.
 *
 */

//dbDefault Connection. Contains Users and Lists
if (!dbDefault == null) {
  var dbDefaultConn = connect({ db: dbDefault! });

  //Export models from this db
  var UserModel = dbDefaultConn.model("User", UserSchema);
  var ListModel = dbDefaultConn.model("List", ListSchema);

  //
  dbDefaultConn.on("disconnected", () => {
    console.warn(
      `Database ${dbDefaultConn} disconnected. Trying to reconnect`
    );
    connect;
  });

  dbDefaultConn.on("error", (error) => {
    console.error(`Error with database ${dbDefaultConn} connection: `, error);
  });

} else {
  console.error(
    `Error connecting to database: database URL is undefined or null`
  );
}

/*
 *
 * Models export
 *
 */

export { UserModel, ListModel };
