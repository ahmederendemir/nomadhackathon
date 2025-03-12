/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    artifacts: "./src/contracts",
    cache: "./cache",
    tests: "./test"
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
