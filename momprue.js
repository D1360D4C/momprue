let cartas = []; // Vector que contendrá las 5 imágenes
let paises = [];
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
let valoresx = -240;
let valoresy = -190;
let valx = 20;
let valy = 30;
let nose=0;
let selecx=-1;
let selecy=-1;
let habi=1;
let varmatch=false;
let suma =0;
let pl2= 0;
let pl1=0;
let T1=1;
let T2=0;
let total=0;
let contadorC=0;
let paralelo=[];

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
  createCanvas(600, 500,WEBGL);
  for (let h=0;h<30;h++)
  {
    num[h]=0;
    paralelo[h]=0;
  }
  for (let i = 0; i < 30; i++) 
  {
    while(!check)
    {
      pr = Math.round(random(1,30));
    chequear(pr);
    }
    //cartas[i] = loadImage(`paises/sur/p${pr}.png`); // Carga cada imagen en una posición del vector
    cartas[i] = loadImage("geoo.jpg");
    paises[i] = `paises/sur/p${pr}.png`;
    posiciones[i]=pr;
    num[i]=pr;
    check=false;
  } 
}
function draw() {
    document.getElementById("titulo1").textContent=pl1;
    document.getElementById("titulo2").textContent=pl2;
  if(habi>0)
  {
    
  background(200);
  conn=0;
  //cargaimg=false;
  for(let y=0;y < 5;y++){
   for (let i = 0; i < 6; i++) 
   {
    push();
    //ubicacion y animacion
    translate(posx[i], posy[y], 0);//donde 0,0 es el centro del Canvas
    
    if(i==selecx && y == selecy)
    {
      nose=nose+radians(6.5);

      if(nose<6.3){
        rotateY(nose); 
        //rotateZ(nose);
        //rotateX(nose);
        if(paralelo[conn]==0)
        {
        if(nose >= 2.0 && nose <= 2.05){
          cartas[conn] = loadImage(paises[conn]);
          paralelo[conn] = 1;
          
        }
      }
      }else{
        habi=0;
        nose=0;
        selecx=-1
        selecy=-1
        matchV(posiciones[conn]);
        if(varmatch){
          puntajes();
        }
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
document.getElementById("tituloX").textContent=suma;
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
          
          habi=1;
          selecx = i;
          selecy = y;
          contadorC++;
          if(contadorC==5){
            contadorC=1;
          }
        }
    
      }
    }
  }
}

function matchV(valor){

if(total==0){
  suma=valor;//guarda primer valor
  total=1;//cambia total para habilitar el segundo valor a guardar
}
else{
  total=suma+valor //
  if(total==31){

    varmatch= true;
  }
  else{
    varmatch=false;
  }
  total=0;
  return varmatch;
}

}

function puntajes(){
  //controlTurno(contadorC);
  if(contadorC<3){
    pl1++;
    T1=0;
  }
  if(contadorC>2){
    pl2++;
    T2=0;
  }
  varmatch=false;
}

function controlTurno(numero){
    if (numero % 2 === 0) {
      T1=0;
      T2=1;
    } else {
      T1=1;
      T2=0;
    }
}