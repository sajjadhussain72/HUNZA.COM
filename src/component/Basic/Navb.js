import React from 'react'

const Navb = ({filterItem,menuList}) => {
  return (
    <>
     <nav className="navbar justify-content-center">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default Navb
