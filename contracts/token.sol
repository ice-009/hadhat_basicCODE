// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;
import "hardhat/console.sol";
contract Token {
    string public name= 'hardhat name';
    string public symbol = 'HHT';
    uint public totalSupply= 10000;
    address public owner;

    mapping(address=>uint256) balances;
    constructor(){
        balances[msg.sender]=totalSupply;
        owner= msg.sender;

    } 
    function transfer(address to, uint256 amount )external {
        console.log("sender balance is %s tokens **", balances[msg.sender]);
        console.log("sender is sending the %s tokens to the %s address", amount, to);


        require(balances[msg.sender]>=amount, 'not enough');
        balances[msg.sender]-=amount;
        balances[to]+= amount;
    }
    function balanceOf(address account) external view returns (uint){
        return balances[account];
    }
}