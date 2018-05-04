import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import {bindActionCreators } from 'redux';
import {connect }from 'react-redux';
import {updateUser,apiRequest,returnString } from './actions/users-action';
import {createSelector } from 'reselect';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser=this.onUpdateUser.bind(this);
  }
  componentDidMount(){
    this.props.onApiRequest();
  }
  onUpdateUser(event){    
    //this.props.onApiRequest();
    this.props.propiedad();    
    this.props.onUpdateUser(event.target.value);    
  }
  render() {   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}
// const mapStateToProps= (state,props) =>{
//   return {
//     products:state.products,
//     user:state.user,
//     uesrPlisProp: `${state.user} ${props.aRandomProp}`
//   }  
// };
const productSelector=createSelector(
  state=>state.products,
  products=>products
);
const userSelector=createSelector(
  state=>state.user,
  user=>user
);
const mapStateToProps= createSelector(
  productSelector,
  userSelector,
  (products,user)=>({
    products,
    user
  })
) ;
// const mapActionsToProps =(dispatch,props)=>{
//   return bindActionCreators({
//     onUpdateUser:updateUser  
//   },dispatch);
// };
const mapActionsToProps ={
  onUpdateUser:updateUser,
  onApiRequest:apiRequest,
  propiedad:returnString
};
// const mergeProps=( propsFromState,propsFromDispatch,ownProps)=>{
//   console.log( propsFromState,propsFromDispatch,ownProps);
//   return{}
// };
//export default connect(mapStateToProps,mapActionsToProps,mergeProps)(App);
export default connect(mapStateToProps,mapActionsToProps)(App);
