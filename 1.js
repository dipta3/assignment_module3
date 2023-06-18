function getDayOfWeek(inputDate) {
    const date = new Date(inputDate);
    const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = allDays[date.getDay()];

    return day;
}
const inputDate = '2023-06-16'; //a
const dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek);

const currrentDate = new Date();//b
const currentDateOfWeek = getDayOfWeek(currrentDate);
console.log(currentDateOfWeek);