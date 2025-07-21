import fs from 'fs';

// Lấy biến môi trường hoặc mặc định là 'development'
const currentEnv = process.env.NODE_ENV || 'development';

// Đọc file env.json theo đường dẫn tuyệt đối
const envPath = require('path').resolve(__dirname, '../config/env.json');
const env = JSON.parse(fs.readFileSync(envPath, 'utf-8'));

export const testArchitectUrl: string = env[currentEnv].testArchitectUrl;
export const apiUrl: string = env[currentEnv].apiUrl;
export const playwrighttUrl: string = env[currentEnv].playwrighttUrl;