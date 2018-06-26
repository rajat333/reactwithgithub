import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userActions} from "../../actions/user-actions";
import {Link} from "react-router-dom";
class PullRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: false
        }
    }

    componentWillMount() {
        // console.log("..in component will mount");
        this
            .props
            .getData();
    }

    componentWillReceiveProps(nextProps) {
        // console.log("component recieve props", nextProps);
        const dataPart = nextProps.data;
        this.setState({data: dataPart});
    }

    render() {
        return (
            <div className="App">
                <ul className="list-group">
                    {
                        this.props.data
                            .map((eachObj, index) => {
                              
                              let oneDay = 24*60*60*1000;
                              let firstDate = new Date( eachObj.created_at );
                              let finalSecDate = new Date(eachObj.updated_at);
                              var timeDiff = Math.abs(firstDate.getTime() - finalSecDate.getTime());
                              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        
                                return (
                                    <li className="list-group-item" key={index}>
                                        <Link to={`/${eachObj.number}`}>
                                            <h2
                                                style={{
                                                    color: "#586069"
                                                }}>{eachObj.title}</h2>

                                        </Link>
                                        <span>
                                            #{eachObj.number}{ " "} {eachObj.state} {  } ago by {eachObj.user.login} 
                                        </span>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("....state..registration...", state);
    return {data: state.pulldata.data, error: state.pulldata.error};
}

const mapDispatchToProps = dispatch => {
    // console.log("...In mapDIspatchToProps....");
    return {
        getData: () => dispatch(userActions.getData()),
        // different func for performing action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRequest);
