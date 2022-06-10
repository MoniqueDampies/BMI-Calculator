function measureBMI() {
  let unit = document.getElementById("bmi-metric").checked,
    weight = document.getElementById("bmi-weight"),
    weightu = document.getElementById("bmi-weight-unit"),
    height = document.getElementById("bmi-height"),
    heightu = document.getElementById("bmi-height-unit");

  if (unit) {
    weightu.innerHTML = "KG";
    weight.min = 1;
    weight.max = 635;
    heightu.innerHTML = "CM";
    height.min = 54;
    height.max = 272;
  }
}

function calcBMI() {
  let bmi = null,
    unit = document.getElementById("bmi-metric").checked, // true = metric, false = imperial
    weight = parseInt(document.getElementById("bmi-weight").value),
    height = parseInt(document.getElementById("bmi-height").value),
    results = document.getElementById("bmi-results");

  if (unit) {
    height = height / 100;
    bmi = weight / (height * height);
  }
  bmi = Math.round(bmi * 100) / 100;

  if (bmi < 18.5) {
    results.innerHTML = bmi + " - Underweight";
  } else if (bmi < 25) {
    results.innerHTML = bmi + " - Normal weight";
  } else if (bmi < 30) {
    results.innerHTML = bmi + " - Over weight";
  } else if (bmi < 35) {
    results.innerHTML = bmi + " - Obesity class I";
  } else if (bmi < 40) {
    results.innerHTML = bmi + " - Obesity class II";
  } else {
    results.innerHTML = bmi + " - Obesity class III";
  }
  return false;
}
