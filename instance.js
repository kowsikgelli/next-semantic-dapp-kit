import Storage from './ethereum/build/contracts/Storage.json';
import web3 from './web3'



let StorageDeployedAddress = Storage.networks[5777].address;
let StorageInstance = new web3.eth.Contract(Storage.abi, StorageDeployedAddress);

export default StorageInstance;
