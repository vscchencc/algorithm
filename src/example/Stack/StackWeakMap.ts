/*
 * @Description: Stack weakMap
 * @Author: chencc
 * @Date: 2021-08-10 08:46:29
 * @LastEditors: chencc
 * @LastEditTime: 2021-08-10 08:49:25
 */

/**
 * push() 添加元素到栈顶
 * pop() 移除栈顶元素，同时返回被移除的元素
 * peek() 返回栈顶元素，不对栈做任何修改
 * isEmpty() 判断栈内是否还有元素
 * clear() 移除栈内所有元素
 * size() 返回栈内元素个数
 */
const items = new WeakMap()

class StaclWeakMap<T> {
  constructor () {
    items.set(this, [])
  }

  push (elemenet: T) {
    const s = items.get(this)
    s.push(elemenet)
  }

  pop () {
    const s = items.get(this)
    const r = s.pop()

    return r
  }
}
