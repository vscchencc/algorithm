/*
 * @Description: stack array
 * @Author: chencc
 * @Date: 2021-08-09 22:57:19
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 08:21:16
 */

// Stack(栈) 是一种遵循后进先出(LIFO)原则的有序集合
// 新添加或待删除的元素都保存在栈的同一端，称为栈顶，另一端为栈底

/**
 * push() 添加元素到栈顶
 * pop() 移除栈顶元素，同时返回被移除的元素
 * peek() 返回栈顶元素，不对栈做任何修改
 * isEmpty() 判断栈内是否还有元素
 * clear() 移除栈内所有元素
 * size() 返回栈内元素个数
 */
class StackArray<T> {
  private items: Array<T>

  constructor() {
    this.items = []
  }

  push(element: T) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  clear () {
    this.items = []
  }

  toString () {
    return this.items.toString()
  }
}

export {
  StackArray
}