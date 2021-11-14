$(function () {
  const date = new Date()
  $('#date').html(date.getFullYear())
  $('.navbar-brand span').fadeIn(1000)
  $('.navbar-brand span').removeClass('d-none')

  setTimeout(() => {
    $('#hero-1 .btn-email').addClass('fade')
  }, 1500)
  $('.animate').each(function (i) {
    setTimeout(() => {
      $('.animate').eq(i).addClass('fade')
    }, 200 * i)
  })
  let offsetTentang = $('#tentang').offset().top
  let offsetProjek = $('#projek').offset().top
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop()
    if (scrollTop > offsetTentang - 350) {
      $('#tentang img').addClass('fade')
      $('.animate-1').each(function (i) {
        setTimeout(() => {
          $('.animate-1').eq(i).addClass('fade')
        }, 400 * i)
      })
    }

    if (scrollTop > offsetProjek - 200) {
      $('.animate-card').each(function (i) {
        setTimeout(() => {
          $('.animate-card').eq(i).addClass('fade')
        }, 800 * i)
      })
    }
    if (scrollTop > 120) {
      $('nav.navbar')
        .removeClass('bg-transparent')
        .addClass('border-bottom bg-putih')
    } else {
      $('nav.navbar')
        .addClass('bg-transparent')
        .removeClass('bg-putih border-bottom')
    }
  })
  $('nav a.nav-link').click(function (e) {
    $('button.navbar-toggler').addClass('collapsed')
    $('nav button div').removeClass('change')
    $('#navbarNav').removeClass('show')
    $('nav a.nav-link').removeClass('active')
    $(this).addClass('active')
  })

  $('.navbar-toggler').click(function (e) {
    e.preventDefault()
    $('nav button div').toggleClass('change')
  })

  $(document).on('click', 'a.nav-link', function (e) {
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 40,
        },
        800,
      )
    e.preventDefault()
  })
})
