import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPreferences } from 'typescript';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { gender } from './entities/enum/user.enum';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo:Repository<User>){}
  async create(createUserDto: CreateUserDto):Promise<User> {
    // checking for unique user name
    const users = await this.find(createUserDto.userName);
    if(users.length){
      throw new BadRequestException("User name is in use")
    }

    const gender = await this.find(createUserDto.gender);
    if(gender !== gender ){
      throw new BadRequestException('Please enter valid gender');
    }
    const user = this.repo.create(createUserDto);
   
     return this.repo.save(user);
  }
  
   find(userName:string):Promise<User[]>{
    return this.repo.findBy({userName});
  }
  // findAll() {
  //   return `This action returns all user`;
  // }

   findOne(id: number):Promise<User> {
    if(!id){
      return null;
   }
     return this.repo.findOneBy({id});
  }

  async update(id: number, updateUserDto:Partial<User>):Promise<User> {
    const user = await this.findOne(id);
    if(!user){
      throw new NotFoundException('user not found'); 
    }
    Object.assign(user , updateUserDto);    // put in the user we just found and then an object describing all the updates we want to copy over to that object
      return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if(!user){
      throw new NotFoundException('User Not Found!!')
    }
      
      console.log(`Deleted With Id ${id}`);
      
      return this.repo.remove(user);
    }
}
