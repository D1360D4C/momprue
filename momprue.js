let cartas = []; // Vector que contendrá las 5 imágenes
//PImage []celdas = new PImage[12];
let pr = 0;
let posy=[80,160,240,320,400];
let posx=[80,160,240,320,400,480];
let posiciones=[];
let check=false;
let num=[];
let conn = 0;
function setup() {
  createCanvas(600, 600);
  for (let h=0;h<30;h++){
    num[h]=0;
  }
  for (let i = 0; i < 30; i++) {
    
    while(!check){
    pr = Math.round(random(1,30));
    chequear(pr);
    }
    cartas[i] = loadImage(`paises/sur/p${pr}.png`); // Carga cada imagen en una posición del vector
  posiciones[i]=pr;
  num[i]=pr;
  check=false;
}
  
}

function draw() {
  background(220);
  conn=0;
  for(let y=0;y < 5;y++){
   for (let i = 0; i < 6; i++) {
    
    image(cartas[conn], posx[i], posy[y], 70, 70); // Dibuja la imagen en la posición (i * 80, 100) con un ancho y alto de 70 pixeles
    //text(posiciones[conn], posx[i], 200);
    
    if(conn < 30){
      conn=conn+1;
    }
   }
  }
}

function chequear(pp){
  for(let i = 0; i < 30; i++) {
    
    if (num[i]!= pp){
      
      check=true;
    }else{
      check=false;
      break;
    }
  }
  return(check);
}
