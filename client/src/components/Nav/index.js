import React from "react";

function Nav(props) {
  //deconstruct the props
  const {
    navElements = [],
    setCurrentNavElement,
    currentNavElement
  } = props

  return (
    <header>
    <div>
      <div>
        <div>
          
          <h2></h2>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Nav;