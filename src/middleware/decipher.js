import crypto from "crypto";

const Decipher = (text) => {
  const Inv = Buffer.from(text.iv, "hex");
  const encryptedText = Buffer.from(text.encrypted, "hex");
  const key = Buffer.from(text.key, "hex");

  const decipher = crypto.createDecipheriv(
    process.env.ALGORITHM,
    Buffer.from(key),
    Inv
  );

  let decrypt = decipher.update(encryptedText);
  decrypt = Buffer.concat([decrypt, decipher.final()]);

  return decrypt.toString();
};

export default Decipher;
