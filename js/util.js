function createHeader(header) {
  return `
  <h1 class="mt-4 mb-3">${header.title}
    <small>${header.subtitle}</small>
  </h1>

  <div class="alert alert-danger" role="alert">${header.ann}</div>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="${header.ref}">${header.name}</a>
    </li>
    <li class="breadcrumb-item active">${header.title}</li>
  </ol>`
};

function createSidebarItem(item) {
  return `<a href="${item.ref}" class="list-group-item">${item.name}</a>`
}

function createProductItem(prod) {
  return `
  <div class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
    <div class="card h-100">
      <a href="${prod.ref}"><img class="card-img-top" src="${prod.figSrc}" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="${prod.ref}">${prod.name}</a>
        </h4>
        <p class="card-text">${prod.desc}</p>
      </div>
    </div>
  </div>`
}

function createIntro(intro) {
  return `
  <div class="col-lg-6">
    <img class="img-fluid rounded mb-4" src="${intro.ref}" alt="">
  </div>
  <div class="col-lg-6">
    <h2>${intro.title}</h2>
    <p>${intro.desc}</p>
  </div>`
}

function createContact(contact) {
  return `
  <h3>${contact.title}</h3>
  <h3>${contact.name}</h3>
  <h3>${contact.tel}</h3>
  <h3>${contact.fax}</h3>
  <h3>${contact.email}</h3>
  <h3>${contact.lineID}</h3>`
}

function setTitle(title, prefix) {
  if (prefix)
    document.title = `${prefix} - ${title}`;
  else
    document.title = title;
}

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) return null;
    return decodeURI(results[1]) || 0;
}

// load nav and footer
$("#nav-placeholder").load("nav.html");
$("#footer-placeholder").load("footer.html");

// set title
$.getJSON('json/title.json', function(data) {
  setTitle(data.title);
});