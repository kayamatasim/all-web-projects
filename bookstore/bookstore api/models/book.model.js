module.exports=class BookModel{
    name;
    author;
    price;
    imgsrc;
    constructor(name,author,price,imgsrc){
        this.name=name,
        this.author=author,
        this.price=price,
        this.imgsrc=imgsrc
    }
}