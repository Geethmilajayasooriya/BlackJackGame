function main()
{
    let conform = document.getElementById("mainresult").innerHTML;

    let x;
    if(conform==" You lost")
    {
        alert("Game over,click restart");
    }
else {
do{
    x =Math.floor( Math.random()*100/7.6);
} while(x==0);
let currentt = parseInt(document.getElementById("result").innerHTML);
let total = x+ currentt;
document.getElementById("result").innerHTML = total;
if( total<21)
     {
        document.getElementById("mainresult").innerHTML= " Generate another card?";
     }

     else if(total>21)
        {
            document.getElementById("mainresult").innerHTML= " You lost";
            alert("Click restart to play again ");
            document.getElementById("btn_res").style.display = "block";
        
        }

    else if(total ==21)
    {
        document.getElementById("mainresult").innerHTML= " You've won";
        alert("congratulations ");
        document.getElementById("btn_res").style.display = "block";
    }


    var img = document.createElement("img");
    img. src = "images/"+x+".png";
    img.height=300;
    document.body.appendChild(img);

    }
    
}

function restart()
{
    location.reload();
}