// 'use client' ==> full js client component
// import {age, name} from './data.js';  import other js

export default function Cart() {
   
   let cartItemName = ['item1','item2', 'item3']
   let cartItemPrice = ['$1','$2','$3']
   let cartItemCount = [1,1,1]
   let count = cartItemCount.length
   
   return (
      <div>
         <h4 className="title">Cart</h4>
         <CartItem itemName={cartItemName[0]} itemPrice={cartItemPrice[0]} itemCount = {cartItemCount[0]}/>
         <CartItem itemName={cartItemName[1]} itemPrice={cartItemPrice[1]} itemCount={cartItemCount[1]} />
         <CartItem itemName={cartItemName[2]} itemPrice={cartItemPrice[2]} itemCount={cartItemCount[0]} />
         <Banner bannerName = {'bannerName'}/>
      </div>
   )
}

function Banner(props) {
   return (
      <h5>{props.bannerName}</h5>
   )
   
}

//server Component
function CartItem(props) {
   return (
      <div className='cart-item'>
         <p>{props.itemName}</p>
         <p>{props.itemPrice}</p>
         <p>{props.itemCount}</p>
      </div>
   )
}