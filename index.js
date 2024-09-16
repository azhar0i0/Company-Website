function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
        /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
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
//-----------------------------------------------------------
        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";
        function toggleMenu() {
            if (menuList.style.maxHeight = "0px") {
                menuList.style.maxHeight = "300px";
            }
            else {
                menuList.style.maxHeight = "0px";
            }
        }
        function alertbox() {
            alert("Your request is submitted")
        }
        // ------------------form submit---------------------
        const form = document.querySelector('form');
        const firstName = document.getElementById("name1");
        const lastName = document.getElementById("name2");
        const email = document.getElementById("email");
        const companyName = document.getElementById("company");
        const details = document.getElementById("details");
        function sendEmail() {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "klibfbbbb@gmail.com",
            Password : "D6A4D85D843E7027B94AAA9A1E2492FE10C0",
            To : 'klibfbbbb@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        }
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          
          sendEmail();
        })
