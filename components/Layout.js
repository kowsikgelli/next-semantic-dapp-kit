const { default: Link } = require("next/link")
import Head from 'next/head';
import Router from 'next/router';
import Nprogress from 'nprogress';
import React from 'react'
import web3 from '../web3';
Router.onRouteChangeStart =(url)=>{
    console.log(url);
    Nprogress.start();
}

Router.onRouteChangeComplete =()=>Nprogress.done();

Router.onRouteChangeErr = () => Nprogress.done();
class Layout extends React.Component{
    state={
        account:''
    }
    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        this.setState({account:accounts[0]})
        window.ethereum.on('accountsChanged',(accounts)=>{
            this.setState({account:accounts[0]})
        })
    }
    render(){
        const {children} = this.props
        return(
            <div className="root">
            <Head>
                <title>Ethereum Dapp</title>
            </Head>
            <header>
                <Link href="/"><a>Ethereum Dapp</a></Link>
                {/* <Link href="/"><a>Home</a></Link> */}
                <div className="topnav-right">
                    <Link href="/"><a>{this.state.account}</a></Link>
                </div>
                
                {/* <Link href="about"><a>About</a></Link>
                <Link href="/hireme"><a>Hire Me</a></Link>
                <Link href="/blog"><a>Blog</a></Link> */}
            </header>
                {children}
               
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
        .root{
            display : flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }

        header{
            width:100%;
            
            justify-content : space-around;
            padding:1em;
            font-size:1.2rem;
            background:#000099;
        }
        
        header a{
            color:white;
            text-decoration:none;
            text-align:center;
            padding: 14px 16px;
            font-size: 19px;
        }

        header a:hover{
            font-weight:bold;
            color:lightgrey;
        }

        footer{
            padding:1em;
        }
        header .topnav-right{
            float:right;
        }
    `}</style>

    <style global jsx>{`
        body{
            margin:0;
            font-size:110%;
            background:#f0f0f0;
        }
    `}</style>
        </div>
        )
    }
}
export default Layout;