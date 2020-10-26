// load page content
$.getJSON("json/contact.json", function(data) {
  $("#page-content").prepend(
    createHeader(data.header)
  );
  $("#contact-content").append(
    createContact(data.contact)
  );
  setTitle(data.title, data.header.title);
});