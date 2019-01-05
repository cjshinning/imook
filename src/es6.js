// 1.变量扩展：块级作用域
// {
//     let name = 'imooc'
// }

// console.log(name)

// const name = 'imooc'
// name = 'Jenny'
// console.log(name)

// 2.字符串扩展：模板字符串
// let name = 'hello'
// let course = 'imooc'
// console.log('Hello ' + name + ', course is ' + course)
// console.log(`Hello ${name}, course is ${course}`)

// console.log(`

//         sdhahahh

// `)

// 3.函数扩展：箭头函数 + 参数默认值 + 函数展开符
// function hello(name){
//     console.log(`hello ${name}`)
// }
// const hello1 = name => {
//     console.log(`hello ${name}`)
// }
// hello('imooc')
// hello1('imooc')

// setTimeout(()=>{
//     console.log('xxx')
// },1000)

// const double = x => x*2
// console.log(double(10))

// const hello = (name='imooc') => {
//     console.log(`hello ${name}`)
// }

// hello()
// hello('Jenny')

// function hello(name1, name2){
//     console.log(name1, name2)
// }
// var arr = ['imooc','Jenny111']
// hello.apply(null,arr)
// hello(...arr)

// 4.函数扩展
// const obj = {name: 'imooc', course: 'React开发app'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const name = 'imooc'
// const obj = {
//     name,
//     [name]: 'hello ',
//     hello: function(){},
//     hello1(){}
// }
// obj[name] = 'hello imooc'
// console.log(obj)

// const obj = {name: 'imooc', course: 'React开发app'}
// const obj2 = {type: 'IT', name: 'Jenny'}
// console.log({...obj,...obj2,date: 2019})

// 解构赋值
// const arr = ['hello', 'imooc']

// let arg1 = arr[0]
// let arg2 = arr[1]

// let [arg1,arg2] = arr
// console.log(arg1, '|', arg2)

// const obj = {name: 'imooc', course: 'React'}
// const {name, course} = obj
// console.log(name,'|',course)

// 5.类的扩展
// class MyApp{
//     constructor(){
//         this.name = 'imooc'
//     }
//     sayHello(){
//         console.log(`hello ${this.name}`)
//     }
// }
// const app = new MyApp()
// app.sayHello()

// 6.模块化
// import {name, sayHello} from './module1'
// console.log(name)
// sayHello()

// import test from './module1'
// test()

import * as mod1 from './module1'
console.log(mod1)