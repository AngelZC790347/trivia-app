import {Component}from 'react'
import{IStateGame} from '../Interfaces/IStates'
import{IPropsGame}from'../Interfaces/IProps';
import GameMain from './GameMain';
import FinishTable from './FinishTable';
export default class GameApp extends Component<IPropsGame,IStateGame>{   
    constructor(props:IPropsGame){
        super(props);
        this.state={
            points:0,
            time:0,
            numQuestion:1,
            goodAnswer:0,
            wrongAnswer:0,
        };
        this.increaseNumberQue=this.increaseNumberQue.bind(this);
        this.increaGoodAnswer=this.increaGoodAnswer.bind(this);
        this.decreaseWrongAnswer=this.decreaseWrongAnswer.bind(this);
    }
    public increaGoodAnswer(){
        this.setState({goodAnswer:this.state.goodAnswer+1});
    }
    public decreaseWrongAnswer(){
        this.setState({wrongAnswer:this.state.wrongAnswer+1});
    }
    public increaseNumberQue():void{
        this.setState({numQuestion:this.state.numQuestion+1});
    }
    render(){
        let stringMode=false;
        let renderEl=this.state.numQuestion<=20?<GameMain questDisplaying={stringMode} imcreaseNumberQue={this.increaseNumberQue} increaseGoodAnswer={this.increaGoodAnswer} decreaseWrongAnswer={this.decreaseWrongAnswer}></GameMain>:<section><FinishTable goodAnswer={this.state.goodAnswer} wrongAnswer={this.state.wrongAnswer}></FinishTable></section>
        return(
            <>
                <header className="jumbotron text-center pb-2 pt-2">
                    <aside className="p-2 bg-info"><strong>{this.state.numQuestion<=20?"Question:"+this.state.numQuestion:"Good Job"}</strong></aside>
                    <h1>Player Name: {this.props.player}</h1> 
                </header>                
                <main >
                    {renderEl}
                </main>
            </> 
        );
    }
}