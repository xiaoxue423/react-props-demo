import React, { useState } from 'react'

export default function Child(props) {
  const {getCount} = props
  const [count,setCount] = useState(0)

  function add(number){
    setCount(number)
    getCount(number)
  }

  return (
    <div>
      <h1>我是子组件</h1>
      <p>数字：{count}</p>
      <button onClick={()=>add(count+1)}>+1</button>
      </div>
  )
}
