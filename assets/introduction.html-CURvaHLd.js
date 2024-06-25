import{_ as e,o as a,c as o,d as n}from"./app-C7opU1tZ.js";const t={},i=n(`<h2 id="spring-boot-2-3" tabindex="-1"><a class="header-anchor" href="#spring-boot-2-3"><span>Spring Boot 2/3</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">loki</span><span class="token punctuation">:</span>
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">mq-config</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="globalconfig" tabindex="-1"><a class="header-anchor" href="#globalconfig"><span>GlobalConfig</span></a></h3><h4 id="banner" tabindex="-1"><a class="header-anchor" href="#banner"><span>banner</span></a></h4><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><blockquote><p>Controls whether LOKI logo is output</p></blockquote><h4 id="mqconfig" tabindex="-1"><a class="header-anchor" href="#mqconfig"><span>mqConfig</span></a></h4><ul><li>Type:<code>io.github.guoshiqiufeng.loki.support.core.config.MqConfig</code></li><li>Default: None</li></ul><blockquote><p>Control link unified configuration, initializing default configuration when spring boot starts, please refer to the details <a href="#mqconfig-1">MqConfig</a>。</p></blockquote><h4 id="redishistorydelaymessagesend" tabindex="-1"><a class="header-anchor" href="#redishistorydelaymessagesend"><span>redisHistoryDelayMessageSend</span></a></h4><ul><li>Type: <code>boolean</code></li><li>Default：<code>false</code></li></ul><blockquote><p>Whether to enable the sending of delayed messages in Redis (resending expired undelivered delayed messages when the system starts), not enabled by default.</p></blockquote><h4 id="redishistorydelaymessagesendtime" tabindex="-1"><a class="header-anchor" href="#redishistorydelaymessagesendtime"><span>redisHistoryDelayMessageSendTime</span></a></h4><ul><li>Type: <code>long</code></li><li>Default: <code>2000</code></li></ul><blockquote><p>Redis historical delayed message sends a delay time in milliseconds, defaulting to 2000 milliseconds.</p></blockquote><h3 id="mqconfig-1" tabindex="-1"><a class="header-anchor" href="#mqconfig-1"><span>MqConfig</span></a></h3><h4 id="mqtype" tabindex="-1"><a class="header-anchor" href="#mqtype"><span>mqType</span></a></h4><ul><li>Type:<code>io.github.guoshiqiufeng.loki.enums.MqType</code></li><li>Default:<code>ROCKET_MQ</code></li></ul><table><thead><tr><th>Options</th><th>Remark</th></tr></thead><tbody><tr><td>ROCKET_MQ</td><td>rocketmq (support 5.x)</td></tr><tr><td>ROCKET_MQ_REMOTING</td><td>rocketmq remoting (support 4.x,5.x)</td></tr><tr><td>KAFKA</td><td>kafka</td></tr><tr><td>REDIS</td><td>redis</td></tr></tbody></table><h4 id="address" tabindex="-1"><a class="header-anchor" href="#address"><span>address</span></a></h4><ul><li>Type:<code>java.lang.String</code></li><li>Default: None</li></ul><blockquote><p>mq connect address</p></blockquote><h4 id="auth" tabindex="-1"><a class="header-anchor" href="#auth"><span>auth</span></a></h4><ul><li>Type:<code>java.lang.Boolean</code></li><li>Default:<code>false</code></li></ul><blockquote><p>Enable authentication</p></blockquote><h4 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span>username</span></a></h4><ul><li>Type:<code>java.lang.String</code></li><li>Default: None</li></ul><blockquote><p>User name, required when <code>auth</code> is <code>true</code></p></blockquote><h4 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span>password</span></a></h4><ul><li>Type:<code>java.lang.String</code></li><li>Default: None</li></ul><blockquote><p>Password, required if <code>auth</code> is <code>true</code></p></blockquote><h4 id="connecttimeout" tabindex="-1"><a class="header-anchor" href="#connecttimeout"><span>connectTimeout</span></a></h4><ul><li>Type:<code>int</code></li><li>Default:<code>180</code></li></ul><blockquote><p>Connection time out, in seconds</p></blockquote><h4 id="maxattempts" tabindex="-1"><a class="header-anchor" href="#maxattempts"><span>maxAttempts</span></a></h4><ul><li>Type:<code>int</code></li><li>Default:<code>3</code></li></ul><blockquote><p>Maximum number of retries</p></blockquote>`,37),l=[i];function s(d,c){return a(),o("div",null,l)}const u=e(t,[["render",s],["__file","introduction.html.vue"]]),h=JSON.parse('{"path":"/en/config/introduction.html","title":"Using configurations","lang":"en","frontmatter":{"lang":"en","title":"Using configurations","description":null},"headers":[{"level":2,"title":"Spring Boot 2/3","slug":"spring-boot-2-3","link":"#spring-boot-2-3","children":[{"level":3,"title":"GlobalConfig","slug":"globalconfig","link":"#globalconfig","children":[]},{"level":3,"title":"MqConfig","slug":"mqconfig-1","link":"#mqconfig-1","children":[]}]}],"git":{"updatedTime":1710387259000,"contributors":[{"name":"yanghq","email":"1040926235@qq.com","commits":2}]},"filePathRelative":"en/config/introduction.md"}');export{u as comp,h as data};