const btn = document.getElementsByClassName('toggle-container')[0];
const btnmove = document.getElementsByClassName('toggle-child')[0];
const container = document.getElementsByClassName('container')[0];

btn.addEventListener('click',change);
function change(){
	btnmove.classList.toggle('toggle-change');
	btn.classList.toggle('newtoggle-container');
	container.classList.toggle('new-container');
}