一、es6有哪些新特性?

答:Let和const关键字
变量的解构赋值
字符串，数值的扩展
数组，对象的扩展
函数的扩展
for...of

二、清除浮动的几种方法? (至少写 3种)

答:1.给父级也加浮动
2.给父级加display:inline-block
3.在浮动元素下加div 

三、CSS3有哪些新特性? (至少写出 3种)

答:css弹性盒子模型,
CSS3的选择器
阴影

四、vue-router 有哪几种导航钩子?

答:全局导航钩子,
单独路由独享钩子
组件内的钩子

五、Javascript 字符串操作函数有哪些?(至少写出3种)

答:String(字符串转换)
split(字符串分割)
indexOf(查找字符串)
lastIndexOf(查找字符串从末尾开始)
concat(字符串连接)
slice,substring,substr(字符串切割)
toLowerCase(大写)
toUpperCase(小写)

六、什么是跨域，如何实现跨域访问? (至少写出3种)

答:在浏览器同源策略限制下，向不同源（不同协议、不同域名或者不同端口）发送XHR请求，浏览器认为该请求不受信任，禁止请求，具体表现为请求后不正常响应
实现跨域:script标签跨域,JSONP跨域,通过代理路径

七、请简述Vue的双向数据绑定原理是什么?

答:我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textare等）添加了change(input)事件，来动态修改model和 view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

八、闭包的3个特性?

答: 1.局部变量：在函数中定义有共享意义的局部变量（定义成全局变量会造成全局污染)；
2.内嵌函数：在函数中申明有内嵌函数，内嵌函数对函数中的局部变量进行访问；
3.外部使用：函数向外返回此内嵌函数，外部可通过此内嵌函数持有并访问申明在函数中的局部变量，而此变量在外部是通过其他路径无法访问的；

九、var numbers=[1,2,3,4];将numbers转换成"-"连接起来的字符串

答:var numbers=[1,2,3,4];
alert(a.join('-'));

十、请详细说你对vue生命周期的理解

答:创建前/后： 在beforeCreated阶段，vue实例的挂载元素$el和**数据对象**data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。
载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。
更新前/后：当data变化时，会触发beforeUpdate和updated方法。
销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

十一、请说下vue组件间的传值?

答:父组件：<model :msg ="msg"></model>

子组件：props: ['msg']

然后子组件就可以使用msg这个值了。

$parent：

子组件修改父组件数据，这要在props的基础上才能使用，子组件修改父组件直接赋值会报错，使用this.$parent.msg = ‘修改父组件’;子组件就可以修改父组件的数据。

$emit：

也是很常见的放，子组件通过方法传递参数给父组件。

父组件：

<model @btn="btn"></model>

btn(val){
console.log(val);
}

子组件：this.$emit(‘btn’, ‘我是传递给父组件方法的参数’);

ref：

父组件：<model ref="headcar"></model>

父组件调用：this.$refs.headcar

父组件通过$refs调用子组件的方法和属性。

.sync修饰符：

父组件：

<model :msg.sync="msg"></model>
<p>{{msg}}</p>

子组件：

<input type="text" v-model="index">

watch:{
index(val){
this.$emit('update:msg', val)
}
},

十二、浏览器本地存储有哪几种,区别是什么?

答:cookie

cookie会随着每次HTTP请求头信息一起发送，无形中增加了网络流量，另外，cookie能存储的数据容量有限，根据浏览器类型不同而不同，IE6大约只能存储2K。

Flash ShareObject

这种方式能能解决上面提到的cookie存储的两个弊端，而且能够跨浏览器，应该说是目前最好的本地存储方案。不过，需要在页面中插入一个Flash，当浏览器没有安装Flash控件时就不能用了。所幸的是，没有安装Flash的用户极少。

缺点：需要安装Flash插件。

Google Gear

Google开发出的一种本地存储技术。

缺点：需要安装Gear组件。

userData

IE浏览器可以使用userData来存储数据，容量可达到640K，这种方案是很可靠的，不需要安装额外的插件。缺点：它仅在IE下有效。

sessionStorage

使用于Firefox2+的火狐浏览器，用这种方式存储的数据仅窗口级别有效，同一个窗口（或者Tab）页面刷新或者跳转，都能获取到本地存储的数据，当新开窗口或者页面时，原来的数据就失效了。

缺点：IE不支持、不能实现数据的持久保存。