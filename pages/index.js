import React,{Component} from 'react';
import Layout from '../components/Layout';
import web3 from '../web3.js';
import Storage from '../ethereum/build/contracts/Storage.json';
import Error from './_error.js'
class App extends Component{
    static async getInitialProps(){
        let errorOccured = false;
        let accounts,networkId,StorageDeployedAddress,StorageInstance,name;
        try{
            accounts = await web3.eth.getAccounts();
            networkId = await web3.eth.net.getId();
            StorageDeployedAddress = Storage.networks[networkId].address;
            StorageInstance = await new web3.eth.Contract(Storage.abi, StorageDeployedAddress);
            name = await StorageInstance.methods.name().call();
        }catch(err){
            
              console.log(error);
              errorOccured=true;
        }
        return {accounts,StorageInstance,name};
    }
    render(){
        const {accounts,StorageInstance,name,errorOccured} = this.props;
        if(errorOccured){
            return <Error />
        }
        console.log(accounts)
        return(
            <Layout accounts={accounts}>
                <h2>Edit index.js file</h2>
            </Layout>
                
        )
    }
}

export default App;