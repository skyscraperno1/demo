#### 1. 在工作用熟练掌握git版本管理工具，利用gitBlid进行团队协作开发，提高工作效率

A：git init 创建git版本库 // 这个其实不用，都是老大统一管理的，把仓库建好，发地址给我们，我们进行开发所以直接git clone就行

​     git add .  = git add -all 全部存放 存到暂存区
​      git commit -m "内容"

​    **git log 查看日志 q 推出**

**git reflog 查看历史日志 删的东西也可以看**

  发现有修改之后有问题

​     **git reset --hard  版本号** 

远程

**老大创建好了 git clone http://xxx**

git remote add origin http://xxx 本地库和远程仓库建立连接

git push -u origin

送分题 skill 3伦到5轮 tdd 

git branch 查看分支

**git branch jianghai 创建我的分支**

**git checkout jianghai 进入到我的分支**



**git push origin jianghai 上传到远程分支**

**git  clone -b jianghai http://xxxx** **下载我自己的分支**

 合并分支： （一般是老大做）

   git checkout master 

  git merge jianghai 

#### 2.代码书写规范（w3c标准）擅长使用语义化标签，对浏览器兼容和seo引擎的优化能够进行妥善的处理。



|              | 单页面应用SPA                  | 多页面MPA                               |
| ------------ | ------------------------------ | --------------------------------------- |
| 搜索引擎优化 | 不利于SEO检索                  | 比较容易实现                            |
| 组成         | 一个外壳页面和多个片段页面组成 | 多个完成的html页面组成                  |
| 页面跳转     | slot插槽切换，公用外壳页面     | 一个完整页面到另一个完整页面            |
| 页面传递数据 | 一个页面很容易实现             | 依赖router cookie local sessionStrotage |
| 开发成功     | 较高，需要借助专业的框架       | 较低，页面重复代码较多                  |

#### 3.熟练使用HTML5、CSS3等技术实现页面高度还原。常用less预处理器，简化CSS书写过程。引入normalize.css解决浏览器统一样式

less例子：

在封装footer的时候

```less
@icons： home videos message mine

.loop(@index) when (length(icons)){

  @icon: extract(@icons, @index)

      >i{
          &.@{icon}{
              background-image:url('../images/footer/@{icon}.png')
              }
          }
    &.active{
            >i{
                &.@{icon}{
                    background-image: url('../images/footer/@{icon}-active.png');
                }
            }
        }
   .loop(@index + 1)
}
//问题：下面的图标怎么动起来
```



#### 4.Cookie、Session、Token区别在哪

1.由于Http协议是无状态的，所以服务端需要记录用户的状态。所以产生了session。session本身是一个抽象的东西。

2.cookie是一个实际存在的东西

#### 5.var let 的区别

#####  a.var可以提升hoist，所有遍历生命都拉到函数顶部。而且可以重复声明变量。

注：声明式函数也有变量提升

```js
console.log(f1); // function f1() {}  
console.log(f2); // undefined 
function () {}
var f2 = function() {}
```

```js
console.log(name) // 'jack'
var name = 'jack'

console.log(name1) // ReferenceError name1 没有被定义
let name1 = 'rose'
```

#####  b.let声明范围是块作用域，var声明范围是函数作用域 

```javascript
if(ture){
    var name = 'Matt'
    console.log(name) //Matt
}
console.log(name) // Matt

if(ture){
    let age = 22
    console.log(age) //22
}
console.log(age) // ReferenceError age没有定义

```

##### c. var变量会变成一个window可访问的对象，但是let不行

##### d.for循环中的let声明

```js
for(var i = 0; i< 5; i++){
    setTimeout(()=>{
        console.log(i)
    })
}
// 你以为会输出0、1、2、3、4
// 实际上会输出5、5、5、5、5
// 因为在推出循环的时候，迭代变量保存的是导致循环推出的值5.在之后执行超市逻辑是，所有的i都是同一个变量，因而会输出同一个最终值
```

##### e.

```js
var a = 20
var b = a += 30
console.log(b) //50
console.log(a) //50
```



#### 6、HTTP状态码知道哪些？分别什么意思

```
一、状态码200+  )=> 成功处理的请求的状态码
  1.200:服务器成功处理
  2.204：服务器成功处理了请求，但是没有返回任何内容
二、状态码300+ )=>重定向，每次请求中重定向不要超过5次
  1.301：请求的网页已经永久移动到新位置。比如URLs发生变化的时候，使用301代码。搜索引擎索引中保存新的URL
  2.302：请求的网页临时移动到新位置。搜索引擎索引中保存原来的URL。
  3.304：如果网页自请求者上次后没有更新，则用304代码告诉搜索引擎机器人，可节省带宽和开销 NoT Modified后端数据没有变化(http请求缓存，强制缓存)在?后面加一个时间戳，不管后端要不要这个数据反正发过去就vans
三、状态码400+ )=> 客户端错误，表示请求可能出错，妨碍了服务器的处理。前端错误
  1、400：服务器不理解请求的语法
  2、403：服务器拒绝请求。
  3、404：找不到请求的网页。服务器上不存在网页。
  4、410：请求资源永久删除后，服务器返回此响应。该代码与404相似，但在资源以前存在而现在不存在的情况下，又是用来替代404代码。如果资源已永久删除，应当使用301指定资源的新位置。
四、状态码500+ )=> 表示服务器在处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。后端错误
  1、500：服务器遇到错误，无法完成请求
  2、503：服务器目前无法使用（由于超载或停机维护）
```

