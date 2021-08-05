import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload_controller';

@Module({
  imports: [],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
