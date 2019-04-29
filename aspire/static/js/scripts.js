$(document).ready(function () {

	console.log($(window).width() + '/' + $(window).height());

	// Animation of first screen
	function starsAnimate() {
		let starsAnim = new TimelineMax();
		starsAnim
			.set('.star-1', {
				x: '1000px',
				y: '-400px'
			})
			.set('.star-2', {
				x: '1000px',
				y: '-400px'
			})
			.set('.star-3', {
				x: '-500px',
				y: '-100px'
			})
			.set('.star-pink-1', {
				x: '1200px',
				y: '-200px'
			})
			.to('.star-1', .8, {
				x: '0',
				y: '0'
			})
			.to('.star-2', .8, {
				x: '0',
				y: '0'
			})
			.to('.star-3', .8, {
				x: '0',
				y: '0'
			})
			.to('.star-pink-1', .9, {
				x: '0',
				y: '0'
			})

	}
	starsAnimate();

	let controller = new ScrollMagic.Controller();

	// Animation of insect
	function insectAnimate() {
		let insectStart = new TimelineMax();
		let insect = new TimelineMax();
		insectStart
			.set('.insect', {
				x: '-500px',
				y: '-100px'
			})
		insect
			.to('.insect', 1, {
				x: '0',
				y: '0'
			})

		let scene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger-1',
				offset: -300,
				triggerHook: -1
			}).setTween(insect)
			.addTo(controller);
	}
	insectAnimate();

	// Animations of shirt-screen
	function shirtAnimation() {
		let catStart = new TimelineMax();
		catStart
			.set('#cat-1', {
				drawSVG: '0'
			})
			.set('#cat-2', {
				drawSVG: '0'
			})
			.set('#cat-3', {
				drawSVG: '0'
			})
			.set('#cat-4', {
				drawSVG: '0'
			})
			.set('#cat-5', {
				drawSVG: '0'
			})
			.set('#cat-6', {
				drawSVG: '0'
			})
			.set('#cat-7', {
				drawSVG: '0'
			})
			.set('#cat-8', {
				drawSVG: '0'
			})
			.set('#cat-9', {
				drawSVG: '0'
			})
			.set('#cat-10', {
				drawSVG: '0'
			})
			.set('#cat-11', {
				drawSVG: '0'
			})
			.set('#cat-12', {
				drawSVG: '0'
			})
			.set('#cat-13', {
				drawSVG: '0'
			})
			.set('#cat-14', {
				drawSVG: '0'
			})
			.set('#cat-15', {
				drawSVG: '0'
			})
			.set('#cat-16', {
				drawSVG: '0'
			})
			.set('#cat-17', {
				drawSVG: '0'
			})
			.set('#cat-18', {
				drawSVG: '0'
			})
			.set('#cat-19', {
				drawSVG: '0'
			})

		let cat = new TimelineMax();
		cat
			.to('#cat-1', .3, {
				drawSVG: 'true'
			})
			.to('#cat-2', .3, {
				drawSVG: 'true'
			})
			.to('#cat-3', .3, {
				drawSVG: 'true'
			})
			.to('#cat-4', .3, {
				drawSVG: 'true'
			})
			.to('#cat-5', .3, {
				drawSVG: 'true'
			})
			.to('#cat-6', .3, {
				drawSVG: 'true'
			})
			.to('#cat-7', .3, {
				drawSVG: 'true'
			})
			.to('#cat-8', .3, {
				drawSVG: 'true'
			})
			.to('#cat-9', .3, {
				drawSVG: 'true'
			})
			.to('#cat-10', .3, {
				drawSVG: 'true'
			})
			.to('#cat-11', .3, {
				drawSVG: 'true'
			})
			.to('#cat-12', .15, {
				drawSVG: 'true'
			})
			.to('#cat-13', .15, {
				drawSVG: 'true'
			})
			.to('#cat-14', .15, {
				drawSVG: 'true'
			})
			.to('#cat-15', .15, {
				drawSVG: 'true'
			})
			.to('#cat-16', .15, {
				drawSVG: 'true'
			})
			.to('#cat-17', .15, {
				drawSVG: 'true'
			})
			.to('#cat-18', .3, {
				drawSVG: 'true'
			})
			.to('#cat-19', .3, {
				drawSVG: 'true'
			})

		let scene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger-2',
				offset: -200,
				triggerHook: -1,
				reverse: false
			}).setTween(cat)
			.addTo(controller);


		let starStart = new TimelineMax();
		starStart
			.set('.star-4', {
				x: '-800px',
				y: '-150px'
			})

		let star = new TimelineMax();
		star
			.to('.star-4', .7, {
				x: '0',
				y: '0'
			})
		let scene2 = new ScrollMagic.Scene({
				triggerElement: '#trigger-2',
				offset: 400,
				triggerHook: -1
			}).setTween(star)
			.addTo(controller)
	};
	shirtAnimation();

	// Animation of house
	function houseAnimation() {
		let houseStart = new TimelineMax();
		houseStart
			.set('#house-1', {
				drawSVG: '0'
			})
			.set('#house-2', {
				drawSVG: '0'
			})
			.set('#house-3', {
				drawSVG: '0'
			})
			.set('#house-4', {
				drawSVG: '0'
			})
			.set('#house-5', {
				drawSVG: '0'
			})
			.set('#house-6', {
				drawSVG: '0'
			})
			.set('#house-7', {
				drawSVG: '0'
			})
			.set('#house-8', {
				drawSVG: '0'
			})
			.set('#house-9', {
				drawSVG: '0'
			})
			.set('#house-10', {
				drawSVG: '0'
			})
			.set('#house-11', {
				drawSVG: '0'
			})
			.set('#house-12', {
				drawSVG: '0'
			})
			.set('#house-13', {
				drawSVG: '0'
			})
			.set('#house-14', {
				drawSVG: '0'
			})

		let house = new TimelineMax();
		house
			.to('#house-1', .4, {
				drawSVG: 'true'
			})
			.to('#house-2', .2, {
				drawSVG: 'true'
			})
			.to('#house-3', .2, {
				drawSVG: 'true'
			})
			.to('#house-4', .4, {
				drawSVG: 'true'
			})
			.to('#house-5', .4, {
				drawSVG: 'true'
			})
			.to('#house-6', .4, {
				drawSVG: 'true'
			})
			.to('#house-7', .4, {
				drawSVG: 'true'
			})
			.to('#house-8', .4, {
				drawSVG: 'true'
			})
			.to('#house-9', .4, {
				drawSVG: 'true'
			})
			.to('#house-10', .4, {
				drawSVG: 'true'
			})
			.to('#house-11', .2, {
				drawSVG: 'true'
			})
			.to('#house-12', .2, {
				drawSVG: 'true'
			})
			.to('#house-13', .4, {
				drawSVG: 'true'
			})
			.to('#house-14', .4, {
				drawSVG: 'true'
			})

		let scene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger-3',
				offset: -300,
				triggerHook: -1,
				reverse: false
			}).setTween(house)
			// .addIndicators()
			.addTo(controller);
	}
	houseAnimation();

	// Animation of sun
	function sunAnimation() {
		let sunStart = new TimelineMax();
		let sun = new TimelineMax();
		sunStart
			.set('.sun', {
				x: '500px'
			})
		sun
			.to('.sun', .8, {
				x: '0',
				y: '0'
			})
		let scene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger-4',
				offset: -200,
				triggerHook: -1
			}).setTween(sun)
			.addTo(controller);
	}
	sunAnimation();

	// Bubbly-button
	var animateButton = function (e) {

		e.preventDefault;
		//reset animation
		e.target.classList.remove('animate');

		e.target.classList.add('animate');
		setTimeout(function () {
			e.target.classList.remove('animate');
		}, 500);
	};
	var bubblyButtons = document.getElementsByClassName("bubbly-button");
	for (var i = 0; i < bubblyButtons.length; i++) {
		bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
	}

	// Animation of cactus
	function photoAnimation() {
		let cactusStart = new TimelineMax();
		cactusStart
			.set('#cactus-1', {
				drawSVG: '0'
			})
			.set('#cactus-2', {
				drawSVG: '0'
			})
			.set('#cactus-3', {
				drawSVG: '0'
			})
			.set('#cactus-4', {
				drawSVG: '0'
			})
			.set('#cactus-5', {
				drawSVG: '0'
			})
			.set('#cactus-6', {
				drawSVG: '0'
			})
			.set('#cactus-7', {
				drawSVG: '0'
			})
			.set('#cactus-8', {
				drawSVG: '0'
			})
			.set('#cactus-9', {
				drawSVG: '0'
			})
			.set('#cactus-10', {
				drawSVG: '0'
			})
			.set('#cactus-11', {
				drawSVG: '0'
			})
			.set('#cactus-12', {
				drawSVG: '0'
			})
			.set('#cactus-13', {
				drawSVG: '0'
			})
			.set('#cactus-14', {
				drawSVG: '0'
			})
			.set('#cactus-15', {
				drawSVG: '0'
			})
			.set('#cactus-16', {
				drawSVG: '0'
			})
			.set('#cactus-17', {
				drawSVG: '0'
			})
			.set('#cactus-18', {
				drawSVG: '0'
			})
			.set('#cactus-19', {
				drawSVG: '0'
			})
			.set('#cactus-20', {
				drawSVG: '0'
			})
			.set('#cactus-21', {
				drawSVG: '0'
			})
			.set('#cactus-22', {
				drawSVG: '0'
			})
		let cactus = new TimelineMax();
		cactus
			.to('#cactus-1', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-2', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-3', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-4', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-5', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-6', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-7', .4, {
				drawSVG: 'true'
			})
			.to('#cactus-8', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-9', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-10', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-11', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-12', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-13', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-14', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-15', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-16', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-17', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-18', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-19', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-20', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-21', .2, {
				drawSVG: 'true'
			})
			.to('#cactus-22', .2, {
				drawSVG: 'true'
			})



		// let starStart=new TimelineMax();
		// starStart
		// 	.set('.nstar-1',{
		// 		x: '500px',
		// 		y: '-300px'
		// 	})
		// let star=new TimelineMax();
		// star
		// 	.to('.nstar-1',.5,{
		// 		x:'0',
		// 		y:'0'
		// 	})

		let scene1 = new ScrollMagic.Scene({
				triggerElement: '#trigger-5',
				offset: -300,
				triggerHook: -1,
				reverse: false
			}).setTween(cactus)
			.addTo(controller);

		// let scene2=new ScrollMagic.Scene({
		// 	triggerElement: '#trigger-5',
		// 	offset: -150,
		// 	triggerHook: -1,
		// }).setTween(star)
		// .addIndicators()
		// .addTo(controller);
	}
	photoAnimation();

	function parallaxStars() {
		var scene = document.querySelectorAll('.scene');
		scene.forEach(function(element) {
			var parallaxInstance = new Parallax(element);
		});
	}
	setTimeout(parallaxStars(), 2000);



	// Slider settings
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		speed: 800,
		spaceBetween: 105,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})


	// Popup-video
	let popup = document.querySelectorAll('.video-popup-container');
	let popupEl=document.querySelector('.video-popup-el');
	let videos = document.querySelectorAll('.video');

	function openModal() {
		popup.forEach(function(item){
			item.classList.add('opened');
		})
		player.stopVideo();
	}

	function closeModal() {
		popup.forEach(function(item) {
			item.classList.remove('opened');
		})
		player.stopVideo();
	}

	function bindModal(cards) {
		cards.forEach(function(item){
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const id = item.getAttribute('data-url');
				loadVideo(id);
				openModal();
			})
		})
	};
	bindModal(videos);

	popup.forEach(function(item){
		item.addEventListener('click', function(e) {
			if (!e.target.classList.contains('video-popup-el')) {
				closeModal();
			}
		});
	})


	function loadVideo(id) {
		player.loadVideoById({
			'videoId': `${id}`
		})
	}

	// Popup-form
	let formPopup = document.querySelectorAll('.form-popup-container');
	let popupLinks = document.querySelectorAll('.form-popup-open');


	function formStart() {
		let formAnimStart = new TimelineMax();
		formAnimStart
			.set('.form-popup-wrapper', {
				scaleX: 0,
				scaleY: 0,
				x: '-50%',
				y: '-50%'
			})
	}

	function formAnimateOpen() {
		let formAnim = new TimelineMax();
		formAnim
			.to('.form-popup-wrapper', .2, {
				scaleX: 1.2,
				scaleY: 1.2
			})
			.to('.form-popup-wrapper', .2, {
				scaleX: 1,
				scaleY: 1
			})
			.to('.form-popup-wrapper', .2, {
				scaleX: 1.1,
				scaleY: 1.1
			})
			.to('.form-popup-wrapper', .3, {
				scaleX: 1,
				scaleY: 1
			})
	}

	function formAnimateClose() {
		let formAnim = new TimelineMax();
		formAnim
			.to('.form-popup-wrapper', .4, {
				scaleX: 0,
				scaleY: 0
			})
	}
	formStart();

	function openFormPopup() {
		formPopup.forEach(function(item){
			item.classList.add('opened');
		})
		setTimeout(formAnimateOpen, 200);
	}

	function closeFormPopup() {
		formAnimateClose();
		formReset();
		setTimeout(function () {
			formPopup.forEach(function(item){
				item.classList.remove('opened');
			})
		}, 500)
	}

	function bindFormPopup(items) {
		items.forEach(function(item){
			item.addEventListener('click', function(e) {
				e.preventDefault();
				openFormPopup();
			})
		})
	}
	bindFormPopup(popupLinks);

	formPopup.forEach(function(item){
		item.addEventListener('click', function(e){
			if (e.target.classList.contains('form-popup-container') || e.target.classList.contains('fas')) {
				closeFormPopup();
			}
		})
	})

	// Validation
	let requiredInputs = document.querySelectorAll('.required-input');
	let inputs = document.querySelectorAll('input');
	let emailCheck = document.querySelectorAll('.email-check');
	let phoneCheck = document.querySelectorAll('.phone-check');

	function checkEmail() {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		emailCheck.forEach(function(item){
			if (re.test(item.value) == false) {
				item.classList.add('error');
				item.classList.remove('success');
			} else if (re.test(item.value) == true) {
				item.classList.add('success');
				item.classList.remove('error');
			}
		})
	}

	function checkTel() {
		const regexTel = /^\+375\-+(25|29|33|44)-+([0-9]){7}$/;
		phoneCheck.forEach(function(item) {
			if (regexTel.test(item.value) == false) {
				item.classList.remove('success');
				item.classList.add('error');
			} else {
				item.classList.remove('error');
				item.classList.add('success');
			}
		})
	}

	requiredInputs.forEach(function(item){
		item.addEventListener('keyup', function() {
			if (item.value == 0) {
				item.classList.remove('success');
				item.classList.add('error');
			} else {
				item.classList.remove('error');
				item.classList.add('success');
			}
		})
	})
	emailCheck.forEach(function(el){
		el.addEventListener('keyup', checkEmail);
	});
	emailCheck.forEach(function(el){
		el.addEventListener('change', checkEmail);
	});
	phoneCheck.forEach(function(el){
		el.addEventListener('keyup', checkTel);
	})
	phoneCheck.forEach(function(el){
		el.addEventListener('change', checkTel);
	})


	function checkRequired() {
		requiredInputs.forEach(function(item){
			if (item.value == 0) {
				item.classList.remove('success');
				item.classList.add('error');
			} else {
				item.classList.remove('error');
				item.classList.add('success');
			}
		})
	}

	function formReset() {
		inputs.forEach(function(item){
			item.classList.remove('success');
			item.classList.remove('error');
			item.value = '';
			$('.form').removeClass('hidden');
			$('.form-success').addClass('hidden')
		})
	}


	$('.phone-check').inputmask("+375-99-9999999");

	// Check validation on submit
	$('#form-btn').on('click', function (e) {
		e.preventDefault();
		checkRequired();
		checkEmail();
		checkTel();
		let classArr = [];
		inputs.forEach(function(item) {
			let classes = item.className.split(' ')
			classes.forEach(function(el) {
				classArr.push(el);
			})
		})
		if (classArr.indexOf('error') != -1) {
			return false
		}
		else {
			$('.form').addClass('hidden');
			setTimeout(function () {
				$('.form-success').removeClass('hidden')
			}, 200)
		}
	})

})