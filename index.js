
let btn = document.getElementById('btn');

btn.addEventListener('click',function(){

    let input1 = document.getElementById('todo-input').value;
    let box = document.getElementById('box');
    let li = document.createElement('li');
  let text = document.createTextNode(input1);
  li.appendChild(text);
  if(input1===""){
      alert("you must writing something");
  }else{
      li.textContent = input1;
      box.appendChild(li);
  }

});
