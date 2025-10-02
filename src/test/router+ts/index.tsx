import React from 'react'

export default function Demo() {
    let name: string = "demo"
    let name2 : String = "demo2"
    console.log(typeof name, typeof name2);
    console.log(name.substring(1));
    
    

  return (
    <div>demo</div>
  )
}

class Person {
    public name : String
    //当前类及其子类可以访问 后端同一文件夹可以访问
    protected id : Number = 123
    private age : Number
    constructor(name : String, age : Number) {
        this.name = name
        this.age = age
    }
    
}
