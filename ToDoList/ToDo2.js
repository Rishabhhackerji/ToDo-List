// ---------------DATE-----------------
// ---------------DATE-----------------
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month as it's zero-based
const day = currentDate.getDate().toString().padStart(2, '0');

const todaysDate = `${year}-${month}-${day}`;
console.log(todaysDate);
// document.getElementById("date").defaultValue = formattedDate;

// ---------------DATE-----------------
// ---------------DATE-----------------

// ============================================================

// ----------------MAIN FUNCTIONS------------------
// ----------------MAIN FUNCTIONS------------------

function taskCompleted() {
    // alert("Button clicked!");
    console.log("Task Completed !");
    document.getElementById("btn1").style.color = "green";
}

function removeTask() {
    // alert("Button clicked!");
    console.log("Task Removed !");
    var btn2 = document.getElementById("btn2");
    if (btn2) {
        btn2.style.color = "green";
    } else {
        console.error("Element with ID 'btn2' not found");
    }
}

// function doneFunction(value) {
//     value = "cbtn" + value;
//     document.getElementById(value).style.color = "green"
// }


function removeFunction(value) {
    var newval = "rbtn" + value;
    var date="date"+value;
    var task="Task"+value;
    var cbtn="cbtn"+value;
    console.log(date + "Deleted")
    document.getElementById(date).style.display="none";
    document.getElementById(task).style.display="none";
    document.getElementById(newval).style.display = "none";
    document.getElementById(cbtn).style.display = "none";

}

// ----------------MAIN FUNCTIONS------------------
// ----------------MAIN FUNCTIONS------------------

// ============================================================

//---------------------- Hiding Status Buttons-------------------------------

document.getElementById("button1").style.display = "none";
document.getElementById("button2").style.display = "none";
document.getElementById("button3").style.display = "none";
document.getElementById("button4").style.display = "none";
document.getElementById("button5").style.display = "none";
document.getElementById("button6").style.display = "none";

//---------------------- Hiding Status Buttons-------------------------------
var count = 1;
function createTask() {
    // alert("Button clicked!");


    var anyval = document.getElementById('todoInput').value;
    var anylength = anyval.length;
    console.log(anylength);
    console.log(anyval)
    var date
    if (count > 0) {
        console.log(count + " Count");
        date = "date" + count;
        task = "Task" + count;
        button = "button" + count;
        count++;
        document.getElementById(button).style.display = "block";
    }
    document.getElementById(date).innerHTML = todaysDate;
    document.getElementById(task).innerHTML = anyval;
    document.getElementById(button);

    // Define a function that takes a parameter
    var button1 = document.getElementById("rbtn1"); //1
    var button2 = document.getElementById("rbtn2"); //2
    var button3 = document.getElementById("rbtn3"); //3
    var button4 = document.getElementById("rbtn4"); //4
    var button5 = document.getElementById("rbtn5"); //5
    var button6 = document.getElementById("rbtn6"); //6
   
    button1.onclick = function () {
        removeFunction(1);
    };

    button2.onclick = function () {
        removeFunction(2);
    };

    button3.onclick = function () {
        removeFunction(3);
    };

    button4.onclick = function () {
        removeFunction(4);
    };

    button5.onclick = function () {
        removeFunction(5);
    };

    button6.onclick = function () {
        removeFunction(6);
    };
}



