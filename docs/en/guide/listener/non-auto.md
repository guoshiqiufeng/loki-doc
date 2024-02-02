---
lang: en
title: Non-auto decoding
description: 
---
# Non-auto decoding
Spring scan sample, implement the Listener interface, add @MessageListener annotations. The subscription information is in the @MessageListener annotation.

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
