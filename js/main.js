function toggleLocked(element) {
  if($(window).scrollTop() < 50) {
    element.setAttribute('src', 'images/actual-container.min.png');
  }
}

function toggleUnlocked(element) {
  if($(window).scrollTop() < 50) {
    element.setAttribute('src', 'images/actual-container-alt.min.png');
  }
}

function toggleMouse(sT) {
  if ($(window).width() < 991) {
    if(sT < 6000) {
      $(".mouse").stop().animate({
        opacity: 1
      });
    } else {
      $(".mouse").stop().css('opacity', 7.1 - (sT / 1000));
    }
  } else {
    if(sT < 400) {
      $(".mouse").stop().animate({
        opacity: 1
      });
    } else if(sT > 401) {
      $(".mouse").stop().css('opacity', 1.5 - (sT / 1000));
    }
  }
}

function mobileSlide(e, f, g, sT) {
  if(sT < 2060) {
    if ($(window).height() < 600) {
      if($(window).width() < 373) {
        $(f).css({
          'transform': 'scale(0.6) translate(0, -5%)',
          'left': 0
        });
      } else if($(window).width() < 768){
        $(f).css({
          'transform': 'scale(0.6) translate(0, -25%)',
          'left': 0
        });
      } else {
        $(f).css({
          'transform': 'scale(0.6) translate(0, -35%)',
          'left': 0
        });
      }
    } else if ($(window).height() < 700) {
      if($(window).width() < 373) {
        $(f).css({
          'transform': 'scale(0.7) translate(0, 0%)',
          'left': 0
        });
      } else if($(window).width() < 768){
        $(f).css({
          'transform': 'scale(0.7) translate(0, -10%)',
          'left': 0
        });
      } else {
        $(f).css({
          'transform': 'scale(0.7) translate(0, -20%)',
          'left': 0
        });
      }
    } else if ($(window).height() < 800) {
      if($(window).width() < 373) {
        $(f).css({
          'transform': 'scale(0.8) translate(0, 10%)',
          'left': 0
        });
      } else if($(window).width() < 768){
        $(f).css({
          'transform': 'scale(0.8) translate(0, -5%)',
          'left': 0
        });
      } else {
        $(f).css({
          'transform': 'scale(0.8) translate(0, -15%)',
          'left': 0
        });
      }
    } else if ($(window).height() < 900) {
      if($(window).width() < 373) {
        $(f).css({
          'transform': 'scale(0.9) translate(0, 15%)',
          'left': 0
        });
      } else if($(window).width() < 768){
        $(f).css({
          'transform': 'scale(0.9) translate(0, 0%)',
          'left': 0
        });
      } else {
        $(f).css({
          'transform': 'scale(0.9) translate(0, -5%)',
          'left': 0
        });
      }
    } else {
      if($(window).width() < 373) {
        $(f).css({
          'transform': 'scale(1) translate(0, 20%)',
          'left': 0
        });
      } else if($(window).width() < 768){
        $(f).css({
          'transform': 'scale(1) translate(0, 10%)',
          'left': 0
        });
      } else {
        $(f).css({
          'transform': 'scale(1) translate(0, 0)',
          'left': 0
        });
      }
    }
  }
  if ($(window).width() < 991) {
    if(sT < 2060) {
      $(e).stop().animate({
        "padding-top": 0
      }, 100);
      $(g).stop().css('right', 'auto').animate({
        left: "0%"
      });
    } else {
      $(e).stop().animate({
        "padding-top": 0
      }, 100);

      if ($(window).width() > 540) {
        $(f).css({
          'transform': 'scale(0.7) translate(0, -30%)',
          'left': '30%'
        });
      } else {
        $(f).css({
          'transform': 'scale(0.7) translate(0, -30%)',
          'left': '50%'
        });
      }
      $(g).stop().css('right', 'auto').animate({
        left: "0%"
      });
    }
  } else {
    $(e).stop().animate({
      "padding-top": 0
    }, 100);
    $(f).stop().animate({
        "left": 0,
        "top": "auto"
    }, 100);
    $(g).stop().css('left', 'auto').animate({
      right: "-25%",
      bottom: "0%"
    });
  }
}

function header(e, sT) {
  if (sT < 1900) {
    $(e).removeClass('font-weight-light').addClass('font-weight-bold text-center').text("The Ultimate Storage Container");
  } else if(sT > 1901 && sT < 17600) {
    $(e).removeClass('font-weight-bold text-center').addClass('font-weight-light').text("Design");
  } else if (sT > 17601) {
    $(e).removeClass('font-weight-bold text-center').addClass('font-weight-light').text("Construction");
  }
  if(sT < 50) {
    $(e).css("opacity", 1);
  } else if(sT > 51 && sT < 400) {
    $(e).css("opacity", 1);
  } else if (sT > 401 && sT < 1500) {
    $(e).css("opacity", 1.4 - (sT / 1000));
  } else if (sT > 1501 && sT < 1900) {
    $(e).css("opacity", 0);
  } else if(sT > 1901 && sT < 3000) {
    $(e).css("opacity", (sT / 1000) - 2);
  } else if(sT > 3001 && sT < 7600) {
    $(e).stop().css("opacity", 1);
  } else if(sT > 7601 && sT < 15600) {
    $(e).css("opacity", 15.5 - (sT / 1000));
  } else if(sT > 15601 && sT < 16600) {
    $(e).css("opacity", 0);
  } else if(sT > 18600 && sT < 21600) {
    $(e).css("opacity", (sT / 1000) - 19.6);
  } else if(sT > 21601) {
    $(e).css("opacity", 1);
  }
}

