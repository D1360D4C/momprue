let cartas = []; // Vector que contendrá las 5 imágenes
//PImage []celdas = new PImage[12];
let pr = 0;
let posy=[];
let posx=[];
let posyY=[];
let posxX=[];
let posiciones=[];
let check=false;
let num=[];
let conn = 0;
let tam = 80;
let distancia = tam + 15;
let valoresx = -230;
let valoresy = -230;
let valx = 30;
let valy = 30;
let nose=0;
let selecx=-1;
let selecy=-1;

function setup() 
{ //vectores de posiciones en el transform con 0,0 en el centro
  for (let h=0;h<6;h++){
    
    posx[h]=valoresx;
    valoresx += distancia;
  }
  for (let h=0;h<5;h++){
    
    posy[h]=valoresy;
    valoresy += distancia;
  }
  //vectores posiciones mouseY y mouseX
  for (let h=0;h<6;h++){
    
    posxX[h]=valx;
    valx += distancia;
  }
  for (let h=0;h<5;h++){
    
    posyY[h]=valy;
    valy += distancia;
  }
//empieza carga de vector de cartas con imagenes aleatorio
  createCanvas(600, 600,WEBGL);
  for (let h=0;h<30;h++)
  {
    num[h]=0;
  }
  for (let i = 0; i < 30; i++) 
  {
    while(!check)
    {
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
   for (let i = 0; i < 6; i++) 
   {
    push();
    //ubicacion y animacion
    translate(posx[i], posy[y], 0);//donde 0,0 es el centro del Canvas
    
    if(i==selecx && y == selecy)
    {
      
      nose=nose+radians(2);
      if(nose<6.3){
        rotateY(nose); 
        rotateZ(nose);
        rotateX(nose);
      }else{
        nose=0;
        selecx=-1
        selecy=-1
      }
    }
    
    imageMode(CENTER);
    image(cartas[conn], 0, 0, tam, tam); 
    pop();
    if(conn < 29)
    {
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


function mouseClicked(){
  if(nose==0)
  {//if de control por si ya fue seleccionado una carta, tiene que esperar a que el giro vuelva a cero
  
    for(let y=0;y<5;y++)
    {
      for(let i=0;i<6;i++)
      {
    
        if(mouseY > posyY[y] && mouseY < posyY[y]+tam && mouseX > posxX[i] && mouseX < posxX[i]+tam)
        {
      
          selecx = i;
          selecy = y;
        }
    
      }
    }
  }
}