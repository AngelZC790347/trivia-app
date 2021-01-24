import {IStateGameMain}from '../Interfaces/IStates';
import {IPropsGameMain} from '../Interfaces/IProps'
import SecQu from './SecQu';
import {Component } from 'react';
import QueTypeSelector from './QueTypeSelector';
export default class  GameMain extends Component <IPropsGameMain,IStateGameMain>{
    constructor(props:IPropsGameMain){
        super(props);
        this.state={
            numberTypeSelector:0,
            goodAnswer:0,
            wrongAnswer:0,
            questDisplaying:false
        }
        this.changeGameMode=this.changeGameMode.bind(this);
        this.setTypeSelector=this.setTypeSelector.bind(this);
        this.increaGoodAnswer=this.increaGoodAnswer.bind(this);
        this.decreaseWrongAnswer=this.decreaseWrongAnswer.bind(this);
    }
    static getDerivedStateFromProps(props:IPropsGameMain,state:IStateGameMain){
        return({gameMode:props.questDisplaying});
    }
    public increaGoodAnswer(){
        this.setState({goodAnswer:this.state.goodAnswer+1});
    }
    public decreaseWrongAnswer(){
        this.setState({wrongAnswer:this.state.wrongAnswer+1});
    }
    public changeGameMode():void{
        if (this.state.questDisplaying===false){
            this.props.imcreaseNumberQue();
        }
        this.setState({questDisplaying:!this.state.questDisplaying});
    }
    public setTypeSelector(typeSelector:number){
        this.setState({numberTypeSelector:typeSelector});
    }
    render():JSX.Element{
        let elemnt:JSX.Element;
        elemnt=this.state.questDisplaying?<SecQu   increaseGoodAnswer={this.increaGoodAnswer} decreaseWrogAnswer={this.decreaseWrongAnswer} changeGameMode={this.changeGameMode} typeNumber={this.state.numberTypeSelector} ></SecQu>:<QueTypeSelector changeGameMode={this.changeGameMode} setTypeSelector={this.setTypeSelector}></QueTypeSelector>;    
        return elemnt;
    }
}