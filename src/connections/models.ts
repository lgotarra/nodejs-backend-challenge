import mongoose, { Model, Schema } from "mongoose";
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

var dbDefaultConn = connect({ db: dbDefault! });

function connectToDbDefault() {
  //dbDefault Connection. Contains Users and Lists

  dbDefaultConn.on("disconnected", () => {
    console.warn(`Database ${dbDefaultConn} disconnected. Trying to reconnect`);
    connect;
  });

  dbDefaultConn.on("error", (error) => {
    console.error(`Error with database ${dbDefaultConn} connection: `, error);
  });
}

//Export models from this db
var UserModel = dbDefaultConn.model("User", UserSchema);
var ListModel = dbDefaultConn.model("List", ListSchema);

/*
 *
 * Models export
 *
 */

export {
  //Connect functions
  connectToDbDefault,

  //Models
  UserModel,
  ListModel,
};
