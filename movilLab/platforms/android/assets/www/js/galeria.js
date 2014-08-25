Parse.initialize("s2z0NzlYY0LzyC1ONNu2iu1UkJjSyJHpk3Fqmt1n", "VL7btyucWcnx84oA4dhLU8mZGNrCiQ7onakB5Y5s");
var minecraft = Parse.Object.extend("Minecraftfigures");
var imagen = "";
//$(document).ready(function(){
$(document).on("pageshow", "#Galeria", function(){
var query = new Parse.Query(minecraft);
query.find({
  success: function(minecraftResult) {
  var s = "";
  for (var i = 0; i < minecraftResult.length; i++) { 
      var informacion = minecraftResult[i];
      var img = informacion.get('Imagen');
      s += "<img src='"+img.url()+"'/>";
	  s += "<h3>"+informacion.get('Name')+"</h3>";
	  s += "<p>"+informacion.get('Descripcion')+"</p> <br> <br>";
    }	
   $('#minecraftMovil').html(s);	
  },
  error: function(object, error) {
    alert("ERROR");
  }
});

});