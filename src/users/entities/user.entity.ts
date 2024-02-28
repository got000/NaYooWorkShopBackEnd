import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users"})
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fname: string;

  @Column()
  lname: string;

  @Column({unique: true})
  email: string;

  @Column()
  tel: string;

  @Column()
  password: string;

}