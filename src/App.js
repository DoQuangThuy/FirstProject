
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #eeeeee;
  color: #0277bd;
  padding: 5px 15px;
  outline: 0;
  border: none;
  border-radius: 5px;
  margin: 5px;
`

function clickButton(){
  alert('You clicked the button');
}
function App() {
  return (
    <div className= "App">
      <div className="content">
        <Button onClick={clickButton} >
          Randomize
        </Button>
        <Button onClick={clickButton} >
          Add Dataset
        </Button>
        <Button onClick={clickButton} >
          Add Data
        </Button>
        <Button onClick={clickButton} >
          Remove Dataset
        </Button>
        <Button onClick={clickButton} >
          Remove Data
        </Button>
      </div>
    </div>
  );
}

export default App;
