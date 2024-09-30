import axios from 'axios';
import { useState } from 'react';

export default function RandomIagesOfDogs(){
    let url='https://dog.ceo/api/breeds/image/random';
    let [image,setImage]=useState('');
  let getImage= async()=>{
    try{
        let response=await axios.get(url);
        return response.data.message;
    }
    catch(e){
        console.log("Error occur and error is -",e);
    }
   
  }

  let randomImage= async()=>{
    let link= await getImage();
    // console.log(link);
    setImage(link);
  }

    return (<div>
        <h2>Random Images of Dogs</h2>
        {/* <img id='result'></img> */}
        {image?<img src={image} alt='DogImage'/>:<p> Image Loading.....</p>}
        <br /><br />
       <button onClick={randomImage}>Get Image</button>

    </div>)
}