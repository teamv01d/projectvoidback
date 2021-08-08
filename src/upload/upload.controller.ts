import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
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
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storageOptions }))
  async uploadFile( @UploadedFile() file): Promise<any> {
    return this.uploadService.uploadFile(file);
  }
}
