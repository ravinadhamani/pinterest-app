import "../styles.css";
import {} from "@mui/material";
import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  Pinterest,
  QuestionMark,
} from "@mui/icons-material";
import MenuContainer from "./MenuContainer";
import { useEffect } from "react";
import Pins from "./Pins";
import Data from "./Data";
import logo from "../assets/pinterest logo.png"

function PinterestMain() {
	
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
 
 
  return (
	<>
    <div className="App">
    
      <div className="menuContainer">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />

        <div className="subMenu">
		
          <div>
			
           <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
		
      </div>

      <main>
        

        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pins
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
	  
    </div>
	<div>
	</div>
	</>
  );
}

export default PinterestMain;
