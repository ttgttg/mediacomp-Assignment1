function quiz() {
  document.getElementById("response0").innerText = "";
  document.getElementById("response1").innerText = "";
  document.getElementById("response2").innerText = "";
  document.getElementById("response3").innerText = "";
  document.getElementById("response4").innerText = "";

  let score=0;
//Q1
let answer0 = parseInt(document.getElementById("answer0").value);
if (answer0 >= 0 && answer0 <= 5) {
  document.getElementById("response0").innerText = "Correct!";
  score += 1;
} else {
  document.getElementById("response0").innerText = "Number must be between 0-5";
}

//Q2
  let answer1 = document.getElementById("answer1").value;
if (answer1 == "answer100") {
  document.getElementById("response1").innerText = "Correct!";
  score += 1;
} else if (answer1 == "") {
  document.getElementById("response1").innerText = "Please select an answer.";
} else {
  document.getElementById("response1").innerText = "Wrong, try it again.";
}

//Q3
  let answer2 = document.querySelector('input[name="question2"]:checked');
  if (answer2 && answer2.id == "no1") {
    document.getElementById("response2").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response2").innerText = "Wrong, try it again.";
  }

//Q4
  let answer3 = document.querySelector('input[name="question3"]:checked');
  if (answer3 && answer3.id == "yes2") {
    document.getElementById("response3").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response3").innerText = "Wrong, try it again.";
  }

//Q5
  let answer4_0 = document.getElementById("answer400").checked;
  let answer4_3 = document.getElementById("answer403").checked;
  if (
    answer4_0 &&
    answer4_3 &&
    !document.getElementById("answer401").checked &&
    !document.getElementById("answer402").checked
  ) {
    document.getElementById("response4").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response4").innerText = "Wrong, try it again.";
  }

//Q6
    let answer5_2 = document.getElementById("answer502").checked;
  if (
    answer5_2 &&
    !document.getElementById("answer500").checked &&
    !document.getElementById("answer501").checked &&
    !document.getElementById("answer503").checked
  ) {
    document.getElementById("response5").innerText = "Correct!";
    score += 1;
  } else {
    document.getElementById("response5").innerText = "Wrong, try it again.";
  }

//Q7
let answer6_0 = document.getElementById("answer600").checked;
let answer6_1 = document.getElementById("answer601").checked;
if (answer6_0 && !answer6_1) {
  document.getElementById("response6").innerText = "Correct!";
  score += 1;
} else {
  document.getElementById("response6").innerText = "Wrong, try it again.";
}

//Q8
let answer7_1 = document.getElementById("answer701").checked;
if (answer7_1) {
  document.getElementById("response7").innerText = "Correct!";
  score += 1;
} else {
  document.getElementById("response7").innerText = "Wrong, try it again.";
}

//Q9
let answer8 = document.getElementById("answer8").value;
if (answer8 == "answer802") {
  document.getElementById("response8").innerText = "Correct!";
  score += 1;
} else if (answer8 == "") {
  document.getElementById("response8").innerText = "Please select an answer.";
} else {
  document.getElementById("response8").innerText = "Wrong, try it again.";
}


  switch (score) {
    case 0:
      alert(
        "You didn't get any score this time. You probably should review the instruction page!"
      );
      break;
    case 1:
      alert(
        "Your score is 1 out of 9. It's quite a low score:( You can do better next time!"
      );
      break;
    case 2:
      alert(
        "Your score is 2 out of 9. With a bit more effort, you could achieve a better result!"
      );
      break;
    case 3:
      alert("Your score is 3 out of 9. You're getting there! Keep trying!");
      break;
    case 4:
      alert("Your score is 4 out of 9. Almost half way there! You got this!");
      break;
    case 5:
      alert(
        "Your score is 5 out of 9. Good job! Just three more to perfection!"
      );
      break;
    case 6:
      alert("Your score is 6 out of 9. Almost there! Keep it going!");
      break;
    case 7:
      alert(
        "Your score is 7 out of 9. Well done! You've scored quite well:) Keep up the good work!"
      );
      break;
    case 8:
      alert("Your score is 8 out of 9. You slayed!!!");
      break;
    case 9:
      alert("Your score is 9 out of 9. Daaaaaaang!!! Nailed it!!!");
      break;
  }
}
