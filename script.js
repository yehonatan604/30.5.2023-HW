const buttons = {
    ex11: document.querySelector("#ex11"),
    ex12: document.querySelector("#ex12"),
    ex13: document.querySelector("#ex13"),
    ex14: document.querySelector("#ex14"),
    ex15: document.querySelector("#ex15"),
    ex16: document.querySelector("#ex16"),
    ex17: document.querySelector("#ex17"),
    ex18: document.querySelector("#ex18"),
    ex19: document.querySelector("#ex19"),
    ex20: document.querySelector("#ex20")
}

const output = document.querySelector("#output-text")

function ex11() {
    let wordsLength = prompt("please enter a number of words");
    const words = [];
    for (let i = 0; i < wordsLength; i++) {
        words[i] = prompt(`please enter word number ${i+1}:`)
    }
    output.innerHTML = words.join(' ');
}

function ex12() {
    let products = [];
    for (let i = 0; i < 5; i++) {
        products[i] = prompt(`please enter price number ${i+1}:`)
    }
    output.innerHTML = products.reduce((acc, curr) => {
        return (+acc) + (+curr);
    }, 0)
}

function ex13() {
    numbers = [];
    let finalNumber = prompt("please enter a number");
    for (let i = 0; i <= finalNumber; i++) {
        numbers[i] = i
    }
    output.innerHTML = numbers.reduce((acc, curr) => {
        return (+acc) + (+curr);
    }, 0)
}

function ex14() {
    let prices = [];
    while(true) {
        let price = prompt("please enter price");
        if (price != 0) {
            prices.push(price);
        }
        else {
            break;
        }
        output.innerHTML = prices.reduce((acc, curr) => {
            return (+acc) + (+curr);
        }, 0)
    }
}

function ex15() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }
    output.innerHTML = grades.reduce((acc, curr) => {
        return (+acc) + (+curr);
    }, 0) / gradesNumber;
}

function ex16() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }

    output.innerHTML = grades.reduce((acc, curr) => {
        return acc > curr ? acc : curr;
    }, 0);
}

function ex17() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }
    const min = grades.reduce((acc, curr) => {
        return acc < curr ? acc : curr;
    });
    output.innerHTML = min;
}

function ex18() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }
    let bestStudents = 0;
    grades.forEach(grade => {
        if (grade > 90) {
            bestStudents++;
        }
    })
    output.innerHTML = bestStudents;
}

function ex19() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }
    let lowestGrades = 0;
    grades.forEach(grade => {
        if (grade < 69) {
            lowestGrades++;
        }
    })
    output.innerHTML = lowestGrades;
}
function ex20() {
    let grades = [];
    let gradesNumber = prompt("please enter total number of grades");
    for (let i = 0; i < gradesNumber; i++) {
        grades.push(prompt(`please enter grade ${i+1}`));
    }
    let lowestGrades = 0;
    let bestStudents = 0;
    let normalGrades = 0 ;
    grades.forEach(grade => {
        if (grade < 69) {
            lowestGrades++;
        }
        if (grade > 90) {
            bestStudents++;
        } else {
            normalGrades++;
        }
    })
    output.innerHTML = `lowestGrades: ${lowestGrades}<br>bestGrades: ${bestStudents}<br>normalGrades: ${normalGrades}<br>`;
}