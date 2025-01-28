连接钱包,基本钱包有js的IDK,钱包地址和钱包链.掌握钱包的封装,链上合约的调度

DApp部署到IPFS(类似去中心化的网盘)上,

用户第一步到CloudFlare Waiting Room,不会访问到真实的应用,如果进来100个用户,都进一个服务器可能要崩,所以先放50个人在 Waiting Room
![DApp架构.png](static%2FDApp%E6%9E%B6%E6%9E%84.png)
如果CloudFlare Pages有next.js,会把后端分配给CloudFlare Workers(到这里没前端事情了)
AWS WAF(防火墙)

SaaS就是淘宝这种面向终端用户的
ECS是弹性服务器,EC2就是基本的服务器

ServerLess

BFF
要死了,BFF都不知道,BFF是接口聚合,类似前端做的Promise.all(这步骤放在后端做),本来前端要调用三四个接口,现在只用调用一个了
BFF是传统web2.0的技术,可以用node或者Spring boot去写

SFF
没有状态的接口,不需要买单独的服务器,按照
