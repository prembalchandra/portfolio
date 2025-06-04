;(function($) {

    $(document).ready( function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
    div.id="preloader",
    div.className="preloader",
    div.innerHTML='<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div,document.body.firstChild),window.onload=function() {
    document.getElementById("preloader").classList.add("off")
};

$(document).ready(function () {
    const $menuToggler = $(".header_headerMenuToggler__UpQ2o");
    const $menu = $(".header_headerWrapper__Menu__qjnVS");
    const $hamburger = $(".header_hamburger__u8Soo");

    $menuToggler.on("click", function () {
      // Toggle open/close menu class
      $menu.toggleClass("header_openMenu__1fCi7");
      $hamburger.toggleClass("header_is_active__MjysY");
    });

    // Optional: close menu when clicking outside
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".header_headerWrapper__Menu__qjnVS, .header_headerMenuToggler__UpQ2o").length) {
        $menu.removeClass("header_openMenu__1fCi7");
        $hamburger.removeClass("header_is_active__MjysY");
      }
    });
  });