301/302/304的区别

#### 7.sessionStorage和localStorage区别

sessionStorage是会话，关闭网页之后就没有了，localStorage只有手动删除

他们都只能存储字符串 如果是对象，他会自己调用toString方法转换成字符串

如果无法找到取出来的对象都是null 不是undefined

大小：根据浏览器不同，大小有区别，最小是IE浏览器：2M多一点，最大 是火狐浏览器：11M左右，goole是8000kb，所以浏览器的缓存一般就是5M左右



取值

```js
let cache = JSON.parse(sessionStorage.getItem('my-redux'))
const initState = {
   token: cache?.token || ''  // es6高级语法
}
```

#### 8.HTML5 哪些新东西

1.canvas画布 但是很难没有用过

2.语义化标签article footer header nav section asides等

3.localStorage sessionStorage

4.audio radio

5.navigator.geolocation

#### 9.webpack有没有用？用过

#####  样式：css-loader、style-loader、less-loader（样式搭建如果用Ant Design可以再搭建craco）

#####  文件： file-loader、url-loader

#####  编译：babel-loader、ts-loader

#####  校验：jshint-loader、eslint-loader

#### 10.加密处理sessionStorage 

#### 11.处理打印业务

因为window.print()会打印整个页面，我们需要

```css
// 利用媒体查询
@media print{
    .noShow{
        display:none
    }
}
//把不需要的div在@media print 里面
```

分页业务可以给页面设置<div style="page-break-after:always">

#### 12.mvvm vm 

m model数据模型，只负责数据存储

v view视图层，只负责数据渲染

![image-20220411000154612](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220411000154612.png)

vm 层 数据和视图绑定，双向绑定层（逻辑层） 严格的来讲react里面只是一个视图，本身出现就是不满足bootstrap的样式

Vue中，data就是m层，new Vue里面的其他就是vm层，$mount('#root')就是v层

#### 12.1 mvc 和mvvm的区别？

在很久以前前端是使用mvc的。我们需要数据所以有了M，我们需要界面所以有了V，而我们需要找一个地方把M赋值给V来显示，所以有了C，然而我们忽略了一个很重要的操作：数据解析。

#### 13.在css中有哪些让元素居中的方法？margin/text-align/flex/absolute-margin/transform-translate

#### 14.如何理解虚拟DOM

 在render方法中返回一个jsx模板，利用底层 React.createElement 这个api来创建一个js对象（这个对象是个数组，有三个值 如下）

```jsx
render() {
  return React.createElement('div', {id: 'abc'}, React.createElement('span', {}, 'hello'))
}
// 它相当于
<div id='abc'><span>hello</span></div>
```

JSX -> createElement -> 虚拟DOM(js对象) -> 真实DOM

无论Vue还是React因为是虚拟dom就会大大优化浏览器渲染页面。

