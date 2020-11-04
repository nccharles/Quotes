export class Quote {
    public showDescription: boolean;
    constructor(public id:number, public author:string,public quote:string,public publisher:string,public like:number,public dislike:number,public publishedDate:Date){
        this.showDescription = false
    }
}