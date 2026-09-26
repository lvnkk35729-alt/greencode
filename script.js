/* PAGE CONTROL */

function showPage(pageName) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {

    page.classList.remove("active");

  });

  document
    .getElementById(pageName)
    .classList.add("active");

}


/* RANDOM DEMO CODE */

function randomCharacters(length) {

  const characters =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result = "";

  for (let i = 0; i < length; i++) {

    const random =
      Math.floor(
        Math.random() * characters.length
      );

    result += characters[random];

  }

  return result;
}


/* LICENCE DEMO */

function generateLicence() {

  const code =
    "DEMO-" +
    randomCharacters(7);

  showResult(
    "LICENCE DEMO",
    code
  );

}


/* FLC DEMO */

function generateFLC() {

  const code =
    "FLC-" +
    randomCharacters(7);

  showResult(
    "FLC LICENCE DEMO",
    code
  );

}


/* RESULT */

function showResult(title, code) {

  const box =
    document.getElementById(
      "resultBox"
    );

  const codeElement =
    document.getElementById(
      "resultCode"
    );

  document.querySelector(
    ".result-title"
  ).textContent = title;

  codeElement.textContent =
    code;

  box.classList.remove("show");

  setTimeout(function() {

    box.classList.add("show");

  }, 50);

  box.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* LOGIN PAGE */

function openLogin() {

  showPage("login");

  setTimeout(function() {

    document
      .getElementById("username")
      .focus();

  }, 200);

}


/* LOGIN */

function login() {

  const username =
    document
      .getElementById("username")
      .value
      .trim();

  if (username === "") {

    alert(
      "Please enter username."
    );

    return;

  }

  showPage("dub");

}


/* DUB CODE */

function generateDUB() {

  const codeElement =
    document.getElementById(
      "dubCode"
    );

  const loader =
    document.getElementById(
      "loader"
    );


  codeElement.textContent =
    "• • • • • •";

  loader.classList.add("show");


  setTimeout(function() {

    const code =
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    codeElement.textContent =
      code;

    loader.classList.remove(
      "show"
    );

  }, 800);

}
