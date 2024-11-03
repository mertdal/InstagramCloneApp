import "../App.css";
import "../css/suggestion.css"
import { users } from "./UsersStories";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="yazi flex-row">
          <h6 style={{ fontWeight: "bolder" }}>Senin için</h6>
          <h6
            style={{
              fontWeight: "bolder",
              marginLeft: "12px",
              color: "rgb(115,115,115)",
            }}
          >
            Takip ettiklerin
          </h6>
        </div>
      </div>

      <div className="all-stories flex-row">
        {users &&
          users.map((user) => (
            <div key={user.id} className="stories">
              <img src={user.image} alt="" className="story-image" />
              <p className="story-username">{user.name}</p>
            </div>
          ))}
      </div>
      
    </div>
  );
}

export default Header;
