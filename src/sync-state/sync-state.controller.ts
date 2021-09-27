import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SyncStateService } from './sync-state.service';

@Controller('sync-state')
export class SyncStateController {
  constructor(private readonly syncStateService: SyncStateService) {}

  @Get()
  @ApiOperation({
    summary: 'Queries the current block number.',
    description: 'Queries the current block number from an eth1 node.',
  })
  @ApiOkResponse({ status: 200, description: 'State successfully returned.' })
  async getSyncState(): Promise<number> {
    return await this.syncStateService.getSyncState();
  }
}
