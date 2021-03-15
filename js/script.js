function testWebP(callback) {

   var webP = new Image()
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
   }
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp')
   } else {
      document.querySelector('body').classList.add('no-webp')
   }
})

//header

$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active')
   })
})

//document.querySelectorAll('.faq__btn').forEach((item) =>
//   item.addEventListener('click', function (e) {
//      e.preventDefault();
//      const id = e.target.getAttribute('href').replace('#', '')

//      document.querySelectorAll('.faq__btn').forEach(
//         (child) => child.classList.remove('faq__btn-active')
//      )
//      document.querySelectorAll('.faq__content').forEach(
//         (child) => child.classList.remove('faq__content-active')
//      )


//      item.classList.add('faq__btn-active')
//      document.getElementById(id).classList.add('faq__content-active')
//   })
//)

//document.querySelector('.faq__btn').click()

/*--------------------------------------------------------*/
$(document).ready(function () {
   $('.faq__btn').click(function (e) {
      e.preventDefault();

      $('.faq__btn').removeClass('faq__btn-active')
      $('.faq__content').removeClass('faq__content-active')


      $(this).addClass('faq__btn-active')
      $($(this).attr('href')).addClass('faq__content-active')
   })
   $('.faq__btn:first').click()
})

/*--------------------------------------------------------*/
$(function () {
   let Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false

      let dropdownlink = this.el.find('.accardion__dropdown')
      dropdownlink.on('click',
         { el: this.el, multiple: this.multiple },
         this.dropdown)
      let dropdown = this.el.find('.card__info-dropdown')
      dropdown.on('click',
         { el: this.el, multiple: this.multiple },
         this.dropdown)
   }

   Accordion.prototype.dropdown = function (e) {
      let $el = e.data.el,
         $this = $(this),

         $next = $this.next()

      $next.slideToggle()
      $this.parent().toggleClass('open')

      if (!e.data.multiple) {

         $el.find('.accardion__text').not($next).slideUp().parent().removeClass('open')
         $el.find('.card__desc').not($next).slideUp().parent().removeClass('open')
      }
   }

   let accordion = new Accordion($('.accardion__list'), false)
   let accordions = new Accordion($('.card__body'), false)
})
/*--------------------------------------------------------*/
const multiSelect = () => {
   const elements = document.querySelectorAll('.form__select')
   elements.forEach(el => {
      const choices = new Choices(el, {
         searchEnabled: false,
         searchChoices: false,
         //classNames: {
         //   containerInner: 'choices__inner slider__inner',
         //},

      });
   })
};
multiSelect()

/*--------------------------------------------------------*/

$(document).ready(function () {
   $('.slider__body').slick({
      arrows: true,
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      swipe: true,
      prevArrow: "<img src='./img/prev.svg' class='slick-prev'>",
      nextArrow: "<img src='./img/next.svg' class='slick-next'>",
      responsive: [
         {
            breakpoint: 1132,
            settings: {
               slidesToShow: 3
            }
         },
         {
            breakpoint: 979,
            settings: {
               centerMode: true,
               variableWidth: true,
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: false
            }
         },

      ]
   })
})
$(window).on('load resize', function () {
   if ($(window).width() < 979) {
      $('.intro__body:not(.slick-initialized)').slick({
         dots: true,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         centerMode: true,
         variableWidth: true,
         infinite: false,
         swipe: true,
      });
   } else {
      $(".intro__body.slick-initialized").slick("unslick")
   }
   if ($(window).width() < 979) {
      $('.pref__body:not(.slick-initialized)').slick({
         dots: true,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         centerMode: true,
         variableWidth: true,
         swipe: true,
      });
   } else {
      $(".pref__body.slick-initialized").slick("unslick")
   }
   if ($(window).width() < 607) {
      $('.order__header:not(.slick-initialized)').slick({
         dots: true,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         centerMode: true,
         variableWidth: true,
         swipe: true,
      });
   } else {
      $(".order__header.slick-initialized").slick("unslick")
   }

});
/*----------------------------------------------------*/
