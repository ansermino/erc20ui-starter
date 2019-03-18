pragma solidity ^0.5.0;

import "./IERC20.sol";
import "./SafeMath.sol";

/**
 * @title (Modified) Standard ERC20 token
 *
 * @dev Implementation of the basic standard token.
 * https://eips.ethereum.org/EIPS/eip-20
 *
 * Modified from https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/master/contracts/token/ERC20/ERC20.sol
 */
contract ERC20 is IERC20 {
    using SafeMath for uint256;

    // Account balances
    mapping (address => uint256) private _balances;
    // Pre-approved transfer amounts (for transferFrom)
    mapping (address => mapping (address => uint256)) private _allowed;
    // Total number of tokens in existence
    uint256 private _totalSupply;
    // Owner of contract
    address public owner;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier notZeroAddress(address account) {
        require(account != address(0));
        _;
    }


    constructor(uint256 initialSupply) public {
        owner = msg.sender;
        _totalSupply = initialSupply;
        _balances[owner] = initialSupply;
    }

    /**
     * @dev Total number of tokens in existence
     */
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev Gets the balance of the specified address.
     * @param account The address to query the balance of.
     * @return A uint256 representing the amount owned by the passed address.
     */
    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev Function to check the amount of tokens that an account allowed to a spender.
     * @param account address The address which owns the funds.
     * @param spender address The address which will spend the funds.
     * @return A uint256 specifying the amount of tokens still available for the spender.
     */
    function allowance(address account, address spender) public view returns (uint256) {
        return _allowed[account][spender];
    }

    /**
     * @dev Transfer token to a specified address
     * @param to The address to transfer to.
     * @param value The amount to be transferred.
     */
    function transfer(address to, uint256 value) public notZeroAddress(to) returns (bool) {
        require(_balances[msg.sender] >= value);

        _balances[msg.sender] = _balances[msg.sender].sub(value);
        _balances[to] = _balances[to].add(value);
        emit Transfer(msg.sender, to, value);

        return true;
    }

    /**
     * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
     * @param spender The address which will spend the funds.
     * @param value The amount of tokens to be spent.
     */
    function approve(address spender, uint256 value) public notZeroAddress(spender) returns (bool) {
        _allowed[msg.sender][spender] = value;
        emit Approval(owner, spender, value);
        return true;
    }

    /**
     * @dev Transfer tokens from one address to another.
     * Note that while this function emits an Approval event, this is not required as per the specification.
     * @param from address The address which you want to send tokens from
     * @param to address The address which you want to transfer to
     * @param value uint256 the amount of tokens to be transferred
     */
    function transferFrom(address from, address to, uint256 value) public returns (bool) {
        require(_allowed[from][to] >= value);

        _balances[from] = _balances[from].sub(value);
        _balances[to] = _balances[to].add(value);
        emit Transfer(from, to, value);
        return true;
    }

}
