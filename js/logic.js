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
    [ '2B', '3B', '4B', '5B', '6B', '4B', '3B', '2B'],
    [ '1B', '1B', '1B', '1B', '1B', '1B', '1B', '1B'],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ '1W', '1W', '1W', '1W', '1W', '1W', '1W', '1W'],
    [ '2W', '3W', '4W', '5W', '6W', '4W', '3W', '2W']
];


var CasillasSeleccionadas=[];

//Movimiento de la Torre
function movimientoTorre(f,c){
    for(var v=(c+1); v<8; v++){
        var celda="c"+(f+1)+(v+1);
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
        CasillasSeleccionadas.push(celda);
    }
    // movimientos de la torre ala izquierda
    for(var v=(c-1); v>-1; v--){
        var celda="c"+(f+1)+(v+1);
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
        CasillasSeleccionadas.push(celda);  
    
    }
    for(var h=(f+1); h<8; h++){
        var celda="c"+(h+1)+(c+1);
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
        CasillasSeleccionadas.push(celda);   
    }
    for(var h=(f-1); h>-1; h--){
        var celda="c"+(h+1)+(c+1);
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
        CasillasSeleccionadas.push(celda);
    }
}

function  movimientoAlfil(f,c){
    var fila=f, columnaDer=c,columnaIzq=c;
        
    // movimiento del alfil a la derrecha y arriba
        for(var i=(fila-1);i>-1;i--){
            columnaDer++;
            if(columnaDer<8){
                var celda="c"+(i+1)+(columnaDer+1);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
            }else{
                i=-1;
            }                           
        }
  // movimiento del alfil a la izquierda y arriba
 
   for(var i=(fila-1);i>-1;i--){
      columnaIzq--;
       if(columnaIzq>-1){
        var celda="c"+(i+1)+(columnaIzq+1);
        document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
        CasillasSeleccionadas.push(celda);
    }else{ i=-1;}                           
  }
  columnaDer=columnaIzq=c;
   // movimiento del alfil a la Derecha y abajo
 
     for(var i=(fila+1);i<8;i++){
     columnaDer++;
      if(columnaDer<8){
        var celda="c"+(i+1)+(columnaDer+1); 
       document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
       CasillasSeleccionadas.push(celda);
    }else{
       i=8;
      }                           
    }
  // movimiento del alfil a la izquierda y abajo
 
  for(var i=(fila+1);i<8;i++){
    columnaIzq--;
     if(columnaIzq>-1){
     var celda="c"+(i+1)+(columnaIzq+1);
     document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
     CasillasSeleccionadas.push(celda);
    }else{
      i=8;
     }                           
    }
}

//Movimiento del rey posible
function movimientoRey(fila,columna,minfila,maxfila,mincol,maxcol){
    for(var i=minfila;i<maxfila;i++){         
        for(var k=mincol;k<maxcol;k++){
            if(i!=fila || k!=columna){     
                var celda="c"+(i+1)+(k+1);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);                               
            }
            
        }            
    }
}
//Movimiento posible de caballo
function movimientoCaballo( f, c){
    var fila=f, columna=c;
        fila-=2;
        if(fila>=0 && fila<=7){
            if(c+1<8){
                var celda="c"+(fila+1)+(c+2);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
            }
            if(c>-1){
                var celda="c"+(fila+1)+(c);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
            }
        }
        fila=f;fila+=2;
        if(fila>=0 && fila<=7){
            if(c+1<8){
                var celda="c"+(fila+1)+(c+2);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
            }
            if(c>-1){
                var celda="c"+(fila+1)+(c);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);         
            }            
        }
        columna-=2;
        if(columna<=7 && columna>=0){
            if(f>0){
                var celda="c"+(f)+(columna+1);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
            }
            if(f+1<8){
                var celda="c"+(f+2)+(columna+1);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda); 
            }
        }
        columna=c;columna+=2;
        if(columna<=7 && columna>=0){
            if(f>0){
                var celda="c"+(f)+(columna+1);
                document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);              
            }
            if(f+1<8){
                var celda="c"+(f+2)+(columna+1);
                document.getElementById("c"+(f+2).toString()+(columna+1).toString()).style.background = "rgba(61,217,80,0.7)";
                CasillasSeleccionadas.push(celda);
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
    if(ficha=='1W'){
        if(f!=6){// si el peon no esta en la fila 6: entonces puede dar solo un paso
            f--;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
            CasillasSeleccionadas.push(celda);
            

        }else{// si no  puede dar 2 pasos
            f--;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
            CasillasSeleccionadas.push(celda);
            f--;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
            CasillasSeleccionadas.push(celda);
        }
    }else if(ficha=='1B'){
        if(f!=1){
            f++;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
             CasillasSeleccionadas.push(celda);
        }else{
            f++;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
             CasillasSeleccionadas.push(celda);
            f++;
            var celda="c"+(f+1)+(c+1);
            document.getElementById(celda).style.background = "rgba(61,217,80,0.7)";
              CasillasSeleccionadas.push(celda);
        
        }
        
    // -------selecionando la torre ------
    }else if(ficha=='2W' || ficha=='2B'){
         movimientoTorre(f,c);
     // -----  selecionando al Caballo  -------------
    }else if(ficha=='3W' || ficha=='3B'){
        movimientoCaballo( f, c);
  // -----  selecionando al alfil  -------------
    }else if(ficha=='4W' || ficha=='4B'){
        movimientoAlfil(f,c); 
   // -----  selecionando a la reina  ------------- 
    }else if(ficha=='5W' || ficha=='5B'){
        movimientoAlfil(f,c); 
        movimientoTorre(f,c);
 // -----  selecionando a el rey  ------------- 
    }else if(ficha=='6W' || ficha=='6B'){
    var fila=f, columna=c;
     if((fila+1)==8){// si la fila de la ficha es la ultima
        if((columna+1)==8){// si la columna de la ficha es la ultima
            movimientoRey(fila,columna,fila-1,fila+1,columna-1,columna+1);
        }else  if((columna-1)==-1){//si la columna de la ficha es la primera
           movimientoRey(fila,columna,fila-1,fila+1,columna,columna+2);
        }else if((columna+1)<8){// si la columna de la ficha No es la ultima
            movimientoRey(fila,columna,fila-1,fila+1,columna-1,columna+2);   
        } 
     }else   if((fila-1)>-1){// si la fila de la ficha No es la primera Ni tamppoco la ultima
            if((columna+1)==8){// si la columna de la ficha es la ultima
                movimientoRey(fila,columna,fila-1,fila+2,columna-1,columna+1);
            }else  if((columna-1)==-1){//si la columna de la ficha es la primera
               movimientoRey(fila,columna,fila-1,fila+2,columna,columna+2);
            }else if((columna+1)<8){// si la columna de la ficha No es la ultima
                movimientoRey(fila,columna,fila-1,fila+2,columna-1,columna+2);   
            }     
        }else if((fila-1)==-1){// si la fila de la ficha es la primera
            if((columna+1)==8){// si la columna de la ficha es la ultima
                movimientoRey(fila,columna,fila,fila+2,columna-1,columna+1);
            }else  if((columna-1)==-1){//si la columna de la ficha es la primera
                movimientoRey(fila,columna,fila,fila+2,columna,columna+2);
            }else if((columna+1)<8){// si la columna de la ficha No es la ultima
                movimientoRey(fila,columna,fila,fila+2,columna-1,columna+2);
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
       // document.getElementById("c"+(f+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
       // limpiarTabla(f,c);
        
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