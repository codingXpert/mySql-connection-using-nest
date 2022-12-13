import { Controller, Get, Post, Body, Patch, Param, Delete , Query, NotFoundException} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private  userService: UserService
    ) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
   return this.userService.create(createUserDto)
   
  }
  @Get('/findAll')
  findAll(@Query('userName') userName:string) {
    const user = this.userService.find(userName);
    console.log(user);
    return user;
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    const user = this.userService.findOne(parseInt(id));
    if(!user){
      throw new NotFoundException
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
