const student = "Масалов Никита Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


const consolePrise = +prompt("Введите цену приставки", );
const travel = +prompt("Введите стоимость проезда", );
const mamaTravel = +prompt("Введите сумму, которую мама даёт на проезд", );
const mamaMeal = +prompt("Введите сумму, которую даёт мама на обеды",);
let drive = mamaTravel - travel

const sem1_Week = Array(16).fill([4, 1, 2, 5, 2, 2, 0]);
const sem1_Exam = Array(1).fill([0, 2, 0, 2, 0, 0, 0]);
const holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0]);
const sem2_Week = Array(23).fill([1, 4, 4, 2, 5, 0, 0]);
const sem2_Exam = Array(1).fill([2, 0, 2, 0, 2, 0, 0]);

const array = [sem1_Week, sem1_Exam, holidays, sem2_Week, sem2_Exam];

let weekNumber = 0;
let dayNumber = 0;
let money = 0;
if (travel > mamaTravel) {
    alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда');
    
} else {
    for (let i = 0; i < array.length; i++) {
    let typeOfWeek = array[i];

    for (let j = 0; j < typeOfWeek.length; j++) {
        weekNumber = weekNumber + 1;
        console.log(`Неделя номер ${weekNumber}`);
        let week = typeOfWeek[j]

        for (let k = 0; k < week.length; k++) {
            dayNumber = dayNumber + 1;
            console.log(`День номер ${dayNumber}`);
            let lessons = week[k];
            console.log(lessons);
            if (money >= consolePrise) {
                break
            }
            if ((lessons > 0) && (lessons <= 3)) {
                console.log(`Денюжку откладываем, ибо пар в день: ${lessons}`);

                money = money + mamaMeal + drive;

                console.log(`Отложили: ${mamaMeal} руб., в копилке: ${money} руб.`);

            } else if (lessons > 3) {
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${lessons}`);

                money = money + drive;
            } else {
                console.log(`Денюжку НЕ откладываем, ибо пар в день: ${lessons}`);
            }
            
            if (money >= consolePrise) {
                alert(`Ура! Скопили!!! На ${dayNumber} день ${weekNumber} неделя , сумму ${money}`);
           }
        }  
    }
}
if (money < consolePrise) {
    alert(`На приставку накопить не удалось, но за всё время накоплено ${money} руб`)
}
}