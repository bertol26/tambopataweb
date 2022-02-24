$(document).ready(function () {
	$('a').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
	});
});



const navtoggle = document.querySelector('.icon-mobile');
const navmenumobile = document.querySelector('.nav-list');

navtoggle.addEventListener('click', () => {
  navmenumobile.classList.toggle('nav-visible');
})
