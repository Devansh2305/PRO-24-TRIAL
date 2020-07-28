class paper {
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
      paperObject.body= Mater.Bodies.circle(10,20,2,{options},{maxSides})
      
          paperObject.image=loadImage(paper.png);
    
      
        World.add(world,paperObject.body )
    }
    dispaly(){
        var pos=paperObject.position;
        var angle=paperObject.angle;
        push();
        translate(pos.x,pos.y);
        rotate (amgle);
        imageMode (CENTER);
        image (paperObject.image);
        pop ();
    }
}