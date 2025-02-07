// SPDI-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract_demo {// 貔貅盘
    uint256 balance;

    address payable public owner;
    // 部署这个合约的时候,当前部署合约的人设置成owner 然后让他收款付款
    construct(){
        owner = payable(msg.sender);
    }

    function deposit() public payable {
        // msg.value 就是用转账过来的金额
        balance += msg.value;
    }

    function withdraw(uint256 _num, address _to) public {
        // 当前取钱的人不是管理员 不让你取
        require(msg.sender == owner, "you are not the owner")//这个require tm不是人,第一个参数是正常的时候,第二个是不满足条件的时候的提示
        require(balance >= _num, "Insuffcient balance ")
        payable(_to).transfer(_num);//transfer应该就是币安的划转
        // 两个账户之间转账 直接通过加减来完成
        // ETH的UTXO模型 address(this).balance
        balance -= num;
    }
}

合约的几种错误
1.revert 事务回滚 会消耗gas(底层默认的,如果失败)
2.error 消耗gas最低(通过event去触发)
    2-1 error既可以告知用户抛出异常的原因,又能省gas
3.assert 错误判断 会消耗光gas assert(bool,cand_expr)(判断是不是成功,或者内部合约)
    3-1 一般不对外 内部变量判断 pure函数 用于检测系统级别错误
    函数结尾或者函数头部 入参和必要条件检测
4.require(bool cand_expr, string msg); 退还gas
    4-1 跟用户打交道 require(input_var>100)
    4-2 合约调合约 require(合约地址≠address(0))
