$('main').prepend('<header></header>');
$('header').load('./html/header.html header>article', head);

function head() {
	
	$('.head li a').on({
		mouseenter:function(){
			$('.bi')
			.addClass('active')
			.css({
				'height': $('.bar').height()+70+'px'
			});
		}
	})
	$('.bi').on('mouseleave',function(){
		$('.bi')
		.removeClass('active')
		.css({
			'height': '48px'
		});
	})

}
$('main').append('<footer></footer>');
$('footer').load('./html/footer.html');

function loadJS() {
	function scrollHead() {
		const elscroll = document.querySelector('header .bi');

		let change = { y: 0, y2: 0, status: true };

		window.addEventListener('scroll', function () {
			change.y = window.pageYOffset;

			change.status = (change.y > change.y2) ? true : false;

			if (change.status) {
				elscroll.classList.add('active')				
			}
			else {
				elscroll.classList.remove('active')
			}
		})
	}
	scrollHead();



	function header() {
		const elBar = document.querySelector('header .bi .head'),
			elToggleOpen = document.querySelector('header .bi .head .active'),
			elOpen = document.querySelector("header .bi .head .active span");

		elToggleOpen.onclick = function () {
			elBar.classList.remove('head');
			elBar.classList.add('headactive');

			const elToggleclose = document.querySelector("header .bi .headactive .active"),
				elClose = document.querySelector("header .bi .headactive .active span");
			elBar.style.transform = "translate(0%)"
			elClose.innerHTML = `close`

			elToggleclose.onclick = function () {
				elBar.classList.remove('headactive');
				elBar.classList.add('head');
				elBar.style.transition = "0.5s"

				elOpen.innerHTML = `menu`;
				setTimeout(header, 500)
			}
		}
	}
	header();


	

	// $('header .bi .head').on('mouseenter', function(){
	// 	$('header .bi .head li').stop().slideUp();
	// 	$(this).find('li').stop().slideDown();
	// })





	var swiper = new Swiper(".slider.mySwiper", {
		/* autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},         */
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	dynamicBullets: true,
		// },
		loop: true,
		freeMode: true,

		breakpoints: {
			360: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			720: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			960: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1600: {
				slidesPerView: 5,
				spaceBetween: 20,
			}
		},
	});



	const videos = document.querySelectorAll('#games');
	function startPreview(video) {
		video.muted = true;
		video.currentTime = 0;
		video.play();
	}

	function stopPreview(video) {
		video.load();
		video.currentTime = 0;
		video.pause();
	}

	[].forEach.call(videos, function (video) {
		stopPreview(video);

		video.addEventListener("mouseenter", () => {
			startPreview(video);
		});
		video.addEventListener("mouseleave", () => {
			stopPreview(video);
		});
	});



	const elGroup = document.querySelectorAll('.group');

	function show (entries, observer){
		entries.forEach(function(entry){
			console.log(entry.target);
			if (entry.isIntersecting) {
				entry.target.classList.add('on')
				observer.unobserve(entry.target);
			}
		})
	}
	
	let opt = {
		rootMargin: '0px',
		threshold: 0.4
	}

	const intersection = new IntersectionObserver(show, opt);
	// intersection.observe(elDiv);
	elGroup.forEach(function(div)
	{
		intersection.observe(div);
	});
	








}
window.addEventListener('load', loadJS);

