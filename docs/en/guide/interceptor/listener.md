---
lang: en
title: Intercept listening messages
description: 
---

## How to Use
> Scanning instance with spring, Implementing `PipelineProcess` interface, specifying generics as `ConsumerRecordModel`.

```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```


## Custom Filters
> Override the `support` method to implement custom filtering logic
```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * Is supported
     *
     * @param context context
     * @return support true support false unsupported
     */
    @Override
    public boolean support(PipelineContext<ConsumerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```

## Customize the execution order
> Override the `order` method, which returns a sort value. The smaller the value, the earlier it is executed.

```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * order
     *
     * @return order
     */
    @Override
    public Long order() {
        return 233L;
    }

    /**
     * Is supported
     *
     * @param context context
     * @return support true support false unsupported
     */
    @Override
    public boolean support(PipelineContext<ConsumerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```

