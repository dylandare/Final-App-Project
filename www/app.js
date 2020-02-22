window.fn = {};

window.fn.openMenu = function() {
  var menu = document.getElementById("menu");
  menu.open();
};

window.fn.load = function(page, mytitle) {
  var navigator = document.getElementById("myNavigator");
  var menu = document.getElementById("menu");
  data = { data: { title: mytitle }, animation: "slide" };
  navigator.pushPage(page, data).then(menu.close.bind(menu));
};
