---
lang: zh-CN
title: 使用配置
description: 
---

## Spring Boot 2/3

```yaml
loki:
  global-config:
    mq-config:
```

### GlobalConfig

#### banner

- 类型：`boolean`
- 默认值：`true`

> 控制是否输出 LOKI 的 LOGO

#### mqConfig

- 类型：`io.github.guoshiqiufeng.loki.support.core.config.MqConfig`
- 默认值：无

> 控制统一的链接配置，spring boot 启动会初始化默认配置，具体请查看 [MqConfig](#mqconfig-1)。

### MqConfig

#### mqType

- 类型：`io.github.guoshiqiufeng.loki.enums.MqType`
- 默认值：`ROCKET_MQ`

| 选项                 | 备注                                  |
|--------------------|-------------------------------------|
| ROCKET_MQ          | rocketmq (support 5.x)              |
| ROCKET_MQ_REMOTING | rocketmq remoting (support 4.x,5.x) |
| KAFKA              | kafka                               |
| REDIS              | redis                               |

#### address

- 类型：`java.lang.String`
- 默认值：无

> mq 链接地址

#### auth

- 类型：`java.lang.Boolean`
- 默认值：`false`

> 是否开启鉴权

#### username

- 类型：`java.lang.String`
- 默认值：无

> 用户名, 依赖：`auth` 为 `true` 时必填

#### password

- 类型：`java.lang.String`
- 默认值：无

> 密码, 依赖：`auth` 为 `true` 时必填

#### connectTimeout

- 类型：`int`
- 默认值：`180`
> 链接超时时间，单位秒

#### maxAttempts

- 类型：`int`
- 默认值：`3`
> 最大重试次数
