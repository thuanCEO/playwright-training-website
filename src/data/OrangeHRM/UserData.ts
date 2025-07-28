import { IUser } from '../../data/OrangeHRM/interfaces/IUser';
import { DataLoader } from '../../utils/DataLoader'

export class UserData {
    private static data: Record<string, IUser>;

    public static initialize(data: Record<string, IUser>) {
        this.data = data;
    }

    public static get(alias: string): IUser {
        const user = this.data[alias];
        if (!user) throw new Error(`User '${alias}' not found`);
        return user;
    }

    public static loadAndGetUser(fileName: string, alias: string): IUser {
        const data = DataLoader.loadFileName(fileName);
        this.data = data;
        const user = data[alias];
        if (!user) throw new Error(`User '${alias}' not found in ${fileName}`);
        return user;
    }


}