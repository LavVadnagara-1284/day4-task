import { Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  createUser(user: UserDto) {
    user.id = Date.now().toString();
    this.users.push(user); // this will push the new user into the users array.
    return {
      message: 'User created successfully',
      data: user,
    };
  }

  findAllUsers() {
    return {
      message: 'All users retrieved successfully',
      data: this.users, // this will return the all users from the users array
    };
  }

  updateUser(id: string, updateUserDto: UserDto) {
    const index = this.users.findIndex((user) => user.id === id); // this will return the user with the specific index
    if (index === -1) return null; // this will return null if the user doesn't exist

    this.users[index] = { ...this.users[index], ...updateUserDto }; // this will push the updated user into the users array for specific index
    return {
      message: 'User updated successfully',
      data: this.users[index], // this will return the updated user from the users array for specific index
    };
  }

  removeUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    return {
      message: 'User deleted successfully',
      data: this.users.splice(index, 1)[0],
    }; // this will remove the user from the array and returns the deleted user.
  }
}
