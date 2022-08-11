import React from "react";
import {Luces} from "./luces.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="text-center container ">
			<div className="semaforo">
				<Luces/>
			</div>
		</div>
	);



};



