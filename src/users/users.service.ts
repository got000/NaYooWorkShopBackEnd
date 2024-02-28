import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterSuccess, ResponseRegsiter } from 'src/utils/interface';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

const saltRound = 10;

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>,){}

  async register(data: CreateUserDto): Promise<ResponseRegsiter> {
    try {
      const {password, ...regsiterData} = data
      let userData: RegisterSuccess = regsiterData

      let user = this.usersRepository.create({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        tel: data.tel,
        password: await bcrypt.hash(password, saltRound)
      })

      await this.usersRepository.save(user)

      return {
        status: true,
        message: "The record has been successfully created.",
        data: userData
      }
    } catch (error) {
      return {
        status: false,
        message: error.message
      }
    }
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
