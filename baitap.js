function calculate(currentDbs, calibratedDbs, real) {
    var minDbs= -currentDbs[0];
    var poin=0,poin1,poin2,x,y,z,a,b,c,p2y,delta,Mx,My;
    var arrayX=new Array;
    var arrayY=new Array;
    for(var i=0 ; i<3 ; i++)
    {
        arrayY.push(calibratedDbs[i].y)
        z=Math.exp(-calibratedDbs[0].dbs[i])+50;
        arrayX.push(z);        
        console.log(arrayX[i])    
    }
    for(i=0; i < 9 ; i++)
    {    
        if (-currentDbs[i] <= minDbs)
        {    
            var minDbs = -currentDbs[i];
            poin = i;                            
        }               
    }
    if(poin == 0)
    {
        poin1 = 1;
        poin2 = 3;      
    }
    else if(poin == 8)
    {
        poin1 = 7;
        poin2 = 5;    
    }
    else if(currentDbs[poin-1] <= currentDbs[poin+1])
    {
        poin1 = poin+1;
        if(poin <3)
            poin2 = poin+3;
        else
            poin2 = poin-3;                
    }
    else if(currentDbs[poin-1] > currentDbs[poin+1])
    {
        poin1 = poin-1;
        if(poin <3)
            poin2 = poin+3;
        else
            poin2 = poin-3;    
    }
x = (Math.exp(-currentDbs[poin])*Math.exp(-currentDbs[poin])-Math.exp(-currentDbs[poin1])*Math.exp(-currentDbs[poin1])-arrayX[poin%3]*arrayX[poin%3]+arrayX[poin1%3]*arrayX[poin1%3])/(2*arrayX[poin1%3]-2*arrayX[poin%3])
//phuong trinh bac 2: a , b ,c
p2y=arrayY[Math.floor(poin2/3)];
c=p2y*p2y+(x-arrayX[poin2%3])*(x-arrayX[poin2%3])-Math.exp(-currentDbs[poin2])*Math.exp(-currentDbs[poin2]);
b=2*p2y;
a=1;
delta=b*b-4*a*c;  
    if(poin <3)
    {
        y=-(-b+Math.sqrt(delta))/2*a;
    } 
    else
    {
        y=-(-b-Math.sqrt(delta))/2*a; 
    }
    Mx=Math.round(x);
    My=Math.round(y);
var error =(x-real.x)/real.x + (y-real.y)/real.y;
    return `X ${Mx} , Y ${My} ,  Error ${error}`
    
}
