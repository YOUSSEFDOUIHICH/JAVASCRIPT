var x=0
function incrementer(){
    x=x+1;
    var incr=document.getElementById("value")
    incr.innerText=x;
    if (x>0) {
        incr.style="color:green"
        
    }
    if (x==0) {
        incr.style="color:black"
        
    }
}
function remise(){
    x=0
    var rem=document.getElementById("value")
    rem.innerText=x
    if (x===0) {
        rem.style="color:black"
        
    }

}
function decrementer(){
    x=x-1
    var decr=document.getElementById("value")
    decr.innerText=x;
    if (x<0) {
        decr.style="color:red"
        
    }
    if (x==0) {
        decr.style="color:black"
        
    }


}