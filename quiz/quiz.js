function quiz() {
  document.getElementById("response0").innerText = "";
  document.getElementById("response1").innerText = "";
  document.getElementById("response2").innerText = "";
  document.getElementById("response3").innerText = "";
  document.getElementById("response4").innerText = "";

  let score=0;

  let answer0 = document.getElementById("answer0").value;
  if (answer0 == "1") {
    document.getElementById("response0").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response0").innerText = "Wrong, try it again.";
  }

  let answer1 = document.getElementById("answer1").value;
  if (answer1 == "answer100") {
    document.getElementById("response1").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response1").innerText = "Wrong, try it again.";
  }

  let answer2 = document.querySelector('input[name="question2"]:checked');
  if (answer2 && answer2.id == "yes1") {
    document.getElementById("response2").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response2").innerText = "Wrong, try it again.";
  }

  let answer3 = document.querySelector('input[name="question3"]:checked');
  if (answer3 && answer3.id == "yes2") {
    document.getElementById("response3").innerText = "Correct!";
    score+=1
  } else {
    document.getElementById("response3").innerText = "Wrong, try it again.";
  }

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


  switch(score){
    case 0:
      alert("You didn't get any score this time. You'd better to reveiw the instruction page!")
      break
    case 1:
      alert("Your score is 1 out of 5\nIt's quite a low score:( You can do better next time!")
      break
    case 2:
      alert("Your score is 2 out of 5\nWith a bit more effort, you could achieve better result!")
      break
    case 3:
      alert("Your score is 3 out of 5\nYou're getting there! Keep trying!")
      break
    case 4:
      alert("Your score is 4 out of 5\nWell done! You've scored quite well:) Keep up the good work!")
      break
    case 5:
      alert("Your score is 5 out of 5\nCongratulations! You've achieved the highest score!")
      break
  }

}
