const text = document.getElementById('paragraf');
const button = document.getElementById('button');

const hexcolorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexcolorArray[Math.floor(Math.random() * hexcolorArray.length)];
    }
    return color
}


button.addEventListener('click', () => {
    const colorCode = randomColor();
    text.innerText = colorCode;
    document.body.style.background = colorCode; 
})
