# ERC20 UI

## Environment Setup

You will need NodeJS/npm, Truffle, Ganache-CLI, Git and MetaMask. See [SETUP.md](SETUP.md) for more information.


## Project Setup

### 1. Get Starter Code
- `git clone https://github.com/ansermino/erc20ui`

### 2. Setup Account
- Open your browser and login to MetaMask (or create an account)
- Click the 'hamburger' button on the left to open the side menu
- Click `Details`
- Click `Export Private Key` and enter your password when prompted
- Copy your private key and save it somewhere

### 2. Start Ganache
- Open a terminal and run `ganache-cli --account 0x<priavteKey>,<balance>` where `<private-key>` is yours from metamask (don't forget the `0x`) and `<balance>` is `99999999999999999999`
- Leave this window open

### 4. Connect MetaMask to Ganache
- In MetaMask click near the top where you see `... Network`
- Select `LocalHost 8545`
- You should see your account balance jump to `100`

### 3. Compile and Deploy Contracts

- Open another terminal and navigate to starter code
- Navigate to `solidity` folder
- Run `truffle deploy`
- Take note of the contract address under `Deploying 'ERC20'`

### 4. Start React Project
- Navigate to the `app` folder
- Run `npm install` to fetch all the project dependencies
- Run `npm start` to launch the development server
- Your browser should open to `http://localhost:3000`


## Intro to Ethers.js

Ethers.js is a library for interacting with an Ethereum blockchain. Web3.js has long been the preferred library but Ethers.js has proven superior. They both achieve the same goal but look a little different.

You can find the documentation for Ethers.js here: https://docs.ethers.io/ethers.js/html/


### Connecting to a Contract

Ethers.js has the ability to deploy contracts, but today we will connect the one `truffle` has deployed for us. Connecting looks something like this:

```javascript
const ethers = require('ethers');
const abi = require('./solidity/build/contracts/Contract.json').abi

// Connect to the network
let provider = ethers.getDefaultProvider();

// A Wallet from a private key
let privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
let wallet = new ethers.Wallet(privateKey, provider);

let myContract = new Contract(contractAddress, abi, wallet)

// Set a new Value, which returns the transaction
let tx = await myContract.setSomeValue("I like turtles.");

// The operation is NOT complete yet; we must wait until it is mined
await tx.wait();

// Call the Contract's getValue() method again
let newValue = await contract.getSomeValue();

console.log(currentValue);
// "I like turtles."
```

There are a number of components here. Lets take a closer look:

```javascript
const abi = require('./solidity/build/contracts/Contract.json').abi
```
- ABI (Application Binary Interface)
    - This tells Ethers.js **how** to interact with the contract. It defines all the methods and events and what parameters they take.
    - When we ran `truffle compile` this was created in the `solidity/build/` folder

```javascript
// Connect to the network
let provider = ethers.getDefaultProvider();
```
- Provider
    - This connects us to the network. Today we are just connecting to Ganache, but we could use this to connect to a testnet or mainnet.

```javascript
// A Wallet from a private key
let privateKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
let wallet = new ethers.Wallet(privateKey, provider);
```
- Private Key/Wallet/Signer
    - Using a private key we can 'unlock' a wallet. In order to submit a transaction (tx) to the network we must pay for gas. This is the account that will be used.
    - We will be using MetaMask to make this more secure, but the idea is quite similar
    - A `Signer` is an abstract form of a wallet, if it see it in the documentation, just think `Wallet` 
 ```javascript
 let myContract = new Contract(contractAddress, abi, wallet)
 ```
- Contract
    - We can connect to a contract using the `new ethers.Contract()` keyword. We pass it the contract address, abi, and our wallet.
    - Once created we can call our solidity functions like they are JavaScript functions: `myContract.setValue()`
    
    
## Exercise

Please see [INSTRUCTIONS.md](INSTRUCTIONS.md) to continue.
    
    


    

    