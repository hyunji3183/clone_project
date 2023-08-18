$('main').prepend('<header></header>');
$('header').load('../html/header.html header>article', head);

function head() {

    $('.head li a').on({
        mouseenter: function () {
            $('.bi')
                .addClass('active')
                .css({
                    'height': $('.bar').height() + 70 + 'px'
                });
        }
    })
    $('.bi').on('mouseleave', function () {
        $('.bi')
            .removeClass('active')
            .css({
                'height': '48px'
            });
    })

}


function loadJS() {

    function scrollHead() {
        const elhead = document.querySelector('header .bi'),
            elscroll = document.querySelector('header .bi .head');

        let change = { y: 0, y2: 0, status: true };

        window.addEventListener('scroll', function () {
            change.y = window.pageYOffset;

            change.status = (change.y > change.y2) ? true : false;

            if (change.status) {
                elhead.classList.add('active')
                elscroll.style = "height:48px; background-color: rgb(255, 95, 0); transition:0.5s;"
            }
            else {
                elhead.classList.remove('active')
                elscroll.style = "transition:0.5s;"
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



    const elGroup = document.querySelectorAll('.group');
    const elHistory = document.querySelector('.HISTORY');

    function show(entries, observer) {
        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add('on')

                if (entry.target.classList.contains('HISTORY')) {
                    $('.bg').css({ backgroundColor: 'white', color:'black'});
                    
                } else {
                    observer.unobserve(entry.target);
                }

                console.log('true');
            } else {
                console.log('false');
                $('.bg').css({ backgroundColor: '#2b0f0c' });

            }


        })
    }

    let opt = {
        rootMargin: '0px',
        threshold: 0.3
    }

    const intersection = new IntersectionObserver(show, opt);
    // intersection.observe(elDiv);
    intersection.observe(elHistory);
    elGroup.forEach(function (div) {
        intersection.observe(div);
    });



    const elCount = document.querySelector('.WORLD_WIDE_FANDOM .count h4')
    let count = 45000000;
    let maxNum = 46000000;

    let startcount = setInterval(function () {
        elCount.innerHTML = count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        if (count < maxNum) { count += 5000; }
        else { clearInterval(startcount); }
    }, 10);



}
window.addEventListener('load', loadJS);

