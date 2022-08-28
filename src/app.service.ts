import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) { }

  async getHello(): Promise<any> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