function subheader(e, sT) {
  if ($(window).width() < 990) {
    if(sT < 19600) {
      $(e + ":nth-child(2)").text("Clean and Compact");
      $(e + ":nth-child(3)").text("Holds Up to 600 Grams");
      $(e + ":nth-child(4)").text("Removable Divider");
      $(e + ":nth-child(5)").text("Hygenic Scoop Storage");
      $(e + ":nth-child(6)").text("Convenient Leveler");
      $(e + ":nth-child(7)").text("Completely Disassemblable");
    } else {
      $(e + ":nth-child(2)").text("Sensitive Easy Button");
      $(e + ":nth-child(3)").text("Air-Tight Silicone Seal");
      $(e + ":nth-child(4)").text("Thick Durable Walls");
      $(e + ":nth-child(5)").text("Crack Resistant");
      $(e + ":nth-child(6)").text("Quality #5 PP Plastic");
      $(e + ":nth-child(7)").text("FDA Food-Grade Materials");
    }
    $(e + ":nth-child(2)").text("Clean and Compact").css({
      'left': 'auto',
      'transform': 'none'
    });
    $(e + ":nth-child(3)").text("Holds Up to 600 Grams").css({
      'left': 'auto',
      'transform': 'none'
    });
    $(e + ":nth-child(4)").text("Removable Divider").css({
      'left': 'auto',
      'transform': 'none'
    });
    $(e + ":nth-child(5)").text("Hygenic Scoop Storage").css({
      'left': 'auto',
      'transform': 'none'
    });
    $(e + ":nth-child(6)").text("Convenient Leveler").css({
      'left': 'auto',
      'transform': 'none'
    });
    $(e + ":nth-child(7)").text("Completely Disassemblable").css({
      'left': 'auto',
      'transform': 'none'
    });
  } else {
    if(sT < 19600) {
      $(e + ":nth-child(2)").text("Clean and Compact").css({
        'left': 'auto',
        'transform': 'none'
      });
      $(e + ":nth-child(3)").text("Holds Up to 600 Grams").css({
        'left': 'auto',
        'transform': 'none'
      });
      $(e + ":nth-child(4)").text("Removable Divider").css({
        'left': 'auto',
        'transform': 'none'
      });
      $(e + ":nth-child(5)").text("Hygenic Scoop Storage").css({
        'left': 'auto',
        'transform': 'none'
      });
      $(e + ":nth-child(6)").text("Convenient Leveler").css({
        'left': 'auto',
        'transform': 'none'
      });
      $(e + ":nth-child(7)").text("Completely Disassemblable").css({
        'left': 'auto',
        'transform': 'none'
      });
    } else {
      $(e + ":nth-child(2)").text("Sensitive Easy Button").css({
        'left': '50%',
        'transform': 'translate(-50%, -150%)'
      });
      $(e + ":nth-child(3)").text("Air-Tight Silicone Seal").css({
        'left': '50%',
        'transform': 'translate(105%, 50%)'
      });
      $(e + ":nth-child(4)").text("Thick Durable Walls").css({
        'left': '50%',
        'transform': 'translate(100%, 140%)'
      });
      $(e + ":nth-child(5)").text("Crack Resistant").css({
        'left': '50%',
        'transform': 'translate(105%, 180%)'
      });
      $(e + ":nth-child(6)").text("Quality #5 PP Plastic").css({
        'left': '50%',
        'transform': 'translate(-185%, 90%)'
      });
      $(e + ":nth-child(7)").text("FDA Food-Grade Materials").css({
        'left': '50%',
        'transform': 'translate(-175%, 0%)'
      });
    }
  }
  if(sT < 3500) {
    $(e).each(function() {
      $(this).css("opacity", 0);
    });
  }else if(sT > 3501 && sT < 8300) {
    i = 3.5;
    $(e).each(function() {
      $(this).css("opacity", (sT / 1000) - i);
      i += 0.75;
    });
  }else if(sT > 8301 && sT < 9700) {
    $(e).each(function() {
      $(this).css("opacity", 1);
    });
  }else if (sT > 9701 && sT < 14600) {
    i = 10.7;
    $($(e).get().reverse()).each(function() {
      $(this).css("opacity", i - (sT / 1000));
      i += 0.75;
    });
  }else if(sT > 15601 && sT < 18600) {
    $(e).each(function() {
      $(this).css("opacity", 0);
    });
  } else if(sT > 20601 && sT < 28600) {
    i = 21.6;
    $(e).each(function() {
      $(this).css("opacity", (sT / 1000) - i);
      i += 0.75;
    });
  }
}

