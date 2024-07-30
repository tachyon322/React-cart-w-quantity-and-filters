import React from 'react'
import './Navbar.css'
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { CiHeart as HeartIcon } from "react-icons/ci";
import { CiShoppingCart as ShoppingCartIcon } from "react-icons/ci";
import { CiUser as UserIcon } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className='navbar wide-wrap'>
      <form className='navbar-search-form' action="">
        <SearchIcon className='navbar-icon' />

        <input className='navbar-input'
            type="text"
            placeholder='find some shoes...' />
      </form>


      <div className="navbar-controls">
        <HeartIcon className='navbar-controls-icons navbar-heart-icon' />
        <ShoppingCartIcon className='navbar-controls-icons navbar-shopping-cart-icon' />
        <UserIcon className='navbar-controls-icons navbar-user-icon' />
      </div>
    </nav>
  )
}
