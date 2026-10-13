const todolist=[];


function rendertodolist(){

  let todoisHTML='';
    for(let i=0;i<todolist.length;i++){
      const todoobject=todolist[i];
      const name=todoobject.name;
      const duedate=todoobject.duedate;
      const html=`
      <div> ${name}</div>
      <div> ${duedate}</div>
      <button class="delete-but" onclick="
              todolist.splice(${i},1);
              rendertodolist();
          
      ">Delete</button>
     
      `;
      todoisHTML+= html;
    }
    document.querySelector('.js-todolist').innerHTML=todoisHTML;
}

function addTodo(){

  const inputElement=document.querySelector('.js-name');
  const name=inputElement.value;
  if(name===''){
    return;
  }
  
  const dateinput=document.querySelector('.js-date');
  const duedate=dateinput.value;
  
  todolist.push({
    name:name,     
    duedate:duedate
  });  
  
  inputElement.value=''; // for making empty the input after emter button
  rendertodolist();
}

function enter(event){
  if(event.key==='Enter'){
    addTodo();
  }

}