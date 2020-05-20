import React from 'react'
import Hog from './Hog'


let HogContainer = (props) => {
      
  let arrayOfHogs = props.hogs.map((singleHog) => {
      return <Hog 
      key={singleHog.id}
      hog={singleHog}
      />
  })

    console.log(arrayOfHogs, "hello")

    return(
      <div>
          <h2>See Our Hogs</h2>
          <ul>
            {
              arrayOfHogs
            }
          </ul>
      </div>
    )

}

export default HogContainer
