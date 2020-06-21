import React,{Component} from 'react';
import Layout from '../components/Layout';
import web3 from '../web3.js';
import Storage from '../ethereum/build/contracts/Storage.json';
import Error from './_error.js'
import StorageInstance from '../instance.js';
class App extends Component{
    static async getInitialProps(){
        let errorOccured = false;
        let accounts,name;
        try{
            accounts = await web3.eth.getAccounts();
            name = await StorageInstance.methods.name().call();
        }catch(err){
            
              console.log(error);
              errorOccured=true;
        }
        return {accounts,name,errorOccured};
    }
    render(){
        const {accounts,name,errorOccured} = this.props;
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
