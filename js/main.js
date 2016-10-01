/* jshint esversion: 6 */
//Crear Objeto Animal
var Animal = function(
  //Funcion Animal recibe estos Parametros
  nombre = null,
  numero_patas = 2,
  carnivoro = true,
  piel = true,
  numero_ojos = 2
){//function
    var object = {//Creacion de objeto
      nombre:       nombre,
      numero_patas: numero_patas,
      carnivoro:    carnivoro,
      piel:         piel,
      numero_ojos:  numero_ojos,
      //Metodo
      comer: function() {
        if(this.carnivoro === true){
          return "Come carne";
        }else{//if carnivoro
          return "NO come carne";
        }
      }//Function comer
    };//Object
    return object;
};//Animal

var jirafa = new Animal("Jirafa",4,false,true,2);
var araña = new Animal("araña",16,false,false,32);
var perro = new Animal("perro",4,true,true,2);
console.log(jirafa);

//jirafa.color_pelo = "amarillo" Definir parametro desde console
