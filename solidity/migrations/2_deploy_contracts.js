const SafeMath = artifacts.require("SafeMath");
const ERC20 = artifacts.require("ERC20");

const INITIAL_BALANCE = '1000000000000000000'

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, ERC20);
  deployer.deploy(ERC20, INITIAL_BALANCE);
};
