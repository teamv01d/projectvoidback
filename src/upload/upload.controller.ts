import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  Request,
  UseInterceptors,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/collections/users/users.service';
import { UpdateUserDto } from 'src/collections/users/dto/update-user.dto';
import { FormDataRequest } from 'nestjs-form-data';
const storageOptions = diskStorage({});

@Controller('uploadpp')
export class UploadController {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly uploadService: UploadService,
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storageOptions }))
  async uploadFile(@Request() req, @UploadedFile() file): Promise<any> {
    const userCv = this.uploadService.upload(file);
    const user = new UpdateUserDto({ ...req.user.user, cv: userCv });
    return this.usersService.updateProfile(req.user.user._id, user);
  }
}
