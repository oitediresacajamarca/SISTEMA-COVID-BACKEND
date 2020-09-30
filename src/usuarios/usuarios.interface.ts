export interface Usuarios {

    Id: string;
    Email: string;
    EmailConfirmed: boolean;
    PasswordHash: string;
    SecurityStamp: string;
    PhoneNumber: string;
    PhoneNumberConfirmed: boolean;
    TwoFactorEnabled: boolean;
    LockoutEndDateUtc: Date;
    LockoutEnabled: boolean;
    AccessFailedCount: number;
    UserName: string;
}
