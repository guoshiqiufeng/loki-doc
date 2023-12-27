---
lang: en
title: Getting-started
description: Getting-started
---
# Getting-started
Let's go through a simple demo to introduce how to use LOKI's features.

## Initialization
Create an empty Spring Boot project (2.x, 3.x are both supported) Here we are using version 3.2.0.

## Adding Dependencies
Add the dependency in pom.xml:
```xml
<dependency>
    <groupId>com.github.loki</groupId>
    <artifactId>loki-spring-boot-starter</artifactId>
    <version>starter-latest-version</version>
</dependency>
```

## Configuration
Add the configuration to application.yml:
```yaml
loki:
  global-config:
    mq-config:
      mq-type: rocket_mq
      address: 127.0.0.1:8081
      auth: false
      username: un
      password: ps
      connect-timeout: 300
```

Add the annotation `@LokiMapperScan` to the starter class and add the annotation `@Loki` to the required methods as follows:
```java
@LokiMapperScan
@SpringBootApplication
public class LokiTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(LokiTestApplication.class, args);
    }

}
```

## Coding

Write the entity class `TestEntity.java`

```java
@Data
@MessageName(topic = "loki", tag = "create")
public class TestEntity {

    @MessageKey
    private String id;

    private String message;
}
```

Write the Mapper class `TestMapper.java`

```java
public interface TestMapper extends BaseMapper<TestEntity> {

}
```

Write the Listener class `TestListener.java`

```java
@Component
public class TestListener implements Listener<TestEntity> {
    @Override
    public void onMessage(MessageContent<TestEntity> entity) {
        log.debug("entity:{}", entity);
    }
}
```

## Start using

Add a test Controller class for functional testing:


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

Full code example View [loki-test](https://github.com/guoshiqiufeng/loki-test)
## Wrap-up
With these few simple steps, we have implemented the sending and consuming of TestEntity.