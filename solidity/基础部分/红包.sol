// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0,9,0

contract RedPacket {
    // 定义一个发红包的主体
    address payable public yideng;
    // 定义红包金额
    uint256 public totalAmount;
    // 是否等额
    bool isEqual;
    // 是否领取过红包
    mapping(address => bool) isGrabbed;

    constructor(uint256 c, bool _isEqual){
        require(msg.value > 0,"amount must >0"
        yideng = payable(msg.sender);
        count = c;
        isEqual = _isEqual;
        totalAmount = msg.value
    }

    function getBalance() public view returns (uint256){
        // 当前红包是不是领完了
        require(count >0,"count must >0")
        // 你是不是领过这个红包
        require(!isGrabbed[mag.sender], "you have grabbed")
        // 红包金额还够不够
        require(totalAmount >0,"totalAmount must >0")

        isGrabbed[msg.sender] = true

        if(count==1){
            // 当前合约交互
            payable(msg.sender) transfer(totalAmount)//等于1直接把全部钱转过去


    }else {
        p
}
}

