var c;
function fun(){
    document.getElementById("cap").value="";
    let arr=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',1,2,3,4,5,6,7,8,9,0];
    let res="";
    c=document.getElementById("captcha");
    var i,j,k;
    for(i=0;i<6;i++){
        j=Math.random()*61;
        j=Math.round(j);
        res=res+arr[j];
    }
    c.innerHTML=res;
}
function msg()
{
    const user_ip=document.getElementById("cap").value;
    if(user_ip==c.innerHTML)
    {
        var s=document.getElementById("res").innerHTML="Your contact saved successfully";
        fun();
    }
    else{
        var s=document.getElementById("res").innerHTML="Type captcha again";
        fun();
    }
}