const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "c195072c59914a4e89cea14f33a6af62";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
  },
  compilers: { solc: { version: "0.4.24" } },
};
