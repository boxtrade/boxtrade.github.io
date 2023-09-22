

随着零售交易的出现，以及至今已运行了十多年的牛市，股票市场从未像现在这样受欢迎。事实上，根据彭博情报公司的数据，散户投资者现在主导着美国的股票市场，几乎占到了共同基金和对冲基金的总量。

计算员和金融工程师的职业前景正在飙升。著名的金融工程硕士学位课程培养出新一代的技术专家，他们挥舞着编程工具，使交易算法大放异彩。我们也不要忘记2020年初大流行病导致的市场崩溃。伦敦[**LMAX**](https://www.jdon.com/query/searchAction.shtml?query=LMAX) 集团的首席执行官David Mercer说，这证明了系统的复原力。"就在2020年，我们的银行交易量翻了一番，其中大部分来自于algo台--所以现在大约85%的银行交易量是通过algo台来实现的。"

这就提出了金融工程的技术现状问题：为什么Java对股票市场的运行仍然至关重要的原因。但首先，我们要了解一点历史。  
   
**Java在金融领域的悠久历史**  
1969年，Instinet成为第一个在股市大厅之外进行金融产品交易的电子通讯网络（ECN）。在20世纪70年代，计算机化的订单流开始出现，而在20世纪80年代，迈克尔-布隆伯格的同名终端被引入。在20世纪90年代初，现在占主导地位的金融信息交换（FIX）协议开始作为所罗门兄弟公司和富达公司之间的信息传递实验。

到20世纪90年代末，程序员约书亚-莱文（Joshua
 Levine）在20世纪80年代从大学辍学后一直向不同的华尔街公司兜售他的软件，他创造了一个名为Island 
ECN的小订单匹配系统。Island是用FoxPro为MS-DOS 2.6版编写的，有一个提高速度的小技巧：在创建一个新的订单之前，检查一下[**缓存**](https://www.jdon.com/tag-313/)中是否有一个被取消的订单的记录。然后，复活并重新使用该记录，以避免大量的工作。Island很快被纳斯达克采用。

2002年，Instinet收购了Island，一年后，它将代码移植到了Java。在他的博客上，Levine解释说。"虽然Java版本是一些**不错的代码，而且运行速度快了几个数量级--这个[原始]代码特别有趣，正是因为它在如此缓慢的平台上运行，而且非常容易阅读，突出了这样一个观点：通常是[**架构**](https://www.jdon.com/tag-249/)和算法比原始平台速度更重要。"

(华尔街日报》记者斯科特-帕特森（Scott Patterson）在2012年出版的《暗池》（Dark Pools）一书中对莱文大加赞赏。机器交易员的崛起和对美国股市的操纵）。

Java不仅速度快得多。到21世纪初，由于其易用性、安全性、可移植性、动态类加载、运行时线程创建等等，Java正在彻底改变编程。

高频交易（HFT）的竞赛正在蓬勃发展，而基于Java的工具，如thinkorswim（现在由TD Ameritrade拥有）正在使每个人都能进行算法交易。

2004年，高盛开始建立一个名为Caramel的Java集合框架，该框架于2012年开源，后来改名为Eclipse集合。到2011年，甲骨文公司的一份技术简报估计，超过80%的电子交易应用程序，以及几乎所有的FIX引擎都是用Java编写的。

该语言的普及为金融公司创造了一个良性循环。"Java冠军、总部位于伦敦的Chronicle软件公司的首席执行官Peter Lawrey说："核心Java的开发者在伦敦和其他金融中心广泛存在，允许HFT公司挑选最适合他们需求的员工。

由Java支持的新型交易所也在不断[**涌现**](https://www.jdon.com/55787.html)。2010年，芝加哥气候交易所用Java编写，旨在进行二氧化碳抵消交易。大约在同一时间，[**LMAX**](https://www.jdon.com/query/searchAction.shtml?query=LMAX) Disruptor（今天仍然很受欢迎）利用 "机械同情 "等技术开创了加速外汇（forex）交易的新方法--对CPU在并发的线程进程中如何使用内存的理解。

另一场革命正在酝酿之中：开放源码软件运动。正如许多Java杂志的读者所知，2007年，Sun Microsystems在GNU通用公共许可证下发布了OpenJDK。在随后的几年里，开源炒股项目遍地开花。

今天，在GitHub上，你可以找到诸如[Exchange-Core](https://github.com/mzheravin/exchange-core), [Ta4j](https://github.com/ta4j/ta4j), [Coin Trader](https://github.com/timolson/cointrader), 和[Chronicle Queue](https://github.com/OpenHFT/Chronicle-Queue),等强大的基于Java的开源系统，据Lawrey说，这些系统 "被世界上的一级银行广泛用于交易系统的[**微服务**](https://www.jdon.com/tag-25407/)之间的低延迟持久性（大约一微秒）和消息传递"。  
   
其他Java量化工具的最爱包括  

-     [Strata](http://strata.opengamma.io/),，一个分析和市场风险库
-     [JQuantLib](http://www.jquantlib.com/en/latest/)，一个量化金融框架
-     数学金融算法的[finmath](http://www.finmath.net/)库
-     名称明确的[QuantComponents](https://github.com/lsgro/quantcomponents)
-     [DRIP](https://lakshmidrip.github.io/DRIP/)，其库涵盖了固定收益、资产配置、交易成本分析和XVA（风险）指标

   
**Java的演变适合金融市场**  
几乎在Java进入交易领域的同时，语言和运行时环境就开始发生变化，以满足金融业的独特需求。第一件大事是实时性能。  
严格来说，实时性是指保证最坏情况下的响应。大多数应用程序以一般的统计术语指定性能要求，如90%的请求应在两秒内完成。  
但是，Java最初的垃圾收集器并没有针对实时操作进行优化，而且它很容易在清理未使用的内存时停止所有的处理。因此，在1998年，第一个发布的JSR是关于语言、库和JVM的实时版本，大多数应用都被极大地改进了的垃圾收集器所服务，例如从Java
 8开始的G1GC和最近的ZGC、Shenandoah GC和其他。  
事实上，2021 年 3 月发布的以下两个 Java 16 新特性通过内存管理使 Java 更快：  

- [JEP 376：具有并发线程堆栈处理的](https://openjdk.java.net/jeps/376)ZGC 将 ZGC 线程堆栈处理从安全点移动到并发阶段，消除了并发堆栈处理的最后一个重大瓶颈。
- [JEP 387：弹性元](https://openjdk.java.net/jeps/387)空间更快地释放 HotSpot JVM 的内存并简化元空间代码以便于维护。

此外，2014 年推出的[JShell](https://docs.oracle.com/en/java/javase/16/jshell/introduction-jshell.html<a href='/query/searchAction.shtml?query=GUID' target=_blank><b>GUID</b></a>-630F27C8-1195-4989-9F6B-2C51D46F52C8)使通过命令行对 Java 代码进行原型设计变得容易，这对于截止日期驱动的量化分析非常有用  
   
**高盛进入 GraalVM、Slang 和 Truffle**  
使AOT（以及许多其他事情）成为可能的最新幕后技术是GraalVM，它可以加速包括Java、Python、Ruby、JavaScript、R、C和C++等语言。但是，如果你的团队的语言不在这个名单上呢--也许是因为你自己写的？这就是高盛证券数据库（SecDB）架构团队面临的问题，该团队负责维护公司的定价平台。  
SecDB架构师支持一种名为Slang的内部编程语言，它对定价、风险和交易预订至关重要。  
1992年，高盛对外汇工作想用一种动态语言来编码。有客户的电话；我们希望能够快速建立定价模型的原型。Slang（"证券语言 "的简称）是一种解释性的单线程语言。从语法上讲，它是C和Lisp的爱情结晶，但有空格和变量名，因为我们希望它可读。  
对GraalVM和Truffle的实验性使用，将Slang作为一种更快的JVM语言运行--Java开发者也可以维护。  
Truffle语言实现框架是一个开源库，用于构建工具和编程语言实现，作为自我修改的抽象语法树的解释器。  
在概念验证期间，高盛发现GraalVM能够为Slang提供一个基础，他们可以在Slang和C++之间切换：如果这一切都在GraalVM上运行，那可得到了一个集成的环境，你可以跨越这些界限进行剖析和调试。这只是一个巨大的效率，非常酷。  
此外，在同一次演讲中，Haynes的同事Zachary

Fernandez指出，GraalVM的LLVM运行时，即Sulong，"用一点点的魔法让我大吃一惊。编写一个类，将其编译为LLVM位码，将该指针交给我们现有的解释器，然后该解释器能够调用成员函数，这将在Sulong管理的代码中结束--这都是非常酷的。"  
    
**Citadel 公司寻求Java专家**  
归根结底，金融业的编程世界比Java是时髦的新语言时要多得多，这是件好事。由于更简单的语法和大量的数据科学库，Python和R等语言，更不用说Haskell和Julia了，已经在金融业爆炸性增长。  
尽管如此，做市商和对冲基金的工作通常仍然需要强大的Java和C/C++技能，不仅要维护现有的代码，还要规避单线程语言的限制（如Python全局解释器锁），创建高性能的系统，并推进到新兴的金融领域，如深度学习和区块链。

当被问及是否会改用其他语言和库进行区块链或机器学习时，Chronicle Software的Lawrey仍然坚持使用Java。"我们已经在Java中开发了我们的高吞吐量区块链。在我们看来，这使它更容易扩展"。  
Java拥有一个庞大的生态系统，包括运行时选项、分析器、调试器、开发环境和依赖管理工具。还有一个庞大的人才库，他说："虽然一些较新的语言如Go、C[**和Kotlin有很大的兴趣**](https://www.jdon.com/query/searchAction.shtml?query=和Kotlin有很大的兴趣)，但Java开发人员更广泛，使其成为长期使用的更可靠的开发环境。"

如果你想在金融业寻找一份舒适的Java开发工作，怎么办？以Citadel
 Securities为例，该公司的招聘职位要求具备Java SE和Jakarta 
EE的专业知识；软件模式和企业架构；以及Spring、Hibernate、FIX协议、Maven、Git、Jenkins、Nexus、关系数据库和大数据的经验。

对于任何高频交易应用程序，你要证明你能写出有内存效率的代码，Lawrey建议说："基于值的类可以改善内存占用，从而提高CPU缓存的效率。虽然大多数现代计算机拥有数千兆字节甚至数千兆字节的内存，但它们仍然只有256KB的二级缓存在每个CPU核，所以如果你想让每个核尽可能快地运行，你要避免脱离二级缓存--这使得内存仍然是一种宝贵的资源。"  
而且你需要回答关于集合、多线程、搜索和检索算法的问题，例如使用二叉树、ArrayList和向量的相对速度。你还需要了解动量、套利、均值回归和统计套利的标准金融算法。




