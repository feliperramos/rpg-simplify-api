import crypto from "crypto";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const Cipher = (text) => {
  const cipher = crypto.createCipheriv(
    process.env.ALGORITHM,
    Buffer.from(key),
    iv
  );

  let encrypt = cipher.update(text);

  encrypt = Buffer.concat([encrypt, cipher.final()]);

  return {
    iv: iv.toString("hex"),
    encrypted: encrypt.toString("hex"),
    key: key.toString("hex"),
  };
};

export default Cipher;
