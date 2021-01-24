import {Component, FormEvent} from 'react';
import {IPropsGameMode} from '../Interfaces/IProps';
import {IStateSecQu} from '../Interfaces/IStates'
export default class SecQu extends Component<IPropsGameMode,IStateSecQu>{
    public constructor(props:any){
        super(props)
        this.state={
            typeSelector:0,
            questObject:{}      
        };
    }
    static  getDerivedStateFromProps(props:IPropsGameMode,state:IStateSecQu){     
        return ({typeSelector:props.typeNumber});
    }
    private async listTypeGenerator(typeSelector:number){
        const ApiDbQueryUrl="https://opentdb.com/api.php?amount=1&category="+typeSelector+"&difficulty=medium&type=multiple";
        let data=new Object();
        const response=await fetch(ApiDbQueryUrl);
        data=await response.json();
        this.setState({questObject:data});
    }
    componentDidMount(){
        this.listTypeGenerator(this.props.typeNumber);
    }
    private countAnwser(e:FormEvent<HTMLInputElement>,id:string){
        e.preventDefault();
        if (id==="correct") {
            this.props.increaseGoodAnswer();
        }else{
            this.props.decreaseWrogAnswer();
        }
    }
    render(){
        let myObj=Object(this.state.questObject);
        var listButton:JSX.Element[]=[];
        var questionElemnt:JSX.Element=<label></label>;
        for (const key in myObj) {
            let element=myObj[key];
            console.log(element);
            for (const key2 in element) {
                const element2 = element[key2];
                console.log(element2);
                for (const key3 in element2) {
                    const element3=element2[key3];
                    console.log(element3);
                    if(key3==="question"){
                    questionElemnt=<p><pre>{element3}</pre></p>
                    }
                    if(key3==="correct_answer"){
                        listButton.push(<><input type="radio" key="correct" name="alter" onFocus={e=>this.countAnwser(e,"correct")}></input><label>{element3}</label><br></br></>)
                    }               
                    if(typeof(element3)!="string"){
                        let i=0;
                       for (const key4 in element3) {
                               const element4 = element3[key4];
                               listButton.push(<><input type="radio" key={i.toString()} name="alter" onFocus={e=>this.countAnwser(e,i.toString())}></input><label>{element4}</label><br></br></>)
                               i++;
                       }
                    }                    
                }    
            }         
        }   
        return(
            <section>
                {questionElemnt}
                {listButton}
            </section>
        );
    }
}