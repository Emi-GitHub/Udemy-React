//ova cijela komponenta je za google
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

export class GoogleAuth extends Component {
    componentDidMount(){ //gapi je google api
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '500774998178-isf9nlqrg7hdn6e6vgudqdsfanuc5fgl.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.parseInt.auth2.getAuthInstance();
                //this.setState({ isSingedIn: this.auth.isSingedIn.get() }) //bez reduxa 
                this.onAuthChange(this.auth.isSingedIn.get())
                this.auth.isSingedIn.listen(this.onAuthChange)
            })
        }) 
    }

    onAuthChange = (isSingedIn) => {
        if(isSingedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    //gapi.auth2.getAuthInstance().singOut()
    renderAuthButton(){
        if(this.props.isSingedIn === null){ //this.state.isSingedIn before redux
            return null;
        } else if (this.props.isSingedIn === true) {
            return (
                <button onClick={this.onSignOutClick}className="ui red google button">
                    <i className="google icon"/>
                    Sing Out
                </button>
            )
        } else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sing in with google
                </button>
            ) 
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => { //umjesto konstruktora
    return {isSingedIn: state.auth.isSingedIn}
}

/*constructor(props){
    super(props);
    this.state = {
        isSingedIn: null
    }
}*/

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)
