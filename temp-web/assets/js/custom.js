function aboutUsContent(el) {
  var jsonData = {}
  path = '/api/board/';
  var info = [];
  info['url'] = path;
  info['information'] = jsonData;
  info['params'] = [el];
  return info;
}

function aboutUsContentRes(res, params) {
  console.log(res);

  var str1 = "";
  var str2 = "";
  var str3 = "";
  var str4 = "";
  for (var i = 0; i < 8; i++) {
    str1 += "<tr><td>" + res['bazar'][i][0] + "</td><td>" + res['bazar'][i][1] + "</td></tr>";
  }
  for (var i = 0; i < 7; i++) {
    str3 += "<tr><td>" + res['bazar_1'][i][0] + "</td><td>" + res['bazar_1'][i][1] + "</td></tr>";
  }
  $('#table1').html(str1);
  $('#table3').html(str3);

  for (var i = 0; i < 7; i++) {
    str2 += "<tr><td>" + res['shakhes'][i][0] + "</td><td>" + res['shakhes'][i][1] + "</td><td>" + res["shakhes"][i][2] + "</td></tr>";
    str4 += "<tr><td>" + res['shakhes_1'][i][0] + "</td><td>" + res['shakhes_1'][i][1] + "</td><td>" + res["shakhes_1"][i][2] + "</td></tr>";
  }

  console.log(str3);

  $('#table2').html(str2);
  $('#table4').html(str4);
}
var joinUsResume = '';

function uploadResume(el, res) {
  var res = JSON.parse(res);
  if (res['result'] == 'true') {
    // $(el).attr('src', res['src']);
    // $('.profile-photo-thumbnail').css('background', 'url(' + res['src'] + ')');
    notify(res["message"], 'success');
    joinUsResume = res["src"];
  }
}

function join(el) {
  var jsonData = {}

  jsonData['firstname'] = $('#firstname').val();
  jsonData['lastname'] = $('#lastname').val();
  jsonData['ssn'] = $('#ssn').val();
  jsonData['birthday'] = $('#birthday').val();
  jsonData['marriage'] = $('#marriage').val();
  jsonData['gender'] = $('#gender').val();
  jsonData['marine'] = $('#marine').val();
  jsonData['jobstatus'] = $('#jobstatus').val();
  jsonData['field'] = $('#field').val();
  jsonData['education'] = $('#education').val();
  jsonData['university'] = $('#university').val();
  jsonData['average'] = $('#average').val();
  jsonData['englishdegree'] = $('#englishdegree').val();
  jsonData['experties'] = $('#experties').val();
  jsonData['lastjob'] = $('#lastjob').val();
  jsonData['lastplace'] = $('#lastplace').val();
  jsonData['startworkdate'] = $('#startworkdate').val();
  jsonData['endworkdate'] = $('#endworkdate').val();
  jsonData['lastsalary'] = $('#lastsalary').val();
  jsonData['cause'] = $('#cause').val();
  jsonData['email'] = $('#email').val();
  jsonData['phonenumber'] = $('#phonenumber').val();
  jsonData['state'] = $('#state').val();
  jsonData['city'] = $('#city').val();
  jsonData['address'] = $('#address').val();
  jsonData['paziresh'] = $('#paziresh').val();
  jsonData['bazarsarmaye'] = $('#bazarsarmaye').val();
  jsonData['oragh'] = $('#oragh').val();
  jsonData['moamelegari'] = $('#moamelegari').val();
  jsonData['moamelegarimoshtagh'] = $('#moamelegarimoshtagh').val();
  jsonData['moameleenergy'] = $('#moameleenergy').val();
  jsonData['tahlilbazar'] = $('#tahlilbazar').val();
  jsonData['modiriatoragh'] = $('#modiriatoragh').val();
  jsonData['arzeshyabi'] = $('#arzeshyabi').val();
  jsonData['modiriatnahad'] = $('#modiriatnahad').val();
  jsonData['salary'] = $('#salary').val();
  jsonData['abilities'] = $('#abilities').val();
  jsonData['favourites'] = $('#favourites').val();
  jsonData['resume'] = joinUsResume;

  path = '/joinus/Volunteer';
  var info = [];
  info['url'] = path;
  info['information'] = jsonData;
  info['params'] = [el];
  return info;
}

