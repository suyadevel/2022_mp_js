// 음료수를 뽑는 자판기

var coin = 0; // 처음 잔액
document.getElementById("current").innerHTML = coin + "원";

function color () {
    if (coin >= 4500) {
        document.getElementById("juice").style.color = 'green';
        document.getElementById("coffee").style.color = 'green';
        document.getElementById("tea").style.color = 'green';
    } else if (coin >= 2400) {
        document.getElementById("coffee").style.color = 'green';
        document.getElementById("tea").style.color = 'green';
    } else if (coin >= 1800) {
        cocument.getElementById("tea").style.color = 'green';
    } else {
        document.getElementById("juice").style.color = 'red';
        document.getElementById("coffee").style.color = 'red';
        document.getElementById("tea").style.color = 'red';
    }
}

// 자판기에 돈 넣기

function click1() {
    coin += 10000;
    color();
    alert("투입 금액 : 10,000원");
    document.getElementById("current").innerHTML = coin + "원";
}

function click2() {
    coin += 1000;
    color();
    alert("투입 금액 : 1,000원");
    document.getElementById("current").innerHTML = coin + "원";
}

function click3() {
    coin += 500;
    color();
    alert("투입 금액 : 500원");
    document.getElementById("current").innerHTML = coin + "원";
}

function click4() {
    coin += 100;
    color();
    alert("투입 금액 : 100원");
    document.getElementById("current").innerHTML = coin + "원";
}

// 음료수를 뽑자! 

function getjuice() {
    if (coin < 4500) {
        alert("잔액이 부족합니다.");
    } else {
        coin -= 4500;
        alert("결제가 완료 되었습니다. 주스가 추출되고 있으니 자판기 하단에서 삐- 소리가 난 후에 가져가 주세요.");
        color();
        document.getElementById("current").innerHTML = coin + "원";
    }
}

function getcoffee() {
    if (coin < 2400) {
        alert("잔액이 부족합니다.");
    } else {
        coin -= 2400;
        alert("결제가 완료 되었습니다. 커피가 추출되고 있으니 자판기 하단에서 삐- 소리가 난 후에 가져가 주세요.");
        color();
        document.getElementById("current").innerHTML = coin + "원"; 
    }
}

function gettea() {
    if (coin < 1800) {
        alert("잔액이 부족합니다.");
    } else {
        coin -= 1800;
        alert("결제가 완료 되었습니다. 차가 추출되고 있으니 자판기 하단에서 삐- 소리가 난 후에 가져가 주세요.");
        color();
        document.getElementById("current").innerHTML = coin + "원";
    }
}

// 버튼 만들기

const button1 = document.getElementById("button1");
button1.addEventListener("click", click1);

const button2 = document.getElementById("button2");
button2.addEventListener("click", click2);

const button3 = document.getElementById("button3");
button3.addEventListener("click", click3);

const button4 = document.getElementById("button4");
button4.addEventListener("click", click4);

const juice = document.getElementById("juice");
juice.addEventListener("click", getjuice);

const coffee = document.getElementById("coffee");
coffee.addEventListener("click", getcoffee);

const tea = document.getElementById("tea");
tea.addEventListener("click", gettea);