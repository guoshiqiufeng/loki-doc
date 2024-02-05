---
lang: zh-CN
title: 拦截监听消息
description: 
---
# 拦截监听消息
## 使用方式
使用spring扫描实例, 实现`PipelineProcess`接口，指定泛型为`ConsumerRecordModel`。
```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * 处理
     *
     * @param context 内容
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```


## 自定义过滤
> 重写`support`方法，实现自定义过滤逻辑
```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * 是否支持
     *
     * @param context 内容
     * @return 是否支持 true 支持 false 不支持
     */
    @Override
    public boolean support(PipelineContext<ConsumerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }
    
    /**
     * 处理
     *
     * @param context 内容
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```

## 自定义执行顺序
> 重写`order`方法，返回排序值。越小越先执行。

```java
@Slf4j
@Component
public class ListenerInterceptor implements PipelineProcess<ConsumerRecordModel> {

    /**
     * 获取排序，越小越靠前
     *
     * @return 排序
     */
    @Override
    public Long order() {
        return 233L;
    }
    
    /**
     * 是否支持
     *
     * @param context 内容
     * @return 是否支持 true 支持 false 不支持
     */
    @Override
    public boolean support(PipelineContext<ConsumerRecordModel> context) {
        return "loki".equals(context.getModel().getTopic());
    }
    
    /**
     * 处理
     *
     * @param context 内容
     */
    @Override
    public void process(PipelineContext<ConsumerRecordModel> context) {
        log.debug("ListenerInterceptor context:{}", context);
    }
}
```

