import React, { Component } from 'react';
import {connect} from 'react-redux';
import { userActions } from "../../actions/user-actions";
class PullRequest extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("..in component will mount");
        this.props.getData();
    }
  render() {
    return (
      <div className="App">
        <p>Inside Pull Request </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // console.log("....state..registration...", state);
    return {

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
