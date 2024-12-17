import jwt, { JwtPayload } from "jsonwebtoken";

process.loadEnvFile();
const { JWT_SECRET } = process.env as { JWT_SECRET: string };

const generateJWT = (payload: JwtPayload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "10m",
  });
  return token;
};

export default generateJWT;
