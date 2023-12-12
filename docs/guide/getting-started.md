---
lang: zh-cn
title: 快速开始
description: 
---
# 快速开始

我们通过一个简单的Demo来介绍如何使用 [LOKI](https://github.com/guoshiqiufeng/loki) 的功能。

## 初始化
创建一个空的Spring Boot 工程（2.x、3.x 都支持）这里我们使用 3.2.0 版本。

## 添加依赖
在 pom.xml 中添加依赖：
```xml
<dependency>
    <groupId>com.github.loki</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>starter-latest-version</version>
</dependency>
```

## 配置
在 application.yml 中添加配置：
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

在启动类上添加注解 `@LokiMapperScan`，并在需要的方法上添加注解 `@Loki`，如下：
```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

## 编码

编写实体类 TestEntity.java

```java
@Data
@MessageName(topic = "loki", tag = "create")
public class TestEntity {

    @MessageKey
    private String id;

    private String message;
}
```
编写Mapper类 `TestMapper.java`

```java
public interface TestMapper extends BaseMapper<TestEntity> {

}
```

编写监听类 `TestListener.java`

```java
@Component
public class TestListener implements Listener<TestEntity> {
    @Override
    public void onMessage(MessageContent<TestEntity> entity) {
        log.debug("entity:{}", entity);
    }
}
```

## 开始使用

添加测试Controller类，进行功能测试：


```java
@Slf4j
@RestController
public class TestController {

    @Resource
    private TestMapper testMapper;

    @GetMapping("send")
    public String send() {
        TestEntity entity = new TestEntity();
        entity.setId("9521");
        entity.setMessage("test");
        String messageId = testMapper.send(entity);
        log.debug("send messageId:{}", messageId);
        return "success";
    }

    @GetMapping("sendAsync")
    public String sendAsync() {
        TestEntity entity = new TestEntity();
        entity.setId("9521");
        entity.setMessage("sendAsync");
        testMapper.sendAsync(entity);
        return "success";
    }
}
```

完整的代码示例 查看 [loki-test](https://github.com/guoshiqiufeng/loki-test)
## 小结
通过以上几个简单的步骤，我们就实现了 TestEntity 的发送和消费。