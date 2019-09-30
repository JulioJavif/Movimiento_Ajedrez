/*
    w: blanco
    B: negro
 1 = Peon
 2 = Torres
 3 = Caballo
 4 = Alfil
 5 = Reina
 6 = Rey
*/
var tablero = [
    [ '2B', '3B', '4B',0, '6B', '4B', '3B', '2B'],
    [ '1B', '1B', '1B', '1B', '1B', '1B', '1B', '1B'],
    [ 0, 0, '6W', 0, 0, '1W', 0, 0],
    [ 0, 0, 0, '2B', 0, '3B', 0, '5W'],
    [ 0, 0, '3W','4B', '6W', 0, 0, 0],
    [ 0, 0, 0, 0, 0, '4B', 0, 0],
    [ '1W', '1W', '1W', '1W', '1W', '1W', '1W', '1W'],
    [ '2W', '3W', '4W', '5W', '6W', '4W', '3W', '2W']
];


var CasillasSeleccionadas=[];
function DetectarFichasEnemigas(TipoFicha,celda,fila,columna){
    var ficha;
    
    ficha=tablero[fila][columna];
    if(ficha!=0){// si hay una ficha
        if(ficha.charAt(1)!=TipoFicha.charAt(1)){// si la ficha es enemiga
            document.getElementById(celda).style.background = "rgba(255,0,0,0.7)";// pinto rojo
            CasillasSeleccionadas.push(celda);
            
        }
         return 1;
    }else{// si no hay una ficha
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";// pinto verde la celda
            CasillasSeleccionadas.push(celda);
        
        
    }
}



//Movimiento de la Torre
function movimientoTorre(ficha,f,c){
    // torre a la derecha 
    for(var v=(c+1); v<8; v++){
        var celda="c"+(f+1)+(v+1);
       if(DetectarFichasEnemigas(ficha,celda,f,v)==1){
           v=8;
       }
        
        
    }
    // movimientos de la torre ala izquierda
    for(var v=(c-1); v>-1; v--){
        var celda="c"+(f+1)+(v+1);
        if(DetectarFichasEnemigas(ficha,celda,f,v)==1){
           v=-1;
        }
        
    
    }
    // torre hacia abajo
    for(var h=(f+1); h<8; h++){
        var celda="c"+(h+1)+(c+1);
        if(DetectarFichasEnemigas(ficha,celda,h,c)==1){
            h=8;
        }
       
    }
    // torre hacia arriba
    for(var h=(f-1); h>-1; h--){
        var celda="c"+(h+1)+(c+1);
        if(DetectarFichasEnemigas(ficha,celda,h,c)==1){
              h=-1;
        }
        
    }
}

function  movimientoAlfil(ficha,f,c){
    var fila=f, columnaDer=c,columnaIzq=c;
        
    // movimiento del alfil a la derrecha y arriba
        for(var i=(fila-1);i>-1;i--){
            columnaDer++;
            if(columnaDer<8){
                var celda="c"+(i+1)+(columnaDer+1);
                if(DetectarFichasEnemigas(ficha,celda,i,columnaDer)==1){
                     i=-1;
                }             
            }else{
                i=-1;
            }                           
        }
  // movimiento del alfil a la izquierda y arriba
 
   for(var i=(fila-1);i>-1;i--){
      columnaIzq--;
       if(columnaIzq>-1){
        var celda="c"+(i+1)+(columnaIzq+1);
        if(DetectarFichasEnemigas(ficha,celda,i,columnaIzq)==1){
            i=-1;
       } 
    }else{ i=-1;}                           
  }
  columnaDer=columnaIzq=c;
   // movimiento del alfil a la Derecha y abajo
 
     for(var i=(fila+1);i<8;i++){
     columnaDer++;
      if(columnaDer<8){
        var celda="c"+(i+1)+(columnaDer+1); 
        if(DetectarFichasEnemigas(ficha,celda,i,columnaDer)==1){
            i=8;
       } 
     }else{
       i=8;
      }                           
    }
  // movimiento del alfil a la izquierda y abajo
 
  for(var i=(fila+1);i<8;i++){
    columnaIzq--;
     if(columnaIzq>-1){
     var celda="c"+(i+1)+(columnaIzq+1);
     if(DetectarFichasEnemigas(ficha,celda,i,columnaIzq)==1){
        i=8;
      } 
    }else{
      i=8;
     }                           
    }
}

