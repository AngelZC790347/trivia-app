import {Component} from 'react';
import{IPropsGameQuest} from '../Interfaces/IProps';
import{IStateQueTypesSelelctor}from '../Interfaces/IStates';
export default class QueTypeSelector extends Component<IPropsGameQuest,IStateQueTypesSelelctor>{
    constructor(props:IPropsGameQuest){
        super(props);
        this.state={
            listQuestion:{}
        }
    }
    private async listTypeGenerator(){
        const ApiDbQueryUrl="https://opentdb.com/api_category.php";
        let data=new Object();
        const response=await fetch(ApiDbQueryUrl);
        data=await response.json();
        this.setState({listQuestion:data});
    }
    componentDidMount(){
        this.listTypeGenerator();
    }
    changeGameMode(e:React.MouseEvent<HTMLInputElement|HTMLTextAreaElement>,id:any){
        e.preventDefault();
        console.log(id);
        this.props.changeGameMode();
        this.props.setTypeSelector(id);
    }
    render():JSX.Element{
        let myObj=Object(this.state.listQuestion);
        let listButton=[];
        for (const key in myObj) {
            const element = myObj[key];
            for (const key2 in element) {
                let el=element[key2];
                listButton.push(<input type="button" className="btn btn-outline-success btn-block" value={el.name} key={el.id} onClick={e=>this.changeGameMode(e,el.id)}/>);      
            }           
        }    
        return(
            <form className="form-group">
                <h2 className="text-center">Selec a Category</h2>
                {listButton}
            </form>
        );
    }
}