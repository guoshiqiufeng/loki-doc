import{_ as n,o as s,c as a,d as e}from"./app-C7opU1tZ.js";const t={},o=e(`<h1 id="自动解码" tabindex="-1"><a class="header-anchor" href="#自动解码"><span>自动解码</span></a></h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>使用spring扫描实例，实现Listener接口，Listener接口所对应泛型上存在@MessageName注解。订阅信息位于@MessageName注解中。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestListener</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TestEntity</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageContent</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TestEntity</span><span class="token punctuation">&gt;</span></span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;entity:{}&quot;</span><span class="token punctuation">,</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),i=[o];function c(p,l){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","auto.html.vue"]]),d=JSON.parse('{"path":"/guide/listener/auto.html","title":"自动解码","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"自动解码","description":null},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"updatedTime":1707096601000,"contributors":[{"name":"yanghq","email":"1040926235@qq.com","commits":1},{"name":"過世秋風","email":"1040926235@qq.com","commits":1}]},"filePathRelative":"guide/listener/auto.md"}');export{r as comp,d as data};