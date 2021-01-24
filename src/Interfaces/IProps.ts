export interface IPropsGame{
    player:string,
}
export interface IPropsGameMain{
    questDisplaying:boolean,
    imcreaseNumberQue:()=>any,
    increaseGoodAnswer:()=>void,
    decreaseWrongAnswer:()=>void
}
export interface IPropsGameMode{
    changeGameMode:()=>any,
    typeNumber:number
    increaseGoodAnswer:()=>void,
    decreaseWrogAnswer:()=>void
}
export interface IPropsGameQuest{
    changeGameMode:()=>any,
    setTypeSelector:(typeSelector:number)=>any,
}
export interface IPropsFinalTable{
    goodAnswer:number,
    wrongAnswer:number,
}
