import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux'
import {  deleteUser, updateUser } from '../Actions';

class Home extends Component {

    delHandler(id) {
        console.log('delete id =', id);
        let stat = window.confirm("Are you sure to delete id = "+ id + "?");
            if(stat === true) {
                this.props.deleteUser(id);
                alert("Successfully deleted the user");
                window.location = "/";
            } else {
                return;
            }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <h3 className="display-3 text-info">Users List</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table table-responsive">
                            <table className="table table-dark table-striped table-hover text-center">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                </tr>
                                <tbody>
                                    {
                                        this.props.userList.map((item,key) => {
                                            return (
                                                <tr key={key}>
                                                    <td> {item.id} </td>
                                                    <td> {item.name} </td>
                                                    <td> {item.email} </td>
                                                    <td> {item.mobile} </td>
                                                    <td className="clear-fix">
                                                    <Link to={"/update/"+item.id}>
                                                        <span style={{cursor:'pointer'}} className="fas fa-edit text-info float-left"></span>
                                                    </Link>
                                                        <span onClick={() => this.delHandler(item.id)} style={{cursor:'pointer'}} className="fas fa-trash text-danger float-right"></span>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
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
       deleteUser: deleteUser
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);