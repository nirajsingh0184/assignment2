function * nextNatural() 
{ 
    var naturalNumber = 1; 
    while (true) { 
        yield naturalNumber++; 
    }   
} 
var gen = nextNatural(); 
for (var i = 0; i < 10; i++) { 
   console.log(gen.next().value);
 } 