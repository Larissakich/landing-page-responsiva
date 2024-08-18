$(document).ready(function() {
  const sections = $('section');
  const navItems = $('.nav-item');
  
  $(window).on('scroll', function() {
    const header = $('header');
    let activeSectionIndex = 0;
    const scrollPosition = $(window).scrollTop() - $('#navbar').outerHeight();

    if (scrollPosition <= 0) { 
      header.css('box-shadow', 'none'); 
    } else { 
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)'); 
    }

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('.dish', {
    distance: '20%',
    origin: 'left',
    duration: 2000,
  });

  ScrollReveal().reveal('#cta', {
    distance: '20%',
    origin: 'left',
    duration: 2000,
  });

  ScrollReveal().reveal('#testimonial_chef', {
    distance: '20%',
    origin: 'left',
    duration: 1000,
  });

  ScrollReveal().reveal('.feedback', {
    distance: '20%',
    origin: 'right',
    duration: 1000,
  });

  $('#mobile_btn').on('click', function () {
	$('#mobile_menu').toggleClass('active');
	$('#mobile_btn').find('i').toggleClass('fa-x');
  });
});