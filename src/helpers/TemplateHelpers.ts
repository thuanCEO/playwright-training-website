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