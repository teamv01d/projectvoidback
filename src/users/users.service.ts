import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  async findOne(email: string): Promise<Users | undefined> {
    return this.usersModel.findOne({ email });
  }

  findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  // async findOne(id: string): Promise<Users[]> {
  //   const user = await this.usersModel.find({ _id: id }).exec();
  //   if (!user) {
  //     throw new NotFoundException(`User ${id} not found`);
  //   }
  //   return user;
  // }

  create(createUserDTO: CreateUserDto): Promise<Users> {
    const user = new this.usersModel(createUserDTO);
    return user.save();
  }

  async update(id: string, updateUserDTO: UpdateUserDto): Promise<Users> {
    const existingUser = await this.usersModel
      .findOneAndUpdate({ _id: id }, { $set: updateUserDTO }, { new: true })
      .exec();

    if (!existingUser) {
      throw new NotFoundException(`user ${id} not found dude`);
    }
    return existingUser;
  }

  async delete(id: string): Promise<Users> {
    try {
      const user = await this.usersModel.findOne({ _id: id });
      return user.deleteOne();
    } catch (error) {
      throw new NotFoundException(`User ${id} cant delete cause there is none`);
    }
  }

  async findUserByEmail(email: string): Promise<Users> {
    try {
      return this.usersModel.findOne((user: any) => user.email === email);
    } catch {
      throw new NotFoundException(`Mail sisteme kayıtlı değil.`);
    }
  }
}
