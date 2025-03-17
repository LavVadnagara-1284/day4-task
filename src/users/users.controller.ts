import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create User
  @Post()
  create(@Body() user: UserDto) {
    return this.usersService.createUser(user);
  }

  // Get All Users
  @Get()
  findAll() {
    return this.usersService.findAllUsers();
  }

  // Update User by ID
  @Put(':id')
  update(@Param('id') id: string, @Body() user: UserDto) {
    return this.usersService.updateUser(id, user);
  }

  // Delete User by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
