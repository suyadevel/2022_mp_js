let count = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1;

function finding() {
    const userNumber = document.querySelector('#try').value;

    if (userNumber >=1 && userNumber <= 100) {
        
        if (randomNumber > userNumber) {
            document.querySelector('#display').innerHTML = "UP!";
        }
        
        else if (randomNumber < userNumber) {
            document.querySelector('#display').innerHTML = "DOWN!";
        }
        
        else {
            document.querySelector('#display').innerHTML = "<span style='color:red'>맞혔습니다.</span>";
        }
        
        document.querySelector('#try').value = "";
        count++;
        document.querySelector('#counter').innerHTML = "시도 횟수: " + count + "회";
    }

    else {
        alert('1과 100 사이의 숫자를 입력하세요.')
    }
}
