import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['여성', 'Divied', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성']
  return (
    <div>
      <div className="ch_inner in03">
        <div className="login_button">
            <p className="log fs_18 fw_sb">LOGIN</p>
            <FontAwesomeIcon icon={faUser} className="user"/>
         </div>
         <div className="nav_section">
            <figure className="hnm_img"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="" /></figure>
         </div>
         <div className="menu_area">
            <ul className="menu_list">
                {menuList.map((menu) =>(<li>{menu}</li>))}
            </ul>
            <div className="search_area">
                <FontAwesomeIcon icon={faSearch} className="search_img"/>
                <input type="text" placeholder="검색해보세요!" />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Navbar
