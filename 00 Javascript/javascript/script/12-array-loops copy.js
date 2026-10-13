const todolist=[];


function rendertodolist(){

  let todoisHTML='';

  todolist.forEach(function(todoobject,index){

 
    
     const {name,duedate}=todoobject;
      const html=`
      <div> ${name}</div>
      <div> ${duedate}</div>
      <button class="delete-but" onclick="
              todolist.splice(${index},1);
              rendertodolist();
          
      ">Delete</button>
     
      `;
      todoisHTML+= html;
   })
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