function getCities(el) {
  //Get information from form inputs
  var jsonData = {};
  jsonData['state'] = $(el).val();
  path = '/addresses/cities/';
  var info = [];
  info['url'] = path;
  info['information'] = jsonData;
  info['params'] = [el];
  return info;
}

function getCitiesRes(res, params) {
  if (params == undefined) {
    nextValue = $('#up_state').attr('next-value');
  } else {
    nextValue = $(params[0]).attr('next-value');
  }

  var txt = '<option value="">شهر</option>';
  res.forEach(looper);

  function looper(value, index, array) {
    selected = '';
    if (nextValue == value['id']) {
      selected = 'selected';
    } else {
      selected = '';
    }
    txt += "<option value=\"" + value['id'] + "\" " + selected + ">" + value['city'] + "</option>";
  }
  $('#infoCity').html(txt);
}

function joinRes(res, params) {
  // console.log(res);

  // var str1 = "";
  // var str2 = "";
  // for (var i = 0; i < 8; i++) {
  //   str1 += "<tr><td>" + res['bazar'][i][0] + "</td><td>" + res['bazar'][i][1] + "</td></tr>";
  // }
  // $('#table1').html(str1);

  // for (var i = 1; i < 8; i++) {
  //   str2 += "<tr><td>" + res['shakhes'][i][0] + "</td><td>" + res['shakhes'][i][1] + "</td><td>" + res["shakhes"][i][2] + "</td></tr>";
  // }
  // $('#table2').html(str2);

  if (res['result'] == 'false') {
    notify(res["message"], 'error')
  }
  if (res['result'] == 'true') {
    notify(res["message"], "success");
  }
}

/* sends contact forms */
function contact(el) {
  var jsonData = {}
  jsonData['full_name'] = $('#contactFullname').val();
  jsonData['subject'] = $('#contactSubject').val();
  jsonData['email'] = $('#contactEmail').val();
  jsonData['mobile'] = $('#contactPhone').val();
  jsonData['message'] = $('#contactMessage').val();
  jsonData['section'] = $('.forms .titles p.active').html();

  path = '/contact/message/';
  var info = [];
  info['url'] = path;
  info['information'] = jsonData;
  info['params'] = [el];
  return info;
}

function contactRes(res, params) {
  console.log(res);
  if (res['result'] == 'false') {
    notify(res["message"], 'error')
  }
  if (res['result'] == 'true') {
    $('#contactForm .forms').slideUp(700).delay(500);
    $('#contactFormMessage').delay(500).slideDown(700);
    $('.messageContainer').html(res["message"]);
    // notify(res["message"], "success");
  }
}

function prices(el) {
  var jsonData = {}
  path = 'http://dana.test/api/charkheshi/';
  var info = [];
  info['url'] = path;
  info['information'] = jsonData;
  info['params'] = [el];
  return info;
}

function pricesRes(res, params) {
  console.log(res);
}

function genderSelect() {
  var value = $('#gender').val();
  console.log($('#gender').val());
  if (value === 'مرد') {
    $('#marine').removeAttr('disabled');
  } else {
    $('#marine').attr('disabled', true);
  }
}

function universitySelect() {
  var value = $('#education').val();
  console.log(value);
  if (value !== 'بیسواد'&&'زیر دیپلم'&&'دیپلم') {
    $('#university').removeAttr('disabled');
  } else {
    $('#university').attr('disabled', true);
  }
}

function openSubMenu() {
  if ($('header .row .nav .menuItem .responsive-dropdown-container').has('activate')) {
    $('header .row .nav .menuItem .responsive-dropdown-container.activate').removeClass('activate');
  }
  $('#aboutus').addClass('activate');
}

function openbazar() {
  if ($('header .row .nav .menuItem .responsive-dropdown-container').has('activate')) {
    $('header .row .nav .menuItem .responsive-dropdown-container.activate').removeClass('activate');
  }
  $('#bazar').addClass('activate');

}

