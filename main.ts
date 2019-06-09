class Point{
    a:number;
    b:number;
    constructor(_a:number, _b:number){
        this.a=_a;
        this.b=_b;
    }
    drawPoint(){
        console.log(`Point is x: ${this.a} and y: ${this.b}`);
    }
}
let draw=new Point(1,2);
draw.drawPoint();