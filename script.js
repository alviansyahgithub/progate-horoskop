function horoskop() {
  const randomNumber = Date.now();
  const n = randomNumber % 5;
  let result;

  if (n % 2) {
    result = "Hebat!!";
  } else if (n % 3) {
    result = "Boleh juga!";
  } else {
    result = "Mengerikan...";
  }

  // switch-case
  /*
    switch (n % 3) {
      case 0:
        result = "Hebat!!";
        break;
      case 1:
        result = "Boleh juga!";
        break;
      default:
        result = "Mengerikan...";
        break;
    }
    */

  // 5 Pola
  /*
    switch (n % 5) {
      case 0:
        result = "Hebat!!";
        break;
      case 1:
        result = "Luar biasa!";
        break;
      case 2:
        result = "Boleh juga!";
        break;
      case 3:
        result = "Biasa saja";
        break;
      default:
        result = "Mengerikan...";
        break;
    }
    */

  const para = document.createElement("p");
  para.innerHTML = result;
  document.body.appendChild(para);
}
