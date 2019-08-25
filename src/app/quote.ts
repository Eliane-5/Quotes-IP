export class Quote {
    showDetails:boolean;
    constructor(public id:number, public author:string, public writter:string, public content:string,public completeDate: Date ){
        this.showDetails = false;
    }
    
    // likes:number;
    // dislikes:number;
}
