//ultima posição do X e do Y
var lastPositionX, lastPositionY;

canvas = document.getElementById("myCanvas");
//ctx é usado para consultar o canvas que criamos
ctx = canvas.getContext("2d");
//cor padrao para o pincel
color = "red";
//largura padrão para o pincel
widthLine = 5;
//pega o tamanho da tela que o usuario está usando
var width = screen.width;
//para certificar que o novo tamanho de tela sera menor
newWidth = screen.width - 70;
// certificamos que a nova altura 
newHeight = screen.height - 300;
//se o tamanho de tela for menor que 992 daremos o canvas irá se adaptar
//menor que 992 tela mobile
if(width < 992){

    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    //style.overflow propriedade do css desabilita o rolamento da pagina, para que a pintura possa feita com fluidez
    document.body.style.overflow = "hidden";
}



canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e){
    // INICIO DA ATIVIDADE ADICIONA{
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    //FIM DA ATIVIDADE ADICIONAL
    console.log("myTouchStart");
    //armazenamos as coordenadas atuais no canvas, cada toque guardará na variavel lastPositionX
    //vindas do ultimo toque na tela
    lastPositionX = e.touches[0].clientX - canvas.offsetLeft;
    //armazenamos as coordenadas atuais no canvas, cada toque guardará na variavel lastPositionY
    //vindas da ultimo toque na tela
    lastPositionY = e.touches[0].clientY - canvas.offsetTop;

}
//evento principal onde é realizado o desenho
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e){
    console.log("myTouchMove");
    //pega coord. atual onde movemos o dedo e coloca dentro da variavel currentPosixionOfTouchX
    currentPosixionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    //pega coord. atual onde movemos o dedo e coloca dentro da variavel currentPosixionOfTouchY
    currentPosixionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
        //inicia um caminho ou reinicia um caminho atual para desenhar
        ctx.beginPath();
        //ajusta para a cor do desenho
        ctx.strokeStyle = color;
        //espessura do desenho
        ctx.lineWidth = widthLine;
        console.log("Última posição das coordenadas X & Y: ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        //move para um ponto especifico sem deixar rastros no canvas
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Posição atual das coordenadas X & Y: ");
        console.log("x  = " + currentPosixionOfTouchX + "y = " + currentPosixionOfTouchY);
        //cria uma nova linha a partir do ultimo ponto criado.
        ctx.lineTo(currentPosixionOfTouchX, currentPosixionOfTouchY);
        ctx.stroke();
    
    lastPositionX = currentPosixionOfTouchX;
    lastPositionY = currentPosixionOfTouchY;
}



function limparArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}