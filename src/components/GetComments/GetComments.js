import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userActions } from "../../actions/user-actions";
class GetComments extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("..in component GetComments",this.props);
        const pullNumber = this.props.match.params.id;
        this.props.getPullComments(pullNumber);
    }
    render() {
        return (
        <div className="GetComments">
            <p>Inside GET GetComments </p>
            {   
                this.props.comments.map( (obj,index)=>{
                    let oneDay = 24*60*60*1000;
                    let firstDate = new Date();
                    let secondDate = obj.created_at;
                    let finalSecDate = new Date(secondDate)
                    var timeDiff = Math.abs(firstDate.getTime() - finalSecDate.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
               
                 return (
                     <div key={ index } className="" style={ {border:"1px solid black", backgroundColor:"white",marginBottom:"15px" } }>
                     <div style={ { backgroundColor:"#f6f8fa", color:"black", padding:"0 0px 20px 0"}}>
                      <strong>{ obj.user.login}</strong> <span>commented { diffDays} days ago </span>   
                     </div>  
                     <div style={{ margin:"20px 5px 20px 0px" }}> { obj.body }</div>
                     </div>
                 )   

                })
            }
        </div>
        );
  }
}

const mapStateToProps = (state) => {
    console.log("....state..GetComments...", state);
    return {
      comments: state.pulldata.comments,
    };
}

const mapDispatchToProps = dispatch => {
    console.log("...In GetComments....");
    return {
        getPullComments:(id)=> dispatch( userActions.getPullComments(id)),
        // different func for performing action
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetComments);
