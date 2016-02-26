$(document).ready(function(){
  var timesClicked = 0;
  $(".leftMenuArrow").click(function(){
    if (timesClicked % 2 == 0) $(".leftMenu").css("display", "block");
      else $(".leftMenu").css("display", "none");
    timesClicked++;
  });
  $(".newsHeading").click(function(){
    $(".textString").text("The header has been clicked.");
  });
  var newsColumnItemHTML ='<div class = "newsColumnItem">' +
                            '<time class = "newsTime"></time> A simple text to fill the blank space' +
                          '</div>';
  for (var i = 0; i < 5; i++)
    $(".newsColumn").append(newsColumnItemHTML);
  var currentDate = new Date($.now());
  $(".newsTime").text(currentDate.getMinutes()+":"+currentDate.getSeconds());
});
