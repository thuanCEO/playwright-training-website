import fs from 'fs';
import path from 'path';
import { PLATFORM } from '../config/Constants';

export class GetLocator {
    private static cache: Record<string, any> = {};

    /**
     * Trả về locator theo pageName và key
     * @param pageName Tên file JSON không cần `.json`
     * @param key Tên locator bên trong nhánh của file
     */
    public static getLocator(pageName: string, key: string): string {
        const envLang = `${PLATFORM.environment}_${PLATFORM.language}`;
        const fileName = `${pageName}.json`;
        const startDir = path.resolve(__dirname, '../locators');
        const filePath = this.findFileRecursive(startDir, fileName);
        console.log(`[DEBUG] Looking for file: ${fileName}`);
        console.log(`[DEBUG] Base dir: ${startDir}`);

        if (!filePath) {
            throw new Error(`File locator not found (not found recursively): ${fileName}`);
        }
        if (!this.cache[filePath]) {
            try {
                const raw = fs.readFileSync(filePath, 'utf-8');
                this.cache[filePath] = JSON.parse(raw);
            } catch (err) {
                throw new Error(`Error reading file ${fileName}: ${err}`);
            }
        }

        const data = this.cache[filePath];

        const locator = data[envLang][key];

        if (!locator) {
            const availableKeys = Object.keys(data[envLang]).join(', ');
            throw new Error(`Locator key '${key}' not found in '${envLang}' of ${fileName}. Available keys: ${availableKeys}`);
        }

        return locator;
    }

    private static findFileRecursive(dir: string, targetFile: string): string | undefined {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                const result = this.findFileRecursive(fullPath, targetFile);
                if (result) return result;
            } else if (entry.name === targetFile) {
                console.log(`Found file at: ${fullPath}`);
                return fullPath;
            }
        }

        return undefined;
    }

}
