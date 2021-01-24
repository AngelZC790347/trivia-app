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
            questDisplaying:false
        }
        this.changeGameMode=this.changeGameMode.bind(this);
        this.setTypeSelector=this.setTypeSelector.bind(this);
      
    }
    static getDerivedStateFromProps(props:IPropsGameMain,state:IStateGameMain){
        return({gameMode:props.questDisplaying});
    }
   
    public changeGameMode():void{
        if (this.state.questDisplaying===true){
            this.props.imcreaseNumberQue();
        }
        this.setState({questDisplaying:!this.state.questDisplaying});
    }
    public setTypeSelector(typeSelector:number){
        this.setState({numberTypeSelector:typeSelector});
    }
    render():JSX.Element{
        let elemnt:JSX.Element;
        elemnt=this.state.questDisplaying?<SecQu increaseGoodAnswer={this.props.increaseGoodAnswer} decreaseWrogAnswer={this.props.decreaseWrongAnswer} changeGameMode={this.changeGameMode} typeNumber={this.state.numberTypeSelector} ></SecQu>:<QueTypeSelector changeGameMode={this.changeGameMode} setTypeSelector={this.setTypeSelector}></QueTypeSelector>;    
        return (
            <>
            <aside style={{paddingLeft:600}}><button className="btn btn-outline-primary mr-5" onClick={this.changeGameMode}>Next</button><button className="btn btn-outline-primary ml-5">Finish</button></aside>
            {elemnt}
            </>
            );
    }
}