
//date
// ---------------DATE-----------------

const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const formattedDate = currentDate.toLocaleDateString(undefined, options);
// console.log(`Today's date is ${formattedDate}`);

// ---------------DATE-----------------
var taskNo = 1;
var rishib = "Rishabi";



// // ----------------MAIN FUNCTIONS------------------
// // ----------------MAIN FUNCTIONS------------------

function slide(value) {
    value++;
    var imgid = "img" + value;
    var mainid = "image" + value;
    var tmp = document.getElementById(mainid)
    console.log("slide Ran " + imgid + " " + mainid);
    let isMoved = false;

    if (!isMoved) {
        tmp.style.transform = "translateX(-751px)";
        // tmp.style.display="none"
        tmp.addEventListener("transitionend", () => {
            tmp.style.display = "none";
            console.log("Successfully Deleted!");
        })
    }

    document.getElementById(imgid).onclick = () => {
        console.log("it working");
    }
    tmpi.addEventListener("click", () => {
        if (!isMoved) {
            tmp.style.transform = "translateX(-200px)"; // Move the div to the right by 200px
            // moveButton.style.transform = "translateX(200px)"; // Move the div to the right by 200px
            tmp.addEventListener("transitionend", () => {
                // When the transition ends, hide the div
                console.log("Not Entered Inside   ")
                tmp.style.display = "none";
                console.log("Enterd inside")
            }) // Use { once: true } to remove the event listener after it's fired
        }
        isMoved = !isMoved; // Toggle the state
    });
}
function deleteF(val) {

    val++;
    var id = "image" + val;
    var idi = "img" + val;
    console.log(idi);
    var tmp = document.getElementById(id);
    // var tmpi=document.getElementById(idi).onclick=slide;
    console.log("Entered In function");
    let isMoved = false;

    if (!isMoved) {
        // mainid.style.transform = "translateX(-200px)";
        console.log(id)
        tmp.style.display = "none"
    }
    // tmp.style.display="none"
}
function Rishabhji() {
    console.log("Rishabh enterd")

}

// // ----------------MAIN FUNCTIONS------------------
// // ----------------MAIN FUNCTIONS------------------


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUBh9pMpORBHCgK5ekzOTOoUMzagpDX1I",
    authDomain: "todo-list-67e20.firebaseapp.com",
    databaseURL: "https://todo-list-67e20-default-rtdb.firebaseio.com",
    projectId: "todo-list-67e20",
    storageBucket: "todo-list-67e20.appspot.com",
    messagingSenderId: "240987565975",
    appId: "1:240987565975:web:7de954fe2c2cd0a89c9ed2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);


var ids;
var ides;
let Arrids = [];
let Arrides = [];
var count = 1;

document.getElementById("Enter").addEventListener('click', function () {
    
    // ?===========================================================
    


    console.log("Enter Pressed!");
    var anyval = document.getElementById('todoInput').value;

    document.getElementById("todoInput").value = "";
    var anylength = anyval.length;
    console.log(anylength);
    console.log(anyval)


    if (anylength > 0) {

        var display = document.getElementById("display");
        // Create a new div element
        var maintodo = document.createElement("div");
        var taskDiv = document.createElement("div");
        // var buttons = document.createElement("div");
        var img = document.createElement("img");

        // Defining Classes and Id's
        maintodo.className = "maintodo";
        taskDiv.className = "Task"
        img.className = "Image";
        // maintodo.style.background="Red"

        // Add content to the new div (optional)
        taskDiv.textContent = anyval;
        img.src = 'Delete.svg';

        var taskNoString = "Task: " + taskNo;
        set(ref(db, `${taskNoString}`),
            {
                Task: anyval
    
            });

            taskNo++;

            
        if (count > 0) {
            console.log("Id is assigned  image" + count);
            maintodo.id = "image" + count;
            ids = "image" + count;
            img.id = "img" + count;
            ides = "img" + count;

            Arrids.push(ids);
            Arrides.push(ides);
            // console.log("Pushed successfully"+ Arrids[(count-1)])
            count++;
        }
        document.getElementById("")

        // Append the new div to the parent div 
        display.appendChild(maintodo);
        maintodo.appendChild(taskDiv);
        maintodo.appendChild(img);

        for (let i = 0; i < Arrids.length; i++) {
            var tmp = document.getElementById(Arrides[i]);
            tmp.onclick = function () {
                // deleteF(i);
                slide(i);
            };
        }

    }
    else {
        alert("Enter a Task !")
    }
   

    return;

})


