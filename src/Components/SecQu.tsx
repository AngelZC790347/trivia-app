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
        var listButton:JSX.Element=<></>;
        for (const key in myObj) {
            const element = myObj[key];
            console.log(element);
            for (const key2 in element) {
                var el=element[key2];
                console.log(el);
                el.incorrect_answers=Array(el.incorrect_answers);
                let listOfElemnts:JSX.Element[]=new Array(4);
                let correcrtElement=<li key={0}><input type="radio" id="correct" name="option" value="correct" ></input>
                <label htmlFor="correct" >{el.correct_answer}</label></li>;
                let i=0;
                listOfElemnts[i]=correcrtElement;
                i++;
                for (const key in el.incorrect_answers) {             
                    const element2 = el.incorrect_answers[key];
                    while(i<4){
                        listOfElemnts[i]=<li key={i}>< input type="radio" id={i.toString()} name="option" value={i.toString()} ></input>
                        <label htmlFor={i.toString()} >{element2[i-1]}</label></li>;
                        i++;
                    }       
                }
                listButton=<form key={key2}>{el.question}{listOfElemnts}
                </form>;      
            }           
        }    
        return(
            <section>
                {listButton}
            </section>
        );
    }
}