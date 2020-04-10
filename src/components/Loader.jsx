import Loader from 'react-loader-spinner'
import React, { Component } from 'react';

export default class SpinLoader extends Component {
   render() {
    return(
     <div className='cover-div'>
         <div className='loader'>
            <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
            />
         </div>
     </div>
    );
   }
}