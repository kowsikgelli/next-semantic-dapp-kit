
const Web3 = require('web3')
let web3;
let init=()=>{
	if(typeof window!=='undefined' && typeof window.ethereum !=='undefined'){
		window.web3 = new Web3(window.ethereum)
    	window.ethereum.enable().then((res,err) =>{
    		if(err){
    			console.log(err)
    		}else{
    			return res
    		}
    		
    	})
	}
	if(typeof window!=='undefined' && typeof window.web3 !=='undefined' ){
  		web3=new Web3(window.web3.currentProvider);
	}else{
  		const provider=new Web3.providers.HttpProvider('http://localhost:7545')
  	web3=new Web3(provider);
	}
}
init()

module.exports =  web3;