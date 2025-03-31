
sravnenie = "111"; // Константа для сравнения

document.getElementById("forma1").addEventListener("submit", function(event) 

{event.preventDefault(); formData = new FormData(this);
name_from_form = formData.get("data");
alert(name_from_form)


    // Сравниваем с константой
    if(name_from_form == sravnenie) 
        {alert("Удача!")} 
        else 
        {alert("Неверно! Попробуйте ещё раз.")}
        
}
);
