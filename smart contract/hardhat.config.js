require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/k2EIHZi8oFX5rbdpsrSwrnbaOO7spw3w',
      accounts: [
        'b6d29601c1b6e4e8989349c8f6bec3bf3303793fabefe2f6334dc330f9a67073',
      ],
    },
  },
}