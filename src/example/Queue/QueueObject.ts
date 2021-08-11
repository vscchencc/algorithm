/*
 * @Description: Object Queue
 * @Author: chencc
 * @Date: 2021-08-10 22:45:35
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 23:22:58
 */

// queue 遵循先进先出(FIFO)的原则的一组有序的项
// 队列在尾部添加元素，并在顶部移除元素
// 最新添加的元素必须在队尾

/**
 * enqueue(element) 向队列尾部添加新的项
 * dequeue() 移除队列第一项
 * peek() 返回队列中第一个元素，队列不做任何变动
 * isEmpty() 判断队列是否为空
 * size() 返回队列长度
 * toString()
 */
class QueueObject<T> {
  private count: number
  private lowestCount: number
  private items: { [key: number]: T }

  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(element: T) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    // 这里 lowestCount 是最为队列 key 中最小的
    // 因为 count 是递增的，而每次移除后，队列头部的 key 从 0,1,2,3,4 增长
    // 所以每次移除后 lowestCount 需要自增一个
    this.lowestCount++

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.lowestCount]
  }

  size() {
    return this.count - this.lowestCount
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}

export {
  QueueObject
}