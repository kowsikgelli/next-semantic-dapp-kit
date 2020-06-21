## A Ethereum Dapp development starter-kit with nextjs ,semantic-ui-react and truffle 

### Requirements

[Node js](https://nodejs.org/en/)

check nodejs and npm versions by typing the below command

```bash
> node -v
```
```bash
> npm -v
```

[Truffle](https://www.trufflesuite.com/)

Install truffle by typing the below command.

```bash
> sudo npm i -g truffle
```

check the truffle version by typing the below command

```bash
> truffle version
```

Install Ganache-cli or [Ganche-GUI](https://www.trufflesuite.com/ganache) (A local Blockchain for development)

To install ganache-cli type the following command in terminal.

```bash
> npm i -g ganache-cli
```

- clone the repo or unzip it to a folder

- open terminal at this folder

- install dependencies

```bash
> npm install
```

change directory to ethereum

```bash
> cd ethereum
```

You can see a Storage contract with simple name in it.

Now run the Ganche-Gui app or open new terminal and enter the below command to start ganache-cli

```bash
> ganache-cli
```

If you are using Ganche-Gui make sure that port should be 7545 in truffle-config.js

```js
development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
```

If you are using Ganche-cli make sure that port should be 8545

```js
development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
```

Now compile the Storage contract by tyoing the following command in ethereum folder

```bash
> truffle compile
```
You should see a build folder created in ethereum directory

Now lets deploy the Storage contract to local blockchain by typing the following command.

Note: 2_deploy_contracts.js file in migrations folder is the migration script for Storage.sol

```bash
> truffle migrate --reset
```
Now the contract is Deployed to local blockchain.

Lets dive into front-end. Check ou [semantic-ui-react](https://react.semantic-ui.com/)

now lets change into root directory.

The file web3.js will provide the web3 instance which is injeted to the browser.

The file instance.js will provide deployed instance of the Storage Smart Contract.

The index.js file in the pages directory is the home page.

The file Layout.js in components directory provides a nice navbar, which can be used in any page.

now run the following command in terminal.

```bash
> npm run dev
```

Now navigate to this [link](http://localhost:3000/)

You will see a nice navbar, everything you need to get started is injected into the project.

Happy Hacking :smiley: 

Donate to [0x8beC88f69668F817A0705339298456F869e19540](https://etherscan.io/address/0x8beC88f69668F817A0705339298456F869e19540)(Eth or any tokens) :blush: 
