import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

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
  gender: string;

  @Column({ type: "date" })
  // @CreateDateColumn()
  dob: Date;
}
