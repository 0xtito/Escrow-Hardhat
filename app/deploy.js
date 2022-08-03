import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
const ethers = require('ethers');
require('dotenv').config();

const url = process.env.INFURA_URL;
const privateKey = process.env.PRIVATE_KEY;

// const provider = new ethers.providers.JsonRpcProvider(url);
const provider = new ethers.providers.Web3Provider(ethereum);

// FOR LOCAL SERVER
// export default async function deploy(arbiter, beneficiary, value) {
//   await ethereum.request({ method: 'eth_requestAccounts' });
//   const signer = provider.getSigner();
//   const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
//   return factory.deploy(arbiter, beneficiary, { value });
// }

// RINKEBY
export default async function deploy(arbiter, beneficiary, value) {
  try {
    await ethereum.request({ method: 'eth_requestAccounts' });
    // console.log(await accounts);
    console.log(provider);
    const signer = provider.getSigner();
    const factory = new ethers.ContractFactory(Escrow.abi, Escrow.bytecode, signer);
    return factory.deploy(arbiter, beneficiary, { value });
  } 
  catch(error) {
    console.log(error);
  }
  
}
