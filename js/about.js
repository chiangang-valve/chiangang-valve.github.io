// load page content
$.getJSON("json/about.json", function(data) {
  $("#page-content").prepend(
    createHeader(data.header)
  );
  $("#intro-content").append(
    createIntro(data.intro)
  );
  setTitle(data.title, data.header.title);
});