function lid(e, sT) { 
  if(sT < 50) {
    $(e).attr("src", "images/actual-container.min.png");
  } else if(sT > 51 && sT < 18000) {
    $(e).attr("src", "images/actual-container-alt.min.png");
  } else if (sT > 18001) {
    $(e).attr("src", "images/actual-container.min.png");
  }
  if(sT < 50) {
    $(e).css("opacity", 1);
  } else if(sT > 51 && sT < 400) {
    $(e).css("opacity", 1);
  } else if (sT > 401 && sT < 1400) {
    $(e).css("opacity", 1.4 - (sT / 1000));
  } else if(sT > 1401 && sT < 3000) {
    $(e).css("opacity", 0);
  } else if(sT > 15601 && sT < 18000) {
    $(e).css("opacity", (sT / 1000) - 16.6);
  } else if (sT > 18001) {
    $(e).css("opacity", 1);
  }
}

function separator(e, sT) {
  if (sT < 3000) {
    $(e).stop().css("opacity", 0);
  } else if (sT > 3001 && sT < 5720) {
    $(e).css("opacity", (sT / 1500) - 2);
    $(e).css("top", -1200 + (sT * 0.23));
  } else if (sT > 5721) {
    $(e).css("opacity", 1);
    $(e).css("top", 115);
  }
}

function spoon(e, sT) {
  if (sT < 3400) {
    $(".powdernest .spoon").stop().css("opacity", 0);
  } else if (sT > 3401 && sT < 7300) {
    $(".powdernest .spoon").css("opacity", (sT / 2000) - 2);
    $(".powdernest .spoon").css("top", -1800 + (sT * 0.26));
  } else if (sT > 7300) {
    $(".powdernest .spoon").css("opacity", 1);
    $(".powdernest .spoon").css("top", 98);
  }
}

function openMobileMenu() {
	$('#sidebar').fadeToggle();
}

function closeMobileMenu() {
	$('#sidebar').fadeToggle();
}

$(window).resize(function(){
  sT = $(window).scrollTop();
  mobileSlide(".first.jumbotron.centered", ".powdernest", ".ui.small.image.img-fluid.bpa-free-label", sT);
  subheader("h2.sub", sT);
});

$(window).scroll(function(){
  sT = $(window).scrollTop();
  mobileSlide(".first.jumbotron.centered", ".powdernest", ".ui.small.image.img-fluid.bpa-free-label", sT);
  console.log(sT);
  toggleMouse(sT);
  header("h1.main", sT);
  subheader("h2.sub", sT);
  lid(".powdernest .top", sT);
  separator(".powdernest .separator", sT);
  spoon(".powdernest .spoon", sT);
});

$(function() {
	$('#openSidebar').click(function() {
		openMobileMenu();
	});
	$('#closeSidebar').click(function() {
		closeMobileMenu();
	});

	$('#mobileHome').click(function() {
		closeMobileMenu();
		$("html, body").stop().animate({ scrollTop: "0px" });
	});
	$('#mobileDesign').click(function() {
		closeMobileMenu();
		$("html, body").stop().animate({ scrollTop: "9200px" }, 8000);
	});
	$('#mobileConstruction').click(function() {
		closeMobileMenu();
		$("html, body").stop().animate({ scrollTop: "27000px" }, 8000);
	});
	$('#mobileFeatures').click(function() {
		closeMobileMenu();
		$("html, body").stop().animate({ scrollTop: "29380" }, 4000);
	});
	$('#mobileContact').click(function() {
		closeMobileMenu();
		$("html, body").stop().animate({ scrollTop: "30900" }, 4000);
	});
  
  var sT = $(window).scrollTop();

  if(window.location.hash == "#home") {
    $("html, body").stop().animate({ scrollTop: 0 });
  } else if(window.location.hash == "#design") {
    $("html, body").stop().animate({ scrollTop: 9200 }, 4000);
  } else if(window.location.hash == "#construction") {
    $("html, body").stop().animate({ scrollTop: 27000 }, 4000);
  } else if(window.location.hash == "#features") {
    $("html, body").stop().animate({ scrollTop: 29380 }, 4000);
  } else if(window.location.hash == "#contact") {
    $("html, body").stop().animate({ scrollTop: 30900 }, 4000);
  }

  $('#home').click(function() {
    $("html, body").stop().animate({ scrollTop: "0px" });
  });
  $('#design').click(function() {
    $("html, body").stop().animate({ scrollTop: "9200px" }, 8000);
  });
  $('#construction').click(function() {
    $("html, body").stop().animate({ scrollTop: "27000px" }, 8000);
  });
  $('#features').click(function() {
    $("html, body").stop().animate({ scrollTop: "29380" }, 4000);
  });
  $('#contact').click(function() {
    $("html, body").stop().animate({ scrollTop: "30900" }, 4000);
  });

  toggleMouse(sT);
  mobileSlide(".first.jumbotron.centered", ".powdernest", ".ui.small.image.img-fluid.bpa-free-label", sT);
  header("h1.main", sT);
  subheader("h2.sub", sT);
  lid(".powdernest .top", sT);
  separator(".powdernest .separator", sT);
  spoon(".powdernest .spoon", sT);
});