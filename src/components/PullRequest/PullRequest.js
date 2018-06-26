import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userActions } from "../../actions/user-actions";
class PullRequest extends Component {

    constructor(props){
        super(props);
        this.state= {
          data: [],
          error: false,
        }
      }

    componentWillMount(){
        console.log("..in component will mount");
        this.props.getData();
    }
  
    componentWillReceiveProps(nextProps){
      console.log("component recieve props",nextProps);
      const dataPart = nextProps.data;
       this.setState({
           data: dataPart,
       }); 
    } 

    render() {
    return (
      <div className="App">
        <p>Inside Pull Request </p>
        {
          this.state.data ? "welcome" :"Nt"
        }
        <ul>
        {
          this.state.data.map( (eachObj,index)=>{
             
             <li key={ index }> { index } hi </li>
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log("....state..registration...", state);
    return {
        data: state.pulldata.data,
        error: state.pulldata.error,
    };
}

const mapDispatchToProps = dispatch => {
    console.log("...In mapDIspatchToProps....");
    return {
        getData: ()=> dispatch( userActions.getData() ),
        // different func for performing action
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PullRequest);
