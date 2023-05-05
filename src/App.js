import React from 'react';
import './App.css';
import {connect} from 'react-redux'

import {useEffect } from 'react'

import axios from 'axios'

import { getRandomBreed } from './actions/actions';




function App(props) {
  console.log(props)

  const {dog} = props
  

  useEffect(() => {
    getPic()
  }, [])

   const getPic = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      
    props.getRandomBreed(res.data.message)
    })
    .catch(err => console.error(err))
   }
 
    

  return (
    <div className="App">
      <h1>Get Random Dog Breed</h1>
          <button onClick={() => getPic()}>Get Dog</button>
            <img src={dog} width="600"/>
          
       
    </div>
  );
}
const mapStateToProps = state => {
  return {
    dog: state.dog,
    
  }
}


export default connect(mapStateToProps, {getRandomBreed})(App);