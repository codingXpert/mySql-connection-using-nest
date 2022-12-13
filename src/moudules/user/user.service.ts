import { Injectable } from '@nestjs/common';
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
