import {Component}from 'react'
import{IStateGame} from '../Interfaces/IStates'
import{IPropsGame}from'../Interfaces/IProps';
import GameMain from './GameMain';
export default class GameApp extends Component<IPropsGame,IStateGame>{   
    constructor(props:IPropsGame){
        super(props);
        this.state={
            points:0,
            time:20,
            numQuestion:1
        };
        this.increaseNumberQue=this.increaseNumberQue.bind(this);
        this.incrementPoints=this.incrementPoints.bind(this);
    }
    public increaseNumberQue():void{
        this.setState({numQuestion:this.state.numQuestion+1});
    }
    public incrementPoints(){
        this.setState({points:this.state.points+1});
    }
    render(){
        let stringMode=false;
        return(
            <>
                <header className="jumbotron text-center pb-2 pt-2">
                    <aside className="p-2 bg-info"><strong>Question: {this.state.numQuestion}</strong></aside>
                    <h1>Player Name: {this.props.player}</h1> 
                    <button className="btn btn-outline-primary mr-5">Next</button><button className="btn btn-outline-primary ml-5">Finish</button>
                </header>                
                <main >
                    <GameMain questDisplaying={stringMode} imcreaseNumberQue={this.increaseNumberQue} incrementPoints={this.incrementPoints}></GameMain>
                </main>
            </>
        );
    }
}