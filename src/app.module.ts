import { Module } from '@nestjs/common';
import { SyncStateController } from './sync-state/sync-state.controller';
import { SyncStateService } from './sync-state/sync-state.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SyncStateController],
  providers: [SyncStateService],
})
export class AppModule {}
