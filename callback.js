function name(name,callback){ 

   console.log("hi "+name); 
   callback(); 
   
   
   } 
   
   
   name("niraj kumar singh",function execute(){setTimeout(()=>{ 
   
   console.log("after two second"); 
   
   
   },2000)})