---
lang: zh-cn
title: 配置
description: 
---

# Configure

[LOKI](https://github.com/guoshiqiufeng/loki) is very easy to configure, we just need some simple configuration！

> Make sure you have LOKI installed, if you haven't, check out the [Install](install.md)。

## SpringBoot 2.x/3.x

### Configure the `LokiMapperScan` annotation

```java

@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

### `application.yml` Configure `mq` connection parameters

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

Generally speaking, a general simple project can be used normally with the above
configuration [LOKI](https://github.com/guoshiqiufeng/loki), please refer to the following project:
[loki-test](https://github.com/guoshiqiufeng/loki-test)。

