import React from 'react';
import Dog from './dog'



const DogList = props => {
    const {dogs} = props;
    


return (
    <div id="dogList">
        {
            dogs.map(dog => {
                return(
                    <Dog dog={dog}/>
                )
            })
        }
    </div>
)
    }

    export default DogList;