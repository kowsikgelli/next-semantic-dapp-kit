import React,{Component} from 'react';
import Layout from '../components/Layout';
import web3 from '../web3.js';
import Storage from '../ethereum/build/contracts/Storage.json';
import Error from './_error.js'
import StorageInstance from '../instance.js';
class App extends Component{
    static async getInitialProps(){
        let errorOccured = false;
        let name;
        try{
            name = await StorageInstance.methods.name().call();
        }catch(err){
              console.log(err);
              errorOccured=true;
        }
        return {name,errorOccured};
    }
    render(){
        const {name,errorOccured} = this.props;
        if(errorOccured){
            return <Error />
        }
        return(
            <Layout>
                <h2>Edit index.js file</h2>
            </Layout>
                
        )
    }
}

export default App;
