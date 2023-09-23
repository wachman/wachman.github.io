(function($) {
	// 生成UUID
	function guid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return 'id-' + v.toString(16);
		});
	}
	// 填充首屏图文
	function inti_product_summary(){
		var product_summary = [{
			'sub-title': 'New Products',
			'title': 'Cute Spotlight',
			'summary': 'The introduction text of this spotlight briefly introduces the parameters related to the spotlight such as brightness, color gamut, etc.',
			'button': {
				'link': '#',
				'title': 'Lean More'
			},
			'image': 'assets/images/lights/7-2.png'
		},{
			'sub-title': 'New Products',
			'title': 'Simple Downlight',
			'summary': 'This downlight is very large, long life, strong brightness, suitable for parks, shopping malls and other public areas.',
			'button': {
				'link': '#',
				'title': 'Lean More'
			},
			'image': 'assets/images/lights/8-1.png'
		},{
			'sub-title': 'New Products',
			'title': 'Household Lamps',
			'summary': 'Spotlights are mainly used indoors during home decoration, and can usually effectively create an atmosphere.',
			'button': {
				'link': '#',
				'title': 'Lean More'
			},
			'image': 'assets/images/lights/10.png'
		},{
			'sub-title': 'New Products',
			'title': 'Stage Lights',
			'summary': 'Stage lights usually require lights that are rich in color and can change in time with the music.',
			'button': {
				'link': '#',
				'title': 'Lean More'
			},
			'image': 'assets/images/lights/1-1.png'
		}];
		var html = '';
		for(var key in product_summary){			
			html += '<div class="hero-slide-item slider-height swiper-slide d-flex">';
			html += '	<div class="container align-self-center">';
			html += '		<div class="row">';
			html += '			<div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">';
			html += '				<div class="hero-slide-content slider-animated-1">';
			html += '					<span class="category">';
			html += '					' + product_summary[key]['sub-title'];
			html += '					</span>';
			html += '					<h2 class="title-1">';
			html += '					' + product_summary[key]['title'];
			html += '					</h2>';
			html += '					<p>';
			html += '					' +  product_summary[key]['summary'];
			html += '					</p>';
			html += '					<a href="' + product_summary[key]['button']['link'] +'" class="btn btn-lg btn-primary btn-hover-dark mt-5">';
			html += '					' + product_summary[key]['button']['title'];
			html += '					</a>';
			html += '				</div>';
			html += '			</div>';
			html += '			<div class="col-xl-6 col-lg-5 col-md-5 col-sm-5">';
			html += '				<div class="hero-slide-image">';
			html += '					<img src="' + product_summary[key]['image'] +'" alt="" />';
			html += '				</div>';
			html += '			</div>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';
		}
		$('.banner-swiper-wrapper').html(html);
	}
	inti_product_summary();
	

	// 填充产品信息
	function init_products() {
		var products = {
			'title': 'Best Lights',
			'description': 'We provide you with a variety of lighting options, please contact us for customization',
			'categories': [{
				'title': 'New Arrivals',
				'id': guid(),
				'items': [{
					'new': true,
					'discount': '10',
					'id': guid(),
					'title': 'Model 1',
					'price': '$22.11',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/1-1.png']
				},{
					'new': false,
					'discount': '0',
					'id': guid(),
					'title': 'Model 2',
					'price': '$20.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/1-2.png']
				},{
					'new': true,		
					'discount': '0',
					'id': guid(),
					'title': 'Model 3',
					'price': '$11.33',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/2-1-1.png']
				},{
					'new': false,
					'discount': '0',
					'id': guid(),
					'title': 'Model 4',
					'price': '$12.11',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/2-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 5',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/2-2-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 6',
					'price': '$45.16',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/2-2.png']
				},{
					'new': false,
					'discount': '0',
					'id': guid(),
					'title': 'Model 7',
					'price': '$77.89',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/3-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 8',
					'price': '$23.45',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/3-2.png']
				}]
			},{
				'title': 'Best Sellers',
				'id': guid(),
				'items': [{
					'new': false,
					'discount': '10',
					'id': guid(),
					'title': 'Model 9',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/4-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 10',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/4-2.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 11',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/5-1-1.png']
				},{
					'new': true,
					'discount': '15',
					'id': guid(),
					'title': 'Model 12',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/5-2-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 13',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/5-2.png']
				},{
					'new': false,
					'discount': '20',
					'id': guid(),
					'title': 'Model 14',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/6-1.png']
				},{
					'new': true,
					'discount': '0',
					'id': guid(),
					'title': 'Model 15',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/7-1.png']
				},{
					'new': true,
					'discount': '0',
					'title': 'Model 16',
					'price': '$18.90',
					'description': 'Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco',
					'images': ['assets/images/lights/7-2.png']
				}]
			}]			
		};


		// 填充产品部分主标题和描述
		$('.product-title').text(products['title']);
		$('.product-description').text(products['description']);
		// 填充目录分类及产品信息
		var categories_html = '';
		var categories = products['categories'];
		

		var first = true;
		for (var key in categories) {
			categories_html += '<li class="nav-item">';
			categories_html += '	<a class="nav-link '+(first ? ' active': '')+'" data-bs-toggle="tab" href="#' + categories[key]['id'] +'">';
			categories_html += '	' + categories[key]['title'];
			categories_html += '	</a>';
			categories_html += '</li>';
			first = false;
		}
		// 填充分类目录标题
		$('.product-tab-nav').html(categories_html);
		// 填充每个分类目录下产品
		first = true;
		var items_html = '';
		var index = 0;
		for (var key in categories) {
			var items = categories[key]['items'];
			items_html += '<div class="tab-pane fade' + (first ? ' show active':'')+' " id="' + categories[key]['id'] +'">';
			items_html += '	<div class="row">';
			for (var k in items) {
				items_html += '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="' +  (100 * (index % 8)) +'">'
				items_html += '	<div class="product" product="' + items[k]['id'] +'">';
				items_html += '		<div class="thumb">';
				items_html += '			<a href="javascript:0;" class="image">';
				items_html += '				<img src="' + items[k]['images'][0] +'" />'; // 主图
				items_html += '				<img class="hover-image" src="' + items[k]['images'][0] +'" />'; // hover图
				items_html += '			</a>';
				items_html += '			<span class="badges">';
				items_html += '			' + (items[k]['discount'] != 0 ? '<span class="sale">-'+items[k]['discount']+'%</span>': '') + (items[k]['new'] == true ? '<span class="new">New</span>' : ''); // 是否为新品
				items_html += '			</span>';
				items_html += '			<div class="actions">';
				items_html += '				<a href="javascript:0;" class="action quickview" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#' + items[k]['id'] + '"><i class="icon-size-fullscreen"></i></a>';
				items_html += '			</div>';
				// items_html += '			<button title="More" class=" add-to-cart">More</button>';
				items_html += '			';
				items_html += '		</div>';
				items_html += '		<div class="content"><h5 class="title"><a class="quickview">' + items[k]['title'] + '</a></h5><span class="price"><span class="new">'+items[k]['price']+'</span> </span> </div>'
				items_html += '	</div>';
				items_html += '</div>';					
			}
			items_html += '	</div>';
			items_html += '</div>';
			console.log(100 * (index % 8))
			index = index + 1;
			first = false;

		}
		// console.log(items_html);
		$('.product-tab-content').html(items_html);


		// 填充产品参数信息
		var modals_html = '';
		for (var key in categories) {
			var items = categories[key]['items'];
			for (var k in items) {
				modals_html += '<div class="modal fade" id="' + items[k]['id'] + '" tabindex="-1" role="dialog">';
				modals_html += '	<div class="modal-dialog" role="document">';
				modals_html += '		<div class="modal-content">';
				modals_html += '			<div class="modal-header">';
				modals_html += '				<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>';
				modals_html += '			</div>';
				modals_html += '			<div class="modal-body">';
				modals_html += '				<div class="row">';
				modals_html += '					<div class="col-md-5 col-sm-12 col-xs-12 mb-lm-30px mb-sm-30px">';
				modals_html += '						<div class="swiper-container gallery-top mb-20px">';
				modals_html += '							<div class="swiper-wrapper">';

				// 填充图片
				for(var m in items[k]['images']){
					modals_html += '<div class="swiper-slide"> <img class="img-responsive m-auto" src="' + items[k]['images'][m] +'" alt=""></div>';
				}
				modals_html += '							</div>';
				modals_html += '						</div>';
				modals_html += '						<div class="swiper-container gallery-thumbs slider-nav-style-1 small-nav">'
				modals_html += '							<div class="swiper-wrapper">';
				// 填充图片
				for(var m in items[k]['images']){
					modals_html += '<div class="swiper-slide"> <img class="img-responsive m-auto" src="' + items[k]['images'][m] +'" alt=""></div>';
				}
				modals_html += '							</div>';
				modals_html += '							<div class="swiper-buttons">';
				modals_html += '								<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>';
				modals_html += '							</div>';
				modals_html += '						</div>';
				modals_html += '					</div>';
				modals_html += '					<div class="col-md-7 col-sm-12 col-xs-12">';
				modals_html += '						<div class="product-details-content quickview-content">';
				modals_html += '							<h2>' + items[k]['title'] +'</h2>';
				modals_html += '							<div class="pro-details-rating-wrap"><div class="rating-product"><i class="ion-android-star"></i><i class="ion-android-star"></i><i class="ion-android-star"></i><i class="ion-android-star"></i><i class="ion-android-star"></i></div><span class="read-review"><a class="reviews" href="#">Chat</a></span></div>';

				modals_html += '							<div class="pricing-meta">';
				modals_html += '								<ul>';
				modals_html += '									<li class="old-price not-cut">';
				modals_html += '									' + items[k]['price'];
				modals_html += '									</li>';
				modals_html += '								</ul>';
				modals_html += '							</div>';
				modals_html += '							<p class="quickview-para">';
				modals_html += '							' + items[k]['description'];
				modals_html += '							</p>';
				modals_html += '							<div class="pro-details-quality">';
				modals_html += '								<div class="cart-plus-minus"><input class="cart-plus-minus-box" type="text" name="qtybutton" value="100" /></div><div class="pro-details-cart btn-hover"><button class="add-cart btn btn-primary btn-hover-primary ml-4">Submit</button></div>';
				modals_html += '							</div>';
				modals_html += '						</div>';
				modals_html += '					</div>';
				modals_html += '				</div>';
				modals_html += '			</div>';
				modals_html += '		</div>';
				modals_html += '	</div>';
				modals_html += '</div>';

			}			
		}
		$('.modals').html(modals_html);



	}
	init_products();

	



})(jQuery);

