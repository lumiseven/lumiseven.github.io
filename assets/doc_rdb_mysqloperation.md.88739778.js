import{_ as s,c as a,o as l,b as n}from"./app.f6cb1611.js";const F=JSON.parse('{"title":"MYSQL 运维相关","description":"","frontmatter":{},"headers":[],"relativePath":"doc/rdb/mysqloperation.md","lastUpdated":1678419541000}'),p={name:"doc/rdb/mysqloperation.md"},o=n(`<h1 id="mysql-运维相关" tabindex="-1">MYSQL 运维相关 <a class="header-anchor" href="#mysql-运维相关" aria-hidden="true">#</a></h1><h2 id="my-cnf-常见配置" tabindex="-1"><a href="https://gist.github.com/lumiseven/a3aa2489729159e1b992cec379fdb4ed" target="_blank" rel="noreferrer">my.cnf 常见配置</a> <a class="header-anchor" href="#my-cnf-常见配置" aria-hidden="true">#</a></h2><h2 id="集群架构类型" tabindex="-1">集群架构类型 <a class="header-anchor" href="#集群架构类型" aria-hidden="true">#</a></h2><p>MySQL集群架构的类型有很多，根据不同的需求和场景，可以选择合适的方案。一般来说，MySQL集群架构可以分为以下几类：</p><ul><li>主从模式：这是最基本的集群架构，只有一个主库负责写操作，一个或多个从库负责读操作。这种模式可以实现读写分离和数据备份，但是主库是单点故障，如果主库宕机，需要手动切换到从库。</li><li>双主模式：两个主库互为主从，可以实现双向复制和高可用。这种模式可以提高写性能和容灾能力，但是可能会出现数据冲突或延迟的问题。</li><li>MHA模式：这是一种基于主从模式的高可用方案，使用MHA（Master High Availability）工具来监控和管理集群。MHA可以自动检测主库故障，并在最短时间内切换到最新的从库。这种模式可以避免人工干预和数据丢失的风险，但是需要额外安装和配置MHA工具。</li><li>PXC模式：这是一种基于Galera Cluster技术的多主模式，所有节点都可以进行读写操作，并通过认证多播协议（GCS）来保证数据一致性。PXC（Percona XtraDB Cluster）是Percona公司提供的一个开源产品，可以实现真正的同步复制和无中心化架构。这种模式可以提供高性能和高扩展性，但是可能会增加网络开销和复杂度。</li></ul><h2 id="主从集群配置" tabindex="-1">主从集群配置 <a class="header-anchor" href="#主从集群配置" aria-hidden="true">#</a></h2><p>MySQL主从复制集群是一种常见的数据库架构，可以实现数据的高可用性、负载均衡和故障恢复。</p><ul><li><p>配置一个主从复制集群的大致步骤如下：</p><ol><li>在主服务器上开启二进制日志，并设置唯一的服务器ID。</li><li>在从服务器上开启二进制日志，并设置唯一的服务器ID。</li><li>在主服务器上创建一个专用的复制用户，并授予相应的权限。</li><li>在从服务器上配置主服务器的地址、端口、用户名和密码，并启动复制进程。</li><li>在主从服务器上分别检查复制状态，确保没有错误或延迟。</li></ol></li><li><p>示例:</p><ol><li>在主服务器上，编辑my.cnf文件，添加以下内容：<div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[mysqld]</span></span>
<span class="line"><span style="color:#A6ACCD;">server-id=1</span></span>
<span class="line"><span style="color:#A6ACCD;">log-bin=mysql-bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>重启MySQL服务，并登录MySQL客户端，执行以下命令：<div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">user</span><span style="color:#A6ACCD;"> &#39;</span><span style="color:#82AAFF;">repl</span><span style="color:#A6ACCD;">&#39;@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">grant</span><span style="color:#A6ACCD;"> replication slave </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges;</span></span>
<span class="line"><span style="color:#A6ACCD;">show </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div></li><li>记下File和Position的值，例如mysql-bin.000001和154。</li><li>在从服务器上，编辑my.cnf文件，添加以下内容：<div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[mysqld]</span></span>
<span class="line"><span style="color:#A6ACCD;">server-id=2</span></span>
<span class="line"><span style="color:#A6ACCD;">log-bin=mysql-bin</span></span>
<span class="line"><span style="color:#A6ACCD;">relay-log=relay-log</span></span>
<span class="line"><span style="color:#A6ACCD;">read-only=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>重启MySQL服务，并登录MySQL客户端，执行以下命令：<div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">change </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> master_host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.93.100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_file</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql-bin.000001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_pos</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">154</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">start</span><span style="color:#A6ACCD;"> slave;</span></span>
<span class="line"><span style="color:#A6ACCD;">show slave </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">\\G;</span></span>
<span class="line"></span></code></pre></div></li><li>检查Slave_IO_Running和Slave_SQL_Running的值是否都是Yes，如果是，则表示复制成功。</li></ol></li></ul><h2 id="双主集群配置" tabindex="-1">双主集群配置 <a class="header-anchor" href="#双主集群配置" aria-hidden="true">#</a></h2><p>MySQL双主复制集群是一种高可用的数据库架构，可以实现数据的双向同步和负载均衡。</p><ul><li><p>配置一个双主复制集群的大致步骤如下：</p><ol><li>在两台服务器上分别开启二进制日志，并设置不同的服务器ID和自增长步长。</li><li>在两台服务器上分别创建一个专用的复制用户，并授予相应的权限。</li><li>在两台服务器上分别配置对方的地址、端口、用户名和密码，并启动复制进程。</li><li>在两台服务器上分别检查复制状态，确保没有错误或延迟。</li></ol></li><li><p>示例 假设有两台服务器：192.168.93.100 mysql-master1 和 192.168.93.101 mysql-master2 :</p><ol><li>在mysql-master1上，编辑my.cnf文件，添加以下内容：<div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[mysqld]</span></span>
<span class="line"><span style="color:#A6ACCD;">server-id=1</span></span>
<span class="line"><span style="color:#A6ACCD;">log-bin=mysql-bin</span></span>
<span class="line"><span style="color:#A6ACCD;">auto-increment-increment=2</span></span>
<span class="line"><span style="color:#A6ACCD;">auto-increment-offset=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>重启MySQL服务，并登录MySQL客户端，执行以下命令：<div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">user</span><span style="color:#A6ACCD;"> &#39;</span><span style="color:#82AAFF;">repl</span><span style="color:#A6ACCD;">&#39;@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">grant</span><span style="color:#A6ACCD;"> replication slave </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges;</span></span>
<span class="line"><span style="color:#A6ACCD;">show </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div></li><li>记下File和Position的值，例如mysql-bin.000001和154。</li><li>在mysql-master2上，编辑my.cnf文件，添加以下内容：<div class="language-conf"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[mysqld]</span></span>
<span class="line"><span style="color:#A6ACCD;">server-id=2</span></span>
<span class="line"><span style="color:#A6ACCD;">log-bin=mysql-bin</span></span>
<span class="line"><span style="color:#A6ACCD;">auto-increment-increment=2</span></span>
<span class="line"><span style="color:#A6ACCD;">auto-increment-offset=2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>重启MySQL服务，并登录MySQL客户端，执行以下命令：<div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F78C6C;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">user</span><span style="color:#A6ACCD;"> &#39;</span><span style="color:#82AAFF;">repl</span><span style="color:#A6ACCD;">&#39;@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified </span><span style="color:#F78C6C;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">grant</span><span style="color:#A6ACCD;"> replication slave </span><span style="color:#F78C6C;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">flush privileges;</span></span>
<span class="line"><span style="color:#A6ACCD;">show </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">change </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> master_host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.93.100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_file</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql-bin.000001</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_pos</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">154</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">start</span><span style="color:#A6ACCD;"> slave;</span></span>
<span class="line"><span style="color:#A6ACCD;">show slave </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">\\G;</span></span>
<span class="line"></span></code></pre></div></li><li>记下File和Position的值，例如mysql-bin.000002和234。</li><li>检查Slave_IO_Running和Slave_SQL_Running的值是否都是Yes，如果是，则表示从mysql-master1复制成功。</li><li>回到mysql-master1上，执行以下命令：<div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">change </span><span style="color:#F78C6C;">master</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">to</span><span style="color:#A6ACCD;"> master_host</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.93.101</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_user</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">repl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_password</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_file</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mysql-bin.000002</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,master_log_pos</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">234</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#F78C6C;">start</span><span style="color:#A6ACCD;"> slave;</span></span>
<span class="line"><span style="color:#A6ACCD;">show slave </span><span style="color:#F78C6C;">status</span><span style="color:#A6ACCD;">\\G;</span></span>
<span class="line"></span></code></pre></div></li><li>检查Slave_IO_Running和Slave_SQL_Running的值是否都是Yes，如果是，则表示从mysql-master2复制成功。</li></ol></li><li><p>优缺点</p><ul><li>双主模式的优点有： <ul><li>可以实现读写分离和负载均衡，提高服务器的利用率和性能。</li><li>可以实现主库的高可用，当一个主库发生故障时，可以快速切换到另一个主库，减少业务中断的时间。</li><li>可以实现数据的双向同步和恢复，当一个主库恢复后，可以通过复制机制与另一个主库保持一致。</li></ul></li><li>双主模式的缺点有： <ul><li>可能会出现数据冲突或死锁的问题，例如两个主库同时插入相同的主键值或修改相同的记录。</li><li>可能会出现数据延迟或丢失的问题，例如网络故障导致复制中断或延迟，或者复制过程中出现错误导致数据不一致。</li><li>需要注意避免循环复制或无限循环的问题，例如两个主库互相触发触发器或存储过程。</li></ul></li></ul></li></ul><h2 id="mha-master-high-availability" tabindex="-1">MHA（Master High Availability） <a class="header-anchor" href="#mha-master-high-availability" aria-hidden="true">#</a></h2><p>MHA模式的原理：</p><ul><li>MHA由两个组件组成，一个是MHA Manager，负责监控和管理MySQL集群，另一个是MHA Node，负责在每个MySQL节点上执行复制相关的操作。</li><li>MHA Manager可以部署在任意一台机器上，但不能部署在主库上。MHA Manager可以管理多个MySQL集群，每个集群需要有一个配置文件来指定主库和从库的信息。</li><li>MHA Node需要部署在每个MySQL节点上，包括主库和从库。MHA Node需要安装Perl模块和SSH客户端，并且需要配置SSH免密登录。</li><li>MHA Manager通过SSH连接到每个MySQL节点，定期检查主库的状态和从库的复制延迟。如果发现主库故障或者复制延迟超过阈值，就会触发故障切换的流程。</li><li>故障切换的流程分为三个阶段：第一阶段是检查配置和环境，第二阶段是选择最合适的从库作为新的主库，并且停止所有从库的复制进程，第三阶段是将其他从库重新指向新的主库，并且启动复制进程。</li><li>故障切换过程中，MHA会尽量保证数据的一致性，通过比较二进制日志文件（binlog）来找出最新的数据，并且通过relay log recovery（中继日志恢复）来避免数据丢失。</li></ul><p>MHA模式配置步骤:</p><ul><li>安装MHA Manager和MHA Node组件，可以通过源码编译或者包管理器来安装。</li><li>配置MySQL主从复制，可以使用半同步复制或者异步复制，但是需要开启binlog和relay log，并且设置server-id和log-bin参数。</li><li>配置SSH免密登录，需要在MHA Manager机器上生成SSH密钥，并且将公钥拷贝到每个MySQL节点上。</li><li>编写MHA配置文件，需要指定主库和从库的地址、端口、用户名、密码等信息，以及一些故障切换的选项。</li><li>启动MHA Manager进程，使用masterha_manager命令来启动，并且指定配置文件的路径。启动后，可以使用masterha_check_ssh和masterha_check_repl命令来检查SSH连接和复制状态是否正常。</li><li>测试故障切换，可以手动停止主库的MySQL服务或者网络服务，观察MHA Manager是否能自动检测到故障，并且执行切换操作。切换后，可以使用masterha_check_status命令来查看集群的状态。</li></ul><h2 id="pxc-percona-xtradb-cluster" tabindex="-1">PXC（Percona XtraDB Cluster） <a class="header-anchor" href="#pxc-percona-xtradb-cluster" aria-hidden="true">#</a></h2><p>PXC模式的MySQL集群架构是一种高可用的数据库解决方案，它基于Percona Server和Xtrabackup与Galera库集成，实现了同步多主复制。PXC模式的优点是可以避免数据复制延迟，保证数据的一致性和可靠性。PXC模式的缺点是可能会降低写入性能，增加网络开销和资源消耗。 使用场景：</p><ul><li>需要一个高可用的MySQL数据库，可以实现多节点同时读写，并且保证数据的强一致性。</li><li>需要一个可以快速扩展和恢复的MySQL数据库，可以利用PXC集群的自动成员管理和状态转换功能。</li><li>需要一个可以无缝迁移的MySQL数据库，可以使用mysqldump或者XtraBackup工具将原有数据库导入到PXC集群中。</li></ul>`,19),e=[o];function t(r,c,i,C,y,D){return l(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};