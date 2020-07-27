import request from './core/request'

class Person {
    sayName () {
        return '张三'
    }
}

let person = new Person()
console.log(person.sayName(),request)