//gifs

var image_prot = new Image();
image_prot.src = 'img/protei_rohak.gif';

$(document).ready(function() {
  $("#protei_rohak").hover(
    function() {
      $(this).attr("src", image_prot.src);
    },
    function() {
      $(this).attr("src", "img/protei_rohak.jpg");
    }
  );

  $("#mld").hover(
    function() {
      $(this).attr("src", "img/mld.gif");
    },
    function() {
      $(this).attr("src", "img/mld.jpg");
    }
  );

  $("#ires").hover(
    function() {
      $(this).attr("src", "img/ires.gif");
    },
    function() {
      $(this).attr("src", "img/ires.jpg");
    }
  );

  $("#tzp").hover(
    function() {
      $(this).attr("src", "img/tzp.gif");
    },
    function() {
      $(this).attr("src", "img/tzp.jpg");
    }
  );


  $("#cadl").hover(
    function() {
      $(this).attr("src", "img/cadl.gif");
    },
    function() {
      $(this).attr("src", "img/cadl.jpg");
    }
  );

  $("#projects").hover(
    function() {
      $(this).attr("src", "img/projects.gif");
    },
    function() {
      $(this).attr("src", "img/projects.jpg");
    }
  );

});





$(document).ready(function() {
  if ($(window).width() <= 992) {

    //console.log($(window).width());
    $("#protei_rohak").attr("src", "img/protei_rohak.gif");
    $("#mld").attr("src", "img/mld.gif");
    $("#ires").attr("src", "img/ires.gif");
    $("#tzp").attr("src", "img/tzp.gif");
    $("#cadl").attr("src", "img/cadl.gif");
    $("#projects").attr("src", "img/projects.gif");
  }
});


$(document).ready(function() {

  $(".category").hover(
    function(event) {

      //event.preventDefault();
      $(this).css("color", "#999");
    },

    function(event) {

      //event.preventDefault();
      $(this).css("color", "#555");
    }


  );


});








$(document).ready(function() {
  $(".category.arduino").click(

    function(event) {
      //  event.preventDefault();

      //var e = $(".work-section").children();
      //console.log(e);
      //e.(.arduino).toggleClass("hidden-all");
      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");
      //$("#work-showcase").find(".arduino").toggleClass("hidden-all");

      /*  var isSelected = $(this).attr('data-selected');

            if( isSelected != 'true' ){
                $("#work-showcase").children().not(".arduino").addClass("hidden-arduino");
                $(this).attr('data-selected', true);
            }else{
                $("#work-showcase").children().not(".arduino").removeClass("hidden-arduino");
                $(this).attr('data-selected', false)
            }*/
      $("#work-showcase").children().not(".arduino").toggleClass("hidden-arduino");
    }


  );

  $(".category.android").click(

    function(event) {
      //  event.preventDefault();

      //var e = $(".work-section").children();
      //console.log(e);
      //e.(.arduino).toggleClass("hidden-all");
      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");

      $("#work-showcase").children().not(".android").toggleClass("hidden-android");
    }


  );

  $(".category.rpi").click(

    function(event) {
      //  event.preventDefault();

      //var e = $(".work-section").children();
      //console.log(e);
      //e.(.arduino).toggleClass("hidden-all");
      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");

      $("#work-showcase").children().not(".rpi").toggleClass("hidden-rpi");
    }


  );



  $(".category.web").click(

    function(event) {
      //  event.preventDefault();

      //var e = $(".work-section").children();
      //console.log(e);
      //e.(.arduino).toggleClass("hidden-all");
      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");

      $("#work-showcase").children().not(".web").toggleClass("hidden-web");
    }


  );


  $(".category.music").click(

    function(event) {
      //  event.preventDefault();

      //var e = $(".work-section").children();
      //console.log(e);
      //e.(.arduino).toggleClass("hidden-all");
      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");

      $("#work-showcase").children().not(".music").toggleClass("hidden-music");
    }


  );


  $(".category.tf").click(

    function(event) {
      //  event.preventDefault();

      $(this).toggleClass("project-detail-role");
      $(this).toggleClass("category-clicked");

      $("#work-showcase").children().not(".tf").toggleClass("hidden-tf");
    }


  );



});
