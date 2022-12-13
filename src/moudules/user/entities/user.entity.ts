import { Entity , Column ,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

 @PrimaryGeneratedColumn()
 id: number; 

@Column()  
firstName:string;

@Column() 
lastName:string;

@Column() 
userName:string;

@Column() 
gender:string;

@Column()  
dob:string;
}
