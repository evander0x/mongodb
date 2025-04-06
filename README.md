# mongodb

备注： 更详细的笔记在 master 分支

mongodb 笔记

使用 mongodb 的优势以及劣势

它是一个文档型数据库，如果数据库关系比较复杂的话，不要使用 mongodb

mongodb 尽量不使用鉴权，鉴权会让 mongodb 数据读取慢，考虑安全问题的话，mongodb 是放在安全的服务器环境内执行就可以了，不然外部执行，外部调用 express 、 node 调用就可以了。

然后，客户端，调用 express

优势

1. 存取速度快
2. 没有集合之间的关联
3. 不用 mysql 语句

劣势

1. 难以表达复杂的数据关系

补充：

- mongodb 原生操作放扩展文件夹里面，这里主要是使用 **mongose** 对 mongodb 进行操作。只需要下载 mongose，里面有包含 mongodb
