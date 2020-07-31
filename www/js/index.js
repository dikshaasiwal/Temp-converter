function myfunc()
{
    var x=document.getElementById("id1").value;
   
     if(x=="c")
        
    { convertctof()
    }
    else if(x=="F")
    {
convertftoc()

    }

}

function convertctof()
{
    var y=parseInt(document.getElementById("id3").value);
    document.getElementById("id2").value=(y*9/5)+32;

}
function convertftoc()
{
     var y=parseInt(document.getElementById("id3").value);
    document.getElementById("id2").value=(y-32)*5/9;
}