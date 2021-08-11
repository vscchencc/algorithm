/*
 * @Description: Array Queue
 * @Author: chencc
 * @Date: 2021-08-10 23:12:43
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 23:33:38
 */

/**
 * enqueue(element) 向队列尾部添加新的项
 * dequeue() 移除队列第一项
 * peek() 返回队列中第一个元素，队列不做任何变动
 * isEmpty() 判断队列是否为空
 * size() 返回队列长度
 * toString()
 */

class QueueArray<T> {
  private items: Array<T>

  constructor () {
    this.items = []
  }

  enqueue (element:T) {
    this.items.push(element)
  }
  
  dequeue () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items.splice(0 ,1)[0]
    return result
  }

  peek () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[0]
  }

  size () {
    return this.items.length
  }

  isEmpty () {
    return this.items.length <= 0
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.items.length; i++) {
      objString = `${objString}, ${this.items[i]}`
    }

    return objString
  }
}

export { 
  QueueArray
}