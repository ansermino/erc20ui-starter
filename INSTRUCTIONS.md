# Instructions

Note: All necessary steps are marked with `// TODO:` in the `app/` folder.
 
 
 ## 1. Setup provider
 
 The first thing we need to do it connect to the network. To do this we need a provider.
 
 MetaMask injects a special object into the web page called `window.web3.currentProvider`. We can use this to create a provider like this:
 
 ```javascript
const provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
```

Add this to the `createContractInstance()` function in `App.js`.

You can find documentation here: https://docs.ethers.io/ethers.js/html/api-providers.html#providers
 
 ## 2. Connect to contract
 
 Now we can create our contract instance. Our contract needs a wallet to use (also known as a Signer). Since MetaMask handles all of our wallets we can get one like this:
 
 ```javascript
const signer = provider.getSigner()
```

We also need our contract address and ABI. At the top of `App.js` you will see:
```javascript
const abi = require('./ERC20.json').abi
```
and:
```javascript
const contractAddress = '0xBEBa64869ea93678F6a71AFE1922d1848fD12141'
```

The ABI has been setup for you, but you need to update the contract address.

Now we are ready to create the contract instance. It will look like this:

```javascript
const contract = new ethers.Contract(address, ABI, Signer)
```
 
 ## 3. Add some contract calls
 
 Now we can start making calls to our contract.
 
 Lets start with `totalSupply`. This just tells us how many tokens exist in total. 
 
 In `src/TotalSupply.jsx` you need to add to `handleSubmit()`.
 
 For example, if we had a contract with a function `getTemperature()` we can call it like this:
 ```javascript
contract.getTemperature()
```

Because we are using React, our contract is located at `this.props.contract`. Combined with the previous example we can get:
```javascript
const temperature = await this.props.contract.getTemperature()
```

Don't worry about the `await` in there, it just means 'wait until we get an answer'.

When you're done you should be able to use the UI to get the total supply.
 
 ## 4. Add event listeners
 Now we want to add event listeners for Transfer and Approval events.
 
 You will need two of them. They take this form:
 ```javascript
 contract.on("ValueChanged", (oldValue, newValue, event) => {
    console.log(oldValue, newValue);
 });
```

Note: `ValueChanged` is the name of the event. `oldValue` and `newValue` are the event parameters. For example, if we have the event `MyEvent(uint256 a, bool b)` we need to create a function like this `(a, b) => {}`.
 
 You can find more documentation here: https://docs.ethers.io/ethers.js/html/api-contract.html#event-emitter

## 5. Finish other contract calls

Now lets see if you can try some on your own. Try to complete the `handleSubmit` functions in:
- `Allowance.jsx`
- `Approve.jsx`
- `BalanceOf.jsx`
- `Transfer.jsx`
- `TransferFrom.jsx`

