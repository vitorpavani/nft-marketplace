require("@nomiclabs/hardhat-waffle");

const { privateEncrypt } = require('crypto');
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "3d151d3a2a594b999449a561590e397d"

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet:{
      url:  `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
  solidity: "0.8.4",
};
