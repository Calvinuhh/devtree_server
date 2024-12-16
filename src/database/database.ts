import { connect } from "mongoose";

process.loadEnvFile();
const { DB_URI } = process.env as { DB_URI: string };

const dbConnect = async () => {
  try {
    await connect(DB_URI);
    console.log("Base de datos conectada exitosamente");
  } catch (error) {
    const err = error as Error;
    console.log("No fue posible conectarse a la base de datos");
    throw Error(err.message);
  }
};

export default dbConnect;
