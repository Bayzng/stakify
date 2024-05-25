import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
  celoTestnet: {
      url: 'https://celo-alfajores.infura.io/v3/a55fe6484cc74df28d02d2cc262c5581',
      accounts: [`0x${process.env.WALLET_KEY}`],
    },
  },
};

//0xB6DC5CDd677655AFb9A726B45dab8f3F6EA1F78C

export default config;