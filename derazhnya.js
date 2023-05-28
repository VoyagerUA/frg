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
parrentScript.style.overflow = 'hidden';
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
		if(window.innerWidth / window.innerHeight > 1920 / 1080){
			parrentScript.style.backgroundSize = `90%`;			
		};
		parrentScript.style.backgroundPosition = `center`;   
		FlagVector = 2;
		napys1.style.top = napys2.style.top = `75%`;
		napys1.style.width = napys2.style.width = `40%`;
		napys1.style.left = napys2.style.left = `${parrentScript.offsetWidth / 4 - napys1.offsetWidth / 2}px`;
	};
};
window.addEventListener('load', handleOrientationChange);
window.addEventListener('resize', ()=>{location.reload()});
const RunningLine = (contents)=>{
	const wordsArray = contents.split(" ");
	const rL_parent = document.createElement('div');
	parrentScript.appendChild(rL_parent);
	rL_parent.style.position = 'absolute';
	rL_parent.style.left = `0px`;
	rL_parent.style.bottom = `0px`;
	rL_parent.style.width = `${parrentScript.offsetWidth}px`;
	rL_parent.style.height = `8vmin`;
	wordsArray.forEach(element => {
		let rL = document.createElement('span');
		rL_parent.appendChild(rL);
		rL.classList.add('run-line-class');
		rL.style.position = 'absolute';
		rL.style.paddingLeft = `1%`;
		rL.style.left = `${rL_parent.offsetWidth}px`;
		rL.style.fontSize = `3vw`;
		rL.style.fontWeight = 'bolder';
		rL.style.textAlign = 'center';
		rL.style.color = 'rgba(0, 0, 0, 1.0)';
		rL.style.textShadow = `0.5vmin 0.5vmin 0.7vmin rgba(0, 0, 0, 0.3), -0.2vmin -0.2vmin 0.5vmin rgba(150, 0, 0, 0.5)`;
		rL.innerText = element;
		rL.style.opacity = `0`;
		rL.style.transition = `all 0.5s`;	
	});
	const wordsRun = document.getElementsByClassName(`run-line-class`);
	wordsRun[0].style.left = `${rL_parent.offsetLeft}px`;
	wordsRun[0].style.paddingLeft = `1%`;
	wordsRun[0].style.opacity = `1`;
	Runner(0);
	function Runner(n){
		setTimeout(() => {
			wordsRun[n+1].style.left = `${wordsRun[n].offsetLeft + wordsRun[n].offsetWidth}px`;
			wordsRun[n+1].style.opacity = `1`;
			n++;
			if(n<wordsRun.length - 1 ) {
				Runner(n);
			} else {
				rL_parent.style.transition = `all 1s`;
				setInterval(() => {
					if(rL_parent.style.opacity == `0`){
						rL_parent.style.opacity = `1`;
					} else {
						rL_parent.style.opacity = `0`;
					};
				}, 1000);
			}	
		}, 500);
	};
}; 
parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene1_svg)})`;
RunningLine(`Тепер у деражнянців є своє турагентство. Розкажи всім сусідам!`);	
setTimeout(() => {
	parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene2_svg)})`;
	FlyBlock(FlagVector);
	setTimeout(() => {
		parrentScript.style.backgroundImage = `url(data:image/svg+xml;${new Date().getTime()};base64,${btoa(Scene3_svg)})`;
	}, 500);
}, 4000);
function FlyBlock(param) {
	if(param == 1){
		napys1.style.top = napys2.style.top = `${parrentScript.offsetHeight / 1.9}px`;
		napys1.style.width = napys2.style.width =`30%`;
		napys1.style.opacity = napys2.style.opacity = `1`;
		napys2.style.left =	'';
		napys2.style.right = `${napys1.offsetLeft * 0.9}px`;
	} else {
		napys1.style.top = napys2.style.top = `10%`;
		napys1.style.left = `${parrentScript.offsetWidth / 2 + napys1.offsetWidth / 5}px`;
		napys1.style.width = napys2.style.width = `20%`;
		napys1.style.opacity = napys2.style.opacity = `1`;
		napys2.style.left = '';
		napys2.style.right = `1%`;
	};
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
							/*name_input_login.focus();*/
							btn1.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn1.addEventListener('mouseenter', function(){this.style['background-color'] = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn1.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p-=2;
							container_inputs_login.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 10);    
				} else {
					napys1.style.height = napys1.offsetHeight + 5 + 'px';
					/*napys1.style.backgroundColor = `rgba(245, 245, 225, ${i})`;*/
					napys1.style['background-color'] = `rgba(245, 245, 225, ${i})`;
					i+=0.03;
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
							/*name_input_login.focus();*/
							btn1.style.background = `radial-gradient(circle, rgba(200,200,200,0.2), rgba(220,220,230,1))`;
							btn1.addEventListener('mouseenter', function(){this.style['background-color'] = 'rgba(90,150,255,0.7)'; this.style.cursor = 'pointer'});
							btn1.addEventListener('mouseleave', function(){this.style.backgroundColor = '';});
						} else {
							p-=3;
							container_inputs_login.style.transform = `perspective(500px) rotateX(${p}deg)`;
						};
					}, 10);    
				} else {
					napys1.style.height = napys1.offsetHeight + 5 + 'px';
					/*napys1.style.backgroundColor = `rgba(245, 245, 225, ${i})`;*/
					napys1.style['background-color'] = `rgba(245, 245, 225, ${i})`;
					i+=0.03;
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
				if(napys2.offsetHeight >= parrentScript.offsetHeight * 0.12){
					clearInterval(idSI1);
					container_inputs_reg.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p>=0){
							clearInterval(idSI2);
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${0}deg)`;						
							/*certificate_input_reg.focus();*/
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
					i+=0.05;
				};
			}, 10);    
		}, 2250);
	} else {
		setTimeout(() => {
			let i = 0.2;
			let p = -90;
			let idSI1 = setInterval(() => {
				if(napys2.offsetHeight >= parrentScript.offsetHeight * 0.22){
					clearInterval(idSI1);
					container_inputs_reg.style.display = `flex`;
					let idSI2 = setInterval(() => {
						if(p>=0){
							clearInterval(idSI2);
							container_inputs_reg.style.transform = `perspective(500px) rotateX(${0}deg)`;						
							/*certificate_input_reg.focus();*/
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
					i+=0.05;
				};
			}, 10);    
		}, 2250);
	};	
};