![img](https://upload-images.jianshu.io/upload_images/4345378-b7ccad3bc808783f.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)

比如在页面渲染的时候我改了一个div或者一个属性，dom tree需要重绘，一个个找到修改的地方。

但是如果是用js对象的话（虚拟dom），修改后只需要渲染一次

#### 15.JSON是什么

 (JavaScript Object Notation) 是一种轻量级的数据交换格式。JSON一般建是有双引号的

![img](https://images2015.cnblogs.com/blog/940884/201612/940884-20161202103350412-368061867.jpg)

##### 15.1  因为JSON不支持function NaN undefined，所以可能会导致数据丢失，在深拷贝的时候就容易丢数据。 深拷贝=》

A.JSON.parse(JSON.stringify(obj))

B. 使用递归里面涉及到Array.isArray(obj) 来判断是否是数组
    obj.hasOwnProperty(key) 来判断是否key在这个obj里面

如果obj[key]存在 并且 typeof obj[key] === 'object' 里面还有对象

newObj[key] = clone(obj[key])  //实现递归


C. jq里面有一个$extends的语法 但是没怎么用过

#### 16.textarea如何进制拉伸

textarea{

   resize:none

}

#### 17.Canvas如何处理跨域图片 说实话从来没有画过

img.setAttribute('crossOrigin', 'anonymous')

#### 18.如何取消请求的发送

根据发送网络请求的 API 不同，取消方法不同

- xhr   => xhr.abort() 

- fetch  如果使用`axios`，取消原理同 fetch

  ```js
  const controller = new AbortController();
  const signal = controller.signal;
  fetch('https://somewhere', { signal })
  controller.abort()
  ```

  

- axios 如果使用`axios`，取消原理同 fetch

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // handle error
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// cancel the request (the message parameter is optional)
source.cancel("Operation canceled by the user.");
```

Axios里面有一个**cancelToken**的方法，但是没有怎么在实际使用中用过



#### 19.nodejs在4.x之前有两个库  一个node库 一个io库

#### 20.实现用户菜单权限功能

   a. 需要在西永路由的地方获取到权限数据 -- 在系统登录的时候就应该缓存权限数据 -- 根据用户的角色信息获取到的

   b.每一次页面跳转都应该去使用权限数据和路由进行匹配，然后比较权限信息

​            使用路由地址，后去当前菜单需要的权限，如果不要权限，那么直接跳转

​            使用路由地址，获取当前用户对于此菜单拥有权限，然后判断是否具备菜单需要的权限信息

#### 21.ant design 最难的 tree table time from

#### 22.浮点数问题 0.1+0.2 !== 0.3

 因为js当中计算都是通过二进制来计算的 0.1 先把0.1转化成二进制 
var num = 0.1
num.toString(2) = 0.0001100110011001100110011001100110011001100110011001101 
这里只能保留52位

var n = 0.2
 n.toString(2) = 0.001100110011001100110011001100110011001100110011001101
在计算的时候最后一位都是1就要进1 ，导致最后结果有误

**如果真的遇到就在计算的时候乘100再除以100**

##### 22.1 为什么 parseInt(0.0000005) === 5

parseInt(string, radix)

因为在计算机里面0.0000005会被写成科学**计数法** '5e-7'

而parseInt()在解析字符串的时候，只会解析第一个数字5  后面的e-7就忽略掉了 所以parseInt(0.0000005) === 5

同样parseInt(999999999999999999999) === 1 

999999999999999999999 会被表示为 1e+21

#### 22.2 转化进制 

num 转化为16进制 num.toString(16) => 返回一个String

把2进制转化为10进制paseInt(num, 2)



#### 23.js回收机制

JS的垃圾回收机制？
 JS的垃圾回收机制是GC垃圾回收，在cpu空闲的时候对数据进行扫描并回收，如果这个变量存在引用，则不回收，否则回收内存

当一个变量的生命周期结束之后它所指向的内存就应该被释放。JS有两种变量，**全局变量**和在函数中产生的**局部变量**。局部变量的生命周期在函数执行过后就结束了，此时便可将它引用的内存释放（即垃圾回收），但全局变量生命周期会持续到浏览器关闭页面。

23.1 说道全局和局部变量那么我们一定就会说到闭包了

#### 24.实现盒子居中的方法

```css
/*1.flex实现*/
.box1{
   width: 200px;
   height: 200px;
   background-color: green;
   display: flex;  
   justify-content: center;       /*水平排列居中*/
   align-items: center;     /*竖直排列居中*/ 
}
/* 2.margin：auto实现 */
.div2 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  background-color: red;
  margin:  auto auto;     
      
}
/* 3.使用transform实现 */
.div1 {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 15px;
      background-color: powderblue;
      transform: translate(-50%,-50%); // 注意这里是-50%
    }
/* 4.margin负间距 宽和高的一半*/
.div {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 200px;
      height: 200px;
      background-color: yellowgreen;
      margin-left: -100px;
      margin-top: -100px;
    }
/*5.table-cell实现居中*/
.box1 {
      display: table-cell;     //
      vertical-align: middle;  // 就这两句重要
      width: 600px;
      height: 500px;
      background-color: pink;
    }
    .box2 {
      width: 200px;
      height: 200px;
      margin: 0 auto;
      background-color: red;
    }
/*6.button里面的元素会垂直居中*/
    button { // 因为是button只需要让里面的水平居中就行
      width: 400px;
      height: 400px;
      background-color: blueviolet;
    }
    div {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      background-color: burlywood;
    }
```

#### 25.常用的时间处理库

 moment.js

navigator.geolocation.getCurrentPosition

#### 26. 做过哪些性能优化的事情？

1. 把登陆进来的nav菜单缓存到sessionStorage当中

2.  系统如果页面相似会单独写一个mainLayout页面再往里面加东西，使用高阶组件挂载到需要的页面

3. 使用懒加载react-loadable

4. 其实react本身就是一个性能优化的过程（减少计算的量、利用缓存、精确计算的范围）

   react中state发生改变的时候，会先进行reconciliation，结束后立刻进入commit阶段

   reconciliation =》 1.计算出目标State对应的虚拟DOM结构 2.寻找“将虚拟DOM结构修改为目标虚拟DOM结构”的最优方案https://www.zhihu.com/question/40505685

5. SSR Server Side Rendering 和预渲染 Prerendering 的区别 ？是不是打了包就可以SSR

6. 外部缓存  本地缓存 协商缓存见53

7. 防抖和节流

8. React.Memo() PuerComponent防止子组件跟着重复渲染

5. Vue中的v-model中的懒监听，监听input框中的onblur事件来

#### 27.ES6有哪些新的属性

1.展开运算符 ...  也是Spread Rest操作符

1. 1 rest[运算符](https://so.csdn.net/so/search?q=运算符&spm=1001.2101.3001.7020)将值序列组合成数组

   1.1.1 不知道传多少个参数时可以使用rest运算符

   1.1.2 如果参数过多，可以使用rest参数，且将rest参数放在最后。

   1.1.3 与解构赋值使用

1. 2 spread运算符将[数组](https://so.csdn.net/so/search?q=数组&spm=1001.2101.3001.7020)转换为参数序列，将类数组对象展开成一系列参数序列.

   1.2.1 将字符串转化为数组 let str= 'jabcdef',

   ​                                                arr = [...str]   // ['j', 'a', 'b', 'c', 'd', 'e', 'f']

   1.2.2 将伪数组转化为真正的数组  

   1.2.3 将一个数组插入到另一个数组中，连接数组

   ![image-20220404005046552](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220404005046552.png)

   1.2.4 传递参数时代替多个字符串的形式

   **1.扩展运算符和rest运算符都是用三个点表示，不过两个的功能不同.**

   **2.rest运算符将值序列组合成数组,rest运算符对形参作用，且在等号左边.**

   **3.spread运算符将数组转换为参数序列，将类数组对象展开成一系列参数序列，spread运算符对实参作用，且在等号右边.**

2.let const 新的变量声明

3.模板字符串 

```js
`${fjdksla}`
```

4.解构  react里面太常用了

5.函数传参的默认值 function a (text = 'default'){} strore里面经常用

6.箭头函数

7.for of遍历对象中的值

8.class类

9.说道类就有继承 extends super

10.还有我们经常用的 import export default都是

11.Promise async await等回调

12.新的数据类型 Symbol Set

13.很多新的api Array.from Array.assign

14.reduce

#### 28.伪数组以及他们转化成真正数组的方法

属性：

1.伪数组不能使用数组的方法map pop等等

哪些是伪数组：

1.function 中的arguments

2.document.getElementsByTagName  document.childNodes等NodeList

3.上传文件时选择的file对象 FileList

如何把伪数组转成真数组

1.使用slice方法，这个会返回一个新数组，call一遍resouce

  1.1 var arr1 = Array.prototype.slice.call(arr)

  1.2 var arr2 = [].prototype.slice.call(arr)

2.使用ES6中的Array.from()api  var arr3 = Array.from(arr)

3.展开运算符 var arr 4 = [...arr]

#### 29.实时数据获取方式：轮询、长连接

​     **轮询**：长轮询 -> 每隔一段时间发起一个请求，常用的是5s/5m/30m 

​                 短轮询 -> 当一个请求完成以后，执行一个即是等待（不需要给事件，主要是给页面绘制的时候），然后马上发出第二次请求

​              长轮询如果数据更新较快，那么数据不是实时的，比如5m轮询，如果数据每隔30s就更新了一次

​              断轮询如果数据更新较慢，那么接口开销就浪费了

​              轮询都会造成接口浪费和数据没有实时更新的问题

​     **长链接**：（套接字（socket）通信）

​               采用webSocket技术，它的原理是通过TCP连接，然后不会断开连接，所以它不仅前端可以给后端发送信息，后端也可以给前端推送信息

​                长链接会导致连接池占满的请求，导致后来的链接失败，比如nginx服务器支持1024个连接，长连接达到1024以后，所有的请求都请求不进去

#### 30.防抖和节流

**debounce防抖** 是事件触发以后，不会立即执行，会起一个定时器，然后定时器的事件内如果发生了第二次事件，

那么清除第一次定时器，然后重新起一个新的定时器，直到定时器到事件，没有二次事件，才执行业务  -- 即是执行定时器内最后一次操作

**throttle节流** 是事件触发以后，立即执行，会起一个定时器，然后在事件内不会执行二次事件 -- 节流执行定时器事件内的第一次操作 (节流一定要有一个标志)

#### 31.页面赋值和页面渲染是异步的

Vue和React框架为了提高页面渲染的性能，在没有异步的情况下进行赋值，会进行一个合并，它是使用的防抖的原理

比如连续两个setData()赋值，会起一个定时器，不会立刻执行渲染。等下一个任务执行结束要等一段时间才行

#### 32.解字符串

decodeURI('')  或者 decodeURIComponent('')

#### 33post 和get请求的区别

http是基于tcp/ip关于数据如何在万维网中如何通信的协议。本质上post和get都是tcp链接，他们能做的事情是一模一样的。

其实主要是因为请求方式传参不同所以造成很多区别： 刷新页面、书签、历史、长度、安全、类型


|                   |                             get                              |                             post                             |
| :---------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|     刷新页面      |         刷新和后退是无害的，因为浏览器会缓存get数据          |  刷新数据会被重新提交<br />（浏览器应该提醒数据被重新提交）  |
|       书签        |                        书签可以被收藏                        |                      不可以被收藏到书签                      |
|       历史        |                请求的历史参数会留在浏览器记录                |            请求体里面的内容不会存在浏览器历史记录            |
|       长度        | 因为url长度限制，所以请求参数有长度限制<br />(Chrome 8M左右 IE 2M左右) |                      请求数据长度无限制                      |
|       安全        |                           安全性差                           |                           安全性好                           |
|       类型        |                    只接受ASCII字符<br />                     |                           没有限制                           |
|    axios封装时    |                         params 参数                          |                           data参数                           |
| TCP<br />（相同） |                      产生一个TCP数据包                       | 产生两个TCP数据包<br />先发送header ，响应100 continue再发request body |

postman是一个接口测试抓包的客户端。

crud create retrive update delete

#### 34.http和https区别

http客户端和服务端请求和应答标准（TCP）

而https是以安全为目标的http同价，是加强版 https = http + ssl(Secure Sockets Layer)

|          |                 http                 |                            https                             |
| :------: | :----------------------------------: | :----------------------------------------------------------: |
|  安全性  |         明文数据传输，不安全         |                        SSL或者TSL加密                        |
|   证书   |              不需要证书              |                   需要到CA申请证书，要给钱                   |
| 默认端口 | 连接方式不同，端口也不同<br />端口80 |                           端口443                            |
| 搜索权重 |                权重低                |               谷歌调整算法，提高https搜索权重                |
|   性能   |               性能较高               | 握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电<br />同时缓存也不够高效，甚至可能因为加密很难缓存 |

![img](https://pic002.cnblogs.com/images/2012/339704/2012071410212142.gif)



#### 35.文件上传（图片）

1. 点击事件给Button
2. useCallBack函数里面创建一个input   const inputEle = document.createElement('input')
3. 给它添加属性 type='file'   inputEle.setAttribute('type','file')
4. 监听onChange事件 inputEle.onChange(e=>{   ...     })
5. 然后给它自触发点击事件 inputEle.click()
6. 监听事件中const file = e.target.files[0] 就是目标文件 它是一个Blob 大二进制对象
7. 大二进制对象不能通过网络传输，需要进行序列化 
   const fd = new FormData()
   fd.appen('fileName' , file)
8. 此时得到fd对象就可以进行文件上传
9. 由于上传文件可能较大，可以添加一个回调函数，传入Api 里面对应onUploadProgress。回调函数中evt可以查看上传进度

#### 35.2序列化 

将对象的状态信息转换为可以存储或传输的形式的过程。在序列化期间，对象将其当前状态写入到临时或持久性存储区。

转成字符串 或者把对象 转化成JSON字符串

**JSON.stringify()就是序列化**

js中序列化，使用FormData()

const fd = new FormData()  // 创建一个实例化对象

// 添加一个键值对

**fd.append('fileName', 值) FormData实例对象键值对也是序列化**

#### 35.3 断点续传 如果一个文件有1GB，如果进行断点续传，文件切片？

可以对file文件使用silce方法进行切片(blob对象)，然后需要标记每一片的位置，然后利用浏览器Ajax并发的原理

并发：在谷歌浏览器中，每次ajax只能发6个
可以统计进行多片文件上传，如果片文件上传成功，后端可以返回一个标记，然后前端记录，如果网络断开，那么可以记下那些片文件上传成功了，那些失败了，下次再上传的时候，就可以跳过成功上传的文件。

```js
let total = file.size = 164204623
let size = 4000 //每次切4000
let count = Math.ceil(total/size) 
for(let i = 0; i< count; i++){
    file.slice(i*size, (i+1)*size)
}
```

#### 35.4 处理图片

在应用中常常要把图片进行处理，分为前端处理和后端处理

前端通常使用canvas把图片进行缩放，然后以base64（字节码）的形式进行文件上传

1.fileReader转

let fr = new FileReader()
 fr.readAsDataURL(file)

2.canvas转

canvas.toDataURL()

#### 36.BFC Block Formatting Content 块级格式化上下文

概念：BFC是块格式化上下文。是一个独立的渲染区域，区域与区域之间不会互相影响。

形成BFC

1.浮动 float: left || right

2.定位 postition: sticky absolute relative

3.overflow: auto scroll hidden

4.display: inline-block || block || inline-flex

BFC经典问题，margin塌陷问题

解决

1.设置足够的margin

2.使用padding实现

3.给父元素设置fbc 或者border

#### 37.省略文本溢出

1.设置一个固定的宽度

2.设置不换行 white-space: nowrap

3.不能超过overflow:hidden

4.text-overflow: ellipsis /clip

#### 37.1两行溢出

1.display: -webkit-box

2.-webkit-line-clamp: 2 // 可以把 块容器 中的内容限制为指定的行数.

3.-webkit-box-orient: vertical // 

#### 38.数组去重

var arr = [1,1,8,8,12,12,15,15,16,16];

1.Set(arr)

2.新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。这里其实就有好几种办法 includes、indexof、soet之后前后对比

3.双重for循环 j= i+ 1
if(arr[i] === arr[j]){

arr.splice(j, 1)

j--

}



#### 39. 路由的基本原理

hash原理：通过监听浏览器的onhashchange()事件变化，查找对应的路由规则 hash值变化不会发起http请求。它也叫前端路由，成为了单页应用标配。经典的单页面SPA应用，类似于a标签里面实现的锚点链接。

history原理：(浏览器自有的一个对象,也可以叫浏览器模式) 使用history对象history.replaceState和history.pushState来实现的页面组件切换



history 模式

1.通过history api，我们丢掉了丑陋的#，但是它也有个毛病

2.不怕前进，不怕后退，就怕刷新，f5

——history模式会将URL修改得就和正常请求后端的URL一样,如后端没有配置对应/user/id的路由处理，则会返回404错误

——所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面。

ash模式下

1.前面的hashchange，你只能改变#后面的url片段。而pushState设置的新URL可以是与当前URL同源的任意URL。

2.前端路由修改的是#中的信息，而浏览器请求时是不带它玩的，所以没有问题.但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个404来。

#### 40.1

##### rem是多少?rem是根元素的字体大小 16px

##### em针对是父元素

##### px固定像素

##### 0.5px实现？scale(0.5)

41.slice是一个纯函数不会影响原来的数组 splice会影响

42.window.postMessage  iframe  =》 它会引起攻击

43.Safari浏览器new Date(2022-03-26)这样会报错 只能用new Date(2022/03/26)

44.处理search里面的数据

44.1字符串转对象     

```js

    function searchToObj(search){
      let obj = {};
      search = search.slice(1);
      for(let s of search.split("&")){
        let arr = s.split("=");
        if(obj[arr[0]] == undefined){
          obj[arr[0]]=arr[1];
        }else if(Array.isArray(obj[arr[0]])){
          obj[arr[0]].push(arr[1]);
        }else{
          let values = [];
          values.push(obj[arr[0]]);
          values.push(arr[1]);
          obj[arr[0]]=values;
        }
      }
      return obj;
 }
```

44.2对象转字符串

```js
let obj = {id:52, name:'zhangsan'}
let arr = []
for(k in obj){
 let item = k + '=' + obj[k]
 arr.push(item)
}
let str = '?' + arr.join('&')
```



#### 45.new干了什么

(1) 创建一个新对象（调用constructor创造这个实例对象）；
(2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
(3) 执行构造函数中的代码（为这个新对象添加属性） ；
(4) 返回这个新对象。

#### 46.new Object() 和 Object.create()的区别

Object.create(proto, [propertiesObject]?) 

#### 47.讲一讲this

我们都知道普通函数this指向的对象其实是window，但是其实并不完全能这么说，因为this的指向是在调用函数的时候决定的，也就是说在哪儿调就指向哪儿，因为我们平时都是在全局调用，所以指向window。

如果在一个对象里面

```js
var name="XL";
    var person={
        name:"xl",
        showName:function(){
            console.log(this.name);
        }
    }
    person.showName();  //输出  xl
   //这里是person对象调用showName方法，很显然this关键字是指向person对象的，所以会输出name
    
    var showNameA=person.showName;
    showNameA();    //输出  XL
    //这里将person.showName方法赋给showNameA变量，此时showNameA变量相当于window对象的一个属性，因此showNameA()执行的时候相当于window.showNameA(),即window对象调用showNameA这个方法，所以this关键字指向window
```

#### 48.  异步加载脚本script

1.<script type="text/javascript" defer src="example.js"></script>

2.

```html
<script async scr="example1.js"></script> 
<script async scr="example2.js"></script>
// 这里不能保证按照出现顺序执行，example1和2之间没有依赖 
// 它是h5新增的
```

3.放在body最后面

4.ES6里面有一个 type='module'属性都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的defer属性 。如下：

 <script type="module" src="XXX.js"></script>
//Vite也是这样实现的

5.监听浏览器的load事件，当load事件结束再创建并编辑script标签

#### 49.如何理解diff算法 key

在标准虚拟dom当中，虚拟dom是一个数组对象，它会进行缓存不执行渲染。

再每次执行渲染的时候，会克隆一个对象，它才是真正执行渲染的数据。

当页面发生变化的时候，需要更新虚拟dom，那么这个时候需要找到虚拟dom数据对象。

当标准虚拟dom和clone虚拟dom对比的时候，如果没有key，就需要每一个对象以及里面的每一个属性一个个查找就什么不同，如果绑定了key就可以只对比key里面的三个属性。



key一定要唯一，最好不要使用下标，因为删除了一个dom，下标就会发生改变



z中电



#### 50. 敏捷开发和瀑布开发（Agile Model）瀑布开发（Waterfall Model）

瀑布式开发的基本流程是 **需求** **→** **设计** **→** **开发** **→** **测试** ， 是一个更倾向于严格控制的管理模式 。

**核心是快速迭代，拥抱变化。**

因为最终目标是让客户满意，所以能够主动接受需求变更，这就使设计出来的软件有灵活性，可扩展性。

#### 51 内存泄漏 

内存泄漏指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

由于疏忽或者错误造成程序未能释放已经不再使用的内存

JS闭包也会内存泄漏，尽量减少使用

#### 52. RESTful 

REST（Representational State Transfer）

#### 53.浏览器缓存http

![image-20220331120547903](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331120547903.png)

当网页需要资源的时候，首先需要访问外部缓存（浏览器缓存），如果没有在再请求服务器端，服务器端相应，浏览器进行缓存

内容缓存策略都是在http标头中的 

每当接收到http请求的时候，服务器都会在相应报文中设置一段标头。报文中会包含很多标头。其中几个是新鲜度相关的。

expires 1.1之前就存在 不可以超过一年 RFC 2822

pragma  1.1之前就存在  no-cache 用来防止缓存的 设置了就不会有缓存

**cache-control** 

   private  只能在浏览器中缓存

   public  表示内容可以在任何位置缓存 包括代理服务器

   no-store  内容不可以被任何人缓存

   no-cache 内容可以进行缓存 但是客户端每次都要请求服务器进行内容校验

   max-age 内容的过期时间 单位是s

   s-max-age  共享缓存的过期时间 如果和max-age同时存在，浏览器会使用max-age，代理会用s-max-age

   must-revalidate 设置之后 超过max-age的内容必须请求服务器

   proxy-revalidate  跟上面基本相同 不过是应用于代理服务器的

校验值相关的

Etag Entity Tag 资源的唯一标识符  当一个资源的新鲜度过期后，再次请求服务器会附带if not match这个标头 👇它的值就是上一次请求返回的标头的ETag，服务器接收到最新的请求后会使用最新的内容和if not match的值进行对比。如果不相同，返回新的Etag和新的资源，如果相同直接返回304。

ETag也分为强和弱 强：表示两次内容完全相同

​                                  弱：有个w/前缀：标识两次内容虽然不完全相同，但是可以认为是相同的

if-none-match 

last-modify  标识最后一次修改内容的日期和时间

if-modified-since

![image-20220331131147086](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331131147086.png)

![image-20220331131302058](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331131302058.png)

#### 54.cookie怎么发在请求头里面

#### 55. clientX和offsetX

![image-20220331130152511](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331130152511.png)

#### 56、同源策略与跨域解决

同源策略：浏览器的一个安全功能，主要是协议+域名+端口三者不相同的情况下，不能读写对方的资源。

解决思路：

1. 不使用Ajax技术（XMLHttpRequest）请求

2. 授权跨域资源共享CORS Cross Origin resource  设置请求头允许跨域

   ![image-20220331210611998](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331210611998.png)

3. 使用代理服务器 
     正向代理：数据服务器不知道哪个客户端在请求，值能知道代理服务器在请求
     反向代理：客户端不知道是哪一个数据服务器在给你返数据

4. JSONP技术（只能用于GET请求）利用HTML <script>标签天生可以跨域这一个特点。

#### 57.js是单线程的  那么如何实现多线程请求

js为我们提供了一个Worker的类。

var worker = new Worker(js文件路径) 

// 主线程通过worker.onmessage监听函数

worker.onmessage = function (e){

   console.log("Received message" = e.data)


}

#### 58.手动实现trim

  用正则表达式的replace  

```js
str.replace(/(^\s*)|(\s*$)/g,"");
```

#### 59.promise问题

Promise.all在一个失败之后就不会继续执行了，那么这个时候我们要用到Promise.allSettled()

```js
Promise.allSettled([
    Promise.reject(),
    Promise.resolve(),
    Promise.resolve()
]).then(d=>{
 RenderContent(
  d.filter(data=>{
  return data.status !== 'rejected'
})
)
})
```

#### 60. 伪元素和伪类的区别

| 属性         | 描述                             |
| ------------ | -------------------------------- |
| :active      | 向被激活的元素添加样式           |
| :focus       | 向焦点的元素添加样式             |
| :link        | 向未被访问的链接添加样式         |
| :visited     | 向已经被访问的链接添加样式       |
| :first-child | 想元素的第一个子元素添加样式     |
| :lang        | 向带有指定lang属性的元素添加样式 |

| 属性          | 描述                           |
| ------------- | ------------------------------ |
| :first-letter | 向文本的第一个字母添加特殊样式 |
| :first-line   | 想文本的首行添加特殊样式       |
| :before       | 在元素之前添加内容             |
| :after        | 在元素之后添加内容             |



#####  概念上：伪类是一种临时状态，只有状态被触发的时候才会生效  ：hover

#####  伪元素是一个家的元素，是一个虚拟的dom节点

##### 写法上：伪类使用单冒号。 伪元素使用双冒号。

##### 单冒号和双冒号的after都是伪元素，只是版本不同写法不同

注意伪元素对单标签无效



#### 61.函数组件与类组件的区别

| 区别     | 类组件                                                       | 函数组件                                                     |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 编写形式 | 在render(){  return( jsx)}中返回jsx对象                      | 直接return( jsx) jsx对象                                     |
| 状态管理 | state() setState                                             | hook出来之前，函数组件是无状态的，不能保存组件的状态 cosnt [count, setCount] = useState() |
| 生命周期 | 存在生命周期                                                 | 不存在生命周期 但是可以useEffect代替                         |
| 获取值   | this.props  <br />所以this有很多会很麻烦<br />如果父组件修改了传下来的值，this会改变，那么this.props里面的东西也会改变 | function(props) 或者解构获取<br />而且在解构取值的时候，如果父组件里面改变了这个值，函数组件不会受影响 |

![image-20220331223917635](C:\Users\蒋海\AppData\Roaming\Typora\typora-user-images\image-20220331223917635.png)

#### 62. require和import的区别

|          | require                                                      | import                               |
| -------- | ------------------------------------------------------------ | ------------------------------------ |
| 遵循规范 | AMD规范引入方式                                              | 是ES6的语法标准，如果要兼容需要转ES5 |
| 调用事件 | 运行时调用，require理论上可以运用在代码的任何地方            | 编译的时候调用，必须放在文件的开头   |
| 本质     | require是赋值过程，结果就是Obj, num, str , function 再把每个结果赋值给一个变量 | import是解构过程                     |

#### 63.React防重渲染

在React中state props发生改变的时候组件会重新渲染。

　没有导致state的值发生变化的this.setState(）是否会导致重渲染   --- 会 

 shouldComponentUpdate，是重渲染时render()函数调用前被调用的函数

```
  shouldComponentUpdate(newProps,newState){
      if(nextState.Number === this.state.Number){
        return false
      }
  }
```

React.Memo()它和PureComponent相似 可以阻止子组件跟着render

#### 64.js 转换

64.1Number.parseInt(string, radix)

Number.parseInt('010',8)//8
Number.parseInt('20',2)//NaN

64.2Number.toString(radix)

(10).toString(2)//"1010"转2进制
(10).toString(16)//"a" 转16进制
(1000).toString(36)//"rs" 转36进制

64.3在计算的时候会隐式转化为10进制

var a = 0xa;//0x表示十六进制，但是js会强制转换为十进制来运算,0xa == 10
var b = 010;//0开头表示八进制，同样强制转换为十进制来运算 010 = 8
a*b //= 80

#### 65.事件流机制

1.IE最早提出的冒泡，网景最早提出了捕获。

2.现代的浏览器都支持事件流，它分为三个阶段： 事件捕获、到达目的、事件冒泡

#### 66.React.Momo() 

React [v16.6.0](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fblob%2Fmaster%2FCHANGELOG.md%231660-october-23-2018)出了一些新的**包装函数**(*wrapped functions*)，一种用于函数组件PureComponent / shouldComponentUpdate形式的React.memo()

#### 67.如何计算一个字体的宽度

**给String.prototype原型上写一个方法 pxWidth = function(font){**

// 接收形参font  

赋值一个canvas

   var canvas = String.prototype.pxWidth.canvas || (String.prototype.pxWidth.canvas = document.createElement("canvas")),

 然后var context = canvas.getContext('2d') // 用2d画布的getContext获取到内容

 font && (context.font = font)
 var metrics = context.measureText(this)



 return metrics.width

}



**然后用标题的.innerText去计算**

#### 66. 如何获取用户是PC还是手机

使用window上面navigator的userAgent属性 然后在全部大写toLocaleUpperCase()

```js
let userAgent = navigator.userAgent.toLocaleUpperCase()
isIphone = userAgent.indexOf('IPHONE') > -1

isAndroid = userAgent.indexOf('ANDROID') > -1

link = document.createElement('link')

link.setAttribute('rel', 'stylesheet')

if(isIphone || isAndroid){
   link.setAttribute('href', './test01.css')
}
document.head.appendChild(link)
```

#### 67.柯里化

#### 68.输入一串电话号码，每一秒输出一个数字

```js
let num = 17271925124
let arr = num.toString().split('')
arr.forEach((it, idx)=>{
    (function (it, i) { 
 		setTimeout(function() { 
             console.log(it)
 		}, 1000 * (i+1)); 
 	})(it, idx); 
})
// es5实现方法
```

```js
//es6实现方法
const tasks = [];
const output = (i) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(new Date, i);
    resolve();
  }, 1000 * i);
});

