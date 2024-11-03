
import "../css/suggestion.css";
import pp from "../images/pp.jpg";
import "../App.css";
import { users } from "./UsersStories";
import { others } from "./FollowOthers";
function Suggestions() {
  return (
    <div>
      <div className="suggestions">
        <div className="myprofile flex-row">
          <div className="flex-row closer">
            <img src={pp} alt=""  style={{ width: "43px",borderRadius: "50%",marginRight: "10px",}}/>
            <div>
              <h6 style={{fontSize: "14px",marginTop: "28px",lineHeight: "1px",}}>mertensssz</h6>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "gray" }} >
                Mert
              </p>
            </div>
          </div>
            <div>
                <a href="#" style={{fontSize:"12px",textDecoration:"none"}}>Geçiş Yap</a>
            </div>
         
        </div>
        <div className="flex-row" style={{justifyContent:"space-between"}}>
        <h6 style={{fontSize:"14px",color:"gray", marginTop:"10px"}}>Senin için önerilenler</h6>
        <a href="#" style={{fontSize:"12px",textDecoration:"none",color:"white",fontWeight:"bold"}}>Tümünü Gör</a>
        </div>
        
        <div className="suggestions-for-you">
            <div>
            {others && others.map((user)=>(
                <div className="flex-row" key={user.id}>
                        <img src={user.image} alt=""  style={{ width: "43px",borderRadius: "50%",marginRight: "10px",}}/>
            <div>
              <h6 style={{fontSize: "14px",marginTop: "28px",lineHeight: "1px",}}>{user.name}</h6>
              <p style={{ fontSize: "14px", lineHeight: "24px", color: "gray" }} >
                emreehasanov +9 diğer kişi taki...
              </p>
              
            </div>
            <button className="follow">Takip et</button>
                </div>
            ))}
            
          </div>
          
        </div>
             <p style={{fontSize:"10px",color:"gray"}}>
             Hakkında
Yardım
Basın
API
İş Fırsatları
Gizlilik
Koşullar
Konumlar
Dil

             </p>
             <p style={{fontSize:"10px",color:"gray"}}>
             Cür Verified
             © 2024 Instagram from Mert Dal
             </p>
      </div>
      
    </div>
  );
}

export default Suggestions;
