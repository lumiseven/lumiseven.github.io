import{_ as e,c as t,o as a,b as r}from"./app.98990782.js";const T=JSON.parse('{"title":"常用心跳检测算法","description":"","frontmatter":{},"headers":[],"relativePath":"doc/others/common_heartbeat_detection_algorithms.md","lastUpdated":1683013802000}'),o={name:"doc/others/common_heartbeat_detection_algorithms.md"},_=r('<h1 id="常用心跳检测算法" tabindex="-1">常用心跳检测算法 <a class="header-anchor" href="#常用心跳检测算法" aria-hidden="true">#</a></h1><h2 id="传统的周期检测心跳机制、累计失效检测机制、基于tcp的心跳机制" tabindex="-1">传统的周期检测心跳机制、累计失效检测机制、基于TCP的心跳机制 <a class="header-anchor" href="#传统的周期检测心跳机制、累计失效检测机制、基于tcp的心跳机制" aria-hidden="true">#</a></h2><p>传统的周期检测心跳机制是指设定一个超时时间T，在T时间内没有接收到对方的心跳包便认为对方宕机 累计失效检测机制是指在一定时间内，连续多次丢失心跳才可认定故障发生 基于TCP的心跳机制是指在TCP连接中，通过发送心跳包来判断连接是否正常 使用定时器和内存可见性机制：在服务端维护一个连接列表</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',4),c=[_];function d(n,s,h,i,m,p){return a(),t("div",null,c)}const f=e(o,[["render",d]]);export{T as __pageData,f as default};
