 
        var arr1=[]
        var over1=[]
        var over2=[]
        var over3=[]
        var score=0
        var count=0
           function strike1(){
            if(count<18){
             var b = Math.floor((Math.random()*7));
             arr1.push(b);
             score=score+b;
              count+=1;
            document.getElementById("team1runs").innerHTML="TEAM1RUNS:"+b;
            document.getElementById("team1score").innerHTML="TEM1SCORE:"+score;
          if(count<7){
              over1.push(b);
             } 
           if((count>6)&&count<=12){
            over2.push(b);  

          }
         if((count>12)&&count<=18){
            over3.push(b);
            
          }
        
        }
        localStorage.setItem("team1over1",over1);
        localStorage.setItem("team1over2",over2);
        localStorage.setItem("team1over3",over3);
        localStorage.setItem("TeamAwinner",score);
           
           }
console.log(over1);
 
        var arr2=[]
        var over4=[]
        var over5=[]
        var over6=[]
        var score1=0
        var count1=0
           function strike2(){
            if(count1<18){
             var c = Math.floor((Math.random()*7))
             arr2.push(c)
             score1=score1+c
             console.log(arr2) 
              count1+=1
            document.getElementById("team2runs").innerHTML="TEAM2RUNS:"+c;
            document.getElementById("team2score").innerHTML="TEAM2SCORE:"+score1;
            if(count1<=6){
              over4.push(c);
             }
              if((count1>6)&&count1<=12){
            over5.push(c);
            }
           if((count1>12)&&count1<=18){
            over6.push(c);
          }
            }
        localStorage.setItem("team2over1",over4);
        localStorage.setItem("team2over2",over5);
        localStorage.setItem("team2over3",over6);
        localStorage.setItem("TeamBwinner",score1);
      }




