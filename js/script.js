const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

function Ordenar(array){
  let arregloOrdenado=[];
  arregloOrdenado=array.sort(function(a,b){
    if(a.toUpperCase() > b.toUpperCase()){
      return 1;
    }
    else if(a.toUpperCase()<b.toUpperCase()){
      return -1;
    }
    else{
      return 0;
    }
  })
  return arregloOrdenado;
}

function Filter(array){
  let arrayStrings=[];
  array.forEach(i=>{
    if(typeof i === "string"){
      arrayStrings.push(i);
    }
  })
  return arrayStrings;
}

document.addEventListener("DOMContentLoaded", (e) => {
  let arrayFilter=Filter(strangeArray);
  let arrayOrd=Ordenar(arrayFilter);
  showList(arrayOrd);

});