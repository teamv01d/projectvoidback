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
const storageOptions = diskStorage({});

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storageOptions }))
  async uploadCv(@Request() req, @UploadedFile() file): Promise<any> {
    const userCv = await this.uploadService.uploadFile(file);
    return this.usersService.updateProfile(req.user.user._id, {
      ...req.user.user,
      cvUrl: userCv,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('photo')
  @UseInterceptors(FileInterceptor('file', { storage: storageOptions }))
  async uploadPhoto(@Request() req, @UploadedFile() file): Promise<any> {
    const userP = await this.uploadService.uploadFile(file);
    return this.usersService.updateProfile(req.user.user._id, {
      ...req.user.user,
      cvUrl: userP,
    });
  }
}
