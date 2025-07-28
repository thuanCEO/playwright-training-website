import fs from 'fs';

const currentEnv = process.env.NODE_ENV || 'dev_en';

const envPath = require('path').resolve(__dirname, '../config/ConfigUrl.json');
const env = JSON.parse(fs.readFileSync(envPath, 'utf-8'));

export const orangeHrmUrl: string = env[currentEnv].orangeHrmUrl;
export const testArchitectUrl: string = env[currentEnv].testArchitectUrl;
export const apiUrl: string = env[currentEnv].apiUrl;
export const playwrighttUrl: string = env[currentEnv].playwrighttUrl;
