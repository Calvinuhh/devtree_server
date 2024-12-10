import { connect } from "mongoose";

process.loadEnvFile();
const { DB_URI } = process.env as { DB_URI: string };

const dbConnect = async () => {
  try {
    await connect(DB_URI);
    console.log("database connection successful");
  } catch (error) {
    const err = error as Error;
    console.log("it was unable to connect to the database");
    throw Error(err.message);
  }
};

export default dbConnect;
