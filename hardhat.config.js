/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY= "Ip8Lmv3IB4b04hDvrlRbyfVYBBy7Hrlg";
const GOERLI_PRIVATE_KEY= "7176c8e1036aa08362a79111bba3107b6d68e799eb755a76455156e665ed85e5";
module.exports = {
  solidity: "0.8.18",

  networks:{
    goerli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLI_PRIVATE_KEY}`]
    }
  }
};

