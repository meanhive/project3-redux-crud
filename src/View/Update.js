import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux'
import { updateUser } from '../Actions';

class Update extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.mobile = React.createRef();
        this.state = {
            id: this.props.match.params.id,
            name:'',
            email:'',
            mobile: ''
        };
        this.submitHandler = this.submitHandler.bind(this);
    }
    

    componentDidMount() {
        let x = this.props.userList.find((item) => {return item.id == this.state.id});
        console.log("Filter = ",x);
        this.setState({
            name: x.name,
            email: x.email,
            mobile: x.mobile
        });
    }

    submitHandler(e) {
        e.preventDefault();
        let data = {
            id: this.state.id,
            name: this.name.current.value,
            email: this.email.current.value,
            mobile: this.mobile.current.value
        };
        console.log('update =', data);
        this.props.updateUser(data);
        alert("Successfully updated the user");
        window.location = "/";
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h3 className="display-3 text-info">Update {this.state.id} </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card mt-2 mb-2">
                            <div className="card-body">
                                <form onSubmit={this.submitHandler} >
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name" id="name" value={this.state.name} ref= {this.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" id="email" value={this.state.email} ref={this.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile</label>
                                        <input type="number" name="mobile" id="mobile" value={this.state.mobile} ref={this.mobile} onChange={(e) => this.setState({ mobile: e.target.value })} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Update" className="btn btn-outline-success"/>
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
       updateUser: updateUser,
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Update);
