import{_ as a,r as s,o as i,c as r,a as e,e as t,b as n,d as l}from"./app-C7opU1tZ.js";const o={},c=e("h1",{id:"guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#guide"},[e("span",null,"Guide")])],-1),g={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"},h=l('<h2 id="characterization" tabindex="-1"><a class="header-anchor" href="#characterization"><span>Characterization</span></a></h2><ul><li><strong>Non-intrusive</strong>: Non-intrusive use of MQ messages via annotations.</li><li><strong>Streamline development</strong>：Improve development efficiency by streamlining the development process.</li><li><strong>Standardize</strong>：Adapt multiple MQ messages in one development.</li></ul><h2 id="supported-mq-message-middleware" tabindex="-1"><a class="header-anchor" href="#supported-mq-message-middleware"><span>Supported MQ Message Middleware</span></a></h2><ul><li>RocketMq 4.x and above</li><li>Kafka 2.x and above</li><li>Redis 5.x and above</li></ul><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Available - ✅</li><li>In progress - 🚧</li></ul><table><thead><tr><th>Features</th><th style="text-align:center;">Rocketmq-gRPC</th><th style="text-align:center;">Rocketmq-Remoting</th><th>Kafka</th><th>Redis</th></tr></thead><tbody><tr><td>【BaseMapper】Send standard messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>✅</td><td>✅</td></tr><tr><td>【BaseMapper】Send async messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>✅</td><td>✅</td></tr><tr><td>【BaseMapper】Send timed/delay messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>🚧</td><td>✅</td></tr><tr><td>【LokiClient】Send standard messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>✅</td><td>✅</td></tr><tr><td>【LokiClient】Send async messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>✅</td><td>✅</td></tr><tr><td>【LokiClient】Send timed/delay messages</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>🚧</td><td>✅</td></tr><tr><td>Producer with transactional messages</td><td style="text-align:center;">🚧</td><td style="text-align:center;">🚧</td><td>🚧</td><td>🚧</td></tr><tr><td>【Topic】 consumer with message listener</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td>✅</td><td>✅</td></tr><tr><td>【Topic-Pattern】 consumer with message listener</td><td style="text-align:center;">🚧</td><td style="text-align:center;">🚧</td><td>✅</td><td>✅</td></tr></tbody></table><p>Note:</p><ul><li>Rocketmq-Remoting <code>Send timed/delay messages</code> is only supported in <code>rocketmq 5.0</code> and above</li><li>Redis <code>Send timed/delay messages</code> requires Redis to enable <code>notify-keyspace-events Ex</code> notification.</li></ul><h2 id="code-hosting" tabindex="-1"><a class="header-anchor" href="#code-hosting"><span>Code hosting</span></a></h2>',10),m={href:"https://github.com/guoshiqiufeng/loki",target:"_blank",rel:"noopener noreferrer"};function u(p,x){const d=s("ExternalLinkIcon");return i(),r("div",null,[c,e("p",null,[e("a",g,[t("LOKI"),n(d)]),t(" 是一个 [MQ] 的简化增强工具，提高开发效率。")]),h,e("blockquote",null,[e("p",null,[e("strong",null,[e("a",m,[t("GitHub"),n(d)])])])])])}const f=a(o,[["render",u],["__file","introduction.html.vue"]]),b=JSON.parse('{"path":"/en/guide/introduction.html","title":"Guide","lang":"en","frontmatter":{"lang":"en","title":"Guide","description":"Guide"},"headers":[{"level":2,"title":"Characterization","slug":"characterization","link":"#characterization","children":[]},{"level":2,"title":"Supported MQ Message Middleware","slug":"supported-mq-message-middleware","link":"#supported-mq-message-middleware","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Code hosting","slug":"code-hosting","link":"#code-hosting","children":[]}],"git":{"updatedTime":1710387259000,"contributors":[{"name":"yanghq","email":"1040926235@qq.com","commits":4}]},"filePathRelative":"en/guide/introduction.md"}');export{f as comp,b as data};