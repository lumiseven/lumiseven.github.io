import{_ as n,c as s,o as a,b as l}from"./app.7de298f8.js";const h=JSON.parse('{"title":"Haproxy + Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"doc/nginx/haproxyandnginx.md","lastUpdated":1678501043000}'),p={name:"doc/nginx/haproxyandnginx.md"},o=l(`<h1 id="haproxy-nginx" tabindex="-1">Haproxy + Nginx <a class="header-anchor" href="#haproxy-nginx" aria-hidden="true">#</a></h1><h2 id="haproxy" tabindex="-1">haproxy <a class="header-anchor" href="#haproxy" aria-hidden="true">#</a></h2><p>haproxy是一款流行的负载均衡软件</p><ul><li>优点： <ul><li>支持TCP和HTTP两种协议层的负载均衡，使得它的功能非常丰富。</li><li>支持8种左右的负载均衡算法，尤其是在HTTP模式时，有一些高级的算法，如动态加权的最少连接算法，可以根据后端服务器的响应时间和负载情况动态调整权重。</li><li>支持虚拟主机，可以根据域名、目录结构等进行分流。</li><li>支持Session的保持，Cookie的引导，以及通过获取指定的URL来检测后端服务器的状态。</li><li>转发性能稍高，因为它追求zero copy的forward流程，所以代码都倾向于优化在这一点上。</li><li>对后端服务器一直在做健康检测，可以及时切换故障机器，提高可用性。</li></ul></li><li>缺点: <ul><li>代码模块化不足，内部结构复杂，二次开发困难。</li><li>配置文件比较繁琐，需要手动修改和重启。</li><li>日志功能不够强大，需要配合其他工具进行分析。</li><li>健康检测机制有一定的延迟，不能完全避免故障机器的影响。</li></ul></li></ul><h2 id="使用haproxy为nginx配置高可用" tabindex="-1">使用haproxy为nginx配置高可用 <a class="header-anchor" href="#使用haproxy为nginx配置高可用" aria-hidden="true">#</a></h2><ol><li>在haproxy配置文件中指定nginx服务器的地址和端口</li><li>负载均衡的算法和模式 使用roundrobin算法，将web请求均匀地分配到三台nginx服务器上 示例:</li></ol><div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">global</span></span>
<span class="line"><span style="color:#A6ACCD;">    log 127.0.0.1 local0</span></span>
<span class="line"><span style="color:#A6ACCD;">    log 127.0.0.1 local1 notice</span></span>
<span class="line"><span style="color:#A6ACCD;">    maxconn 4096</span></span>
<span class="line"><span style="color:#A6ACCD;">    user haproxy</span></span>
<span class="line"><span style="color:#A6ACCD;">    group haproxy</span></span>
<span class="line"><span style="color:#A6ACCD;">    daemon</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">defaults</span></span>
<span class="line"><span style="color:#A6ACCD;">    log global</span></span>
<span class="line"><span style="color:#A6ACCD;">    mode http</span></span>
<span class="line"><span style="color:#A6ACCD;">    option httplog</span></span>
<span class="line"><span style="color:#A6ACCD;">    option dontlognull</span></span>
<span class="line"><span style="color:#A6ACCD;">    retries 3</span></span>
<span class="line"><span style="color:#A6ACCD;">    option redispatch</span></span>
<span class="line"><span style="color:#A6ACCD;">    maxconn 2000</span></span>
<span class="line"><span style="color:#A6ACCD;">    contimeout 5000</span></span>
<span class="line"><span style="color:#A6ACCD;">    clitimeout 50000</span></span>
<span class="line"><span style="color:#A6ACCD;">    srvtimeout 50000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">frontend web</span></span>
<span class="line"><span style="color:#A6ACCD;">    bind *:80</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_backend nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">backend nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">    balance roundrobin</span></span>
<span class="line"><span style="color:#A6ACCD;">    server nginx1 192.168.1.101:80 check</span></span>
<span class="line"><span style="color:#A6ACCD;">    server nginx2 192.168.1.102:80 check</span></span>
<span class="line"><span style="color:#A6ACCD;">    server nginx3 192.168.1.103:80 check</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),e=[o];function i(c,r,t,C,A,d){return a(),s("div",null,e)}const x=n(p,[["render",i]]);export{h as __pageData,x as default};
