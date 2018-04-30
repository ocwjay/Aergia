var instructions = document.getElementById('aergia').innerHTML; //Grabbing the aergia tag
var instructionArray = instructions.split('/'); //splitting the string into an array with key '/'
//So that works. Now we need to loop through the original array and for each index, split the attributes to a new array
//then we need to create the elements and append them to the dom
for(i = 0; i < instructionArray.length; i++){
  var tempArray = instructionArray[i].split(','); //attributes separate with ',' key
  //Now we need to run tempArray[0] through a switch statement to determine which element to create
  testElementName(tempArray);
}

function testElementName(a){
  switch(a[0]){
    case "header1":
      var newHeader1Element = document.createElement("h1");
      /*var newHeaderText = document.createTextNode(a[1]);
      newHeader1Element.appendChild(newHeaderText);
      newHeader1Element.id = a[2];
      testNest(a, newHeader1Element);*/
      testAttribute(a, newHeader1Element);
      break;
    case "container":
      var newContainerElement = document.createElement("div");
      /*newContainerElement.id = a[1];
      newContainerElement.classList.add("container");
      testNest(a, newContainerElement);*/
      testAttribute(a, newContainerElement);
  }
}

function testAttribute(a, b){
  for(i = 1; i < a.length; i++){
    var tempAttributeArray = a[i].split("-");
    switch(tempAttributeArray[0]){
      case "id":
        b.id(tempAttributeArray[1]);
        break;
      case "class":
        b.classList.add(tempAttributeArray[1]);
        break;
      case "text":
        var tempTextNode = document.createTextNode(tempAttributeArray[1]);
        b.appendChild(tempTextNode);
      case "inside":
        if(tempAttributeArray[1] == "body"){
          document.body.appendChild(b);
        }
        else{
          document.getElementById(tempAttributeArray[1]).appendChild(b);
        }
    }
  }
}

/*function testNest(a, b){
  var aLastIndex = a.length - 1;
  if(a[aLastIndex] == "inside-body"){
    document.body.appendChild(b);
  }
  else{
    var tempNestArray = a[aLastIndex].split("-");
    document.getElementById(tempNestArray[1]).appendChild(b);
  }
}*/

//The main mechanic is now finished!

//So let's say we want to bury the headers inside the container element we created.
//we would need to type a 4th parameter for the instructions: inside-(insertIdHere).
