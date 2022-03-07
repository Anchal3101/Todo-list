function addM(){
 let input1 = document.getElementById('todo-input').value;
let box = document.getElementById('box');
let data = localStorage;
let li = document.createElement('li');
let btn = document.createElement('button');
let text = document.createTextNode(input1);

li.appendChild(text);


if(input1==""){
  alert("you must writing something");
}else{
  li.textContent = input1;
  let pos = box.firstChild;
  let a = document.createElement('button');
  a.textContent ='delete';
  a.className ='del';
  li.appendChild(a);
  if(pos==null){
    box.appendChild(li);
  }else{
      box.insertBefore(li, pos);
}
document.getElementById('todo-input').value ='';
}
}

let but = document.querySelector('ul');
but.addEventListener('click',function(e){
    let box = document.getElementById('box');
   let li = e.target.parentNode;
   box.removeChild(li);
});
