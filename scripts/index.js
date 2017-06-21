$(document).ready(function() {
  $.ajax({
    headers: {
      "X-User-Email": "zamith@subvisual.co",
      "X-User-Token": "67yYVvyKVxALu2N8mXVS"
    },
    dataType: "json",
    url: "http://c9f9006f.ngrok.io/api/interstitials/musical"
  }).done(function(data) {
    $(".ProviderInfo").html(data.html);
    $("head").append("<link rel='stylesheet' href='"+data.stylesheet+"' type='text/css'>");
  });
});
