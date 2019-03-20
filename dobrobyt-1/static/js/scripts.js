$('.button').mousemove(function (e) {
	var x = e.pageX - $(this).offset().left;
	var y = e.pageY - $(this).offset().top;

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
})

var controller = new ScrollMagic.Controller();

function coin1Desktop() {
	var coin1 = new TimelineMax();
	coin1
		.set('.coin', {
			y: 0
		})
		.to('.coin', 3.5, {
			y: 340
		})
		.to('.coin', .5, {
			scale: 0
		})

	var scene1 = new ScrollMagic.Scene({
			triggerElement: '.button',
			duration: 350
		}).setTween(coin1)
		.addTo(controller);
}

function coin1Mobile() {
	var coin1 = new TimelineMax();
	coin1
		.set('.coin', {
			y: 0
		})
		.to('.coin', 9.5, {
			y: 750
		})
		.to('.coin', .5, {
			scale: 0
		})

	var scene1 = new ScrollMagic.Scene({
			triggerElement: '#trigger-mobile',
			duration: 530,
			triggerHook:-1
		}).setTween(coin1)
		.addTo(controller);
}

function coin1Devices(){
	if ($(window).width() > 600) {
		coin1Desktop();
	} else {
		coin1Mobile();
	}
}

coin1Devices();



function pigDesktop() {
	var pig = new TimelineMax();
	pig
		.set('.pig-eye-2', {
			ease: Power0.easeNone,
			y: 0
		})
		.set('.pig-eye-3', {
			ease: Power0.easeNone,
			y: 0
		})
		.to('.pig-eye-3', .6, {
			ease: Power0.easeNone,
			y: -10
		}, 0)
		.to('.pig-eye-2', .4, {
			ease: Power0.easeNone,
			y: -16
		}, 0)

	var pigScene = new ScrollMagic.Scene({
			triggerElement: '#trigger-pig',

		}).setTween(pig)
		.addTo(controller)
}

function pigMobile(){
	var pig = new TimelineMax();
	pig
		.set('.pig-eye-2', {
			ease: Power0.easeNone,
			y: 0
		})
		.set('.pig-eye-3', {
			ease: Power0.easeNone,
			y: 0
		})
		.to('.pig-eye-3', .6, {
			ease: Power0.easeNone,
			y: -9
		}, 0)
		.to('.pig-eye-2', .4, {
			ease: Power0.easeNone,
			y: -11
		}, 0)

	var pigScene = new ScrollMagic.Scene({
			triggerElement: '#trigger-pig',

		}).setTween(pig)
		.addTo(controller)
}
function pigDevices(){
	if ($(window).width() > 1024) {
		pigDesktop();
	} else {
		pigMobile();
	}
}

$(window).on('resize load',pigDevices);



function coinRotate() {
	var bodyHeight = $("body").height();
	window.onscroll = function () {
		var degree = Math.round(($('.coin-animated').offset().top / 150)) * 180;
		var deg = $(window).scrollTop() * (360 / bodyHeight);
		$(".coin-animated").css({
			"transform": "rotateY(" + degree + "deg)",
		});
	};
}



function coinShow() {
	var coinShowed = new TimelineMax();
	coinShowed
		.to('.coin-animated-box', .1, {
			scale: 1
		})
	var coinShow = new ScrollMagic.Scene({
			triggerElement: '#trigger-coin',
			offset: -50
		}).setTween(coinShowed)
		.addTo(controller)
}



function coinHideDesktop() {
	var coinHidden = new TimelineMax();
	coinHidden
		.set('.coin-animated-box', {
			scale: 1
		})
		.to('.coin-animated-box', 1, {
			scale: 0
		})

	var coinHide = new ScrollMagic.Scene({
			triggerElement: '#trigger-5',
			duration: 780,
			offset: -150
		}).setTween(coinHidden)
		.addTo(controller)
}

function coinHideMobile() {
	var coinHidden = new TimelineMax();
	coinHidden
		.set('.coin-animated-box', {
			scale: 1
		})
		.to('.coin-animated-box', 1, {
			scale: 0
		})
		.to('.arrows', .5, {
			opacity: 1
		}, 0)

	var coinHide = new ScrollMagic.Scene({
			triggerElement: '#trigger-5',
			duration: 900,
			offset: -150
		}).setTween(coinHidden)
		.addTo(controller)
}


if ($(window).width() > 1024) {
	coinHideDesktop();
} else {
	coinHideMobile();
}

// function DefaultCoinHide() {
// 	if ($('.coin-animated-box').offset().top >= $('#trigger-bug').offset().top) {
// 		$('.coin-animated-wrap').addClass('hidden');
// 	}

// 	var coinHidee = new ScrollMagic.Scene({
// 			triggerElement: '#trigger-bug',
// 			offset: -250
// 		}).setClassToggle('.coin-animated-wrap', 'hidden')
// 		.addTo(controller)
// }

function DefaultCoinHide(){
	$(window).scroll(function(){
		if ($('.coin-animated-box').offset().top <= ($('.content').offset().top)+20){
			$('.coin-animated-wrap').addClass('hidden');
		}
		else if($('.coin-animated-box').offset().top >= $('.info').offset().top){
			$('.coin-animated-wrap').addClass('hidden');
		}
		else{
			$('.coin-animated-wrap').removeClass('hidden');
		}
	})
}


coinRotate();
coinShow();
DefaultCoinHide();


// Form-sending
function sendForm() {
	$.ajax({
		type: "post",
		url: "url.php",
		data: $('#form').serializeArray(),
		dataType: "json",
		success: function (data) {
			console.log(data);
			$('.form-box').css({
				'visibility': 'hidden'
			});
			var err = data;
			if (err == '1') {
				$('.form-success').removeClass('hidden');
				$('#name').val('');
				$('#tel').val('');
				$('#email').val('');
				$('#name').attr('style','');
				$('#tel').attr('style','');
				$('.requirements').css({'opacity':'0'})
			} else {
				$('.form-box').css({
					'visibility': 'visible'
				});
				if ($('#name').val().length == 0 && $('#tel').val().length == 0) {
					$('#name').css({
						'border-bottom': '2px solid red'
					});
					$('.requirements--name').css({
						'opacity': '1'
					});
					$('#tel').css({
						'border-bottom': '2px solid red'
					});
					$('.requirements--tel').css({
						'opacity': '1'
					});
				}
				else if($('#name').val().length == 0){
					$('#name').css({
						'border-bottom': '2px solid red'
					});
					$('.requirements--name').css({
						'opacity': '1'
					});
				}
				else if($('#tel').val().length == 0){
					$('#tel').css({
						'border-bottom': '2px solid red'
					});
					$('.requirements--tel').css({
						'opacity': '1'
					});
				}
			}
		}
	});
}


$("#to-form").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
	top = ($(id).offset().top)-150;
	$('body,html').animate({
		scrollTop: top
	}, 1000);
});


$('#name').keyup(function(){
	if($('#name').val().length!=0){
		$('.requirements--name').css({'opacity':'0'});
		$('#name').css({'border-bottom':'2px solid #38A512'})
	}
})

$('#tel').keyup(function(){
	if($('#tel').val().length!=0){
		$('.requirements--tel').css({'opacity':'0'});
		$('#tel').css({'border-bottom':'2px solid #38A512'})
	}
})

$('.form-success-close').click(function () {
	$('.form-box').css({
		'visibility': 'visible'
	});
	$('.form-success').addClass('hidden');
})