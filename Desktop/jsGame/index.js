
window.onload = function() {var basket = document.getElementById("eggbasket");
                            var egg = document.getElementById("egg");
                            
                           window.addEventListener('keydown' , function (e) {
   
    var element = basket.getBoundingClientRect();
    var element2 = egg.getBoundingClientRect();
                               
                               
                   if(mod(element.top,element2.top)<=50&&mod(element.left,element2.left)<=50){
                       egg.style.top = 0;
                        console.log("came");
                   }
                               
                        console.log(e.keyCode);   
                               if(e.keyCode===39){
                                  // console.log("39");
                                   basket.style.position="absolute";
                                   basket.style.left = element.left+10+"px";
                               }
                           if(e.keyCode===37){
                               //console.log("37");
                               basket.style.position="absolute";
                               if(element.left-10>=0){
                               basket.style.left = (element.left-10)+"px";
                           }
                           }
                            
                            if(e.keyCode===38){
                                basket.style.position = "absolute";
                                if(element.top-10>=0){
                                basket.style.top = (element.top-10)+"px";
                                }
                                }
                               
                            if(e.keyCode===40){
                                basket.style.position = "absolute";
                                basket.style.top = (element.top+10)+"px";
                            }
    
});
                            
    setInterval(function () {
          
        var element = egg.getBoundingClientRect();
        var element2 = basket.getBoundingClientRect();
         egg.style.position = "absolute";
        console.log(mod(2,5));
         if(mod(element.top,element2.top)<=50&&mod(element.left,element2.left)<=50){
                       egg.style.top = 0;

             console.log(element.left+ " "+element.right);
            
            if(element.left+70>500){
                egg.style.left = 0;
            }else{
             egg.style.left = (element.left + 70)+"px";
            }     
             return;

                   }
        if(element.bottom>600){
            egg.style.top=0;
        }else{
        egg.style.top = (element.top+10)+"px";
        }
        
                            
    },100);    
                           
}

function mod(x,y){
    
    if(x>y){
        return x-y;
    }else{
        return y-x;
    }
    
}
