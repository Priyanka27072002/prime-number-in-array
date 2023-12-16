var a=[]
var size=parseInt(prompt("Enter the size of the array"))
var prime
var b=[]
for(i=0;i<size;i++){
    a[i]=parseInt(prompt("Enter the "+(i+1)+" value"))
}
document.write("The given array is : "+a+"<br>")
for(i=0;i<a.length;i++){
    for(j=2;j<a[i];j++){
        prime=true
        if(a[i]%j==0){
            prime=false
            break
        }

    }
    if(prime==true){
        b.push(a[i])
     
    }
}
document.write("The prime numbers in the given array is : "+b)