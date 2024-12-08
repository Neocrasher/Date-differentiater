var form = document.getElementById("yo");
form.addEventListener("submit",
    function(event){
        event.preventDefault();
        var date1 = new Date(document.getElementById("yo1").value);
var date2 = new Date(document.getElementById("yo2").value);
        difference = date2.getTime() - date1.getTime();
        var days = difference/1000/60/60/24;
        document.getElementById("final").innerText = days;
    }
)
