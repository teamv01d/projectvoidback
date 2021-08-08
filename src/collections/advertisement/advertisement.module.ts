import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Advertisement, AdvertisementSchema } from 'src/entities/advertisement.entity';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';

@Module({
  imports: [
    NestjsFormDataModule,
    MongooseModule.forFeature([
      {
        name: Advertisement.name,
        schema: AdvertisementSchema,
      }
    ])
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService],
  exports: [AdvertisementService]
})
export class AdvertisementModule {}
