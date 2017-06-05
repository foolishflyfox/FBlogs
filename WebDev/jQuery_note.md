jQuery笔记

*--- 该文档重要来自于《锋利的jQuery(第2版)》以及 jQuery项目的源码阅读*

# 第一章 认识 jQuery

## 原生javascript的不足

1. 复杂的文档对象模型
2. 不一致的浏览器实现
3. 缺乏便捷的开发、调试工具

为了解决上述javascript的不足，各种javascript库诞生了；

## 各种javascript库

### 1、prototype

最早成型的javascript库之一，对原生javascript的内置对象做了大量扩展；

对面向对象的编程支持不是很好，结构较为松散，可以作为一个javascript的函数库使用；

### 2、Dojo

独特之处在于提供了很多Javascript库没有提供的功能，例如：
- 离线存储的API
- 生成图标的组件
- 基于SVG/VML的矢量图形库
- Comet支持

缺点：

- API不稳定(慢慢改进中)
- 学习曲线陡
- 文档不齐全

### 3、YUI

YUI(Yahoo! UI)，是Yahoo公司开发的一套完备的、扩展性良好的富交互网页程序工具集；

### 4、Ext JS

Ext JS简称Ext，原本是YUI的扩展，重要用于创建UI界面，现在可以使用jQuery等多种js库作为基础库，Ext作为界面库；

Ext可以开发华丽外观的前端界面，自身比较臃肿，并不是完全免费，如果用于商业用途需要付费授权；

### 5、MooTools

轻量、简洁、模块化、面向对象的javascript框架；

### 6、jQuery

特点：

- 轻量级
- 强大的选择器
- 出色的DOM操作
- 可靠的事件处理
- 完善的兼容性
- 链式操作

### 搜索各关键字在google搜索上的对比

通过 https://www.google.com/trends 可以查看各关键字在google上搜索量的对比，并可以通过统计图显示出来；

## 开始jQuery之旅

### jQuery简介

jQuery凭借简洁的语法和跨平台的兼容性，简化了js开发人员遍历html文档、操作DOM、处理事件、执行动画、开发Ajax等操作；

jQuery的理念：write less，do more；

### jQuery的优势

1. 轻量级：压缩后大小为30K左右；
2. 强大的选择器
3. 出色的DOM封装
4. 可靠的事件处理机制
5. 完善的Ajax
6. 不污染顶级变量
7. 出色的浏览器兼容性
8. 链式操作：可以直接连写对同一jQuery对象上的一组动作，而无需重复获取对象，使jQuery代码非常优雅；
9. 隐式迭代：jQuery中的方法都被设计成自动操作对象集合，而非单独的对象，这使得大量的循环结构不再需要，大幅减少代码量；
10. 行为层和结构层的分离：开发者可以直接使用jQuery选择器选中元素，然后直接给元素添加事件，而不用关心该元素在html中的样式、位置；
11. 丰富的插件：jQuery的以扩展性使其吸引大量开发者为其开发插件；
12. 完善的文档
13. 开源

### jQuery的一个特殊对象 -- $

在jQuery库中，$就是jQuery的一个简写形式，例如： `$("#foo")` 等价于 `jQuery("#foo")`，再如，`$.ajax` 等价于 `jQuery.ajax` ；

# 第二章 jQuery选择器


 

