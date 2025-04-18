//SWITCH CASE STATEMENT, VERY USEFUL IN REDUX AND MANY OTHER THINGS

const month = 3; //March

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break; // By default if there was no break, all code would still be matched except default below
    case 4:
        console.log("April")
        break; //Control flow ko break krdeta hai

    default:
        console.log("default case match")
        break;
}