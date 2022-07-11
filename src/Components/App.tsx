import ReactDOM from 'react-dom';
import '../Styles/App.css';
import{IStateApp}from '../Interfaces/IStates'
import GameApp from './GameApp';
function App():JSX.Element{
  const state:IStateApp={name:""};
  return (
    <div className="App">
      <form action="" className="App-header" noValidate>
        <div className="form-row w-50 center m-t-100">
          <label htmlFor="player-name" style={{marginLeft:"20px"}}>Nombre:</label>
          <input  type="text" className="form-control ml-3 w-60" id="player-name"
            onChange={(e)=>state.name=e.currentTarget.value}
          />
          <button id="sub-btn" className="btn btn-primary m-4" 
            onClick={()=>{
              ReactDOM.render(<GameApp player={state.name}></GameApp>,document.getElementById('root')); 
            }}
          >Submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;
