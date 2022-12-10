
let btn = document.getElementById('generate');
let btn2 = document.getElementById('copy');

document.getElementById('body').style.backgroundImage = `linear-gradient(to left,  rgba(179, 145, 219, 1)  , rgba(247, 124, 255, 1)  )`
btn.addEventListener('click', changecolor);
btn2.addEventListener('click', copy);

let a = '#B391DB', b = '#F77CFF';



function copy() {
    let text = `background: rgb(179,145,219);
background: linear-gradient(to left, ${a} , ${b});`;
    var copyText = text;

    // copyText.select();
    // copyText.setSelectionRange(0, 200);

    navigator.clipboard.writeText(copyText);

    alert("Attritube is copied to the clipboard ");
    // console.log(copyText);
}

function changecolor() {
    function color() {
        let c = '';
        while (c.length < 6) {
            c += (Math.random()).toString(16).substr(-7).substr(-1);
        }
        return "#" + c;
    }

    var c1 = color().toUpperCase(); a = c1;
    var c2 = color().toUpperCase(); b = c2;

    document.getElementById('left').innerHTML = c1;
    document.getElementById('right').innerHTML = c2;
    document.getElementById('body').style.backgroundImage = `linear-gradient(to left,  ${c1} ,  ${c2} )`;

    console.log(c1 + "  " + c2);
}

