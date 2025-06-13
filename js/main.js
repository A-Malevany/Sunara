$('.header .menu .menu-list > li:has(.sub-menu)').addClass('arrow');

function menuMobile() {
	if ($(window).width() <= '1280') {
		$('.header .menu .menu-list li.arrow > span').click( function (e) {
			e.preventDefault();
			$(this).parent('li').toggleClass('active');
			$(this).next('.sub-menu').slideToggle();
		})
	}

	$('.header__menu-btn').click(function () {
		$(this).toggleClass('active');
		$('.header .menu').fadeToggle(300);
		$('body').toggleClass('popup-open');
	})
}
menuMobile();

function tabsToggle() {
	$(document).ready(function () { 
		$('.tabs-wrapper .tab-item:first').trigger('click');
	});

	$('.tab-item').click(function () {
		$(this).closest('.tabs-wrapper').find('.tab-item').removeClass('active');
		$(this).addClass('active');

		$(this).closest('.tabs-wrapper').find('.tab-content').fadeOut(0);
		$(`#${$(this).data('tab_id')}`).fadeIn(200);
	})
}
tabsToggle();