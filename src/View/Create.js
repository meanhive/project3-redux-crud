import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux'
import { addUser } from '../Actions';


class Create extends Component {

    constructor(props) {
        super(props);
        
        this.name = React.createRef();
        this.email = React.createRef();
        this.mobile = React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event){
        event.preventDefault();
        const data = {
            id: Math.max(
                ...this.props.userList.map((x) => {
                    return x.id;
                })
            ) + 1,
            name: this.name.current.value,
            email: this.email.current.value,
            mobile: this.mobile.current.value
        };
        console.log("output =", data);
        this.props.addUser(data);
        alert("Successfully created new user");
        window.location = "/";
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h3 className="display-3 text-info">Create user</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-2 mb-2">
                            <div className="card-body">
                                <form onSubmit={this.submitHandler}>

                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" className="form-control" ref={this.name} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" className="form-control" ref={this.email} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile</label>
                                        <input type="number" name="mobile" id="mobile" className="form-control" ref={this.mobile} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Create" className="btn btn-outline-success"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/* map the state */
const mapStateToProps = (state) => {
    return {
        userList: state
    }
}

/* dispatcher -> events and actions */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       addUser: addUser,
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Create);