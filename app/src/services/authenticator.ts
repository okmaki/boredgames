import type PocketBase from 'pocketbase';

export class Authenticator {

    private userId: string | undefined;

    constructor(private pocketbase: PocketBase) { }

    public get isLoggedIn(): boolean { return this.pocketbase.authStore.isValid; }

    public async login(displayName: string, password: string): Promise<boolean>{
        const users = await this.pocketbase.users.getList(1, 1, {
            filter: `profile.displayName = ${displayName}`,
        });
    
        const userExists = !!users?.items.length
        if (!userExists) { return false; }
    
        const user = users.items[0];
    
        await this.pocketbase.users.authViaEmail(user.email, password);
    
        const isLoginSuccessful = this.pocketbase.authStore.isValid;
        if (!isLoginSuccessful) { return false; }

        this.userId = user.id;
        return isLoginSuccessful;
    }

    public logout(): void {
        this.pocketbase.authStore.clear();
        this.userId = undefined;
    }
}