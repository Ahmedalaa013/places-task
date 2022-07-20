// setting Modal content dynamically
$(".card").click(function () {
  var getImgSrc = $(this).children(":first").attr("src");
  var getTitleText = $(this)
    .children(":nth-child(2)")
    .children(":first")
    .text()
    .trim();
  var getDescription = $(this)
    .children(":nth-child(2)")
    .children(":nth-child(2)")
    .text()
    .trim();

  $(".modal-body").children(":first").attr("src", getImgSrc);
  $(".modal-body")
    .children(":nth-child(2)")
    .children(":first")
    .text(getTitleText);
  $(".modal-body")
    .children(":nth-child(2)")
    .children(":nth-child(2)")
    .text(getDescription);
});
