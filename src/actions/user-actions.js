import { userConstant } from "../constants/user-constant";

var getData= ()=>(dispatch)=>{

    console.log("in func get data");
    fetch("https://api.github.com/repos/facebook/react/pulls?state=all")
    .then( result =>{ 
        return result.json()
    })
    .then( data =>{
          console.log("...data...",data,userConstant);
          /// dispatch action here 
          dispatch({
              type: userConstant.GETPULLREQDATA,
              data: data,
          })
      })
}

export const userActions = {

    getData,
}