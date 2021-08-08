import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import environment from 'src/env/environment';

@Injectable()
export class UploadService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: environment.cloudinary.cloud_name,
      api_key: environment.cloudinary.api_key,
      api_secret: environment.cloudinary.api_secret,
    });
  }

  async uploadFile(file: any): Promise<any> {
    let result;
    try {
      await cloudinary.v2.uploader.upload(
        file.path,
        function (error, response) {
          result = response;
          return response;
        },
      );
      return await result.url;
    } catch (err) {
      return await err;
    }
  }
}
