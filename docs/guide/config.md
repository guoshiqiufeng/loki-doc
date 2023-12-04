---
lang: zh-cn
title: 配置
description: 
---
# 配置

[LOKI](https://github.com/guoshiqiufeng/loki) 的配置异常的简单，我们仅需要一些简单的配置即可！

> 请确保您已经安装了 LOKI，如果您尚未安装，请查看 [安装](install.md)。


## SpringBoot 2.x/3.x


### 配置 `LokiMapperScan` 注解

```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` 配置 `mq` 连接参数

```yaml
loki:
  global-config:
    mq-config:
      mq-type: ROCKET_MQ
      address: 127.0.0.1:8081
      auth: false
      username: un
      password: ps
      connect-timeout: 300
```

通常来说，一般的简单工程，通过以上配置即可正常使用 [LOKI](https://github.com/guoshiqiufeng/loki)，具体可参考以下项目：
[loki-test](https://github.com/guoshiqiufeng/loki-test)。

