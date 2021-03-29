import React from 'react'
import {Nav} from "react-bootstrap"

function TagNav() {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link href="/">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}

export default TagNav
