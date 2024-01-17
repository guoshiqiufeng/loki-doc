---
lang: en
title: Receiving Messages
description: 
---
# Receiving Messages
> Loki supports two ways of receiving messages: auto decoding, and non-auto decoding.

## Auto decoding
Use spring scan instances to implement the Listener interface, and the generic type corresponding to the Listener interface has @MessageName annotation. The subscription information is located in the @MessageName annotation.

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

## Non-auto decoding
Spring scan sample, implement the Listener interface, add @MessageListener annotations. The subscription information is in the @MessageListener annotation.

### topic

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

### topic-pattern

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
