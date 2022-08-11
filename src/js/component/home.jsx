import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	return (
		<div className="text-center container ">
			<div className="semaforo">
				<div className="luzRoja">ROJO</div>
				<div className="luzAmarilla">AMARILLO</div>
				<div className="luzVerde">VERDE</div>

			</div>
		</div>
	);



};



