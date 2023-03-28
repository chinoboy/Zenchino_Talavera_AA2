let val = 1;

for(let i=1; val<=4000; i++){
    val = ((2*i)+(2**i)-2)/2;
    document.writeln(val);
    if(val <=4000){
        document.writeln(',')
    }
}