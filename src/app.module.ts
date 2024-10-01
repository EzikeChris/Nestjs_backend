import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HighlightsModule } from './highlights/highlights.module';

@Module({
  imports: [HighlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
