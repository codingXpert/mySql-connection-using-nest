import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo:Repository<User>){}
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const user = this.repo.create(createUserDto);
   
    return this.repo.save(user);
  }
  
  find(userName:string){
    return this.repo.findBy({userName});
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    if(!id){
      return null;
   }
     return this.repo.findOneBy({id});
  }

  async update(id: number, updateUserDto:Partial<User>) {
    const user = await this.findOne(id);
    if(!user){
      throw new NotFoundException('user not found'); 
    }
    Object.assign(user , updateUserDto);    // put in the user we just found and then an object describing all the updates we want to copy over to that object
      return this.repo.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
