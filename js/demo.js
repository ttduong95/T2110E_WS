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

}*/ /*
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
loto();*/
    // phan mem trung vietlot//
/*
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
*/
/*
function timkiem(arr,x){
           for(var i=0; i<arr.length;i++){
               if(arr[i]==x) return true;
           }
           return false;
}
function sosanh2mang(lk,vk){
    var count=0;
    for( var i=0;i<lk.length,i++){
        for(var j=0;i<vk.length,j++){
            if(lk[i]==vk[j]){
                count++;
            }


        }
    }return count;
}
function vietlot(){
    var lucky=[];
    do{
        var n=parseInt(Math.random()*46);
        if(timkiem(lucky,n)){ // chi cho vao mang khi chua co so nay
            lucky.push(n); //push dua vao mang
        }

    }while (lucky.length <6);
    // ham includes: giong ham tim kiem
    console.log(lucky);
    //nhap 5 mang. moi mang 6 so ko trung nhau 0-45;
    var vietlot=[];
    do{
        var n=prompt("nhap 1 so trong khoang 0 den 45");
        n=parseInt(n);
        if(timkiem(vietlot[i],n)){ // xem trong mang da co n hay chua, neu chua nhap n
            vietlot.push(n);
        }
    }while (vietlot[i].length<6);

    // so sanh tung bo so da mua
    var count=0;
    for( var i=0;i<vietlot.length;i++){
        if(sosanh2mang(vietlot[i],lucky)){
            alert("chuc mung ban da trung 100 ty");
            count++;
            break;
        }
    }
    if(count==0){
        alert("chuc ban may man");
    }

}*/ /*
alert("xin chao cac ban");

setTimeout(function (){ // ham vo danh viet dung 1 lan
    alert("xin chao cac ban");
},5000) */ /*
function sayhello(){
    alert("xin chao cac ban");
}
setTimeout(sayhello,5000); // sayhello goi la ham callback thuc hien sau khi settimeout hoan thanh.

setInterval(countdown,2000); // ham nay chay vinh vien
*//*
var i=10;

var  countdown =()=>{
    console.log(i);
    i--;
    if(i<0){
        clearInterval(si)
    }
}


var m=10, s=0;
var timer=setInterval(function (){
    /*
    var min=m, sec=s;
    if(m<0){
        min="0"+m;
    }
    if(s<10){
        sec="0"+s;
    }else {
        sec=s;
    }*//*
    var min = m<10?"0"+m:m; // toan tu 3 ngoi rut gon tu cai tren
    var sec = s<10?"0"+s:s
    console.log(min+":"+sec);
    s--;
    if(s<0){
        s=59;
        m--;
    }
    if(m<0){
        clearInterval(timer);
    }
},10); */
function chanle(){
  //  var pt={
      //  "The nap dien thoai 10.000",
     //   "The nap dien thoai 50.000",
     //   "Sac du phong",
    //    "Dien thoai",
     //   "oto"
        var pt=[];
        for(var i=0;i<50;i++){
            pt.push("The nap dien thoai 10.000");
    }
        for(var i=0;i<35;i++){
            pt.push("The nap dien thoai 50.000");
    }
        for(var i=0;i<10;i++){
            pt.push("Sac du phong");
    }
        for(var i=0;i<4;i++){
            pt.push("Dien thoai");
    }
            pt.push("oto");
        var count=10;
        var rw=setInterval(function (){
            var lucky=parseInt(Math.random()*2);
            var n;
            do{
                n=prompt("ban chon chan hay le: ");
                n=parseInt(n);
                if(n<0 || n>1 || isNaN(n)){
                    alert("ban nhap sai");
                }
            }while (n<0 || n>1 || isNaN(n));

            if(lucky==n){
                var gt =parseInt(Math.random()* pt.length);
                alert("chuc mung ban da trung thuong"+pt[gt]);
            }else {
                alert("chuc ban may man lan sau");

            }
            count--;
            if(count<=0){
                clearInterval(rw);
            }

        },10000);


    }
    chanle();






