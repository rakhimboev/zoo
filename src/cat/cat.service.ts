import { Injectable } from '@nestjs/common';


@Injectable()
export class CatService {
  public getHello(): string {
    return ' meow ';
  }

  public getIntroduce(): string {
    return ' meow, my name is Tom ';
  }
}