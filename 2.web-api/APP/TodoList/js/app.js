import {
  $addBtn,
  $input,
  $todoList,
  $item,
  $checkBtn,
  $modiBtn,
  $remBtn,
  $checkedList,
} from "./vendor.js";

// 할일추가
// 아이템들 간격을 못맞춤

let listNumber = 3;

$addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //li 생성
  const $newList = document.createElement("li");

  ++listNumber;
  $newList.setAttribute("data-id", listNumber);
  $newList.setAttribute("class", "todo-list-item");

  // checkbox
  const $newLabel = document.createElement("label");
  $newLabel.setAttribute("class", "checkbox");
  $newList.appendChild($newLabel);

  const $newInputTag = document.createElement("input");
  $newInputTag.setAttribute("type", "checkbox");
  $newList.appendChild($newInputTag);

  const $newSpan = document.createElement("span");
  $newSpan.setAttribute("class", "text");
  $newSpan.textContent = $input.value;
  $newList.appendChild($newSpan);

  // button
  const $newModDiv = document.createElement("div");
  const $modSpan = document.createElement("span");
  $modSpan.setAttribute("class", "lnr lnr-undo");
  $newModDiv.appendChild($modSpan);
  $newList.appendChild($newModDiv);

  const $newRemDiv = document.createElement("div");
  const $remSpan = document.createElement("span");
  $remSpan.setAttribute("class", "lnr lnr-cross-circle");
  $newRemDiv.appendChild($remSpan);
  $newList.appendChild($newRemDiv);

  $todoList.appendChild($newList);
  $input.value = "";
});

// 할일 완성
// 첫번째 리스트만 적용됨
$checkBtn.addEventListener("change", (e) => {

  
  if (e.target.checked) {
    $checkedList.classList.add("success");
  } else {
    $checkedList.classList.remove("success");
  }
});

// 할일 수정
$modiBtn.addEventListener("click", (e) => {
  document.querySelector(".text").textContent = $input.value;
  console.log($input.value);

  $modiBtn.className = "lnr lnr-checkmark-circle";
});

// 할일 삭제
