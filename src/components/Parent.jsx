import React, { useState } from "react";
import Child from './Child'

export default function Parent() {
  const [parentCount, setParentCount] = useState(0);

  const getChildCount = (val)=>{
    setParentCount(val)
  }

  return (
    <div>
      <h1>我是父组件</h1>
      <p>子组件传过来的数字:{parentCount}</p>
      <Child getCount={getChildCount} />
    </div>
  );
}
