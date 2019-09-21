/*
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
var posible_mov = [
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0]
];

function mover(ficha,f,c){
    if(ficha=='1W'){
        if(f!=6){
            f--;
            document.getElementById("c"+toString(f+1)+toString(c+1)).style.background = "rgba(61,217,80,0.7)";
        }else{
            f--;
            document.getElementById("c"+(f+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
            f--;
            document.getElementById("c"+(f+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
    }else if(ficha=='1B'){
        if(f!=1){
            f++;
            document.getElementById("c"+toString(f+1)+toString(c+1)).style.background = "rgba(61,217,80,0.7)";
        }else{
            f++;
            document.getElementById("c"+(f+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
            f++;
            document.getElementById("c"+(f+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
    }else if(ficha=='2W' || ficha=='2B'){
        for(var v=(c+1); v<8; v++){
            document.getElementById("c"+(f+1).toString()+(v+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
        for(var v=(c-1); v>-1; v--){
            document.getElementById("c"+(f+1).toString()+(v+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
        for(var h=(f+1); h<8; h++){
            document.getElementById("c"+(h+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
        for(var h=(f-1); h>-1; h--){
            document.getElementById("c"+(h+1).toString()+(c+1).toString()).style.background = "rgba(61,217,80,0.7)";
        }
    }else if(ficha=='3W' || ficha=='3B'){
        console.log(ficha);
        var fila=f, columna=c;
        fila-=2;
        if((c+2)>8){
            document.getElementById("c"+(fila+1).toString()+(c+2).toString()).style.background = "rgba(61,217,80,0.7)";
        }
        if(fila+1 >0){
            document.getElementById("c"+(fila+1).toString()+(c).toString()).style.background = "rgba(61,217,80,0.7)";
        }
        fila=f;
        fila+=2;
        /*if(){

        }*/
        
        fila=f;
        fila+=2;
        document.getElementById("c"+(fila+1).toString()+(c+2).toString()).style.background = "rgba(61,217,80,0.7)";
        document.getElementById("c"+(fila+1).toString()+(c).toString()).style.background = "rgba(61,217,80,0.7)";
        console.log("c"+(fila+1).toString()+(c+2).toString());
    }else{
        console.log("Error de ficha...");
    }
}

function selector(f, c){
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