//Movimiento del rey posible
function movimientoRey(ficha,fila,columna,minfila,maxfila,mincol,maxcol,numMax){
    for(var i=minfila;i<maxfila;i++){         
        for(var k=mincol;k<maxcol;k++){
            if(i!=fila || k!=columna){     
                var celda="c"+(i+1)+(k+1);
                DetectarFichasEnemigas(ficha,celda,i,k);                                         
            }
            
        }            
    }
}

function DetectarFichasEnemigasCaballo(ficha,celda){
    var fichaPresa=[];
 
    fichaPresa=tablero[(celda.charAt(1)-1)][(celda.charAt(2)-1)];
    
    if(fichaPresa!=0){// si hay una ficha
        if(ficha.charAt(1)!=fichaPresa.charAt(1)){// si la ficha es enemiga
            document.getElementById(celda).style.background = "rgba(255,0,0,0.7)";// pinto rojo
            CasillasSeleccionadas.push(celda);
        }
    }else{// si no hay ficha
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";// pinto verde la celda
        CasillasSeleccionadas.push(celda);
    }
    
}
//Movimiento posible de caballo
function movimientoCaballo(ficha,f, c){
    var fila=f, columna=c;
        fila-=2;//Caballo hacia arriba largo
        if(fila>=0 && fila<=7){
            if(c+1<8){//  derecha
                var celda="c"+(fila+1)+(c+2);
                DetectarFichasEnemigasCaballo(ficha,celda);
                
            }
            if(c>-1){// izquierda
                var celda="c"+(fila+1)+(c);
                DetectarFichasEnemigasCaballo(ficha,celda);

            }
        }
        fila=f;fila+=2;//Caballo hacia abajo largo
        if(fila>=0 && fila<=7){
            if(c+1<8){//derecha
                var celda="c"+(fila+1)+(c+2);
                DetectarFichasEnemigasCaballo(ficha,celda);
            }
            if(c>-1){// izquierda
                var celda="c"+(fila+1)+(c);
                DetectarFichasEnemigasCaballo(ficha,celda);            }            
        }
        columna-=2;//Caballo hacia la izquierda
        if(columna<=7 && columna>=0){
            if(f>0){//arriba
                var celda="c"+(f)+(columna+1);
                DetectarFichasEnemigasCaballo(ficha,celda);            }
            if(f+1<8){// abajo
                var celda="c"+(f+2)+(columna+1);
                DetectarFichasEnemigasCaballo(ficha,celda);            }
        }
        columna=c;columna+=2;//Caballo hacia la derecha 
        if(columna<=7 && columna>=0){
            if(f>0){// arriba
                var celda="c"+(f)+(columna+1);
                DetectarFichasEnemigasCaballo(ficha,celda);            }
            if(f+1<8){//
                var celda="c"+(f+2)+(columna+1);
                DetectarFichasEnemigasCaballo(ficha,celda);            }
        }
}
function  DetectFichasEnemyPeonInFront(TipoFicha,CeldaInFront,fila,columna){
    var celda;
    if(CeldaInFront!=0){// si hay una ficha enfrente  
           if(CeldaInFront.charAt(1)!=TipoFicha){// si es una ficha enemiga
                   return 1;
           }
    }else{// si no hay ficha 
         celda="c"+(fila+1)+(columna+1);
         document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";// pinto verde la celda
         CasillasSeleccionadas.push(celda);
    }
}

