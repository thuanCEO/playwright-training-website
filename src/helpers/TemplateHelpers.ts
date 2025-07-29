export class TemplateXpath {
    public static isXPath(target: string): boolean {
        return (
            target.startsWith('/') ||
            target.startsWith('//') ||
            target.includes('@') ||
            /\[\d+\]/.test(target)
        );
    }
}

export class TemplateFormat {
    private static format(template: string, ...args: string[]): string {
        let result = template;
        args.forEach(value => {
            result = result.replace('%s', value);
        });
        return result;
    }
    public static formatWithPlaceholder(template: string, ...args: string[]): string {
        let i = 0;
        return template.replace(/%s/g, () => args[i++] ?? '');
    }
}

/**
 * Compare two strings and log the result.
 * Optionally ignore case or trim whitespace.
 * Optionally throw an error if they don’t match.
 */
export class StringComparator {
    static compare(actual: string, expected: string, options?: { ignoreCase?: boolean; trim?: boolean }): boolean {
        let a = actual;
        let e = expected;

        if (options?.trim) {
            a = a.trim();
            e = e.trim();
        }

        if (options?.ignoreCase) {
            a = a.toLowerCase();
            e = e.toLowerCase();
        }

        const isEqual = a === e;

        console.log(`Comparing strings: 
            Expected: "${expected}" 
            Actual  : "${actual}"
            Result  : ${isEqual ? 'MATCH' : 'MISMATCH'}`);

        return isEqual;
    }
}
