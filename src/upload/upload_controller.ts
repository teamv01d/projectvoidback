import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

const storageOptions = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    callback(null, '$(Date.now()).${extname(file.originalname)}');
  },
});

@Controller('uploadpp')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storageOptions }))
  async uploadFile(@UploadedFile() file): Promise<any> {
    return this.uploadService.upload(file);
  }
}
