$(document).ready(function () {

  var div1 = "<div id='div1'></div>";
  var div2 = "<div id='div2'></div>";
  $('body').append(div1);
  $('body').append(div2);

  // PART 16
  var button1 = "<button id='step16'>STEP 16</button>";
  $('#div1').append(button1);
  $('#step16').click(function () {
    alert(event.target.innerHTML + ' Button has been clicked!');
  });

  // PART 17
  var button2 = "<button id='step17'>STEP 17</button>";
  $('#div1').append(button2);
  $('#step17').bind('click', function () {
    alert(event.target.innerHTML + ' Button has been clicked!');
  });

  // PART 18
  var button3 = "<button id='step18'>STEP 18</button>";
  $('#div1').append(button3);
  $('#step18').on({
    click: function () {
      alert(event.target.innerHTML + ' Button has been clicked!');
    }
  })

  // PART 19
  var button4 = "<button id='step19a'>STEP 19a</button>";
  $('#div2').append(button4);
  var button5 = "<button id='step19b'>STEP 19b</button>";
  $('#div2').append(button5);
  $('#step19a, #step19b').on('click', function () {
    alert(event.target.innerHTML + ' Button has been clicked!');
  });

  // PART 20
  var div3 = "<div id='div3'></div>";
  $('body').append(div3);
  $('#div3').css('width', '400px').css('height', '400px').css('border', '1px solid black');
  // $('#div3').on({
  //   click: function() {
  //       alert(event.type + " was used");
  //   },
  //   mouseenter: function() {
  //     alert(event.type + " was used");
  //   },
  //   mouseleave: function() {
  //     alert(event.type + " was used");
  //   }
  // });

  // PART 21
  var span = "<span id='step21'></span>";
  $('#div3').append(span);
  $('#div3').on({
    click: function () {
      $('#step21').html(event.type + ' was used');
    },
    mouseenter: function () {
      $('#step21').html(event.type + ' was used');
    },
    mouseleave: function () {
      $('#step21').html(event.type + ' was used');
    }
  });

  // PART 22
  var div4 = "<div id='div4'></div>";
  $('body').append(div4);
  var link = "<a href='modulemedia.com'>STEP 22</a>";
  $('#div4').append(link);
  $('#div4 a').click(function () {
    event.preventDefault()
    $(this).css('color', 'red');
    alert(event.target + ' triggered the event');
  });

  // PART 23
  var div5 = "<div id='div5'></div>";
  $('body').append(div5);
  $('#div5').css('width', '400px').css('height', '50px').css('border', '1px solid black');
  $(window).resize(function () {
    $('#div5').html('Width: ' + $(window).width() + ', Height: ' + $(window).height());
  })

  // PART 24
  var div6 = "<div id='div6'></div>";
  $('body').append(div6);
  var input = "<input id='step24' placeholder='STEP 24'></input>";
  $('#div6').append(input);
  $('#step24').on({
    focus: function () {
      $(this).css('background', 'lightgray');
    },
    blur: function () {
      $(this).css('background', 'white');
    }
  });

  // PART 25
  var form = "<form id='step25'></form>";
  var input1 = "<input id='step25a' placeholder='Enter Name'></input>";
  var input2 = "<input id='step25b' placeholder='Enter Email'></input>";
  var submit = "<input id='step25c' type='submit'></button>";
  $('#div6').append(form);
  $('#div6 form').append(input1);
  $('#div6 form').append(input2);
  $('#div6 form').append(submit);

  $('#step25').submit(function (event) {
    var valid = true;
    var val1 = $('#step25a').val().trim();
    var val2 = $('#step25b').val().trim();
    if (val1 == '') {
      alert("Name required");
      $('#step25a').css('border', '1px solid red');
      valid = false;
    } else {
      $('#step25a').removeAttr('style');
    }
    if (val2 == '') {
      alert("Email required");
      $('#step25b').css('border', '1px solid red');
      valid = false;
    } else {
      $('#step25b').removeAttr('style');
    }

    if (val1 != '' && val2 != '') {
      $('#step25a').css('border', '1px solid green');
      $('#step25b').css('border', '1px solid green');
    }

    if (!valid) {
      event.preventDefault();
    }

  });



});
