require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth shift protect hockey arena off giggle'; 
let testAccounts = [
"0xe5ee02004e11e1f8e45d73f7a8ebd58ace891fdfa6f5ae9dac2d67442e1313ef",
"0x7e5aa3fc4db83846ce5a2d751e4b7fb89e721e043b5b7a5ef54e1b5902797639",
"0x26c064357852b76332d7b2c33f46ca2a7e8ead06d2ca827ba404dcb87547cfc2",
"0xf8f798df4484ee32c93afc1bb9a731985d8862764f7764db613543009d7ba394",
"0x10f04416c4d4363d9f60ce3d273a6ffafe2e285ebab0c14a52a52f3ec1f158c6",
"0xd0ee4cb62d9102f15d20139b4f2f23b3520fdfc97848d6af2facfb9ad1e8460a",
"0x008325bece60e04af566d1f70872a0f50fbc696453e50daee4cedb6364acee6e",
"0x0b795ddbc8413ee7f6c50487710bb344dce43f7d62c53ba76666eb5582b1d2e5",
"0x6e24fb4382ec8b13352376072fc38fdddd1b797d31442398bd62e2853e0754bb",
"0xa8ddf3fc0c5683d39fa452596dc2dc211a7dd436aa061724265cb332f6d993e5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

