export interface IPropsGame{
    player:string,
}
export interface IPropsGameMain{
    questDisplaying:boolean,
    imcreaseNumberQue:()=>any,
    incrementPoints:()=>any
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
