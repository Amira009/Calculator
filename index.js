function taper(n){
  
    document.getElementById("ecran").value+=n; 
    
  }
  
  function effacer(){
    
    document.getElementById("ecran").value=0; 
    
  }
  
  function operation(opt){
    
    opd1=parseInt(document.getElementById("ecran").value);
    document.getElementById("ecran").value=0;
    op=opt;
    
  }
  
  function resultat(){
    
    opd2=parseInt(document.getElementById("ecran").value);
    switch(op){
      case '+' : res=opd1+opd2; break;
      case '-' : res=opd1-opd2; break;
      case '*' : res=opd1*opd2; break;
      case '/' : res=opd1/opd2; break;
        
    }
    
    document.getElementById("ecran").value =res;
    
  }