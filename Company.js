import React from 'react'

const Company = ({ handleClick, data }) =>
      <div>
        <button onClick={handleClick}>
          Click to get response
        </button>
        <div>
         { data && data.name }
        </div>
      </div>

export default Company
