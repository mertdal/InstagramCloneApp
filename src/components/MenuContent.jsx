import React from 'react'
import pp from "../images/pp.jpg"
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Badge } from 'reactstrap';
import { CiHeart } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
function MenuContent() {
  return (
    <div className='menu-content'>
        <div className="flex-row menu-content-child">
        <MdHomeFilled className='icons'/>
        <h1 className='menu-font' style={{fontWeight:"bolder"}}>Ana Sayfa</h1>
        </div>
        <div className="flex-row menu-content-child">
        <IoIosSearch className='icons'/>
        <h1 className='menu-font'>Ara</h1>
        </div>
        <div className="flex-row menu-content-child">
        <FaRegCompass className='icons' style={{fontSize:"24px",marginLeft:"3px"}}/>
        <h1 className='menu-font' style={{marginLeft:"15px"}}>Keşfet</h1>
        </div>
        <div className="flex-row menu-content-child">
        <BiMoviePlay className='icons' style={{fontSize:"26px",marginLeft:"3px"}}/>
        <h1 className='menu-font' style={{marginLeft:"14px"}}>Reels</h1>
        </div>
        <div className="flex-row menu-content-child">
        <BiMessageRoundedDetail  className='icons' style={{fontSize:"26px",marginLeft:"3px"}}/>
        <h1 className='menu-font' style={{marginLeft:"13px",marginBottom:"10px"}}>Mesajlar</h1>
        <Badge pill color='danger' className='badgecontrol' style={{marginLeft:"8px",marginTop:"4px",borderRadius:"50%"}}>2</Badge>
        </div>
        <div className="flex-row menu-content-child">
        <CiHeart className='icons' style={{marginLeft:"1px"}}/>
        <h1 className='menu-font' style={{marginLeft:"12px"}}>Bildirimler</h1>
        <Badge pill color='danger' className='badgecontrollikes' style={{borderRadius:"50%",marginLeft:"6px"}}>2</Badge>
        </div>
        <div className="flex-row menu-content-child" >
        <CiSquarePlus className='icons'/>
        <h1 className='menu-font' style={{marginLeft:"12px"}}>Oluştur</h1>
        </div>
        <div className="flex-row menu-content-child" >
        <img src={pp} alt="" style={{borderRadius:"50%",width:"23px",marginLeft:"4px"}}/>
        <h1 className='menu-font' style={{marginLeft:"16px"}}>Profil</h1>
        </div>
        <div className='more flex-row menu-content-child'>
            <CgDetailsMore className='icons'/>
            <h1 className='menu-font'>Daha fazla</h1>
        </div>
    </div>
  )
}

export default MenuContent