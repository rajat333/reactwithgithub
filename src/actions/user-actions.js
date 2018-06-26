
var getData= ()=>(dispatch)=>{

    console.log("in func get data");
    fetch("https://api.github.com/repos/facebook/react/pulls?state=all")
    .then( result =>{ 
        return result.json()
    })
    .then( data =>{
          console.log("...data...");
          /// dispatch action here 
      })
}

export const userActions = {

    getData,
}