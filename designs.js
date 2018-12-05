function makeGrid(e) { // Need argument 'a' event listener wait what ever i put any word  
  e.preventDefault(); //prevent fuction make all reset funcion see no preventdefaul found function reset all!

   let xValue = document.getElementById('inputHeight').value; 
   let yValue = document.getElementById('inputWidth').value; 
  
  myTable = document.getElementById("pixelCanvas");
  //console.log(myTable.innerHTM)
  myTable.innerHTML ='';
   
  for (let i=0 ; i < xValue ; i++){    
      let myTr = document.createElement("TR");        
      
        for (j=0 ; j < yValue ; j++ ) {
          let myTd = document.createElement("TD");
           myTr.appendChild(myTd); //Add TD
        }

        document.getElementById("pixelCanvas").appendChild(myTr);  //Add TR into the table 
      
      }

      myTable.addEventListener('click', drawing); //EventListener only TR not table
  };

  function drawing(e) {
    const selectedColor = document.getElementById('colorPicker').value ;
    if (e.target.nodeName === "TD") { //check target, e.target Table or TD prevent colored 
      e.target.style.backgroundColor = selectedColor; //check target first 
    }

  }

// Your code goes here!
const sumit = document.getElementById('sizePicker'); //IN side form summit 
sumit.addEventListener('submit',makeGrid); 
