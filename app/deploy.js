import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
const ethers = require('ethers');


const provider = new ethers.providers.Web3Provider(ethereum);
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
