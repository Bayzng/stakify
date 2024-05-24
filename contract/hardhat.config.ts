import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    celoTestnet: {
      url: 'https://celo-alfajores.infura.io/v3/9861a1bf087b46d99353c3cc2d1ecbd3',
      accounts: [`0x${process.env.WALLET_KEY}`]
    },
  },
};

export default config;