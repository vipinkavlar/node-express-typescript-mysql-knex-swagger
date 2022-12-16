import { cleanEnv, str } from 'envalid';

function validateEnv() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    DB_HOST: str(),
    DB_PORT: str(),
    DB_USER: str(),
    DB_PASSWORD: str(),
    DB_NAME: str(),
  });
}

export default validateEnv;
