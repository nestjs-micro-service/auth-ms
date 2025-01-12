import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RegisterUserDto } from './dto/register-user.dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);

  onModuleInit() {
    this.$connect();
    this.logger.log('MongoDB connected');
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const { email, password, name } = registerUserDto;
    try {
      const user = await this.user.findUnique({
        where: {
          email: registerUserDto.email,
        },
      });
      if (user) {
        throw new RpcException({
          message: 'User already exists',
          status: 400,
        });
      }
      const newUser = await this.user.create({
        data: {
          email,
          password,
          name,
        },
      });

      return {
        user: newUser,
        token: 'token',
      };
    } catch (error) {
      throw new RpcException({
        message: error.message,
        status: 400,
      });
    }
  }
}
