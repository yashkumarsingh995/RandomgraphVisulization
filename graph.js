var graph ={

 node : function(arr,col,i,x,y){
    fill(0,col[i],0);
    ellipse(arr[i][0],arr[i][1],x,y)
  },
 edges: function(arr,ver,ecol)
 {
   for(let i=0;i<5;i++)
   {
     for(let j=0;j<5;j++)
     {
       if(ver[i][j]==1)
       {
         stroke(ecol,0,0);
         strokeWeight(5);
         line(arr[i][0],arr[i][1],arr[j][0],arr[j][1]);
       }
     }
   }
 }
};