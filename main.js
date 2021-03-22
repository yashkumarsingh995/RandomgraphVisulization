var arr=new Array();
 
  for (let i = 0; i < 5; i++)
  {
    arr[i] = new Array();
  }
  for (i = 0; i < 5; i++)
  {
    var x = Math.random(0,50)* 700;
    var y = Math.random(0,50)*700;
    arr[i][0] = x;
    arr[i][1] = y;

  }



function setup()
{
  createCanvas(800,800);
  noLoop();
}
i=0;
function draw()
{ background(170,223,260);
  i<1?crenode():up(i);
  i++;
  
}


var col=[0,0,0,0,0];

  
var  ver= [[0, 1, 0, 1, 0],[1, 0, 1, 0, 1], [1, 1, 0, 0, 1], [1, 1, 1, 0, 0], [1, 0, 1, 1, 0]];
  
  



function crenode()
{
  for(let i=0;i<5;i++)
  {
    graph.node(arr,col,i,30,30);
  }
  graph.edges(arr,ver,0);
}


function up(i){
 col[i-1]=55*i;
 var  ecol=30*i;
 graph.edges(arr,ver,ecol);
for (let j = 0; j < 5; j++)
{
  graph.node(arr, col, j, 45, 45);
}
//graph.edges(arr, ver);

}



for(let i=0;i<5;i++)
{
  setTimeout(draw,1500*i);
}