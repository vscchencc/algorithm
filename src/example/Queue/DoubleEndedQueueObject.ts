/*
 * @Description: double-ended-queue
 * @Author: chencc
 * @Date: 2021-08-10 23:36:49
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-11 22:28:09
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

class DequeObject<T> {
  private count: number
  private lowestCount: number
  private items: { [key: number]: T }

  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  /**
   * addFront 有三种情况
   * 1、当整个双端队列是空的时候，就可以直接调用 addBack 方法，直接插入
   * 2、当双端队列前面有元素被移除过，既 lowestCount 不为 0 的时候，直接将 lowestCount -1,并将值放在这个键上即可
   * 3、当双端队列没有移除过元素，既 lowestCount 为 0，我们可以设置负数键值，需要改变 size 计算，
   * 也可以通过迭代整个队列往后移动一位，给第一个元素位置空出来
   * @param element 
   */
  addFront (element: T) {
    // 情形1 双端队列中无数据
    if (this.isEmpty()) {
      this.addBack(element)
    }
    // 情形2 双端队列首个元素非从0开始，即被移除过元素
    else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    }
    // 情形3 双端队列要从 0 插入一个元素到最前面
    else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }

      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  removeFornt () {
    if(this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++

    return result
  }

  addBack (element: T) {
    this.items[this.count] = element
    this.count++
  }

  removeBack () {
    if(this.isEmpty()) {
      return undefined
    }

    const result = this.items[this.count]
    delete this.items[this.count]
    this.count--
    
    return result
  }

  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.lowestCount]
  }

  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count]
  }

  size () {
    return this.count - this.lowestCount
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  toString () {
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
  DequeObject
}