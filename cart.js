$(".product-remove > i").on("click", function () {
   $(this).parent().parent().remove();
});
$(".button-up-down").on("click", function () {
   if ($(this).attr("value") == "+") {
      var quantity = $(this).prev().attr("value");
      quantity++;
      $(this).prev().attr("value", quantity);
   }
   else {
      var quantity = $(this).next().attr("value");
      if (quantity > 0) {
         quantity--;
         $(this).next().attr("value", quantity);

      }
   }
});
