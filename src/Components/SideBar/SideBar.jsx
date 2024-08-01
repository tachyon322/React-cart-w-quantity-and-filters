import React from 'react'
import { useState } from 'react';
import './SideBar.css'
import { sideBarType, sideBarPrice, sideBarColor } from './sideBarData'

export default function SideBar({ setSelectedType, setSelectedPriceFrom, setSelectedPriceTo, setSelectedColor }) {

  function priceHandle(from, to) {
    setSelectedPriceFrom(from);
    setSelectedPriceTo(to);
  }

  function resetFilters() {
    setSelectedType("");
    setSelectedPriceFrom(0);
    setSelectedPriceTo(1000);
    setSelectedColor("");
    window.location.reload();
  }

  return (
    <div className='sidebar-container'>

      <div className='sidebar-radio-options radio-categories'>
        <h2>Category</h2>
        {sideBarType.map((item) => (
          <div className='radio-category'>
            <input type="radio" name='category' defaultChecked={item.id === 1}
              onChange={() => setSelectedType(item.devName)}/>
            <label htmlFor="category">{item.name}</label>
          </div>
        ))}
      </div>

      <div className="sidebar-radio-options radio-prices">
        <h2>Price</h2>
        {sideBarPrice.map((item) => (
          <div className='radio-price'>
            <input type="radio" name='price' defaultChecked={item.id === 1}
              onChange={() => priceHandle(item.priceFrom, item.priceTo)}/>
            <label htmlFor="price">{item.name}</label>
          </div>
        ))}
      </div>

      <div className="sidebar-radio-options radio-colors">
        <h2>Color</h2>
        {sideBarColor.map((item) => (
          <div className='radio-color'>
            <input type="radio" name='color' defaultChecked={item.id === 1}
              onChange={() => setSelectedColor(item.devName)}/>
            <label htmlFor="color">{item.name}</label>
          </div>
        ))}
      </div>
      <button className='sidebar-button-reset' onClick={resetFilters}>Reset</button>
    </div>
  )
}
