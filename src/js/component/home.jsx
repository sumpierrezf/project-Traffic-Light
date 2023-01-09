
import React, {useState} from "react";
//include images into your bundle


//create your first component
const Home = () => {
	const [color1,setColor1]= useState("");
	const [color2,setColor2]= useState("");
	const [color3,setColor3]= useState("");
	const [shadow1,setShadow1]= useState("");
	const [shadow2,setShadow2]= useState("");
	const [shadow3,setShadow3]= useState("");

	function encenderRojo() {

		if(color1 === "btn-danger"){
			setColor1("")
			setShadow1("")
		}else if (color2==="btn-warning" ||color3==="btn-success"|| color1 === ""){
			setColor1("btn-danger");
			setShadow1("0 0 100px red")
			setColor2("");
			setColor3("");
			setShadow2("")
			setShadow3("")
	}
}
	function encenderAmarillo() {

	if(color2 === "btn-warning"){
		setColor2("")
		setShadow2("")
	}else if(color1==="btn-danger" ||color3==="btn-success" || color2 === ""){
		setColor2("btn-warning")
		setShadow2("0 0 100px yellow")
		setColor1("");
		setColor3("");
		setShadow1("")
		setShadow3("")
	}
}
	function encenderVerde() {

	if(color3 === "btn-success"){
		setColor3("")
		setShadow3("")
	}else if(color1==="btn-danger" ||color2==="btn-warning" || color3 === ""){
		setColor3("btn-success")
		setShadow3("0 0 100px green")
		setColor1("");
		setColor2("");
		setShadow1("")
		setShadow2("")
	}
}
	

	return (
		<div className="col-12 bg-dark m-auto">
		<div className="d-flex flex-column col-1 m-auto p-5">
			<button className={"btn rounded-circle border-danger p-1 mb-2 m-auto "+color1} style={{width: 50, height: 50, boxShadow:shadow1}} onClick={encenderRojo}></button>
			<button className={"btn rounded-circle border-warning p-1 mb-2 m-auto "+color2} style={{width: 50, height: 50, boxShadow:shadow2}} onClick={encenderAmarillo}></button>
			<button className={"btn rounded-circle border-success p-1 m-auto "+color3} style={{width: 50, height: 50, boxShadow:shadow3}} onClick={encenderVerde}></button>
		</div>
		</div>
	);
};

export default Home;
