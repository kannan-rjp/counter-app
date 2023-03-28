import React from 'react'

export default function ListNumbers({numArr,title}) {
  return (
    <>
      <h3>{title}</h3>
      <ul>{numArr.filter((val)=>val!==0).map((val,key)=>(<li key={key}>{val}</li>))}</ul>
    </>
  )
}
