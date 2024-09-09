// 현재 계산기에 그려질 숫자
let currentReusult = 0;

// 로그를 모아놓을 배열
const logArray = [];

// 계산 기능을 담당하는 함수

const calculate = (type) => {
  // 계산전 값을 기억
  const originalResult = currentReusult;
  // 입력창에 입력된 숫자를 읽자.
  const enteredNumber = +$userInput.value;

  if (!enteredNumber || enteredNumber == 0) {
    alert("연산이 불가능한 값입니다!");
    return;
  }

  let mark;
  if (type === "ADD") {
    mark = "+";
    currentReusult += enteredNumber;
  } else if (type === "SUB") {
    mark = "-";
    currentReusult -= enteredNumber;
  } else if (type === "MULTI") {
    mark = "x";
    currentReusult *= enteredNumber;
  } else {
    mark = "/";
    currentReusult /= enteredNumber;
  }

  // 연산식의 결과를 두번째 section에 렌더링

  $currentCalculationOutput.textContent = `${originalResult} ${mark} ${enteredNumber}`;
  $currentResultOutput.textContent = currentReusult;

  $userInput.value = "";
  $userInput.focus();

 //  로그 이력을 만드는 함수
 const writeToLog = (mark, originalResult, enteredNumber, currentReusult) => {
    //  계산 결과를 객체로 포장해서 배열에 저장
    // 변수의 값으로 프로퍼티를 만들 때 키 값이 변수 이름과 같다면 키를 생략 가능.
    // 변수의 이름이 키가 됩니다.
    const logObject = {
      mark,
      originalResult,
      enteredNumber,
      currentReusult,
    };

    logArray.push(logObject);
    console.log(logArray);
    // 화면에 로그를 li로 렌더링하는 함수
    renderToLog(logObject);
  };

  // 로그 이력 쌓기
  writeToLog(mark, originalResult, enteredNumber, currentReusult);


 

  const renderToLog = ({
    mark,
    originalResult: prevResult,
    enteredNumber: Number,
    current: result,
  }) => {
    const $newLi = document.createElement('li');
    $newLi.textContent = `${prevResult} ${mark} ${number} = ${result}`;

  $logEntries.appendChild($newLi);
  }
};


  



const addHandler = () => calculate("ADD");
const subHandler = () => calculate("SUB");
const multiHandler = () => calculate("MULTI");
const divideHandler = () => calculate("DIVIDE");

// 이벤트 핸들러 자리에 함수 호출문을 쓰시면 함수의 호출 결과를 이벤트로 등록하겠다는 것이기 때문에
// 함수가 바로 호출됩니다.
$addBtn.addEventListener("click", addHandler);
$subtractBtn.addEventListener("click", subHandler);
$multiplyBtn.addEventListener("click", multiHandler);
$divideBtn.addEventListener("click", divideHandler);