for (var i = 0; i < 5; i++) {
  tasks.push(output(i));
}
//最后的i的值是在异步全部完成之后
Promise.all(tasks).then(() => {
  setTimeout(() => {
    console.log(new Date, i);
  }, 1000);
});

```

#### 69.React中的防重渲染

- 使用`PureComponent`或`React.memo`构建组件
- 使用`shouldComponentUpdate`生命周期钩子
- 渲染列表时使用`key`
- 使用`useCallback`和`useMemo`缓存函数和变量

#### 70.数组去重 arr = [{id:1},{id:2},{id:2}]

```js
var arr = [{id:1},{id:2},{id:2}]
var newArr = []
for(var i =0; i<arr.length; i++){
    for(var j = i+1;j<arr.length;j++){
        if(arr[i].id !== arr[j].id){
        newArr.push(arr[j])
            j--
    }
}
}
console.log(newArr);
```

#### 71.eventLoop

#### 72.getter setter方法调用

#### 73.sass和less的区别

#### 74.nvm nodejs npm npx的区别

**nodejs**：把js语言从浏览器中解放出来，可以在任何在装有node环境中运行，这也就是js可以开发web服务端的基础

**nvm**：node version management  node版本管理工具。近几年大前端的发展，需要不同的node版本运行。
怎么管？把不同的node版本安装到本地，根据项目中需要不同的版本切换

**npm**：node package management js中第三方插件管理。把别人的js文件下载到本地使用运行。

**npx**：是npm5.6之后自带的。跟npm差不多都是安装依赖。npm是为了项目开发，npx是为了不侵入源代码的情况下，直接调用node_modules里面的命令行工具 ；起项目npx hexo s(先在node里面去找有没有hexo s，如果没有则去社区直接下载，运行，运行完成之后自动删除，不影响本地)

./node_modules/.bin/hexo s

<u>npx npkill可以删除依赖</u>
**pnpm**：

#### 

yarn和npm是竞品关系，yarn安装的时候是多线程，所以安装更快（facebook出品）

deno是nodejs开发者自己开发的竞品。解决了安全缺陷。现在还在内测当中

#### 75.<%=%>

这是客户端代码与服务器代码混合使用。
<%= %>中，在<% %> 之间的是服务器端代码，外面的是客户端代码。
若前面有个=，则是直接引用服务器代码中的值。
如：
<%string a = "a string";%>
那么下面这样引用 
<input type="text" value="<%=a %>" />
在客户端就能看到 
<input type="text" value="a string" /> 

#### 76.fiber防重 见63 69

#### 77.visibility和display:none的区别

visibility: hidden相当于display:none，能把元素隐藏起来，但两者的区别在于：

①　display:none 元素不再占用空间。

②　visibility: hidden使元素在网页上不可见，但仍占用空间。



然而，visibility 还可能取值为collapse 。当设置元素 visibility: collapse后，一般的元素的表现与visibility: hidden一样，也即其会占用空间。但如果该元素是与table相关的元素，例如table row、table column、table column group、table column group等，其表现却跟display: none一样，也即其占用的空间会释放。

#### 78. v-if 和v-for



