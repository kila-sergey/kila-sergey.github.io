// Ховер по кнопке
$('.button').mousemove(function (e) {
	var x = e.pageX - $(this).offset().left;
	var y = e.pageY - $(this).offset().top;

	e.target.style.setProperty('--x', `${ x }px`)
	e.target.style.setProperty('--y', `${ y }px`)
})

// Анимация по клику на кнопку 
$('#know').click(function () {
	$('.head-block').removeClass('hidden');
	$('.head-block--first').addClass('hidden');
	$('.head-bg').removeClass('hidden');
	$(document).unbind('mousewheel DOMMouseScroll');
});


// $(document).scroll(function () {
// 	$('.head-block').removeClass('hidden');
// 	$('.head-block--first').addClass('hidden');
// 	$('.head-bg').removeClass('hidden');
// })

// Отключение прокрутки
$('.head').on('scroll mousewheel',function () {
	if ($('.head-bg--second').hasClass('hidden')) {
		$(document).bind('mousewheel DOMMouseScroll', function () {
			stopWheel();
		});
		$(this).on('scroll mousewheel', function () {
			$('.head-block').removeClass('hidden');
			$('.head-block--first').addClass('hidden');
			$('.head-bg').removeClass('hidden');
		})
	}
	else if(!($('.head-bg--second').hasClass('hidden'))){
		setTimeout(function(){
			$(document).unbind('mousewheel DOMMouseScroll');
		},1000)
	}
})

function stopWheel(e) {
	if (!e) {
		e = window.event;
	}
	if (e.preventDefault) {
		e.preventDefault();
	}
	e.returnValue = false;
}

// Плаынй скролл до формы
$("#to-form").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = ($(id).offset().top) - 150;
	$('body,html').animate({
		scrollTop: top
	}, 1000);
});

$('select').styler();

$('div:not(.jq-selectbox)').click(function () {
	if ($('.jq-selectbox').hasClass('focused')) {
		$('label[for="area"]').css({
			'opacity': '1'
		})
	} else {
		$('label[for="area"]').css({
			'opacity': '.3'
		})
	}
})


$('#form-button').click(function () {
	$('.form-success').removeClass('hidden');
})

// Закрыть сообщение об успешной отправке
$('.form-success-close').click(function () {
	$('.form-success').addClass('hidden');
})