import React, {useState, useEffect} from "react";
import axios from "axios"
import "./App.css";
import Header from './components/Header'
import NasaPara from './components/NasaPara'
import Footer from './components/Footer'
import Body from "./components/Body";
import styled from "styled-components";

const API_KEY = 'GyOnpgjUezHmQRBckQcDPUFaU1ZmgRpykvriuPqH';
const API_URL ='https://api.nasa.gov/planetary';

const WrapperDiv =styled.div `
background-image: url('<span>Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/collections/136301/space?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>');
background-size: cover;
/* background-color: #cccccc; */
height: 100vh;
`

function App() {

const [photo, setPhoto] = useState([]);

useEffect ( () => {
  const FetchAPI = () => {
    axios.get (`${API_URL}/apod?api_key=${API_KEY}`) 
    .then(res =>{
      setPhoto(res.data)
    })
    .catch(err => {
      console.log ('error', err)
    })
  }
  FetchAPI() //invoked my function inside useeffect 
}, [])

  return (
    <WrapperDiv className="App">
      <Header />
      <Body title={photo.title} date={photo.date} video={photo.url} />
      <NasaPara explanation= {photo.explanation} />
      <Footer />
    </WrapperDiv>
  );
}

export default App;