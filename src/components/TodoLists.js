import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const TodoLists = (props) => {
  return (
    <>
      
        <div className='list-container'>

          <li className='list-item'>
            {props.item}
          </li>

        <DeleteIcon className='dlt-icon'
          onClick={() => {
            props.dltItems(props.id)
          }}></DeleteIcon>

        </div>


      
    </>
  )
}

export default TodoLists
