import { IsString , IsEnum , IsDate} from 'class-validator';

export class CreateUserDto {
    
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  userName: string;

  @IsString()
  // @IsEnum()
  gender:string;

  @IsString()
  dob: Date;
}
