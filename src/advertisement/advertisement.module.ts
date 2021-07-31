import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advertisement, AdvertisementSchema } from '../entities/advertisement.entity';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';

@Module({
  imports: [

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
