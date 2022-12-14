import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { gender } from './enum/user.enum'; 


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;
// ./src/modules/entities/user
  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'user_name' })
  userName: string;

  
  @Column()
  gender:gender;


  @Column({ type: "date" })
  dob: Date;
}
