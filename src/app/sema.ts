export class Quote {
  public showDescription: boolean;
  constructor(
  	public id: number,
  	public author: string,
  	public uploadedBy: string,
  	public quote: string, 
  	public postDate: Date,
  	public numberOfLikes: number,
  	public numberOfDisLikes: number)
  {
    this.showDescription=false;
  }
}