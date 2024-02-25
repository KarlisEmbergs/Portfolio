

let currQuestionNum = 1;
function showQuestion(index) {
    const currQuestion = document.getElementById('q' + currQuestionNum);
    currQuestion.classList.add('hide-question')
    currQuestionNum = index;

    const nextQuestion = document.getElementById('q' + currQuestionNum);
    nextQuestion.classList.remove('hide-question');

    if (currQuestionNum === 5) {
        conBtn.classList.add('hide-question')
        submitBtn.classList.remove('hide-question')
    } else {
        conBtn.classList.remove('hide-question')
        submitBtn.classList.add('hide-question')
    }

    if (currQuestionNum > 1) {
        prevBtn.classList.remove('hide-question')
    } else {
        prevBtn.classList.add('hide-question')
    }
}

function nextQuestion() {
    if (currQuestionNum <= 5) {
        showQuestion(currQuestionNum + 1);
    }
}

function prevQuestion() {
    if (currQuestionNum >= 1) {
        showQuestion(currQuestionNum - 1);
    }
}
const conBtn = document.getElementById('conBtn')
conBtn.addEventListener('click', () => showQuestion(currQuestionNum + 1))

const prevBtn = document.getElementById('prevBtn')
prevBtn.addEventListener('click', () => prevQuestion(currQuestionNum - 1))

const submitBtn = document.getElementById('submit')

// Make at least one checkbox to mandatory checked. 
function requireCheckbox() {
    const checkboxes = document.getElementsByClassName('checkbox');

    function checkboxCheck() {
        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                return true;
            }
        }
        return false;
    }

    function checkboxChange() {
        if (checkboxCheck()) {
            for (let checkbox of checkboxes) {
                checkbox.removeAttribute('required');
            }
        } else {
            for (let checkbox of checkboxes) {
                checkbox.setAttribute('required', 'required');
            }
        }
    }

    for (let checkbox of checkboxes) {
        checkbox.addEventListener('click', checkboxChange);
    }
}
requireCheckbox();

// function retrieveFormInfo() {
//     const forename = document.getElementById('forename')
//     const surname = document.getElementById('surname')
//     const loanAmount = document.getElementById('loanAmount')
//     const paymentDate = document.getElementById('paymentDate')
//     const loanPurpose = document.getElementById('loanPurpose')
//     const salary = document.getElementById('salary')
//     const employee = document.getElementById('employee')
//     const loanCommitment = document.getElementById('loanCommitment')

//     let forenameInput = forename.value;
//     let surnameInput = surname.value;
//     let loanAmountInput = loanAmount.value;

//     let paymentDateInput = paymentDate.options[paymentDate.selectedIndex];
//     let selectedPaymentDate = paymentDateInput.value

//     let loanPurposeInput = loanPurpose.value;
//     function storeChekbox() {
//         let arr = [];
//         let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
//         for (let i = 0; i < checkboxes.length; i++) {
//             arr.push(checkboxes[i].value)
//         }
//         return arr;
//     }
//     let loanPurposeValues = storeChekbox();

//     let salaryInput = salary.value;
//     let employeeInput = employee.value;
//     let loanCommitmentInput = loanCommitment.value;

//     let formInfo = {
//         fname: forenameInput,
//         sname: surnameInput,
//         loanAmount: loanAmountInput,
//         repayDate: selectedPaymentDate,
//         loanPurpose: loanPurposeValues,
//         salary: salaryInput,
//         employee: employeeInput,
//         loanCommitment: loanCommitmentInput
//     };
//     console.log(formInfo)
// }

// document.getElementById('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     retrieveFormInfo();
// })
