import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('AspNetUsers')
export class UsuarioEntity {
    @PrimaryColumn()
    Id: string;
    @Column()
    @Column()
    Email: string;
    @Column()
    EmailConfirmed: boolean;
    @Column()
    PasswordHash: string;
    @Column()
    SecurityStamp: string;
    @Column()
    PhoneNumber: string;
    @Column()
    PhoneNumberConfirmed: boolean;
    @Column()
    TwoFactorEnabled: boolean;
    @Column()
    LockoutEndDateUtc: Date;
    @Column()
    LockoutEnabled: boolean;
    @Column()
    AccessFailedCount: number;
    @Column()
    UserName: string;

}
