import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { UsersModule } from 'src/collections/users/users.module';
@Module({
  imports: [UsersModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
