require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/1VOMRnOFo3lQPaEg98zx18jaP4Bc2KK6',
      accounts: [
        '845f430cfe5c8355921b8b82c34a01d9846621e045067d5664e709985f96a29b',
      ],
    },
  },
}