function DefinirBandoPeon(TipoFicha,CeldaNextTo,fila,columna){
    var celda=[];
    celda="c"+(fila+1)+(columna+1);
     if(CeldaNextTo!=0){// si hay una ficha al lado  
        if(CeldaNextTo.charAt(1)!=TipoFicha){// si es enemiga 
                    
            document.getElementById(celda).style.background = "rgba(255,0,0,0.7)";// pinto rojo
            CasillasSeleccionadas.push(celda);            
        }
    }
}
// fichas al lado del peon
function DetectFichasEnemyPeonNextTo(TipoFicha,fila,columna,uno){
    var CeldaNextTo;
    if(fila+uno>-1 && fila+uno<8){// si tiene filas hacia arriba
          
        if(columna+1<8){// si tiene columna a la derrecha
            
            CeldaNextTo= tablero[fila+uno][columna+1]; 
                     
             DefinirBandoPeon(TipoFicha,CeldaNextTo,fila+uno,columna+1);
        }
        if(columna-1>-1){
             CeldaNextTo= tablero[fila+uno][columna-1]; 
            
            DefinirBandoPeon(TipoFicha,CeldaNextTo,fila+uno,columna-1);
        }
        
    }  
}
function DeselecionarCeldas(){
    for(var i=0;i<CasillasSeleccionadas.length;i++){
        fila=CasillasSeleccionadas[i].charAt(1);
        columna=CasillasSeleccionadas[i].charAt(2);
    
        if(fila%2!=0){// si la fila es impar
            if(columna%2==0){// y la columna es par
                document.getElementById(CasillasSeleccionadas[i]).style.background = "rgba(0, 0, 0, .4)";

            }else{// si la columna s impar
                document.getElementById(CasillasSeleccionadas[i]).style.background = "rgba(61,217,80,0)";

            }
        }else{// si la fila es par
            if(columna%2==0){// y la columna es par
                document.getElementById(CasillasSeleccionadas[i]).style.background = "rgba(61,217,80,0)";
                 
            }else{// si la columna s impar
                document.getElementById(CasillasSeleccionadas[i]).style.background = "rgba(0, 0, 0, .4)";

            }
        }
       
    }
    CasillasSeleccionadas.length=0;// como ya no hay casillas selecionadas, se vacia el array
}
function mover(ficha,f,c){
    DeselecionarCeldas();
    var fila=f,columna=c;
    if(ficha=='1W'){// selecionando peon
        if(fila!=6){// si el peon no esta en la fila 6: entonces puede dar solo un paso
            fila--;
            var CeldaInFront=[fila][columna];
            DetectFichasEnemyPeonNextTo('W',f,c,-1);
            DetectFichasEnemyPeonInFront('W',CeldaInFront,fila,columna);
            

        }else{// si no,  puede dar 2 pasos
            fila--;
            var CeldaInFront=tablero[fila][columna];
            DetectFichasEnemyPeonNextTo('W',f,c,-1);
           if(DetectFichasEnemyPeonInFront('W',CeldaInFront,fila,columna)!=1){// si no hay casilla enfrente
            fila--;
            var CeldaInFront=tablero[fila][columna];
            DetectFichasEnemyPeonInFront('W',CeldaInFront,fila,columna);
           
           }
        
        }
        
    }else if(ficha=='1B'){// peon negro
        if(fila!=1){
            fila++;
            var celda="c"+(fila+1)+(columna+1);
            DetectFichasEnemyPeonNextTo('B',f,c,-1);
            DetectarFichasEnemigas(ficha,celda,fila,columna);
        }else{
           
            fila++;
            var CeldaInFront=tablero[fila][columna];
            
            DetectFichasEnemyPeonNextTo('B',f,c,1);
           if(DetectFichasEnemyPeonInFront('B',CeldaInFront,fila,columna)!=1){// si no hay casilla enfrente
            fila++;
            var CeldaInFront=tablero[fila][columna];
            DetectFichasEnemyPeonInFront('B',CeldaInFront,fila,columna);
           
           }
        
        }
        
    // -------selecionando la torre ------
    }else if(ficha=='2W' || ficha=='2B'){
         movimientoTorre(ficha,f,c);
     // -----  selecionando al Caballo  -------------
    }else if(ficha=='3W' || ficha=='3B'){
        movimientoCaballo(ficha,f, c);
  // -----  selecionando al alfil  -------------
    }else if(ficha=='4W' || ficha=='4B'){
        movimientoAlfil(ficha,f,c); 
   // -----  selecionando a la reina  ------------- 
    }else if(ficha=='5W' || ficha=='5B'){
        movimientoAlfil(ficha,f,c); 
        movimientoTorre(ficha,f,c);
 // -----  selecionando a el rey  ------------- 
    }else if(ficha=='6W' || ficha=='6B'){
    var fila=f, columna=c;
     if((fila+1)==8){// si la fila de la ficha es la ultima
        if((columna+1)==8){// si la columna de la ficha es la ultima
            movimientoRey(ficha,fila,columna,fila-1,fila+1,columna-1,columna+1);
        }else  if((columna-1)==-1){//si la columna de la ficha es la primera
           movimientoRey(ficha,fila,columna,fila-1,fila+1,columna,columna+2);
        }else if((columna+1)<8){// si la columna de la ficha No es la ultima
            movimientoRey(ficha,fila,columna,fila-1,fila+1,columna-1,columna+2);   
        } 
     }else   if((fila-1)>-1){// si la fila de la ficha No es la primera Ni tamppoco la ultima
            if((columna+1)==8){// si la columna de la ficha es la ultima
                movimientoRey(ficha,fila,columna,fila-1,fila+2,columna-1,columna+1);
            }else  if((columna-1)==-1){//si la columna de la ficha es la primera
               movimientoRey(ficha,fila,columna,fila-1,fila+2,columna,columna+2);
            }else if((columna+1)<8){// si la columna de la ficha No es la ultima
                movimientoRey(ficha,fila,columna,fila-1,fila+2,columna-1,columna+2);   
            }     
        }else if((fila-1)==-1){// si la fila de la ficha es la primera
            if((columna+1)==8){// si la columna de la ficha es la ultima
                movimientoRey(ficha,fila,columna,fila,fila+2,columna-1,columna+1);
            }else  if((columna-1)==-1){//si la columna de la ficha es la primera
                movimientoRey(ficha,fila,columna,fila,fila+2,columna,columna+2);
            }else if((columna+1)<8){// si la columna de la ficha No es la ultima
                movimientoRey(ficha,fila,columna,fila,fila+2,columna-1,columna+2);
            }
        }
     }else{
        console.log("Error de ficha...");
    }
  
}

// al selecionar una celda se llama a esta funcion
function selector(f, c){
    var fila,columna;
    //Habilitar para depurar por consola
    //console.log(tablero[f][c]);
    var cell = tablero[f][c];
    
    if(cell=='1W'){
       
        
        mover('1W',f,c);
    }else if(cell=='1B'){
        mover('1B',f,c);
    }else if(cell=='2W'){
        mover('2W',f,c);
    }else if(cell=='2B'){
        mover('2B',f,c);
    }else if(cell=='3W'){
        mover('3W',f,c);
    }else if(cell=='3B'){
        mover('3B',f,c);
    }else if(cell=='4W'){
        mover('4W',f,c);
    }else if(cell=='4B'){
        mover('4B',f,c);
    }else if(cell=='5W'){
        mover('5W',f,c);
    }else if(cell=='5B'){
        mover('5B',f,c);
    }else if(cell=='6W'){
        mover('6W',f,c);
    }else if(cell=='6B'){
        mover('6B',f,c);
    }else{
        //Habiltar en casi que no guarde 0
        //console.log('No hay fichas en '+f+','+c);
    }
}