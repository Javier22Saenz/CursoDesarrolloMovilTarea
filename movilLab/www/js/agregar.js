Parse.initialize("s2z0NzlYY0LzyC1ONNu2iu1UkJjSyJHpk3Fqmt1n", "VL7btyucWcnx84oA4dhLU8mZGNrCiQ7onakB5Y5s");
var minecraft = Parse.Object.extend("Minecraftfigures");

//-------------
$(document).on("pageshow", "#Agregar", function(e, ui) {
 
	var imagedata = "";
 
	$("#btnGuardar").on("touchend", function(e) {
		//e.preventDefault();
		//$(this).attr("disabled","disabled").button("refresh");
 
		var noteText = $("#tbxNombre").val();
		var description = $("#tbxDescripcion").val();
		if(noteText == '') return;
 
		if(imagedata != "") {
			var parseFile = new Parse.File("mypic.jpg", {base64:imagedata});
			console.log(parseFile);
				parseFile.save().then(function() {
					var note = new minecraft();
					note.set("Name",noteText);
					note.set("Descripcion", description);
					note.set("Imagen",parseFile);
					note.save(null, {
						success:function(ob) {
							$.mobile.changePage("index.html");
						}, error:function(e) {
							alert(e);
						}
					});
					cleanUp();
				}, function(error) {
					console.log("Error");
					console.log(error);
				});
 
		} else {
			var note = new minecraft();
			note.set("Name",noteText);
			note.set("Descripcion", description);
			note.save(null, {
				success:function(ob) {
					$.mobile.changePage("index.html");
				}, error:function(e) {
					alert(e);
				}
			});
			cleanUp();
 
		}
	});
 
	$("#btnImagen").on("click", function(e) {
		e.preventDefault();
		navigator.camera.getPicture(gotPic, failHandler, 
            {quality:50, destinationType: navigator.camera.DestinationType.DATA_URL,
             sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY});
	});
	
	function gotPic(data) {
		alert("entro");
		imagedata = data;
		$("#btnImagen").text("Picture Taken!").button("refresh");
	}
	
	function failHandler(e) {
		alert("ErrorFromC");
		alert(e);
		console.log(e.toString());
	}
 
	function cleanUp() {
		imagedata = "";
		//$("#btnGuardar").removeAttr("disabled").button("refresh");
		$("#tbxNombre").val("");
		//$("#btnImagen").text("Add Pic").button("refresh");
	}
 
});
