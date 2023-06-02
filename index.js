let toDoList = [];

function add() {
  let inputList = document.getElementById("input").value;
  toDoList.push(inputList);

  document.getElementById("items").innerHTML = toDoList;
  if (inputList === true) {
    toDoList !== "";
  }
  
li.innerHTML = 
`<input type="checkbox" id="box" ${checked}>
 `;
}

function submit(true1) {
    if (true1 !== '') {
    let timeSort = { 
        result: new Date(),
    
    };
toDoList.push(timeSort);
   
    }
    else {
        alert('Enter Date')
    }
    };

function sort(a,b) {
  return a -b 
    //toDoList.sort();
};


//function output () {
//    localStorage.setItem("inputList", JSON.stringify(toDoList))
//    inputList.innerHTML = localStorage.getItem("toDoList");
//}

let myList = {
  message: "t",
};

function (toDoList) {

let  = JSON.stringify(toDoList);
localStorage.setItem("list", toDoList);
}
//myList = localStorage.getItem('myList');
//const overAll = JSON.parse(list);