function openmoamelat() {
  if ($('header .row .nav .menuItem .responsive-dropdown-container').has('activate')) {
    $('header .row .nav .menuItem .responsive-dropdown-container.activate').removeClass('activate');
  }
  $('#moamelat').addClass('activate');

}

function opentutorials() {
  if ($('header .row .nav .menuItem .responsive-dropdown-container').has('activate')) {
    $('header .row .nav .menuItem .responsive-dropdown-container.activate').removeClass('activate');
  }
  $('#tutorials').addClass('activate');

}

function opencontacts() {
  if ($('header .row .nav .menuItem .responsive-dropdown-container').has('activate')) {
    $('header .row .nav .menuItem .responsive-dropdown-container.activate').removeClass('activate');
  }
  $('#contacts').addClass('activate');

}

$(document).ready(function () {
  $('#sliders').owlCarousel({
    loop: true,
    slideSpeed: 300,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    rtl: true,
    singleItem: true,
    items: 1,
    margin: 10,
    stagePadding: 0,
    nav: false,
    rewindSpeed: 500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $('#itemsSlider').owlCarousel({
    loop: true,
    rtl: true,
    items: 5,
    center: true,
    margin: 10,
    stagePadding: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });



  $('#newsSlider').owlCarousel({
    loop: true,
    autoplay: true,
    slideSpeed: 300,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    rtl: true,
    singleItem: true,
    items: 1,
    margin: 10,
    stagePadding: 0,
    nav: false,
    rewindSpeed: 500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".header > .row .logo .menuIcon__button").on("click", function () {
    $(".header > .row .nav .menu").toggleClass("active");
  });

  $('.move').on('click', function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150
      }, 900, function () {
        // windows.location.hash = hash;
      });
    }
  });


  $('.aboutUsCont >.row .charts .tabs .tab').on('click', function () {
    if ($('.aboutUsCont >.row .charts .tabs .tab').has('active')) {
      $('.aboutUsCont >.row .charts .tabs .tab').removeClass('active');
      $('.aboutUsCont >.row .charts .data-table').addClass('hide');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
    $('#' + $(this).attr('data-src')).removeClass('hide');
  });

  $('.aboutUsCont >.row .charts .tabs2 .tab2').on('click', function () {
    if ($('.aboutUsCont >.row .charts .tabs2 .tab2').has('active')) {
      $('.aboutUsCont >.row .charts .tabs2 .tab2').removeClass('active');
      $('.aboutUsCont >.row .charts .data-table').addClass('hide');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
    $('#' + $(this).attr('data-src')).removeClass('hide');
  });


  $('.aboutUsCont >.row .charts .tabs .tab').on('click', function () {
    if ($('.aboutUsCont >.row .charts .tabs .tab').has('active')) {
      $('.aboutUsCont >.row .charts .tabs .tab').removeClass('active');
      $('.aboutUsCont >.row .charts .chart').addClass('hide');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
    $('#' + $(this).attr('data-src')).removeClass('hide');
    $('.aboutUsCont >.row .charts .title').html($('.aboutUsCont >.row .charts .tabs .tab.active').html());
  });

  $('.aboutUsCont >.row .charts .tabs .tab').on('click', function () {
    if ($('.aboutUsCont >.row .charts .tabs .tab').has('active')) {
      $('.aboutUsCont >.row .charts .tabs .tab').removeClass('active');
      $('.aboutUsCont >.row .charts .chart').addClass('hide');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
    $('#' + $(this).attr('data-src')).removeClass('hide');
    $('.aboutUsCont >.row .charts .title').html($('.aboutUsCont >.row .charts .tabs2 .tab2.active').html());
  });


  $('.newsCont .row .news .articles .categories .category').on('click', function () {
    if ($('.newsCont .row .news .articles .categories .category').has('active')) {
      $('.newsCont .row .news .articles .categories .category').removeClass('active');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
  });

  $('.faq-context .row .categories .category').on('click', function () {
    if ($('.faq-context .row .categories .category').has('active')) {
      $('.faq-context .row .categories .category').removeClass('active');
    }
    $(this).addClass('active');
    if ($('.faq-context > .row .faq-description-container').has('active')) {
      $('.faq-context > .row .faq-description-container').removeClass('active');
    }
    $('.' + $(this).attr('data-src')).addClass('active');
  });

  $('.contactContainer .row .contact .locations .location .title p').on('click', function () {
    if ($('.contactContainer .row .contact .locations .location .title p').has('active')) {
      $('.contactContainer .row .contact .locations .location .title p').removeClass('active');
    }
    $(this).addClass('active');
  });

  $('.contactContainer .row .contact .locations .location .title p').on('click', function () {
    if ($('.contactContainer .row .contact .locations .location .title p').has('active')) {
      $('.contactContainer .row .contact .locations .location .title p').removeClass('active');
      $('.contactContainer .row .contact .locations .location .items').slideUp(500).delay(500);
    }
    $(this).addClass('active');
    $('#' + $(this).attr('data-src')).slideDown(700);
  });

  $('.contactContainer .row .inputs #contactForm .titles p').on('click', function () {
    if ($('.contactContainer .row .inputs #contactForm .titles p').has('active')) {
      $('.contactContainer .row .inputs #contactForm .titles p').removeClass('active');
    }
    $(this).addClass('active');
  });

  $('.contactContainer .row .inputs .titles p').on('click', function () {
    if ($('.contactContainer .row .inputs .titles p').has('active')) {
      $('.contactContainer .row .inputs .titles p').removeClass('active');
    }
    $(this).addClass('active');
  });

  $('.contactContainer .row .contact .locations .location .categories .category').on('click', function () {
    if ($('.contactContainer .row .contact .locations .location .categories .category').has('active')) {
      $('.contactContainer .row .contact .locations .location .categories .category').removeClass('active');
    }
    $(this).addClass('active');
  });

  $(function () {
    // $("#Stores .province path").click(function (e) {
    //   e.preventDefault();
    //   $(".table").hide(0);
    //   $("html, body").animate({
    //       scrollTop: $(document).height()
    //     },
    //     1000
    //   );
    //   $("#state-" + $(this).attr("value")).show();
    // });
    // $("#Stores .province li").click(function (e) {
    //   e.preventDefault();
    //   $(".table").hide(0);
    //   $("html, body").animate({
    //       scrollTop: $("#gohere").offset().top
    //     },
    //     1000
    //   );
    //   $("#" + $(this).attr("value")).show();
    // });

    $("#Deligations .province path").click(function (e) {
      e.preventDefault();
      $(".table").hide(0);
      $("html, body").animate({
          scrollTop: $(document).height()
        },
        1000
      );
      $("#state-" + $(this).attr("value")).show();
    });

    $("#Deligations .province li").click(function (e) {
      e.preventDefault();
      $(".table").hide(0);
      $("html, body").animate({
          scrollTop: $("#gohere").offset().top
        },
        1000
      );
      $("#" + $(this).attr("value")).show();
    });
  });

  $(".S-DCont .toggle .choice").on("click", function () {
    $(".container .head >.row p").html($(this).attr("data-src"));
    $(".S-DCont .toggle #flap .content").html($(this).attr("data-src"));

    $("#Stores").css({
      display: "none"
    });
    $("#Deligations").css({
      display: "none"
    });
    $("#" + $(this).attr("value")).css({
      display: "block"
    });
  });

  if ($(".S-DCont .toggle .choice").prop("checked")) {
    $("#Stores").css({
      display: "block"
    });
    $("#Deligates").css({
      display: "none"
    });
  }


  $('.faq-context > .row .faq-description-container .content .cont ').on('click', function () {
    $(this).toggleClass('active');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var stickymenu = document.getElementById("fixedmenu");
    var stickymenuoffset = stickymenu.offsetTop;

    window.addEventListener("scroll", function (e) {
      requestAnimationFrame(function () {
        if (window.pageYOffset > stickymenuoffset) {
          stickymenu.classList.add('sticky');
        } else {
          stickymenu.classList.remove('sticky');
        }
      })
    });
  });
});