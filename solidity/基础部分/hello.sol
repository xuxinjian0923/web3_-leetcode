// SPDX--License-Identifier: GPL-3.0
pragma solidity >=0.7.0<0.9.0;
import "hardhat/console.sol"

contract Hello {//contract 类似class
    string public greeting;

    constructor() {//合约部署的时候执行一次
        greeting="hello,world";
        console.log("111")
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function say() public view returns (string memory) {// view代表只读合约
        return greeting;
    }
}


