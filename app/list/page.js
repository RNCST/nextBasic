// /list page 
//import Image from 'next/image'
//import itemIamge1 from "@/public/image1.png"
'use client'

import { useState } from 'react'

export default function List() {
   let items = [
      'arrItem1 $1',
      'arrItem2 $2',
      'arrItem3 $3'
   ]
   let [itemCountList, CountHandleList] = useState([0, 0, 0])
   return (
      <div>
         <h4 className="title">listPage</h4>

         <span>{itemCountList[0]}</span>
         <button onClick={() => {
            let beforeItemCountList = [...itemCountList] //js arr 는 =로 변수에 새로 담아도 reference data type 이기에 arr의 값을 변수에 담는것이 아닌 arr변수위 메모리 위치를 담게되어 [...arr] spread operator를 써야함.
            beforeItemCountList[0]++
            CountHandleList(beforeItemCountList) // copyState == originState 인경우 동작x
         }}>+</button>
         {
            items.map((a, i) => {
               return (
                  <div className='item' key={i}>
                     {/* <Image src={itemIamge1} className='food-img'></Image> */}
                     <img src={`/item${i + 1}.png`} className='food-img'></img>
                     <h4>{i + 1}. {a}</h4>
                     <span>{itemCountList[i]} </span>
                     <button onClick={() => {
                        let copyItemCountList = [...itemCountList]
                        copyItemCountList[i]++
                        CountHandleList(copyItemCountList)
                     }}> + </button>
                     <button onClick={() => {
                        let copyItemCountList = [...itemCountList]
                        copyItemCountList[i]--
                        CountHandleList(copyItemCountList)
                     }}> - </button>
                  </div>
               )
            })
         }
      </div>
   )
}