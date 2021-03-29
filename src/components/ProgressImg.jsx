import React from 'react'
import {ProgressBar,Container} from "react-bootstrap"

function ProgressImg() {
    return (
        <div>
           <Container>
        {/* <ProgressBar striped variant="success" now={40} />
        <ProgressBar striped variant="info" now={20} />
        <ProgressBar striped variant="warning" now={60} />
        <ProgressBar striped variant="danger" now={80} /> */}
         <ProgressBar animated now={95} />
      {/* <ProgressBar>
     
      <ProgressBar striped variant="success" now={35} key={1} />
      <ProgressBar variant="warning" now={20} key={2} />
      <ProgressBar striped variant="danger" now={10} key={3} />
    </ProgressBar> */}
  <div>
  {/* <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /> */}
 {/* <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> */}
</div>
</Container>
    </div>
    )
}

export default ProgressImg
