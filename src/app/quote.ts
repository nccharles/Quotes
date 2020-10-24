export class Quote {
    public showDescription: boolean;
    constructor(public id:number, public name:string,public description:string,public completeDate:Date){
        this.showDescription = false
    }
}