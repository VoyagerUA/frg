"use strict";

const currentScript = document.currentScript;
var pidAttribute = currentScript.getAttribute('pid');
if(!pidAttribute || pidAttribute == '' || !document.getElementById(pidAttribute)){
	let parrentBlock = document.createElement('div');
	document.body.appendChild(parrentBlock);
	parrentBlock.id = `containerderazhnya`;
	pidAttribute =	parrentBlock.id;
	parrentBlock.style.position = `absolute`;
	parrentBlock.style.display = `flex`;
	parrentBlock.style.flexDirection = `row`;
	parrentBlock.style.justifyContent = 'center';
	parrentBlock.style.alignItems = 'center';
	parrentBlock.style.top = '0';
	parrentBlock.style.width = `100vw`;
	parrentBlock.style.height = `100vh`;
};
const parrentScript = document.getElementById(pidAttribute);

parrentScript.style.opacity = '1';
parrentScript.style.backgroundSize = `contain`;
parrentScript.style.backgroundRepeat = `no-repeat`;
//parrentScript.style.border = `1px solid red`;

var FlagVector;
const handleOrientationChange = ()=>{
	if (window.innerWidth < window.innerHeight) {
		const windowHeight = window.innerHeight;
		const verticalOffset = Math.floor(windowHeight * 0.1);
		parrentScript.style.backgroundPosition = `center ${verticalOffset}px`;
		FlagVector = 1;

		napys1.style.top = napys2.style.top = `25%`;
		napys1.style.width = napys2.style.width = `60%`;
		napys1.style.left = napys2.style.left = `${parrentScript.offsetWidth / 2 - napys1.offsetWidth / 2}px`;

	} else {
		parrentScript.style.backgroundPosition = `center`;   
		FlagVector = 2;

		napys1.style.top = napys2.style.top = `75%`;
		napys1.style.width = napys2.style.width = `40%`;
		napys1.style.left = napys2.style.left = `${parrentScript.offsetWidth / 4 - napys1.offsetWidth / 2}px`;

	}
};
window.addEventListener('load', handleOrientationChange);
window.addEventListener('resize', ()=>{location.reload()});


const RunningLine = (contents)=>{
	let rL = document.createElement('div');
	parrentScript.appendChild(rL);
	rL.id = 'id_rl';
	rL.innerText = contents;
	rL.style.position = 'relative';
	rL.style.margin = `0 auto`;
	//rL.style.top = `0px`;
	rL.style.fontSize = `4vmin`;
	rL.style.fontWeight = 'bolder';

	rL.style.textAlign = 'center';
	rL.style.color = 'rgb(255, 155, 55)';
	rL.style.textShadow = `-0.1vmin -0.1vmin 0.1vmin rgba(0,25,50,0.6), 0.1vmin 0.1vmin 0.1vmin rgba(0,0,50,0.7), 0.5vmin 0.5vmin 0.4vmin rgba(0,0,0,0.4)`;
	rL.style.opacity = '0';
	rL.style.overflow = 'hidden';
	//rL.style.border = '1px solid red';
	return rL;
}; 

parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene1_svg)})`;

let RL = RunningLine(`Тепер у деражнянців є своє турагентство. Розкажи всім сусідам!`);	


setTimeout(() => {

	parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene2_svg)})`;
	RL.style.transition = `all 2s`;

	FlyBlock(FlagVector);

	setTimeout(() => {
		RL.style.opacity = '1';
		parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene3_svg)})`;
//	}, 566.6667);
	}, 500);

}, 5000);



function FlyBlock(param) {

	if(param == 1){

		napys1.style.top = napys2.style.top = `45%`;
		napys1.style.width = napys2.style.width =`30%`;
		napys1.style.opacity = napys2.style.opacity = `1`;

		napys2.style.left =	'';
		napys2.style.right = `${napys1.offsetLeft * 0.9}px`;


	} else {

		napys1.style.top = napys2.style.top = `10%`;
		napys1.style.left = `${parrentScript.offsetWidth / 2 + napys1.offsetWidth / 5}px`;
		napys1.style.width = napys2.style.width = `20%`;

		napys2.style.left = '';
		napys2.style.right = `1%`;

		napys1.style.opacity = napys2.style.opacity = `1`;
	}


	ShowLogin(param);
	ShowReg(param);

};



function ShowLogin(param){
	if(param == 1){

		setTimeout(() => {
			let i = 0.2;
			let p = 90;
			let idSI1 = setInterval(() => {
				if(napys1.offsetHeight >= parrentScript.offsetHeight * 0.12){
					clearInterval(idSI1);
					container_inputs_login.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p<=0){
							clearInterval(idSI2);
							container_inputs_login.style.transform = `perspective(500px) rotateX(${0}deg)`;						
							//name_input_login.focus();
							btn1.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn1.addEventListener('mouseenter', function(){this.style['background-color'] = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn1.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p-=2;
							container_inputs_login.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 10);    
				} else {
					napys1.style.height = napys1.offsetHeight + 2 + 'px';
					//napys1.style.backgroundColor = `rgba(245, 245, 225, ${i})`;
					napys1.style['background-color'] = `rgba(245, 245, 225, ${i})`;
					i+=0.023;
				};
			}, 10);    
		}, 1500);



	} else {
		setTimeout(() => {
			let i = 0.2;
			let p = 90;
			let idSI1 = setInterval(() => {
				if(napys1.offsetHeight >= parrentScript.offsetHeight * 0.22){
					clearInterval(idSI1);
					container_inputs_login.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p<=0){
							clearInterval(idSI2);
							container_inputs_login.style.transform = `perspective(500px) rotateX(${0}deg)`;						
							//name_input_login.focus();
							btn1.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn1.addEventListener('mouseenter', function(){this.style['background-color'] = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn1.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p-=3;
							container_inputs_login.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 10);    
				} else {
					napys1.style.height = napys1.offsetHeight + 2 + 'px';
					//napys1.style.backgroundColor = `rgba(245, 245, 225, ${i})`;
					napys1.style['background-color'] = `rgba(245, 245, 225, ${i})`;
					i+=0.023;
				};
			}, 10);    
		}, 1500);

	};
};


function ShowReg(param){
	if(param == 1){
		setTimeout(() => {
			let i = 0.2;
			let p = -90;
			let idSI1 = setInterval(() => {
				if(napys2.offsetHeight >= parrentScript.offsetHeight * 0.20){
					clearInterval(idSI1);
					container_inputs_reg.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p>=0){
							clearInterval(idSI2);
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${0}deg)`;						

							//certificate_input_reg.focus();

							btn2.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn2.addEventListener('mouseenter', function(){this.style.backgroundColor = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn2.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p+=2;
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 20);    
				} else {
					napys2.style.height = napys2.offsetHeight + 2 + 'px';
					napys2.style.backgroundColor = `rgba(240, 250, 255, ${i})`;
					i+=0.045;
				};
			}, 10);    
		}, 2250);





	} else {
		setTimeout(() => {
			let i = 0.2;
			let p = -90;
			let idSI1 = setInterval(() => {
				if(napys2.offsetHeight >= parrentScript.offsetHeight * 0.30){
					clearInterval(idSI1);
					container_inputs_reg.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p>=0){
							clearInterval(idSI2);
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${0}deg)`;						

							//certificate_input_reg.focus();

							btn2.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn2.addEventListener('mouseenter', function(){this.style.backgroundColor = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn2.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p+=3;
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 20);    
				} else {
					napys2.style.height = napys2.offsetHeight + 2 + 'px';
					napys2.style.backgroundColor = `rgba(240, 250, 255, ${i})`;
					i+=0.045;
				};
			}, 10);    
		}, 2250);
	};	
};
