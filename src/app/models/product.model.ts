export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public imageUrl: string,
    public price: number,
    public isLiked: boolean,
    public likes: number,
    public createdDate: Date,
    public size: Array < string > ){}
}
