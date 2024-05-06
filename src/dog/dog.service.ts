import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return 'woow-woow';
      }
    
      public getIntroduce(): string {
        return 'my name is Rex ';
      }
}
