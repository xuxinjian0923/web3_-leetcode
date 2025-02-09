// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Demo {

    mapping(address => uint256) public userBalances;//记录每个用户的存款金额

    // 合约上的总存款余额
    uint256 public totalBalance;

    address payable private owner;

    // 存款事件 - 用于记录谁存了多少钱
    event Deposit(address indexed _user,uint256 amount);
    // 提款事件 - 用于记录谁取了多少钱
    event Withdraw(address indexed _user,uint256 amount);

    constructor() {
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        userBalances[msg.sender] += msg.value;//记录每个用户的存款金额
        // msg.value 就是用转账过来的金额
        totalBalance += msg.value;

        // 触发存款事件
        emit Deposit(msg.sender, msg.value);

    }


    function withdraw(uint256 _num) public {
//        require(msg.sender == owner,"you are not the owner");
        require(totalBalance >= _num, "Insuffcient balance ");
        require(userBalances[msg.sender] >= _num, "Insuffcient balance ");
        userBalances[msg.sender] -= _num;//记录每个用户的存款金额
        totalBalance -= _num;

        payable(msg.sender).transfer(_num);

        emit Withdraw(msg.sender, _num);

    }

    function ownerWithdraw() public {
        /*
        //貔貅盘
        require(msg.sender == owner,"you are not the owner");
        payable(owner).transfer(totalBalance);
        totalBalance = 0;*/
        // 仅限存入资金的人提取所有资金
        uint256 amount = userBalances[msg.sender];
        require(amount > 0, "No balance to withdraw");
        userBalances[msg.sender] = 0;
        totalBalance-=amount;
        payable(msg.sender).transfer(amount);
        emit Withdraw(msg.sender, amount);//记录谁取了多少钱
    }

    function getBalance() public view returns(uint256){
        return userBalances[msg.sender];
    }

}


/*
你将编写一个 Solidity 智能合约，实现一个 简单的去中心化存款合约 (DeFi Deposit Contract)，允许用户：
 • 存入 ETH
 • 提取存款
 • 仅允许存入用户（owner）提取合约中对应的资金
 • 记录用户存款余额

作业要求
 1. 编写 Solidity 合约
 • 使用 Solidity 0.8.x 版本
 • 需要包含 deposit、withdraw 和 ownerWithdraw 方法
 • 记录每个用户的存款金额
 2. 实现功能
 • ✅ 允许用户存款
 • ✅ 允许用户取款
 • ✅ 仅限存入资金的人提取所有资金
 • ✅ 记录用户的存款余额
 3. 部署到测试网
 • 可选择 Remix + MetaMask 部署到 Goerli/ Sepolia 测试网(需通过水龙头领取测试代币)、部署到本地Ganache

 进阶挑战
 1. 添加收益机制：比如，每次存款按时间计算利息，用户存得越久，利息越高。
 2. 添加代币存款功能：支持存入 ERC20 代币如Yideng币，而不仅仅是 ETH。
 3. 编写测试：使用 Hardhat 或 Truffle 进行单元测试，确保所有功能正常。
 4.  尽量前期先不借助AI 实在写不下去的地方可以借助AI

📌 作业提交
 1.提交你的 测试网合约地址 + GitHub 代码链接。

 如果有问题，可以群内发起求助！

周日晚7点-8点我们一起在直播间过一下作业~
*/
