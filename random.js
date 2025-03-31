
let random = Math.floor(Math.random() * 100) + 1;
let count = 1;

document.getElementById("forma1").addEventListener("submit", function(event) 

{event.preventDefault(); formData = new FormData(this);
name_from_form = formData.get("data");

if (name_from_form > 100)
    {alert (`МНОГО`)}
    else {
        alert(`Загаданное число, ${random}`)
         if(name_from_form == random) 
        {alert("Удача!"), alert(count)}

        else 
        {alert("Неверно! Попробуйте ещё раз."), count=count+1
            if (name_from_form > random) 
                {alert(`Подсказка: загаданное число меньше чем, ${name_from_form}`)} 
                else 
                {alert(`Подсказка: загаданное число больше чем", ${name_from_form}`)} 
        }
        }
        
}
);





    
    

