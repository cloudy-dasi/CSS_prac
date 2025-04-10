document.getElementById('search').onclick = () => {
	document.querySelector('#search-form').classList.toggle('active')
}
document.getElementById('menu-icon').onclick = () => {
	document.querySelector('#noti-form').classList.toggle('active');
	document.querySelector('.toggle-side').classList.toggle('active')
}
