$(document).ready(function() {
  $.ajax({
    headers: {
      "X-User-Email": "zamith@subvisual.co",
      "X-User-Token": "67yYVvyKVxALu2N8mXVS"
    },
    dataType: "json",
    url: "http://app.lvh.me:5000/api/interstitials/musical"
  }).done(function(data) {
    $(".ProviderInfo").html(data.html);
    $("head").append("<link rel='stylesheet' href='"+data.stylesheet+"' type='text/css'>");
  });
});
