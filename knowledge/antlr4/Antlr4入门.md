## 2.1 Antlr4规则基本语法和关键字

首先，如果有一点儿C或者Java基础，对上手Antlr4 g4的文法非常快。主要有下面的一些文法结构：

- **注释：**和Java的注释完全一致，也可参考C的注释，只是增加了JavaDoc类型的注释；
- **标志符：**参考Java或者C的标志符命名规范，针对Lexer 部分的 Token 名的定义，采用全大写字母的形式，对于parser rule命名，推荐首字母小写的驼峰命名；
- **不区分字符和字符串，**都是用单引号引起来的，同时，虽然Antlr g4支持 Unicode编码（即支持中文编码），但是建议大家尽量还有英文；
- **Action，**行为，主要有@header 和@members，用来定义一些需要生成到目标代码中的行为，例如，可以通过@header设置生成的代码的package信息，@members可以定义额外的一些变量到Antlr4语法文件中；
- **Antlr4语法中**，支持的关键字有：import, fragment, lexer, parser, grammar, returns, locals, throws, catch, finally, mode, options, tokens。



## 2.2 Antlr4语法介绍

### 2.2.1语法文件的整体结构及写法示例

Antlr4整体结构如下：

```text
/** Optional javadoc style comment */

grammar Name;

options {...}

import ... ;



tokens {...}

channels {...} // lexer only

@actionName {...}



rule1 // parser and lexer rules, possibly intermingled

...

ruleN
```

一般如果语法非常复杂，会基于Lexer和Parser写到两个不同的文件中（例如Java，可参考：[https://github.com/antlr/grammars-v4/tree/master/java/java8](https://link.zhihu.com/?target=https%3A//github.com/antlr/grammars-v4/tree/master/java/java8)），如果语法比较简单，可以只写到一个文件中（例如Lua，可参考：[https://github.com/antlr/grammars-v4/blob/master/lua/Lua.g4](https://link.zhihu.com/?target=https%3A//github.com/antlr/grammars-v4/blob/master/lua/Lua.g4)）。





四、遍历模式
1、Listener (观察者模式，通过结点监听，触发处理方法)

    程序员不需要显示定义遍历语法树的顺序，实现简单
    缺点，不能显示控制遍历语法树的顺序
    动作代码与文法产生式解耦，利于文法产生式的重用
    没有返回值，需要使用map、栈等结构在节点间传值

语法分析树监听器

ANTLR运行库提供了ParseTree-Walker类，我们可以自行实现ParseTreeListener接口，在其中填充自己的逻辑代码。

监听器机制的优秀之处在于，这一切都是自动进行的。我们不需要编写对语法分析树的遍历代码，也不需要让我们的监听器显式的访问子节点。

    CodePointCharStream cs  = CharStreams.fromString(STRING);//STRING 编写的语法
    G4NameLexer lexer = new G4NamecLexer(cs);
    CommonTokenStream tokens = new CommonTokenStream(lexer);
    G4NameParser parser = new G4NameParser(tokens);
    ParseTree tree = parser.expr();//expr语法树的根节点，也就是语法入口
    ParseTreeWalker walker = new ParseTreeWalker();//ANTLR提供的标准的遍历器
    
    MyListener listener = new MyListener (); //MyListener继承于extends G4NameBaseListener 
    walker.walk(listener, tree);//使用监听器初始化对语法分析树的遍历
    return listener.result(); //自定义MyListener 中写result方法返回结果

2、Visitor (访问者模式，主动遍历)

    程序员可以显示定义遍历语法树的顺序
    不需要与antlr遍历类ParseTreeWalker一起使用，直接对tree操作
    动作代码与文法产生式解耦，利于文法产生式的重用
    visitor方法可以直接返回值，返回值的类型必须一致，不需要使用map这种节点间传值方式，效率高

语法监听器访问器：有时候我们希望遍历语法分析树的过程，通过显式的方法来访问子节点。

上图，粗虚线显示了对语法分析树进行深度优先遍历的过程。细虚线标示出访问器方法的调用顺序。我们可以在自己的程序代码实现访问器接口，然后调用visit()方法来开始对语法分析树的一次遍历。

    G4NameLexer lexer = new G4NameLexer(CharStreams.fromString(input));//G4Name：g4文件名，input：语法一个字符串
    CommonTokenStream tokens = new CommonTokenStream(lexer);
    G4NameParser parser = new G4NameParser(tokens);
    parser.setBuildParseTree(true);//true创建语法分析树、false不需要浪费时间建立语法分析树
    
    ParseTree tree = parser.prog();//prog：g4语法的根节点
    MyVisitor visitor = new MyVisitor ();//MyVisitor自定义访问器
    visitor.visit(tree);//实际时调用tree.accept(visitor);//开始语法分析

总结：

        词法分析器处理字符序列并将生成的词法符号提供给语法分析器，语法分析器随即根据这些信息来检查语法的正确性并建造一颗语法分析树。
    
        这个过程对应ANTLR类是CharStream、Lexer、Token、Parser，以及ParseTree。
    
        连接词法分析器和语法分析器的“管道”就是TokenStream。

————————————————
版权声明：本文为CSDN博主「杀神lwz」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_42472027/article/details/118693261



# 参考

[Antlr g4 入门+深入_antlr4_杀神lwz的博客-CSDN博客](https://blog.csdn.net/weixin_42472027/article/details/118693261)




