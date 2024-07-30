import React from 'react'
import './SideBar.css'
import { sideBarData } from './sideBarData'
import { sideBarPrice } from './sideBarData'
import { sideBarColor } from './sideBarData'

export default function SideBar() {

  return (
    <div className='sidebar-container'>

      <div className='sidebar-radio-options radio-categories'>
        <h2>Category</h2>
        {sideBarData.map((item) => (
          <div className='radio-category'>
            <input type="radio" name='category' />
            <label htmlFor="category">{item.name}</label>
          </div>
        ))}
      </div>

      <div className="sidebar-radio-options radio-prices">
        <h2>Price</h2>
        {sideBarPrice.map((item) => (
          <div className='radio-price'>
            <input type="radio" name='price' />
            <label htmlFor="price">{item.name}</label>
          </div>
        ))}
      </div>

      <div className="sidebar-radio-options radio-colors">
        <h2>Color</h2>
        {sideBarColor.map((item) => (
          <div className='radio-color'>
            <input type="radio" name='color' />
            <label htmlFor="color">{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
