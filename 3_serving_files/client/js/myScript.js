const btn1 = document.createElement("BUTTON");
btn1.innerHTML = "Home";
btn1.onclick = () => {window.location.href = "index.html"};

const btn2 = document.createElement("BUTTON");
btn2.innerHTML = "Add";
btn2.onclick = () => {window.location.href = "page1.html"};

const btn3 = document.createElement("BUTTON");
btn3.innerHTML = "Multiply";
btn3.onclick = () => {window.location.href = "page2.html"};

const btn4 = document.createElement("BUTTON");
btn4.innerHTML = "Divide";
btn4.onclick = () => {window.location.href = "page3.html"};

document.getElementById("container").append(btn1);
document.getElementById("container").append(btn2);
document.getElementById("container").append(btn3);
document.getElementById("container").append(btn4);

function validateForm(f) {
  try {
    const nums = {
      num1: document.forms["squareForm"]["num1"].valueAsNumber,
      num2: document.forms["squareForm"]["num2"].valueAsNumber
    };

    const xhttp = new XMLHttpRequest();
    let url;
    switch (f) {
      case 'add':
        url = 'add';
        break;
      case 'mul':
        url = 'mul';
        break;
      case 'div':
        if (nums.num2 === 0) {
          window.location.href = "page4.html"
        } else {
          url = 'div';
        }
        break;
      default:
    }
    xhttp.open("GET", `${url}?num1=${nums.num1}&num2=${nums.num2}`, true);
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState === 4 && xhttp.status === 200) {
        document.getElementById("value").innerHTML = JSON.parse(xhttp.responseText).result;
      }
    }
    xhttp.send();

  } catch (err) {
    alert("Something went wrong");
    console.log(err);
  }
  return false;
}
