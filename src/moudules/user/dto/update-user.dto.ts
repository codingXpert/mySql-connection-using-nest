import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString , IsOptional } from 'class-validator';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}


export class UpdateUserDto {
    @IsString()
    userName:string

    @IsString()
    @IsOptional()
    gender:string
}
