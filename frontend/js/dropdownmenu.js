/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");


// Henter modal afsnittet fra vores html
var modal = document.getElementById("updateModal");

// Henter knappen som åbner vores modal, i html
var btn = document.getElementById("updatepipButton");

// Henter span (<span class="close">&times;</span>) som er et kryds der lukker modal box
var span = document.getElementsByClassName("updateBoxClose")[0];

// Når brugeren klikker på knappen, åbnes modal boxen
btn.onclick = function() {
  modal.style.display = "block";
  console.log("Hej med");
}

// Når brugeren klikker på krydset (<span class="close">&times;</span>), lukkes modal boxen
span.onclick = function() {
  modal.style.display = "none";
}

// Når brugeren klikker steder uden for boxen, lukkes den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// WORD COUNT
let inputTextArea2 = document.getElementById("indtast_pip2");
let characCount2 = document.getElementById("charac-count2");

 inputTextArea.addEventListener("input", () => {
//value-length command specifies the maximum value length in bytes
//textContent sets or returns the text content of the specified node
   characCount.textContent = inputTextArea.value.length ;
//trim() method removes whitespace from both ends of a string
   let txt = inputTextArea.value.trim();
//txt.split(/\s+/) code will split the full classname of an element into an array containing every class
   wordCount.textContent = txt.split(/\s+/).filter((item) => item).length ;
 });