(function($) {
	"use strict";

	/*----------------------------------------
			Bootstrap dropdown               
	-------------------------------------------*/

	// Add slideDown animation to Bootstrap dropdown when expanding.

	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	// Add slideUp animation to Bootstrap dropdown when collapsing.
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});


	/*---------------------
		Toggle Search Bar
	--------------------- */
	$(".search-btn").on("click", function() {
		$(this).toggleClass('active');
		$('.dropdown_search').slideToggle('medium');
	});

	/*---------------------------
	   Menu Fixed On Scroll Active
	------------------------------ */
	$(window).on("scroll", function(e) {
		var window_top = $(window).scrollTop() + 1;
		if (window_top > 250) {
			$(".sticky-nav").addClass("menu_fixed animated fadeInDown");
		} else {
			$(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
		}
	});

	/*---------------------------
		  Nice Select 
	   ------------------------------ */

	$('select.shop-sort').niceSelect();

	/*---------------------
		venobox
	--------------------- */
	$('.venobox').venobox();
	/*---------------------

	/*---------------------------
	   Commons Variables
	------------------------------ */
	var $window = $(window),
		$body = $("body");




	/*---------------------------------
		Off Canvas Function
	-----------------------------------*/
	(function() {
		var $offCanvasToggle = $(".offcanvas-toggle"),
			$offCanvas = $(".offcanvas"),
			$offCanvasOverlay = $(".offcanvas-overlay"),
			$mobileMenuToggle = $(".mobile-menu-toggle");
		$offCanvasToggle.on("click", function(e) {
			e.preventDefault();
			var $this = $(this),
				$target = $this.attr("href");
			$body.addClass("offcanvas-open");
			$($target).addClass("offcanvas-open");
			$offCanvasOverlay.fadeIn();
			if ($this.parent().hasClass("mobile-menu-toggle")) {
				$this.addClass("close");
			}
		});
		$(".offcanvas-close, .offcanvas-overlay").on("click", function(e) {
			e.preventDefault();
			$body.removeClass("offcanvas-open");
			$offCanvas.removeClass("offcanvas-open");
			$offCanvasOverlay.fadeOut();
			$mobileMenuToggle.find("a").removeClass("close");
		});
	})();

	/*----------------------------------
		Off Canvas Menu
	-----------------------------------*/
	function mobileOffCanvasMenu() {
		var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
			$offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

		/*Category Sub Menu Toggle*/
		$offCanvasNav.on("click", "li a, .menu-expand", function(e) {
			var $this = $(this);
			if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
				e.preventDefault();
				if ($this.siblings("ul:visible").length) {
					$this.parent("li").removeClass("active");
					$this.siblings("ul").slideUp();
					$this.parent("li").find("li").removeClass("active");
					$this.parent("li").find("ul:visible").slideUp();
				} else {
					$this.parent("li").addClass("active");
					$this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
					$this.closest("li").siblings("li").find("ul:visible").slideUp();
					$this.siblings("ul").slideDown();
				}
			}
		});
	}
	mobileOffCanvasMenu();


	/*----------------------------------
	 * Offcanvas: User Panel
	 ----------------------------------*/
	function mobileOffCanvasUserPanel() {
		var $offCanvasNav = $('.offcanvas-userpanel'),
			$offCanvasNavSubMenu = $offCanvasNav.find('.user-sub-menu');

		/*Add Toggle Button With Off Canvas Sub Menu*/
		$offCanvasNavSubMenu.parent().prepend('<span class="offcanvas__user-expand"></span>');

		/*Category Sub Menu Toggle*/
		$offCanvasNav.on('click', 'li a, .offcanvas__user-expand', function(e) {
			var $this = $(this);
			if ($this.attr('href') === '#' || $this.hasClass('offcanvas__user-expand')) {
				e.preventDefault();
				if ($this.siblings('ul:visible').length) {
					$this.parent('li').removeClass('active');
					$this.siblings('ul').slideUp();
					$this.parent('li').find('li').removeClass('active');
					$this.parent('li').find('ul:visible').slideUp();
				} else {
					$this.parent('li').addClass('active');
					$this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
					$this.closest('li').siblings('li').find('ul:visible').slideUp();
					$this.siblings('ul').slideDown();
				}
			}
		});
	}
	mobileOffCanvasUserPanel();

	/*---------------------
		Hero Slider
	 ---------------------- */

	var heroSlider = new Swiper('.hero-slider.swiper-container', {
		loop: true,
		speed: 1000,
		effect: "fade",
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	/*---------------------
		Category Slider
	 ---------------------- */

	var categorySlider = new Swiper('.category-slider.swiper-container', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		speed: 1500,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},

		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			478: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		},
	});

   
   
	/*---------------------
		New Product Slider
	 ---------------------- */

	var productSlider = new Swiper('.new-product-slider.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		speed: 1500,
		loop: true,

		// Navigation arrows

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			478: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	/*---------------------------
		Quick view Slider 
	------------------------------ */
	var galleryThumb = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumb
		}
	});

	/*---------------------------
		Product Details Slider 
	------------------------------ */
	var zoomThumb = new Swiper('.zoom-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var zoomTop = new Swiper('.zoom-top', {
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: zoomThumb
		}
	});




   


	/*---------------------
		Scroll Up
	--------------------- */
	$.scrollUp({
		scrollText: '<i class="ion-android-arrow-up"></i>',
		easingType: "linear",
		scrollSpeed: 900,
		animation: "fade",
	});
	/*---------------------
		Countdown
	--------------------- */
	$("[data-countdown]").each(function() {
		var $this = $(this),
			finalDate = $(this).data("countdown");
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<span class="cdown day"><span class="cdown-1">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="cdown-1">%-H</span><p>Hours</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Mins</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'));
		});
	});




	


})(jQuery);