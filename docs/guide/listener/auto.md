---
lang: zh-CN
title: 自动解码
description: 
---
# 自动解码

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

