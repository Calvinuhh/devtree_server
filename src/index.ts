import server from "./server";
import dbConnect from "./database/database";

const { PORT } = process.env;

dbConnect()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}, node version: 22.12`);
    });
  })
  .catch((error) => {
    throw Error(error);
  });
