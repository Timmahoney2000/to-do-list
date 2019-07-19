var todos = ["buy cat food"];

var input = prompt("What would like to do?")

while(input !-- "quit"){
    

if(input === "list") {
    console.log(todos);
}

else if (input === "new"){
    var newTodo = prompt("Enter new Task");
    todos.push(newTodo);
}

while(input !== "quit"){
    
}
}
console.log("OK, YOU QUIT THE APP");