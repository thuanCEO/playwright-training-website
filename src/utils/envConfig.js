import fs from 'fs';

const env = JSON.parse(fs.readFileSync('./src/config/env.json', 'utf-8'));
const currentEnv = 'development'; // hoặc lấy từ biến môi trường

export const testArchitectUrl = env[currentEnv].testArchitectUrl;
export const apiUrl = env[currentEnv].apiUrl;
export const playwrighttUrl = env[currentEnv].playwrighttUrl;