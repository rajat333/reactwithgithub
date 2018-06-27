import { userConstant } from "../constants/user-constant";

var getData= ()=>(dispatch)=>{

    // console.log("in func get data");
    fetch("https://api.github.com/repos/facebook/react/pulls?state=all&per_page=100&access_token=b35dfa2a89f8d6d77c636d57d7fdef0b5ef5aa65")
    .then( result =>{ 
        return result.json()
    })
    .then( data =>{
        //   console.log("...data...",data,userConstant);
          /// dispatch action here 
          dispatch({
              type: userConstant.GETPULLREQDATA,
              data: data,
          })
      })
     .catch( error=>{
        //   console.log("..error...");
          dispatch({
              type: userConstant.FAILURE,
              error: true,
              data: [ { title:"Error in API"} ]
          })
     }) 
}

var getPullComments = (id)=>(dispatch)=>{
    // console.log("...in..getPullComments..",id);
    // console.log("...in..getPullComments..",id);
    var url = "https://api.github.com/repos/facebook/react/issues/"+id+"/comments?access_token=b35dfa2a89f8d6d77c636d57d7fdef0b5ef5aa65";
    var reviewCommentUrl= "https://api.github.com/repos/facebook/react/pulls/"+ id +"/comments?access_token=b35dfa2a89f8d6d77c636d57d7fdef0b5ef5aa65";
    fetch(url)
    .then( result =>{ 
        return result.json()
    })
    .then( data =>{
        //   console.log("...data.get comments..",data);
          /// dispatch action here 
          dispatch({
              type: userConstant.GETCOMMENTS,
              data: data,
          })
      })
     .catch( error=>{
        //   console.log("..error...");
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