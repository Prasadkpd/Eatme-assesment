import bcrypt from 'bcrypt';

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '', 10);

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const verifyPassword = async (password: string, hashedPassword: string) => {
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  return passwordMatch;
};

export const excludeFields = (obj: any, fieldsToExclude: string[]): any => {
  const newObj = { ...obj };
  fieldsToExclude.forEach((field: string) => delete newObj[field]);
  return newObj;
};
