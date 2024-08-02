import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IoSearchOutline as SearchIcon } from "react-icons/io5";
import { CiHeart as HeartIcon } from "react-icons/ci";
import { CiShoppingCart as ShoppingCartIcon } from "react-icons/ci";
import { CiUser as UserIcon } from "react-icons/ci";

export default function Navbar({ value, setValue }) {

  return (
    <nav className='navbar wide-wrap'>
      <form className='navbar-search-form' action="">
        <SearchIcon className='navbar-icon' />

        <input className='navbar-input'
            type="text"
            placeholder='find some shoes...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
             />
        <span onClick={() => setValue("")}>X</span>
      </form>


      <div className="navbar-controls">
        <HeartIcon className='navbar-controls-icons navbar-heart-icon' />
        <Link to={"/cart"}>
          <ShoppingCartIcon className='navbar-controls-icons navbar-shopping-cart-icon' />
        </Link>

        <UserIcon className='navbar-controls-icons navbar-user-icon' />
      </div>
    </nav>
  )
}
