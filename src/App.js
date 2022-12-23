import "../src/styles.css";
import FinalBoard from "./components/FinalBoard.js";
import Persons from "./components/Persons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PinterestMain from "./components/PinterestMain";
import Notifications from "./components/Notifications";
import Favourite from "./components/Favourite";

function App() {
 

  return (
	<>       
	<div>
			  <PinterestMain/>
			  <FinalBoard/>
	</div>
	<div>
		<Persons/>
		<Notifications/>
		<Favourite/>
	</div>
			  
	</>
  );
}

export default App;
