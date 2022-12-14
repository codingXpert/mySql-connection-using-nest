import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString , IsOptional , IsEnum} from 'class-validator';
import { gender } from '../entities/enum/user.enum';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}


export class UpdateUserDto {
    @IsString()
    firstName:string
    lastName:string


    @IsString()
    @IsOptional()
    gender:gender
}
