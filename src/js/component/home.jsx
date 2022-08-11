import React from "react";
import {Luces} from "./luces.jsx"


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



