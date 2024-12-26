import { JwtPayload, verify, sign } from "jsonwebtoken";

const { JWT_SECRET } = process.env as { JWT_SECRET: string };

export const generateJWT = (payload: JwtPayload) => {
  const token = sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (token: string) => {
  const result = verify(token, JWT_SECRET);

  return result;
};
