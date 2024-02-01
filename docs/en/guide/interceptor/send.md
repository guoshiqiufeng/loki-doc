---
lang: en
title: Intercept outgoing messages
description: 
---


## How to Use
> Scanning instance with spring, Implementing `PipelineProcess` interface, specifying generics as `ProducerRecordModel`.

```java
@Slf4j
@Component
public class SendInterceptor implements PipelineProcess<ProducerRecordModel> {

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ProducerRecordModel> context) {
        log.debug("SendInterceptor context:{}", context);
    }
}
```

## Custom Filters
> Override the `support` method to implement custom filtering logic
```java
@Slf4j
@Component
public class SendInterceptor implements PipelineProcess<ProducerRecordModel> {

    /**
     * Is supported
     *
     * @param context context
     * @return support true support false unsupported
     */
    @Override
    public boolean support(PipelineContext<ProducerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ProducerRecordModel> context) {
        log.debug("SendInterceptor context:{}", context);
    }
}
```

## Customize the execution order
> Override the `order` method, which returns a sort value. The smaller the value, the earlier it is executed.

```java
@Slf4j
@Component
public class SendInterceptor implements PipelineProcess<ProducerRecordModel> {

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
    public boolean support(PipelineContext<ProducerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }

    /**
     * process
     *
     * @param context context
     */
    @Override
    public void process(PipelineContext<ProducerRecordModel> context) {
        log.debug("SendInterceptor context:{}", context);
    }
}
```
