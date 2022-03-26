function applyForm() {
  var x = document.getElementById("firstForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    var element1 = document.getElementById("secondForm");
    element1.classList.add("nextform");
  }
}
$('#error').delay(5000).fadeOut('slow');
$('#error2').delay(5000).fadeOut('slow');
$('#success').delay(5000).fadeOut('slow');

function send() {
  var pin = document.querySelector('#pin')
  var _name = document.querySelector("#name")
  var _amount = document.querySelector("#amount")

  var invalid = (isNaN(pin.value) || pin.value === '' || pin.value < 99999 || pin.value > 9999999 || pin.value != Math.round(pin.value)) ? true : _name.value == undefined || _name.value == ""
  var invalid2 = (isNaN(_amount.value) || _amount.value === '' || _amount.value < 0 || _amount.value != Math.round(_amount.value)) ? true : _name.value == undefined || _name.value == ""
  var invalid3 = (isNaN(_amount.value) || _amount.value === '' || _amount.value > 1000 || _amount.value != Math.round(_amount.value)) ? true : _name.value == undefined || _name.value == ""

  if (invalid) {
    var in1 = document.getElementById('error');
    in1.style.display = 'none';
    var in2 = document.getElementById('error2');
    in2.style.display = 'none';
    var in3 = document.getElementById('success');
    in3.style.display = 'none';
    $('#error').fadeIn().delay(5000).fadeOut();
    var pin1 = document.getElementById("secondForm");
    pin1.classList.remove("nextform");
    var pin2 = document.getElementById('firstForm');
    pin2.style.display = 'block';
    document.getElementById('btn1').disabled = true;
    document.getElementById('send').disabled = true;
    pin.value = '';
    _amount.value = '';
    $('#pin').toggleClass('rform');
    setTimeout(function() {
      $('#pin').removeClass('rform');
    }, 5500);
  } else if (invalid2) {
    $('#error').fadeIn().delay(5000).fadeOut();
    var pin3 = document.getElementById("secondForm");
    pin3.classList.remove("nextform");
    var pin4 = document.getElementById('firstForm');
    pin4.style.display = 'block';
    document.getElementById('btn1').disabled = true;
    document.getElementById('send').disabled = true;
    pin.value = '';
    _amount.value = '';
    $('#pin').toggleClass('rform');
    setTimeout(function() {
      $('#pin').removeClass('rform');
    }, 5500);
  } else if (invalid3) {
    $('#error2').fadeIn().delay(5000).fadeOut();
    $('#amount').toggleClass('rform');
    setTimeout(function() {
      $('#amount').removeClass('rform');
    }, 5500);
  } else {
    var data = JSON.stringify({
      "gamePin": pin.value,
      "name": _name.value,
      "amount": _amount.value
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", window.location.href + "start");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
    $('#success').fadeIn().delay(5000).fadeOut();
    var er1 = document.getElementById('error');
    er1.style.display = 'none';
    var er2 = document.getElementById('error2');
    er2.style.display = 'none';
    var er3 = document.getElementById("secondForm");
    er3.classList.remove("nextform");
    var er4 = document.getElementById('firstForm');
    er4.style.display = 'block';
    document.getElementById('btn1').disabled = true;
    document.getElementById('send').disabled = true;
    pin.value = '';
    _amount.value = '';
  }
}