import { IsString , IsEnum , IsDate } from 'class-validator';
import { gender } from '../entities/enum/user.enum'; 
export class CreateUserDto {
    
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  userName: string;

  @IsString()
  @IsEnum({type:"enum"})
  gender:gender;

  @IsString()
  dob: Date;
}
