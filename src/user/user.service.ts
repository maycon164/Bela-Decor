import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) { };

  async create(createUserDto: CreateUserDto) {

    const createdUser = await this.prisma.user.create({
      data: createUserDto
    })

    return createdUser;
  }

  async findAll(): Promise<any[]> {

    const users = await this.prisma.user.findMany();
    return users;

  }

  async findOne(id: number) {

    const user = await this.prisma.user.findUnique({
      where: {
        id: id
      }
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })

    return updatedUser;
  }

  async remove(id: number) {

    const deletedUser = await this.prisma.user.delete({
      where: { id }
    })

    return deletedUser;
  }

}
