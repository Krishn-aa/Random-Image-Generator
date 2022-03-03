function GetNumber()
{
    var num = document.getElementById('num').value;
    
    for (let i = 0; i < num; i++)
    {
        GetImages(i);

    }

}
function GetImages(i)
{
    var img = document.createElement('img');
    img.src = `https://picsum.photos/880/630?random=${i}`;
    img.setAttribute("class", "ImgBor");
    document.getElementById("body").appendChild(img);

}
