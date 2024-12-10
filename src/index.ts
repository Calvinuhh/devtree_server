import server from "./server";
import dbConnect from "./database/database";

process.loadEnvFile();
const { PORT } = process.env;

dbConnect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw Error(error);
  });
