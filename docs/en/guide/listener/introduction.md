---
lang: en
title: Instructions
description: 
---
# Instructions
## Features
- Loki supports two ways of receiving messages: auto decoding, and non-auto decoding.
- Ways to use it freely

## Listener Interface
> Listener needs to specify generics, auto decoding generics needs to have @MessageName annotation, non-auto decoding generics can use String.
>
> Both methods need to implement the onMessage method to receive the message content.

```java
@Component
public class TestListener implements Listener<String> {
    @Override
    public void onMessage(MessageContent<String> entity) {
    }
}
```

## MessageContent

| 参数名称         | 类型         | 备注                      |
|--------------|------------|-------------------------|
| topic        | String     | topic                   |
| tag          | String     | tag                     |
| messageId    | String     | message id              |
| messageGroup | String     | message group           |
| keys         | Collection | message key             |
| body         | Generics   | message body            |
| bodyMessage  | String     | message body for String |
