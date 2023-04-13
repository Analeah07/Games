function star_tree()
{
    let star = "";
        for (let i = 0; i <=10; i++)
            {
                document.getElementById('star_tree').innerHTML += ("<center>" + star + "<br>" + "</center");
                star += "*";
            }
}
star_tree();

function sparckle()
    {
        let tree = document.getElementById('star_tree');
        let colors = [r, g, b];
        var r= Math.floor((Math.random())*256);
        var g= Math.floor((Math.random())*256);
        var b= Math.floor((Math.random())*256);

        var chosen_color = (Math.floor(Math.random() * colors.length));    
        tree.style.color = colors[chosen_color];
        document.getElementById("colorName").innerHTML="RGB:" + " " + "( "+r+" , "+g+" , "+b+" )";
        document.getElementById("star_tree").style.color="rgb("+r+","+g+","+b+")";
    }

function start()
    {
        interval = setInterval(sparckle, 100);
    }
function stop()
    {
        clearInterval(interval);
    }