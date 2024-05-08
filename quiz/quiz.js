function quiz() {
  document.getElementById("response0").innerText = "";
  document.getElementById("response1").innerText = "";
  document.getElementById("response2").innerText = "";
  document.getElementById("response3").innerText = "";
  document.getElementById("response4").innerText = "";

  var answer0 = document.getElementById("answer0").value;
  if (answer0 == "1") {
    document.getElementById("response0").innerText = "Correct!";
  } else {
    document.getElementById("response0").innerText = "Wrong, try it again.";
  }

  var answer1 = document.getElementById("answer1").value;
  if (answer1 == "answer100") {
    document.getElementById("response1").innerText = "Correct!";
  } else {
    document.getElementById("response1").innerText = "Wrong, try it again.";
  }

  var answer2 = document.querySelector('input[name="question2"]:checked');
  if (answer2 && answer2.id == "yes1") {
    document.getElementById("response2").innerText = "Correct!";
  } else {
    document.getElementById("response2").innerText = "Wrong, try it again.";
  }

  var answer3 = document.querySelector('input[name="question3"]:checked');
  if (answer3 && answer3.id == "yes2") {
    document.getElementById("response3").innerText = "Correct!";
  } else {
    document.getElementById("response3").innerText = "Wrong, try it again.";
  }

  var answer4_0 = document.getElementById("answer400").checked;
  var answer4_3 = document.getElementById("answer403").checked;
  if (
    answer4_0 &&
    answer4_3 &&
    !document.getElementById("answer401").checked &&
    !document.getElementById("answer402").checked
  ) {
    document.getElementById("response4").innerText = "Correct!";
  } else {
    document.getElementById("response4").innerText = "Wrong, try it again.";
  }
}
