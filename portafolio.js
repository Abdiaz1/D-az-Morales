// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/1día.jpeg",
    title: "1Día",
    about: "Trabajo realizado para 1Día Tablas, Rediseño de la marca y sus productos #Valentina Morales",
}, {
    figure: "media/Luminaria.jpeg",
    title: "Posibilidades del Yeso",
    about: "Luminaria construida a partir de un molde parámetrico. #Valentina Morales ",
}, {
    figure: "media/KIPIT.jpeg",
    title: "Kipit",
    about: "Dispositivo que permite mantener la cadena de frío de los alimentos después de corte eléctrico. N° Solicitud Patente Modelo de Utilidad:3397-2017 #Andrea Díaz y Valentina Morales  ",
}, {
    figure: "media/MUTU.jpeg",
    title: "Mutu",
    about: "Diseño de Emergencia dirigido a niños en situación de albergues por catástrofe.Encargo CONAF #Andrea Díaz y Valentina Morales",
}, {
    figure: "media/foto-05.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-06.jpg",
    title: "Lorem ipsum 06",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/Libertad 720p.mp4",
    title: "Freedom",
    about: "Nulla pretium non sapien eget fermentum",
  }, {
      figure: "media/foto-06.jpg",
      title: "Lorem ipsum 06",
      about: "Nulla pretium non sapien eget fermentum",
    }, {
        figure: "media/foto-06.jpg",
        title: "Lorem ipsum 06",
        about: "Nulla pretium non sapien eget fermentum",
      }, {
          figure: "media/foto-06.jpg",
          title: "Lorem ipsum 06",
          about: "Nulla pretium non sapien eget fermentum",
        }, {
            figure: "media/foto-06.jpg",
            title: "Lorem ipsum 06",
            about: "Nulla pretium non sapien eget fermentum",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';


    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
