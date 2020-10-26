

var type = $.urlParam('type');
if (!type) type = "bucket";
var fname = `json/product-${type}.json`;

// load products
$.getJSON(fname, function(data) {
  $.each(data.product, function(i, prod) {
    $("#product-content").append(
      createProductItem(prod)
    );
  });
});

// load page content
$.getJSON("json/product.json", function(data) {
  $("#page-content").prepend(
    createHeader(data.header)
  );
  $.each(data.sidebar, function(i, item) {
    $("#sidebar-content").append(
      createSidebarItem(item)
    );
  });
  setTitle(data.title, data.fullname[type]);
});