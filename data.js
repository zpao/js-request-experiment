var requestData = [];

// Single depth array
requestData[0] = {
  foo: [1, 2, 3],
  bar: "baz"
};

// Single depth k:v objects
requestData[1] = {
  foo: {
    omg: "bbq",
    "all your base!": "are belong to us"
  },
  bar: "baz"
}

requestData[2] = {
  foo: [1, 2, {
    omg: "bbq",
    "all your base!": "are belong to us"
  }],
  bar: "baz"
}
requestData[3] = {
  foo: [1, 2, [3, 4]],
  bar: "baz"
}

function showResponse(i, data, url) {
  document.getElementById("response" + i).innerHTML =
    typeof data == "string" ? data : JSON.stringify(data);
  document.getElementById("url" + i).innerHTML =
    typeof url == "string" ? decodeURIComponent(url) : "";
}

function setup() {
  // I'm lazy, innerHTML it is
  var el = document.getElementById("allofit");
  for (var i = 0; i < requestData.length; i++) {
    el.innerHTML += "<h2>test " + (i + 1) + "</h2>" +
                    "<h3>data</h3>" +
                    "<code>" + JSON.stringify(requestData[i]) + "</code>" +
                    "<h3>actual url (decoded with decodeURIComponent)</h3>" +
                    "<code id='url" + i + "'></code>" +
                    "<h3>response</h3>" +
                    "<code id='response" + i + "'></code>" +
                    "<hr>";
  }
}
