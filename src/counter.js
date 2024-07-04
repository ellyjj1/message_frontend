//when there is nothing in local storage, set it to 0
if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0);
}

function count() {
    let counter = localStorage.getItem("counter");
    counter++;
    document.querySelector("h1").innerHTML = counter
    localStorage.setItem("counter", counter);
    console.log(counter);

    // if (counter % 10 == 0) {
    //     alert("Count is now " + counter);
    // }
}
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("h1").innerHTML = localStorage.getItem("counter");
    document.querySelector("button").onclick = count;
    
    // //Calls the count function every 1000 milliseconds (or 1 second).
    // setInterval(count, 1000);

}

)