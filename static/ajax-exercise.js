"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // evt.preventDefault();
    $.get('/fortune', (response) => {
        $('#fortune-text').text(response);
});

}

$('#get-fortune-button').on('click', showFortune);







// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
      $('#weather-info').text(res.forecast);
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";
    
    const formData = $('#order-form').serialize();

    $.post(url, formData, (res) => {
      if (res.code=== 'ERROR') {
        $('#order-status').addClass('order-error');
    }
      $('#order-status').text(`${res.code} ${res.msg}`);
    });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


