import { BadGatewayException, Injectable } from '@nestjs/common';
import axios from 'axios';
import Web3 from 'web3';

@Injectable()
export class SyncStateService {
  async getSyncStateEth1(): Promise<number> {
    try {
      const web3 = new Web3(process.env.ETH1_PROVIDER);
      const blockNumber = await web3.eth.getBlockNumber();
      return blockNumber;
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
      const res = await instance.get('lighthouse/syncing');
      return res.data;
    } catch (error) {
      console.error(error);
      throw new BadGatewayException();
    }
  }
}
