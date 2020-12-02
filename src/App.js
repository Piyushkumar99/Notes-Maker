import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from "./List";

const App = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const itemList = (event) => {
    setNewItem((preValue) => {
      return [...preValue, item]
    });
    setItem("")
  };

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder="Add your Cart" onChange={itemEvent} value={item} />
          <Button className="newBtn" onClick={itemList}>
            <AddCircleIcon />
          </Button>
          <br />
          <ol> 
            {newItem.map((val, index) => {
                return <List key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  )
}

export default App;