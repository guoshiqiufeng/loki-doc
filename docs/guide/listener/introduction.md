---
lang: zh-CN
title: 介绍
description: 
---
# 介绍
## 特性
- loki接收消息支持两种方式：自动解码、非自动解码
- 都需要实现Listener 接口，可自由选择使用方式

## Listener 接口
> Listener需要指定泛型，自动解码泛型上需要存在@MessageName注解，非自动解码泛型使用String即可。
>
> 两种方式都需要实现onMessage方法，接收消息内容。

```java
@Component
public class TestListener implements Listener<String> {
    @Override
    public void onMessage(MessageContent<String> entity) {
    }
}
```
## MessageContent

| 参数名称         | 类型         | 备注          |
|--------------|------------|-------------|
| topic        | String     | 主题          |
| tag          | String     | 标签          |
| messageId    | String     | 消息id        |
| messageGroup | String     | 消息组         |
| keys         | Collection | 消息key       |
| body         | 泛型         | 内容          |
| bodyMessage  | String     | 内容String 格式 |
