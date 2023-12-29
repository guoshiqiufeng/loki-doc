---
lang: zh-CN
title: 接收消息
description: 
---
# 接收消息
> loki接收消息支持两种方式：自动解码、非自动解码

## 自动解码
使用spring扫描实例，实现Listener接口，Listener接口所对应泛型上存在@MessageName注解。订阅信息位于@MessageName注解中。

```java
@Slf4j
@Component
public class TestListener implements Listener<TestEntity> {
    @Override
    public void onMessage(MessageContent<TestEntity> entity) {
        log.info("entity:{}", entity);
    }
}
```

## 非自动解码
使用spring扫描实例，实现Listener接口, 添加@MessageListener注解。订阅信息位于@MessageListener注解中。
```java
@Slf4j
@MessageListener(topic = "loki")
@Component
public class TestMessageListener implements Listener<String> {
    @Override
    public void onMessage(MessageContent<String> entity) {
        log.info("entity:{}", entity);
    }
}
```