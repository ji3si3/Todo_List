//localStorage.tasks = JSON.stringify([]);
updateList()
function addEvent(){
	// input from user by input in html
     let input = document.getElementById("Text_input");
     // check if input is null or not
     if(input.value == ""){
     	alert("You need to enter the value in Todo List ");
     	return false;
     }

	//take task from local storage and store
     let taskArray = JSON.parse (localStorage.tasks);
	//push new elemt into array
      taskArray.push(input.value);
	//update array to local storge
	localStorage.tasks = JSON.stringify (taskArray);
	//empty the input box
    input.value = "";
    
	//update the list so that we dont need to refresh the page to see todos
	//updateList();

}
function updateList(){
	//get referance ul tasks
	let ul = document.getElementById("tasks");
	// get task from local storage
	let taskArray = JSON.parse (localStorage.tasks);

	let html="";
	
	let len = taskArray.length;

	for (let i=len-1;i>=0;i--) {

		console.log(taskArray[i]);

		html += '<li class="list-group-item"  id=" '+ i +' " >'+taskArray[i]+' <span onclick="removeItem(this)" class="btn btn-danger btn-sm float-right btn_remove">Remove</span> </li>';

	} ul.innerHTML=html;

}

function removeItem(span_item){

	console.log("inside ");
	console.log(span_item);

	let parentId =span_item.parentElement.id;

	console.log(parentId);

	// get array od tasks
	let taskArray = JSON.parse (localStorage.tasks);

	// update task array(remove it)
	taskArray.splice(parentId,1);
	//update local storage of new array

	localStorage.tasks=JSON.stringify(taskArray);

	updateList();
}

function resetAll(){
		//get the array

		let taskArray = JSON.parse (localStorage.tasks);
		//empty the array

		taskArray = []; 
		//update in local storage

	    localStorage.tasks=JSON.stringify(taskArray);
		//update list

        updateList();

}