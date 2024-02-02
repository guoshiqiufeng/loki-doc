---
lang: zh-CN
title: 非自动解码
description: 
---
# 非自动解码
使用spring扫描实例，实现Listener接口, 添加@MessageListener注解。订阅信息位于@MessageListener注解中。

## topic

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

## topic-pattern

```java
@Slf4j
@MessageListener(topicPattern = "lo*")
@Component
public class TestMessageListener implements Listener<String> {
    @Override
    public void onMessage(MessageContent<String> entity) {
        log.info("entity:{}", entity);
    }
}
```
