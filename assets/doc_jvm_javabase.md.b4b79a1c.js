import{_ as l,c as i,o as e,b as a}from"./app.c3b2ca4a.js";const y=JSON.parse('{"title":"记录一些常见 JAVA 问题","description":"","frontmatter":{},"headers":[],"relativePath":"doc/jvm/javabase.md","lastUpdated":1678351228000}'),o={name:"doc/jvm/javabase.md"},n=a(`<h1 id="记录一些常见-java-问题" tabindex="-1">记录一些常见 JAVA 问题 <a class="header-anchor" href="#记录一些常见-java-问题" aria-hidden="true">#</a></h1><h2 id="javabase" tabindex="-1">javabase <a class="header-anchor" href="#javabase" aria-hidden="true">#</a></h2><ol><li><p>HashMap 和 Hashtable 有什么区别</p><ul><li>存储:HashMap 运行 key 和 value 为 null,而 Hashtable 不允许。</li><li>线程安全:Hashtable 是线程安全的,而 HashMap 是非线程安全的。</li><li>推荐使用:在 Hashtable 的类注释可以看到,<code>Hashtable 是保留类不建议使用</code>,推荐在单线程环境下使用 HashMap 替代,如果需要多线程使用则用 <code>ConcurrentHashMap</code> 替代。</li></ul></li><li><p>如何决定使用 HashMap 还是 TreeMap</p><ul><li>对于在 Map 中插入、删除、定位一个元素这类操作,HashMap 是最好的选择,因为相对而言 HashMap 的插入会更快</li><li>要对一个 key 集合进行有序的遍历,那 TreeMap 是更好的选择。</li></ul></li><li><p>HashMap 的实现原理 HashMap 基于 Hash 算法实现的,我们通过 put(key,value)存储,get(key)来获取。当传入 key 时,HashMap 会根据 key. hashCode() 计算出 hash 值,根据 hash 值将 value 保存在 bucket 里。当计算出的 hash 值相同时,我们称之为 hash 冲突,HashMap 的做法是用链表和红黑树存储相同 hash 值的value。当 <code>hash 冲突的个数比较少时,使用链表否则使用红黑树</code>。</p></li><li><p>HashSet 的实现原理 <code>HashSet 是基于 HashMap 实现的,HashSet 底层使用 HashMap 来保存所有元素</code>,因此 HashSet 的实现比较简单,相关 HashSet 的操作,基本上都是直接调用底层 HashMap 的相关方法来完成,HashSet 不允许重复的值。</p></li><li><p>ArrayList 和 LinkedList 的区别</p><ul><li>数据结构实现:<code>ArrayList 是动态数组</code>的数据结构实现,而 <code>LinkedList 是双向链表</code>的数据结构实现。</li><li>随机访问效率:ArrayList 比 LinkedList 在随机访问的时候效率要高,因为 LinkedList 是线性的数据存储方式,所以需要移动指针从前往后依次查找。</li><li>增加和删除效率:在非首尾的增加和删除操作,LinkedList 要比 ArrayList 效率要高,因为 ArrayList增删操作要影响数组内的其他数据的下标。</li><li>综合来说,在<code>需要频繁读取集合中的元素时,更推荐使用 ArrayList</code>,而在<code>插入和删除操作较多时,更推荐使用 LinkedList</code>。</li></ul></li><li><p>数组和 List 之间的转换</p><ul><li>数组转 List:使用 <code>Arrays.asList(array)</code> 进行转换。</li><li>List 转数组:使用 List 自带的 <code>toArray()</code> 方法。</li></ul></li><li><p>ArrayList 和 Vector 的区别</p><ul><li>线程安全:<code>Vector 使用了 Synchronized 来实现线程同步</code>,是线程安全的,而 ArrayList 是非线程安全的。</li><li>性能:ArrayList 在性能方面要优于 Vector。</li><li>扩容:ArrayList 和 Vector 都会根据实际的需要动态的调整容量,只不过在 Vector 扩容每次会增加 1倍,而 ArrayList 只会增加 50%。</li></ul></li><li><p>Queue 中 poll()和 remove()有什么区别</p><ul><li>相同点:都是返回第一个元素,并在队列中删除返回的对象。</li><li>不同点:如果没有元素 poll()会返回 null,而 remove()会直接抛出 NoSuchElementException 异常。</li></ul></li><li><p>哪些集合类是线程安全的 Vector、Hashtable、Stack + <code>Java.util.concurrent</code>下的类</p></li><li><p>Iterator 是什么 Iterator 接口提供遍历任何 Collection 的接口。 Iterator 的特点是更加安全,因为它可以确保,在当前遍历的集合元素被更改的时候,就会抛出ConcurrentModificationException 异常。</p></li><li><p>Iterator 和 ListIterator 有什么区别</p><ul><li>Iterator 可以遍历 Set 和 List 集合,而 ListIterator 只能遍历 List。</li><li>Iterator 只能单向遍历,而 ListIterator 可以双向遍历(向前/后遍历)。</li><li>ListIterator 从 Iterator 接口继承,然后添加了一些额外的功能,比如添加一个元素、替换一个元</li></ul></li><li><p>怎么确保一个集合不能被修改 可以使用 <code>Collections.unmodifiableCollection(Collection c)</code> 方法来创建一个只读集合,这样改变集合的任何操作都会抛出 Java.lang.UnsupportedOperationException 异常。</p></li></ol><hr><h2 id="线程" tabindex="-1">线程 <a class="header-anchor" href="#线程" aria-hidden="true">#</a></h2><ol><li><p>并行和并发有什么区别</p><ul><li>并行:多个任务在同一个 CPU 核上,按细分的时间片轮流(交替)执行,从逻辑上来看那些任务是同时执行。</li><li>并发:多个处理器或多核处理器同时处理多个任务。</li></ul></li><li><p>创建线程有哪几种方式</p><ol><li>继承 Thread 重新 run 方法;</li><li>实现 Runnable 接口;</li><li>实现 Callable 接口。</li></ol></li><li><p>runnable 和 callable 有什么区别 runnable 没有返回值,callable 可以拿到返回值,callable 可以看作是 runnable 的补充。</p></li><li><p>线程有哪些状态</p><ul><li>NEW 尚未启动</li><li>RUNNABLE 正在执行中</li><li>BLOCKED 阻塞的(被同步锁或者 IO 锁阻塞)</li><li>WAITING 永久等待状态</li><li>TIMED_WAITING 等待指定的时间重新被唤醒的状态</li><li>TERMINATED 执行完成</li></ul></li><li><p>sleep() 和 wait() 有什么区别</p><ul><li>类的不同:sleep() 来自 Thread,wait() 来自 Object。</li><li>释放锁:sleep() 不释放锁;wait() 释放锁。</li><li>用法不同:sleep() 时间到会自动恢复;wait() 可以使用 notify()/notifyAll()直接唤醒。</li></ul></li><li><p>notify()和 notifyAll()有什么区别 notifyAll()会唤醒所有的线程,notify()之后唤醒一个线程。notifyAll() 调用后,会将全部线程由等待池移到锁池,然后参与锁的竞争,竞争成功则继续执行,如果不成功则留在锁池等待锁被释放后再次参与竞争。而 notify()只会唤醒一个线程,具体唤醒哪一个线程由虚拟机控制。</p></li><li><p>线程的 run() 和 start() 有什么区别 start() 方法用于启动线程,run() 方法用于执行线程的运行时代码。run() 可以重复调用,而 start()只能调用一次。</p></li><li><p>创建线程池有哪几种方式(<code>single</code> <code>cached</code> <code>fixed</code> <code>scheduled</code> <code>workstealing</code>)</p><ul><li>newSingleThreadExecutor():它的特点在于<code>工作线程数目被限制为 1</code>,操作一个<code>无界的工作队列</code>,所以它<code>保证了所有任务的都是被顺序执行,最多会有一个任务处于活动状态,并且不允许使用者改动线程池实例</code>,因此可以避免其改变线程数目;</li><li>newCachedThreadPool():它是一种用来<code>处理大量短时间工作任务的线程池</code>,具有几个鲜明特点:它会试图<code>缓存线程并重用,当无缓存线程可用时,就会创建新的工作线程</code>;如果线程闲置的时间超过 60 秒,则被终止并移出缓存;长时间闲置时,这种线程池,不会消耗什么资源。其内部使用 SynchronousQueue 作为工作队列;</li><li>newFixedThreadPool(int nThreads):重用指定数目(nThreads)的线程,其背后使用的是<code>无界的工作队列</code>,任何时候最多有 nThreads 个工作线程是活动的。这意味着,如果任务数量超过了活动队列数目,将在工作队列中等待空闲线程出现;如果有工作线程退出,将会有新的工作线程被创建,以补足指定的数目nThreads;</li><li>newSingleThreadScheduledExecutor():创建单线程池,返回 ScheduledExecutorService,可以进行<code>定时或周期性的工作调度</code>;</li><li>newScheduledThreadPool(int corePoolSize):和 newSingleThreadScheduledExecutor()类似,创建的是个 ScheduledExecutorService,可以进行定时或周期性的工作调度,区别在于<code>单一工作线程还是多个工作线程</code>;</li><li>newWorkStealingPool(int parallelism):Java 8 才加入这个创建方法,其内部会构建 ForkJoinPool,<code>利用 Work-Stealing 算法,并行地处理任务,不保证处理顺序</code>;</li><li>ThreadPoolExecutor():是最原始的线程池创建,上面 1-3 创建方式都是对 ThreadPoolExecutor 的封装。</li></ul></li><li><p>线程池都有哪些状态</p><ul><li>RUNNING:这是最正常的状态,接受新的任务,处理等待队列中的任务。</li><li>SHUTDOWN:不接受新的任务提交,但是会继续处理等待队列中的任务。</li><li>STOP:不接受新的任务提交,不再处理等待队列中的任务,中断正在执行任务的线程。</li><li>TIDYING:所有的任务都销毁了,workCount 为 0,线程池的状态在转换为 TIDYING 状态时,会执行钩子方法 terminated()。</li><li>TERMINATED:terminated()方法结束后,线程池的状态就会变成这个。</li></ul></li><li><p>线程池中 submit() 和 execute() 方法有什么区别?(<code>execute 无返回值 submit 可能有返回值</code>)</p><ul><li>execute():只能执行 Runnable 类型的任务。</li><li>submit():可以执行 Runnable 和 Callable 类型的任务。</li><li>Callable 类型的任务可以获取执行的返回值,而 Runnable 执行无返回值。</li></ul></li><li><p>Java 程序中怎么保证多线程的运行安全</p><ul><li>使用安全类,比如 Java.util.concurrent 下的类。</li><li>synchronized</li><li>Lock</li></ul></li><li><p>多线程中 synchronized 锁升级的原理(<code>偏向锁-&gt;轻量锁-&gt;重量锁</code>) synchronized 锁升级原理:在锁对象的对象头里面有一个 threadid 字段,在第一次访问的时候threadid 为空,jvm 让其持有偏向锁,并将 threadid 设置为其线程 id,再次进入的时候会先判断threadid 是否与其线程 id 一致,如果一致则可以直接使用此对象,如果不一致,则升级偏向锁为轻量级锁,通过自旋循环一定次数来获取锁,执行一定次数之后,如果还没有正常获取到要使用的对象,此时就会把锁从轻量级升级为重量级锁,此过程就构成了 synchronized 锁的升级。 锁的升级的目的:锁升级是为了减低了锁带来的性能消耗。在 Java 6 之后优化 synchronized 的实现方式,使用了偏向锁升级为轻量级锁再升级到重量级锁的方式,从而减低了锁带来的性能消耗。</p></li><li><p>怎么防止死锁</p><ul><li>尽量使用 tryLock(long timeout, TimeUnit unit)的方法(ReentrantLock、ReentrantReadWriteLock),</li><li>设置超时时间,超时可以退出防止死锁。</li><li>尽量使用 Java.util.concurrent 并发类代替自己手写锁。</li><li>尽量减少同步的代码块。</li></ul></li><li><p>ThreadLocal ThreadLocal 为每个使用该变量的线程提供独立的变量副本,所以每一个线程都可以独立地改变自己的副本,而不会影响其它线程所对应的副本。</p></li><li><p>synchronized 底层实现原理 synchronized 是由一对 monitorenter/monitorexit 指令实现的,monitor 对象是同步的基本实现单元。在 Java 6 之前,monitor 的实现完全是依靠操作系统内部的互斥锁,因为需要进行用户态到内核态的切换,所以同步操作是一个无差别的重量级操作,性能也很低。但在 Java 6 的时候,提供了三种不同的 monitor 实现,也就是常说的三种不同的锁:<code>偏向锁(Biased Locking)、轻量级锁和重量级锁</code>,大大改进了其性能。</p></li><li><p>synchronized 和 volatile 的区别 volatile 是变量修饰符;synchronized 是修饰类、方法、代码段。 volatile 仅能实现变量的修改可见性,不能保证原子性;而 synchronized 则可以保证变量的修改可见性和原子性。 volatile 不会造成线程的阻塞;synchronized 可能会造成线程的阻塞。</p></li><li><p>synchronized 和 Lock 有什么区别</p><ul><li>synchronized 可以给类、方法、代码块加锁;而 lock 只能给代码块加锁。</li><li>synchronized 不需要手动获取锁和释放锁,使用简单,发生异常会自动释放锁,不会造成死锁;而 lock需要自己加锁和释放锁,如果使用不当没有 unLock()去释放锁就会造成死锁。</li><li>通过 Lock 可以知道有没有成功获取锁,而 synchronized 却无法办到。</li></ul></li><li><p>synchronized 和 ReentrantLock 区别</p><ul><li>synchronized 早期的实现比较低效,对比 ReentrantLock,大多数场景性能都相差较大,但是在 Java 6中对 synchronized 进行了非常多的改进。</li><li>主要区别: <ul><li>ReentrantLock 使用起来比较灵活,但是必须有释放锁的配合动作;</li><li>ReentrantLock 必须手动获取与释放锁,而 synchronized 不需要手动释放和开启锁;</li><li>ReentrantLock 只适用于代码块锁,而 synchronized 可用于修饰方法、代码块等。</li><li>volatile 标记的变量不会被编译器优化;synchronized 标记的变量可以被编译器优化。</li></ul></li></ul></li><li><p>atomic 的原理 atomic 主要利用 <code>CAS (Compare And Wwap) 和 volatile 和 native 方法来保证原子操作</code>,从而避免synchronized 的高开销,执行效率大为提升。</p></li><li><p>为什么 wait(), notify()和 notifyAll()必须在同步方法或者同步块中被调用 当一个线程需要调用对象的 wait()方法的时候,这个线程必须拥有该对象的锁,接着它就会释放这个对象锁并进入等待状态直到其他线程调用这个对象上的 notify()方法。同样的,当一个线程需要调用对象的 notify()方法时,它会释放这个对象的锁,以便其他在等待的线程就可以得到这个对象锁。由于所有的这些方法都需要线程持有对象的锁,这样就只能通过同步来实现,所以他们只能在同步方法或者同步块中被调用。</p></li><li><p>Thread 类中的 yield 方法有什么作用</p><ul><li>使当前线程从执行状态(运行状态)变为可执行态(就绪状态)。</li><li>当前线程到了就绪状态,那么接下来哪个线程会从就绪状态变成执行状态呢?可能是当前线程,也可能是其他线程,看系统的分配了。</li></ul></li><li><p>为什么 Thread 类的 sleep()和 yield()方法是静态的 Thread 类的 sleep()和 yield()方法将在当前正在执行的线程上运行。所以在其他处于等待状态的线程上调用这些方法是没有意义的。这就是为什么这些方法是静态的。它们可以<code>仅在当前正在执行的线程中工作</code>,并避免程序员错误的认为可以在其他非运行线程调用这些方法。</p></li><li><p>线程的 sleep()方法和 yield()方法有什么区别(<code>优先级</code>)</p><ul><li><code>sleep()方法给其他线程运行机会时不考虑线程的优先级</code>,因此会给低优先级的线程以运行的机会;<code>yield()方法只会给相同优先级或更高优先级的线程以运行的机会</code>;</li><li>线程执行 sleep()方法后转入阻塞(blocked)状态,而执行 yield()方法后转入就绪(ready)状态;</li><li>sleep()方法声明抛出 InterruptedException,而 yield()方法没有声明任何异常;</li><li>sleep()方法比 yield()方法(跟操作系统 CPU 调度相关)具有更好的<code>可移植性</code>,<code>通常不建议使用yield()方法来控制并发线程的执行。</code></li></ul></li><li><p>在两个线程间共享数据</p><ul><li>共享变量(共享变量要求变量本身是线程安全的)</li></ul></li><li><p>Java 如何实现多线程之间的通讯和协作</p><ul><li>中断 和 共享变量的方式实现线程间的通讯和协作</li><li>生产者-消费者模型</li><li>syncrhoized加锁的线程的Object类的wait()/notify()/notifyAll()</li><li>ReentrantLock类加锁的线程的Condition类的await()/signal()/signalAll()</li><li>线程间直接的数据交换(过管道进行线程间通信:字节流、字符流)</li></ul></li></ol><hr><h2 id="jvm基础" tabindex="-1">JVM基础 <a class="header-anchor" href="#jvm基础" aria-hidden="true">#</a></h2><ol><li><p>JVM 的主要组成部分 及其作用</p><ul><li>类加载器(ClassLoader)</li><li>运行时数据区(Runtime Data Area)</li><li>执行引擎(Execution Engine)</li><li>本地库接口(Native Interface)</li></ul></li><li><p>JVM 运行时数据区</p><ul><li>程序计数器(Program Counter Register):当前线程所执行的字节码的行号指示器,字节码解析器的工作是通过改变这个计数器的值,来选取下一条需要执行的字节码指令,分支、循环、跳转、异常处理、线程恢复等基础功能,都需要依赖这个计数器来完成;</li><li>Java 虚拟机栈(Java Virtual Machine Stacks):用于存储局部变量表、操作数栈、动态链接、方法出口等信息;</li><li>本地方法栈(Native Method Stack):与虚拟机栈的作用是一样的,只不过虚拟机栈是服务 Java 方法的,而本地方法栈是为虚拟机调用 Native 方法服务的;</li><li>Java 堆(Java Heap):Java 虚拟机中内存最大的一块,是被所有线程共享的,几乎所有的对象实例都在这里分配内存;</li><li>方法区(Methed Area):用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译后的代码等数据。</li></ul></li><li><p>堆栈的区别</p><ul><li>功能方面:堆是用来存放对象的,栈是用来执行程序的。</li><li>共享性:堆是线程共享的,栈是线程私有的。</li><li>空间大小:堆大小远远大于栈。</li></ul></li><li><p>双亲委派模型(类加载模型) 如果一个类加载器收到了类加载的请求,它首先不会自己去加载这个类,而是把这个请求委派给父类加载器去完成,每一层的类加载器都是如此,这样所有的加载请求都会被传送到顶层的启动类加载器中,只有当父加载无法完成加载请求(它的搜索范围中没找到所需的类)时,子加载器才会尝试去加载类。</p></li><li><p>JVM 有哪些垃圾回收器 CMS:一种以获得最短停顿时间为目标的收集器,非常适用 B/S 系统。 G1:一种兼顾吞吐量和停顿时间的 GC 实现,是 JDK 9 以后的默认 GC 选项。</p></li><li><p>CMS收集器和G1收集器的区别</p><ul><li>CMS收集器是老年代的收集器,可以配合新生代的Serial和ParNew收集器一起使用;</li><li>G1收集器收集范围是老年代和新生代,不需要结合其他收集器使用;</li><li>CMS收集器以最小的停顿时间为目标的收集器;</li><li>G1收集器可预测垃圾回收的停顿时间</li><li>CMS收集器是使用<code>“标记-清除”</code>算法进行的垃圾回收,<code>容易产生内存碎片</code></li><li>G1收集器使用的是<code>“标记-整理”</code>算法,进行了空间整合,<code>降低了内存空间碎片</code>。</li></ul></li><li><p>JVM 调优的工具 <code>jinfo jstack jmap...</code></p></li><li><p>StackOverflow OOM</p><ul><li>如果线程请求的栈深度大于虚拟机所允许的最大深度,将抛出StackOverflowError异常</li><li>如果Java虚拟机栈可以动态扩展,并且扩展的动作已经尝试过,但是无法申请到足够的内存去完成扩展,或者在新建立线程的时候没有足够的内存去创建对应的虚拟机栈,那么Java虚拟机将抛出一个OutOfMemory 异常。</li><li><code>-Xss 调整JVM栈的大小</code></li></ul></li><li><p>常用的 JVM 调优的参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-Xms2g:初始化推大小为 2g;</span></span>
<span class="line"><span style="color:#A6ACCD;">-Xmx2g:堆最大内存为 2g;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:NewRatio=4:设置年轻的和老年代的内存比例为 1:4;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:SurvivorRatio=8:设置新生代 Eden 和 Survivor 比例为 8:2;</span></span>
<span class="line"><span style="color:#A6ACCD;">–XX:+UseParNewGC:指定使用 ParNew + Serial Old 垃圾回收器组合;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:+UseParallelOldGC:指定使用 ParNew + ParNew Old 垃圾回收器组合;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:+UseConcMarkSweepGC:指定使用 CMS + Serial Old 垃圾回收器组合;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:+PrintGC:开启打印 gc 信息;</span></span>
<span class="line"><span style="color:#A6ACCD;">-XX:+PrintGCDetails:打印 gc 详细信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>JVM内存为什么要分成新生代,老年代,持久代。新生代中为什么要分为Eden和Survivor。</p><ul><li>如果没有Survivor,Eden区每进行一次Minor GC,存活的对象就会被送到老年代。<code>老年代很快被填满,触发Major GC.老年代的内存空间远大于新生代,进行一次Full GC消耗的时间比Minor GC长得多</code>,所以需要分为Eden和Survivor。</li><li><code>Survivor的存在意义,就是减少被送到老年代的对象,进而减少Full GC的发生</code>,Survivor的预筛选保证,<code>只有经历16次Minor GC还能在新生代中存活的对象,才会被送到老年代</code>。</li><li>设置两个Survivor区最大的好处就是解决了<code>碎片化</code>,刚刚新建的对象在Eden中,经历一次MinorGC,Eden中的存活对象就会被移动到第一块survivor space S0,Eden被清空;等Eden区再满了,就再触发一次Minor GC,Eden和S0中的存活对象又会被复制送入第二块survivor spaceS1(这个过程非常重要,因为这种复制算法<code>保证了S1中来自S0和Eden两部分的存活对象占用连续的内存空间,避免了碎片化</code>的发生)</li></ul></li><li><p>完整的GC流程 对象如何晋升到老年代</p><ul><li>Java堆 = 老年代 + 新生代</li><li>新生代 = Eden + S0 + S1</li><li>当 Eden 区的空间满了, Java虚拟机会触发一次 Minor GC,以收集新生代的垃圾,存活下来的对象,则会转移到 Survivor区。</li><li>大对象(需要大量连续内存空间的Java对象,如那种很长的字符串)直接进入老年态;</li><li>如果对象在Eden出生,并经过第一次Minor GC后仍然存活,并且被Survivor容纳的话,年龄设为1,每熬过一次Minor GC,年龄+1,若年龄超过一定限制(15),则被晋升到老年态。即长期存活的对象进入老年态。</li><li>老年代满了而无法容纳更多的对象,Minor GC 之后通常就会进行Full GC,Full GC 清理整个内存堆 – 包括年轻代和年老代。</li><li>Major GC 发生在老年代的GC,清理老年区,经常会伴随至少一次Minor GC,比Minor GC慢10倍以上。</li></ul></li><li><p>怎么打出线程栈信息</p><ol><li>输入jps,获得进程号。</li><li><code>top -Hp pid</code> 获取本进程中所有线程的CPU耗时性能</li><li>jstack pid命令查看当前java进程的堆栈状态</li><li>或者 jstack -l &gt; /tmp/output.txt 把堆栈信息打到一个txt文件。</li><li>可以使用fastthread 堆栈定位,<code>fastthread.io/</code></li></ol></li><li><p>强引用、软引用、弱引用、虚引用</p><ul><li>强引用: new了一个对象就是强引用</li><li>软引用: 如果一个对象只具有软引用,则内存空间足够,垃圾回收器就不会回收它;如果内存空间不足了,就会回收这些对象的内存。</li><li>弱引用: 具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中,一旦发现了只具有弱引用的对象,不管当前内存空间足够与否,都会回收它的内存。</li><li>虚引用: 如果一个对象仅持有虚引用,那么它就和没有任何引用一样,在任何时候都可能被垃圾回收器回收。虚引用主要用来跟踪对象被垃圾回收器回收的活动。</li></ul></li></ol><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><ol><li><p>什么是 XSS 攻击,如何避免 XSS 攻击:即跨站脚本攻击,它是 Web 程序中常见的漏洞。原理是攻击者往 Web 页面里插入恶意的脚本代码(css 代码、Javascript 代码等),当用户浏览该页面时,嵌入其中的脚本代码会被执行,从而达到恶意攻击用户的目的,如盗取用户 cookie、破坏页面结构、重定向到其他网站等。<code>预防 XSS 的核心是必须对输入的数据做过滤处理</code>。</p></li><li><p>什么是 CSRF 攻击,如何避免</p><ul><li>CSRF:Cross-Site Request Forgery(中文:跨站请求伪造),可以理解为攻击者盗用了你的身份,以你的名义发送恶意请求,比如:以你名义发送邮件、发消息、购买商品,虚拟货币转账等。</li><li>防御手段: <ul><li>验证请求来源地址;</li><li>关键操作添加验证码;</li><li>在请求地址添加 token 并验证。</li></ul></li></ul></li><li><p>tcp 粘包是怎么产生的</p><ul><li>tcp 粘包可能发生在发送端或者接收端,分别来看两端各种产生粘包的原因: <ul><li>发送端粘包:发送端需要等缓冲区满才发送出去,造成粘包;</li><li>接收方粘包:接收方不及时接收缓冲区的包,造成多个包接收。</li></ul></li></ul></li><li><p>OSI 的七层模型 物理层:利用传输介质为数据链路层提供物理连接,实现比特流的透明传输。 数据链路层:负责建立和管理节点间的链路。 网络层:通过路由选择算法,为报文或分组通过通信子网选择最适当的路径。 传输层:向用户提供可靠的端到端的差错和流量控制,保证报文的正确传输。 会话层:向两个实体的表示层提供建立和使用连接的方法。 表示层:处理用户信息的表示问题,如编码、数据格式转换和加密解密等。 应用层:直接向用户提供服务,完成用户希望在网络上完成的各种工作。</p></li><li><p>JSONP jsonp:JSON with Padding,它是利用 script 标签的 src 连接可以访问不同源的特性,<code>加载远程返回的“JS 函数”</code>来执行的。</p></li></ol>`,11),t=[n];function r(c,d,s,p,u,h){return e(),i("div",null,t)}const C=l(o,[["render",r]]);export{y as __pageData,C as default};
