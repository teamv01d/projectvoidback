import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvertisementModel, AdvertisementSchema } from '../entities/advertisement.entity';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: 'Advertisement',
        schema: AdvertisementSchema,
      }
    ])
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService],
  exports: [AdvertisementService]
})
export class AdvertisementModule {}
