# Oracle JDK 下载脚本

## 链接收集脚本 get-url.js

通过[Java SE](http://www.oracle.com/technetwork/java/javase/downloads/index.html)下载页面进入具体版本下载页面，点击[Accept License Agreement]后在控制台执行get-url.js脚本，获取所有下载链接。

将链接拷贝到index.txt中。



## 下载脚本 downloader.sh

通过wget批量下载。

需添加HTTP请求头：```Cookie: oraclelicense=accept-securebackup-cookie```

```-i index.txt``` 指定输入文件。

如需保留目录结构，需加 ```--force-directories --no-host-directories --cut-dirs=1``` 参数。



