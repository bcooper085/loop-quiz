$(function() {
  $('form').submit(function() {
    $(".result").show();

    var checked = $("input:checkbox[name=name]:checked");
    var result;

    for (var index = 0; index < checked.length; index += 1) {
      var total = index;
    }


    if (total > 5) {
      var result = "your stress level is high, try petting a cat.";
    } else if (total < 2) {
      var result = "you have low stress levels, good job";
    } else if (total < 5 || total > 2) {
      var result = "you have a moderate stress level, listen to some music.";
    }



    $('.result').append(result);
    $('form').hide();
    event.preventDefault();
  });
});
