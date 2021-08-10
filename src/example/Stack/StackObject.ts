/*
 * @Description: stack object
 * @Author: chencc
 * @Date: 2021-08-10 08:04:46
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 08:26:22
 */

/**
 * push() 添加元素到栈顶
 * pop() 移除栈顶元素，同时返回被移除的元素
 * peek() 返回栈顶元素，不对栈做任何修改
 * isEmpty() 判断栈内是否还有元素
 * clear() 移除栈内所有元素
 * size() 返回栈内元素个数
 */
class StackObject<T> {
  private count: number
  private items: { [key: number]: T }

  constructor() {
    this.count = 0
    this.items = {}
  }

  push (element: T) {
    this.items[this.count] = element
    this.count++
  }

  pop () {
    if (this.isEmpty()) {
      return undefined
    }

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]

    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1]
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.count === 0
  }

  clear () {
    this.count = 0
    this.items = {}

    // 遵循 LIFO 原则移除栈内数据
    // while(!this.isEmpty()) {
    //   this.pop()
    // }
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.items[0]}`

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}


export {
  StackObject
}