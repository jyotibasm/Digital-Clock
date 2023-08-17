
setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    document.getElementById("hello").innerHTML=`${h} : ${m} : ${s}`

},1000);
