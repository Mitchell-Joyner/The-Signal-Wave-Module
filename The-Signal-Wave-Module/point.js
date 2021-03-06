const Point = function(xcor,ycor){
  let x = xcor;
  let y = ycor;

  function getX(){return x;}
  function getY(){return y;}

  function magnitude(){
    let dist = Math.sqrt(x*x + y*y);
    return dist;
  }

  function distanceTo(P2){
    let xsquared = (x-P2.getX())*(x-P2.getX());
    let ysquared = (y-P2.getY())*(y-P2.getY());
  }

  function direction(){
    return Math.atan(y/x)*180/Math.Pi;
  }
  function print(){
      console.log("("+x+", "+y+")");
  }
  return {getX,getY,magnitude,distanceTo,direction,print};
}
module.exports = Point;
