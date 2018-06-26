import { userConstant } from "../constants/user-constant";

var getData= ()=>(dispatch)=>{

    console.log("in func get data");
    fetch("https://api.github.com/repos/facebook/react/pulls?state=all&&sort=popularity&per_page=400")
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
     .catch( error=>{
          console.log("..error...");
          dispatch({
              type: userConstant.FAILURE,
              error: true,
          })
     }) 
}

var getPullComments = (id)=>(dispatch)=>{
    console.log("...in..getPullComments..",id);
    console.log("...in..getPullComments..",id);
    var url = "https://api.github.com/repos/facebook/react/issues/"+id+"/comments";
    fetch(url)
    .then( result =>{ 
        return result.json()
    })
    .then( data =>{
          console.log("...data.get comments..",data);
          /// dispatch action here 
          dispatch({
              type: userConstant.GETCOMMENTS,
              data: data,
          })
      })
     .catch( error=>{
          console.log("..error...");
          dispatch({
              type: userConstant.COMMENTFAILURE,
              data: [],
          })
     }) 
}

export const userActions = {

    getData,
    getPullComments,
}