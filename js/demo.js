/*var a,b,c;

do{

    a=parseInt(prompt("Nhap canh thu 1: "));
    console.log(a);
    b=parseInt(prompt("Nhap canh thu 2: "));
    console.log(b);
    c=parseInt(prompt("nhap canh thu 3: "));
    console.log(c);
}while (isNaN(a) || isNaN(b) || isNaN(c) || a<=0|| b<=0 || c<=0 || !(a+b)>c && (a+c)>b && (b+c)>a);
console.log("chu vi:"+chuvi(a,b,c));
console.log("dientich:"+dientich(a,b,c));
function chuvi(x1,x2,x3) {
    return x1+x2+x3;
}
function dientich(x1,x2,x3){
    var p=chuvi(x1,x2,x3)/2;
    return Math.sqrt(p*(p-x1)*(p-x2)*(p-x3));

}*/
function loto(){

var n;

do{
    n=parseInt(prompt("nhap so bat ki tu 0 den 100: "));
    if(isNaN(n)|| n<0){
        alert("nhap so ko chinh xac")
    }
}while (isNaN(n) || n<0);
var m=parseInt(Math.random()*100);
 if(n==m) {
     alert("ban da trung gia");

 }else{
     alert("ban ko trung giai");
 }
}
loto();
    // phan mem trung vietlot//

var arr=[]; // dua ra day trung vietlot//
    for( var j=0;j<5;j++){
    var x =parseInt(Math.random()*45);
    arr[j]=x;
}console.log(arr);
    var arr1=[]; // dua ra day so ng mua chon trong cac lan mua.//
       for( var i=0;i<5;i++){
           do{
           arr1[i] = parseInt(prompt("moi nhap cap so thu "+i+": "));
           }while (isNaN(arr1[i]) || arr1[i]>45 || arr1[i]<0);
   }console.log(arr1);

       var flag=0; // so sanh 2 day so voi nhau xem trung bao nhieu cap so//
       for(var i=0;i<5;i++){
           for(var j=0;j<5;j++){
               if(arr[i]==arr1[j]){
                   flag++;
               }
           }
       }
       if(flag==1){
           alert("ban da trung 1 cap so");
        }else if(flag==2){
           alert("ban da trung 2 cap so");
       }else if(flag==3){
           alert("ban da trung 3 cap so");
       }else if(flag==4){
           alert("ban da trung 4 cap so");
       }else if(flag==5){
           alert("ban da trung 5 cap so");
       }
       else{
           alert("ban ko trung cap so nao");
       }



