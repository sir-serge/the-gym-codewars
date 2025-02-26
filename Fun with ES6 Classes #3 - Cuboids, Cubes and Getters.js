class Cuboid {
  constructor(length,width,height){
    this.lenght=length;
    this.width=width;
    this.height=height;
  }
  get surface(){
    if (isNaN(this.length) || isNaN(this.width) || isNaN(this.height)) {
      return 0;
    }
   return 2 * (
      this.length * this.width +
      this.width * this.height +
      this.height * this.length
    );  
  }
   get volume() {
    if (isNaN(this.length) || isNaN(this.width) || isNaN(this.height)) {
      return 0;
    }
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
constructor(length){
  super(length,length,length);
}
  
}
