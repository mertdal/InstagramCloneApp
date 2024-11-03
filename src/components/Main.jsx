import React, { useState } from 'react';
import "../css/main.css";
import ciro from "../images/ciro.jpg";
import alperen from "../images/alpipp.jpg";
import "../App.css";
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { AiOutlineComment } from "react-icons/ai";
import { LuMousePointer2 } from "react-icons/lu";
import { IoSaveOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import alpi from "../images/alpi.mp4";

function Main() {
  const [isLikedCiro, setIsLikedCiro] = useState(false);
  const [isLikedAlperen, setIsLikedAlperen] = useState(false);
  const [commentCiro, setCommentCiro] = useState("");
  const [commentAlperen, setCommentAlperen] = useState("");
  const [visibleCommentCiro, setVisibleCommentCiro] = useState("");
  const [visibleCommentAlperen, setVisibleCommentAlperen] = useState("");
  const [commentCountCiro, setCommentCountCiro] = useState(22);
  const [commentCountAlperen, setCommentCountAlperen] = useState(241);

  const handleCiroDoubleClick = () => setIsLikedCiro(!isLikedCiro);
  const handleAlperenDoubleClick = () => setIsLikedAlperen(!isLikedAlperen);

  const handleCiroCommentKeyDown = (e) => {
    if (e.key === 'Enter' && commentCiro.trim()) {
      setVisibleCommentCiro(commentCiro);
      setCommentCountCiro(commentCountCiro + 1);
      setCommentCiro("");
    }
  };

  const handleAlperenCommentKeyDown = (e) => {
    if (e.key === 'Enter' && commentAlperen.trim()) {
      setVisibleCommentAlperen(commentAlperen);
      setCommentCountAlperen(commentCountAlperen + 1);
      setCommentAlperen("");
    }
  };

  return (
    <div>
      <div className="contents">
        <div className="flex-row">
          <img src={ciro} style={{ width: "30px", borderRadius: "50%", height: "30px" }} alt="" />
          <h6 style={{ marginLeft: "6px", marginTop: "5px", fontSize: "14px" }}>ciromertens</h6>
          <p style={{ marginLeft: "10px", marginTop: "10px", fontSize: "12px" }}>3g</p>
          <div style={{ marginLeft: "297px" }}>
            <BsThreeDots />
          </div>
        </div>

        <img src={ciro} alt="" style={{ marginTop: "6px" }} width={"450px"} onDoubleClick={handleCiroDoubleClick} />

        <div className="likeshare flex-row">
          {isLikedCiro ? <CiHeart fontSize={"32px"} style={{ marginRight: "10px" }} onClick={handleCiroDoubleClick} />
            : <IoIosHeart fontSize={"28px"} style={{ marginRight: "10px", color: "red" }} onClick={handleCiroDoubleClick} />}
          <AiOutlineComment fontSize={"28px"} style={{ marginRight: "10px" }} />
          <LuMousePointer2 fontSize={"28px"} style={{ marginRight: "10px" }} />
          <IoSaveOutline fontSize={"25px"} style={{ marginLeft: "307px", marginBottom: "6px" }} />
        </div>

        <h6 style={{ fontSize: "14px", marginTop: "8px" }}>{isLikedCiro ? "5.300" : "5.301"} beğenme</h6>

        <div className='flex-row comment'>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>ciromertens</p>
          <p style={{ fontSize: "14px", marginLeft: "15px" }}>Bugün vesikalık çektirdimmm :)</p>
        </div>

        <p style={{ fontSize: "14px", height: "6px" ,paddingBottom:"18px"}}>{commentCountCiro } yorumun tümünü gör</p>

        {visibleCommentCiro && (
          <div className='flex-row comment'>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>mertensssz</p>
            <p style={{ fontSize: "14px", marginLeft: "15px" }}>{visibleCommentCiro}</p>
          </div>
        )}

        <input
          type="text"
          value={commentCiro}
          onChange={(e) => setCommentCiro(e.target.value)}
          onKeyDown={handleCiroCommentKeyDown}
          style={{ width: "450px", borderBottom: "1px solid gray", height: "20px", background: "none", border: "none", fontSize: "14px", color: "white", outline: "none", paddingBottom: "10px" }}
          placeholder='Yorum yap..'
        />
      </div>

      <div className="contents">
        <div className="flex-row">
          <img src={alperen} style={{ width: "30px", borderRadius: "50%", height: "30px" }} alt="" />
          <h6 style={{ marginLeft: "6px", marginTop: "5px", fontSize: "14px" }}>alperen.sengun</h6>
          <p style={{ marginLeft: "10px", marginTop: "10px", fontSize: "12px" }}>1s</p>
          <div style={{ marginLeft: "280px" }}>
            <BsThreeDots />
          </div>
        </div>

        <video autoPlay muted controls loop width="450" onDoubleClick={handleAlperenDoubleClick}>
          <source src={alpi} type="video/mp4" />
        </video>

        <div className="likeshare flex-row">
          {isLikedAlperen ? <CiHeart fontSize={"32px"} style={{ marginRight: "10px" }} onClick={handleAlperenDoubleClick} />
            : <IoIosHeart fontSize={"28px"} style={{ marginRight: "10px", color: "red" }} onClick={handleAlperenDoubleClick} />}
          <AiOutlineComment fontSize={"28px"} style={{ marginRight: "10px" }} />
          <LuMousePointer2 fontSize={"28px"} style={{ marginRight: "10px" }} />
          <IoSaveOutline fontSize={"25px"} style={{ marginLeft: "307px", marginBottom: "6px" }} />
        </div>

        <h6 style={{ fontSize: "14px", marginTop: "8px" }}>{isLikedAlperen ? "32.403" : "32.404"} beğenme</h6>

        <div className='flex-row comment'>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>alperen.sengun</p>
          <p style={{ fontSize: "14px", marginLeft: "15px" }}>Harika bir basket attım.</p>
        </div>

        <p style={{ fontSize: "14px", height: "6px", paddingBottom:"18px"}}>{commentCountAlperen} yorumun tümünü gör</p>

        {visibleCommentAlperen && (
          <div className='flex-row comment'>
            <p style={{ fontSize: "14px", fontWeight: "bold" }}>mertensssz</p>
            <p style={{ fontSize: "14px", marginLeft: "15px" }}>{visibleCommentAlperen}</p>
          </div>
        )}

        <input
          type="text"
          value={commentAlperen}
          onChange={(e) => setCommentAlperen(e.target.value)}
          onKeyDown={handleAlperenCommentKeyDown}
          style={{ width: "460px", borderBottom: "1px solid gray", height: "20px", background: "none", border: "none", fontSize: "14px", color: "white", outline: "none", paddingBottom: "10px" }}
          placeholder='Yorum yap..'
        />
      </div>
    </div>
  );
}

export default Main;
