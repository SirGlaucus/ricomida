$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('#enviarCorreo').click(function () {
    alert("El correo fue enviado correctamente...")
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $("#card-titulo-1").click(function () {
    $("#card-texto-1").toggle();
  });

  $("#card-titulo-2").click(function () {
    $("#card-texto-2").toggle();
  });

  $("#card-titulo-3").click(function () {
    $("#card-texto-3").toggle();
  });

  $("#titulo-ingrediente").dblclick(function () {
    $(this).css({ 'color': 'red' });
  });

  $("#titulo-preparacion").dblclick(function () {
    $(this).css({ 'color': 'red' });
  });

});
