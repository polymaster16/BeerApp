import React from 'react';
import BasicCard from '../Components/BasicCard';

function MainPage() {
   
    return (
        <div className=' '>
            <p>
                2022 Edition
            </p>
            <div className='container container-sm m4'>
                
               
            <BasicCard sub={() => {
    window.location.href = '/App';
  }}/>
            <BasicCard />
            <BasicCard />
            <BasicCard />
           </div>

            </div>
      );
}

export default MainPage;