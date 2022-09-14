import { BadGatewayException, Injectable } from '@nestjs/common';
import axios from 'axios';
import Web3 from 'web3';

@Injectable()
export class SyncStateService {
  async getSyncStateEth1(): Promise<any> {
    try {
      const web3 = new Web3(process.env.ETH1_PROVIDER);
      const response = await web3.eth.isSyncing().then((result) => {
        return result;
      });

      if (response === false) {
        return {
          data: 'Synced',
        };
      } else {
        return response;
      }
    } catch (error) {
      console.error(error);
      throw new BadGatewayException();
    }
  }

  async getSyncStateEth2(): Promise<any> {
    const instance = axios.create({
      baseURL: process.env.ETH2_PROVIDER,
    });

    try {
      const response = await instance.get('eth/v1/node/syncing');
      return response.data;
    } catch (error) {
      console.error(error);
      throw new BadGatewayException();
    }
  }
}
