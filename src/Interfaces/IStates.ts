export interface IStateGame{
    points:number,
    numQuestion:number,
    time:number,
    goodAnswer:number,
    wrongAnswer:number,
}
export interface IStateApp{
    name:string,
}
export interface IStateSecQu{
    questObject:Object,
    typeSelector:number
}
export interface IStateGameMain{
    questDisplaying:boolean,
    numberTypeSelector:number,
}   
export interface IStateQueTypesSelelctor{
    listQuestion:Object,
}

