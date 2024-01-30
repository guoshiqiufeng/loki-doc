---
lang: en
title: Auto decoding
description: 
---

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
