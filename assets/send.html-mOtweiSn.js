import{_ as n,o as s,c as a,d as e}from"./app-C7opU1tZ.js";const t={},p=e(`<h1 id="拦截发送消息" tabindex="-1"><a class="header-anchor" href="#拦截发送消息"><span>拦截发送消息</span></a></h1><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><blockquote><p>使用spring扫描实例, 实现<code>PipelineProcess</code>接口，指定泛型为<code>ProducerRecordModel</code>。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> 内容
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义过滤" tabindex="-1"><a class="header-anchor" href="#自定义过滤"><span>自定义过滤</span></a></h2><blockquote><p>重写<code>support</code>方法，实现自定义过滤逻辑</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 是否支持
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> 内容
     * <span class="token keyword">@return</span> 是否支持 true 支持 false 不支持
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> 内容
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义执行顺序" tabindex="-1"><a class="header-anchor" href="#自定义执行顺序"><span>自定义执行顺序</span></a></h2><blockquote><p>重写<code>order</code>方法，返回排序值。越小越先执行。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SendInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">PipelineProcess</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取排序，越小越靠前
     *
     * <span class="token keyword">@return</span> 排序
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">233L</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 是否支持
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> 内容
     * <span class="token keyword">@return</span> 是否支持 true 支持 false 不支持
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;loki&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTopic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 处理
     *
     * <span class="token keyword">@param</span> <span class="token parameter">context</span> 内容
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">PipelineContext</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProducerRecordModel</span><span class="token punctuation">&gt;</span></span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;SendInterceptor context:{}&quot;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","send.html.vue"]]),r=JSON.parse('{"path":"/guide/interceptor/send.html","title":"拦截发送消息","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"拦截发送消息","description":null},"headers":[{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"自定义过滤","slug":"自定义过滤","link":"#自定义过滤","children":[]},{"level":2,"title":"自定义执行顺序","slug":"自定义执行顺序","link":"#自定义执行顺序","children":[]}],"git":{"updatedTime":1707096601000,"contributors":[{"name":"過世秋風","email":"1040926235@qq.com","commits":1}]},"filePathRelative":"guide/interceptor/send.md"}');export{d as comp,r as data};
