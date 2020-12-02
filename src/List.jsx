import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const List = (props) => {
  
  const [line, setLine] = useState(false);

  const cut = () => {
    setLine(true);
  }

  return(
    <div className="list">
      <span onClick={cut}>
        <DeleteIcon className="deleteIcon" />
      </span>
        <li style={{ textDecoration: line? "line-through" : "none" }}> 
          {props.text} 
        </li>
    </div>
  )
};

export default List;