import { Controller, Get } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';
import { RateLimit } from 'nestjs-rate-limiter';
import { PeerStateService } from '../../application/peer-state.service';

@ApiTags('Peer State')
@Controller('peer-state')
export class PeerStateController {
  constructor(private readonly peerStateService: PeerStateService) {}

  @Get('eth1')
  @RateLimit({
    keyPrefix: 'peer-state-eth1',
    points: 1,
    duration: 10,
    errorMessage:
      'Peer state cannot be called more than once every 10 seconds.',
  })
  @ApiOperation({
    summary: 'Queries the current peer state.',
    description: 'Queries the current peer state of an execution client.',
  })
  @ApiOkResponse({ description: 'State successfully returned.' })
  @ApiBadGatewayResponse({ description: 'Bad gateway.' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests.' })
  async getPeerStateEth1(): Promise<any> {
    return this.peerStateService.getPeerStateEth1();
  }

  @Get('eth2')
  @RateLimit({
    keyPrefix: 'peer-state-eth2',
    points: 1,
    duration: 10,
    errorMessage:
      'Peer state cannot be called more than once every 10 seconds.',
  })
  @ApiOperation({
    summary: 'Queries the current peer state.',
    description: 'Queries the current peer state of a beacon client.',
  })
  @ApiOkResponse({ description: 'State successfully returned.' })
  @ApiBadGatewayResponse({ description: 'Bad gateway.' })
  @ApiTooManyRequestsResponse({ description: 'Too many requests.' })
  async getPeerStateEth2(): Promise<any> {
    return this.peerStateService.getPeerStateEth2();
  }
}
