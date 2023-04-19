let Temperature= function(c){
    this.c=c;
    this.cToF = function(){
        document.write("do c sang do f =" +((this.c*9/5)+32)+"f<br/>");
    }
    this.cToKelvin = function (){
        document.write("do c sang do kelvin =" +(this.c+273.15)+"k<br/>");
    }
}

let result = new Temperature(25);
result.cToF();
result.cToKelvin();