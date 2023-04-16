import { BadGatewayException, Injectable } from '@nestjs/common';
import axios from 'axios';
import Web3 from 'web3';

@Injectable()
export class PeerStateService {
  async getPeerStateEth1(): Promise<any> {
    try {
      const web3 = new Web3(process.env.ETH1_PROVIDER);
      const response = await web3.eth.net.getPeerCount().then((result) => {
        return result;
      });

      return response;
    } catch (error) {
      console.error(error);
      throw new BadGatewayException();
    }
  }

  async getPeerStateEth2(): Promise<any> {
    const instance = axios.create({
      baseURL: process.env.ETH2_PROVIDER,
    });

    try {
      const response = await instance.get('eth/v1/node/peer_count');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new BadGatewayException();
    }
  }
}
