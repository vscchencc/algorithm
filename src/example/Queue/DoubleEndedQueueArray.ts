/*
 * @Description: 
 * @Author: chencc
 * @Date: 2021-08-11 22:30:19
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-11 22:46:38
 */
// 双端队列是一种允许我们同时在前端和后端添加和删除数据的队列

/**
 * addFront(element) 向双端队列前端添加新的项
 * addBack(element) 向双端队列后端添加新的项
 * removeFront() 从双端队列前端移除第一个元素
 * removeBack() 从双端队列后端移除第一个元素
 * peekFront() 返回双端队列中前端第一个元素，队列不做任何变动
 * peekBack() 返回双端队列中后端第一个元素，队列不做任何变动
 * isEmpty() 判断双端队列是否为空
 * size() 返回双端队列长度
 * toString()
 */

class DequeueArray<T> {
  private items: Array<T>

  constructor () {
    this.items = []
  }

  addFront (element:T) {
    this.items.unshift(element)
  }

  addBack (element: T) {
    this.items.push(element)
  }

  removeFront () {
    if (this.isEmpty()) {
      return undefined
    } 

    return this.items.pop()
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items.shift()
  }

  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[0]
  }

  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    
    return this.items[this.size() - 1]
  }

  size () {
    return this.items.length
  }

  isEmpty () {
    return this.items.length === 0
  }

}