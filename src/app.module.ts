import { Module } from '@nestjs/common';
import { SyncStateController } from './handler/controller/sync-state.controller';
import { SyncStateService } from './application/sync-state.service';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RateLimiterGuard, RateLimiterModule } from 'nestjs-rate-limiter';
import { PeerStateService } from './application/peer-state.service';
import { PeerStateController } from './handler/controller/peer-state.controller';
@Module({
  imports: [ConfigModule.forRoot(), RateLimiterModule],
  controllers: [PeerStateController, SyncStateController],
  providers: [
    PeerStateService,
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard,
    },
    SyncStateService,
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard,
    },
  ],
})
export class AppModule {}
