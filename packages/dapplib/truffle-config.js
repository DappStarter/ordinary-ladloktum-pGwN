require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember method good gloom suspect trick'; 
let testAccounts = [
"0xb11ab7ab620e1eab057e711f70fbf5150e5b28b7b23a982959abc968b599153c",
"0x4ac18e5ce9a2cc2580bf37e76748d1a20f87161f11d23ce6e0e659fd4b33e176",
"0x044ff583b47058bb576ec0f037433fecd0af51c3a3e4579b566d3921c6161b57",
"0x4eca1cce17d5029c8ba640de2364cb64fcd9b6d8779ab0ae0dcdc606dda784dc",
"0xfe51c130dbb51db7d39e1d4392aeca0149c3c989556e5db10c663a9bf9668162",
"0xac35add4410841c7fed36a68dc613a708f8e447489e7a9d0d4ff10e6d8ef110c",
"0xabff0142d5068550a6d63ee2b07a6774eb632c04f3249650f49bfdad40957dbe",
"0x22164025e076b3370e1aa03349cba919e4a4c44489f7a7a70d124490f74b8cb4",
"0xbf0fb23b11c366f760ed70aa8acc90d62583ada052cae0569fa0660cb474b49b",
"0xbff0f00ddd2ab642fb130e6f4cfe330a294e847c854102809d9de0197aadc6a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

