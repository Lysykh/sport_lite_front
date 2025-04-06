
let random = Math.floor(Math.random() * 100) + 1;
let count = 1;
let forma = document.getElementById("forma1")

forma.addEventListener("submit", function(event) 

 

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

function dontClick(event){
    alert("не кликай")
}

let vardiv = document.querySelector(".main")
vardiv.addEventListener("click", dontClick)

 
// function dontClick(event) {
//     alert("Не кликай!");
//     event.stopPropagation(); // Предотвращаем всплытие события
// }

// // Вариант 1: Если у вас только один элемент с классом "main"
// let mainDiv = document.querySelector(".main"); // Получаем первый элемент с классом
// mainDiv.addEventListener("click", dontClick);

    
    

