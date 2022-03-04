const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '04',
        month: '03',
        year: '1985'
    }
}


console.log(parseInt(user.born.day), Number(user.born.month));

const currDate = new Date();
const currDay = currDate.getDate();
const currMonth = currDate.getMonth() +1;

console.log(currDay, currMonth);

if(parseInt(user.born.day) === currDay && Number(user.born.month) === currMonth) {
    console.log(user.firstName + ' ' + user.lastName + ' ma dziś urodziny!');
}