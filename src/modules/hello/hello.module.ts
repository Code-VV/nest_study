import { Module, Controller } from '@nestjs/common';
import { HelloService } from './hello.service';

@Module({
  providers: [HelloService],
})
@Controller('/hello')
export class HelloModule {
  constructor(private readonly helloService: HelloService) {}
}
