import {Component}from 'react';
import {IPropsFinalTable}from '../Interfaces/IProps'
export default class FinishTable extends Component<IPropsFinalTable,any>{
    constructor(props:IPropsFinalTable){
        super(props);
    }
    render(){
        return(
            <>
                <table className="table table-striped">
                    <tr><th>Finalizado</th></tr>
                    <tr><td>Incorrects</td><td>{this.props.wrongAnswer}</td></tr>
                    <tr><td>Corrects</td><td>{this.props.goodAnswer}</td></tr>
                </table>
            </>
        );
    }
}