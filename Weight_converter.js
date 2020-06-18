document.getElementById('output').style.visibility="hidden";
document.getElementById('kginput').addEventListener('input', function(x)
{
  document.getElementById('output').style.visibility="visible";
  let lbs = x.target.value;
  
    document.getElementById('gmsOutput').innerHTML=lbs*1000+'gms';
    document.getElementById('poundsOutput').innerHTML=lbs*2.205+'lbs'
    document.getElementById('ouncesOutput').innerHTML=lbs*35.27+'oz'
    
      
      
    
  }
  

  

)
