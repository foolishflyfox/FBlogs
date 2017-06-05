# 作用域与闭包

## 作用域是什么

LHS：Left Hand Side，也称为左值，用于存储数据，必须具有可写内存空间；
RHS：Right Hand Side，也称为右值，获取数据，不一定有可写内存空间；

**如果RHS查询在所有嵌套作用域中都不能找到，引擎将会抛出`ReferenceError`异常，`ReferenceError`异常是一个非常重要的异常；**

**程序运行在“非严格模式”下时，如果LHS查询时，如果在顶层(全局作用域)中也无法找到目标变量，全局作用域将会创建一个具有该名称的变量，并将其返回给引擎**

ES5中引入了“严格模式”，正常模式被称为“宽松模式”或“懒惰模式”，引入方法是在js文件中加入一行字面量：
```javascript
"use strict"
```

在严格模式下，禁止自动或隐式地创建全局变量，因此，在严格模式中，如果LHS查询失败，也将直接像RHS一样，直接弹出`ReferenceError`异常；

如果你对一个RHS变量进行不合理的操作，例如对一个数值进行调用，则将弹出`TypeError`异常；

javascript引擎首先会在代码执行前对其进行编译，在这个过程中，像var a=2这样的声明会被分解成两个独立的步骤：

1. var a在其作用域中声明新变量；
2. a=2 会查询(LHS查询)变量a并对其进行赋值；

## 欺骗词法

eval(..)通常被用来 **执行动态创建** 的代码；

如果eval(..)所执行的代码包含有一个或多个声明（无论是变量还是函数），就会对eval(..)所处的词法作用域进行修改；

在严格模式下，eval(..)在运行时有其自己的词法作用域，这意味着eval中的声明无法修改该函数所在的作用域；

javascript中，setTimeout(..)和setInterval(..)第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的函数代码；但是，这种功能已经过时，并且不被提倡；

例如，setTimeout的函数声明为： `setTimeout(code,millisec)` ； setInterval的函数声明为： `setInterval(code,millisec)`

另外，函数类`var foo = new Function(arg1,arg2,... , argN,function_body)`也能动态创建函数；例如：

```javascript
(new Function("console.log('hello,world')"))();
```
可以实现动态代码的自执行；

**注意：在程序中动态生成代码的使用场景非常罕见，因为它所带来的好处无法抵消性能上的损失。**

with的使用：with( *expression* ) statement

with通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身；例如：

```javascript
var obj = {
    a:1,
    b:2,
    c:3
}
```
修改该对象的属性时，可以用以下代码：
```javascript
obj.a = 2;
obj.b = 3;
obj.c = 4;
```
上述代码通过with将得到简化：
```javascript
with(obj){
    a = 2;
    b = 3; 
    c = 4;
}
```

**最小暴露原则：** 应该最小限度地暴露必要内容，而将其他内容都隐藏起来；

当程序中加载多个第三方库时，这些库通常会在作用域中声明一个名字足够独特的变量，通常是一个对象，这个对象被用作库的命名空间，所有需要暴露给外界的功能都会成为这个对象的属性，而不是将自己的标识符暴露在顶级的词法作用域中；

函数表达式 `(function foo(){ ... })` 只能在 `...` 所代表位置中被访问，外部作用域则不行；

IIEF:Immediately Invoked Function Expression，代表立即执行函数表达式；
