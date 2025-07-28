export class DateUtils {
    /**
     * Get the current date as a string in format: yyyy-mm-dd
     */
    static getCurrentDate(): string {
        const now = new Date();
        return this.formatDate(now);
    }

    /**
     * Get the current time in HH:mm:ss format
     */
    static getCurrentTime(): string {
        const now = new Date();
        return now.toTimeString().split(' ')[0];
    }

    /**
     * Get date after N days from today (can be negative for past date)
     */
    static getDateOffsetFromToday(days: number): string {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return this.formatDate(date);
    }

    /**
     * Format Date object to yyyy-mm-dd
     */
    static formatDate(date: Date): string {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    /**
     * Format Date object to dd/mm/yyyy
     */
    static formatDateVN(date: Date): string {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    /**
     * Get timestamp as string (yyyyMMdd_HHmmss)
     */
    static getTimestamp(): string {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const ss = String(now.getSeconds()).padStart(2, '0');
        return `${yyyy}${mm}${dd}_${hh}${min}${ss}`;
    }

    /**
     * Convert dd/mm/yyyy to yyyy-mm-dd (used for input type="date")
     */
    static convertToISOFormat(vnDate: string): string {
        const [dd, mm, yyyy] = vnDate.split('/');
        return `${yyyy}-${mm}-${dd}`;
    }

    /**
     * Convert yyyy-mm-dd to dd/mm/yyyy
     */
    static convertToVNFormat(isoDate: string): string {
        const [yyyy, mm, dd] = isoDate.split('-');
        return `${dd}/${mm}/${yyyy}`;
    }

    /**
     * Check if given date string is valid (ISO or VN)
     */
    static isValidDate(dateStr: string): boolean {
        const parsedDate = new Date(dateStr);
        return !isNaN(parsedDate.getTime());
    }
}
