// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/1día.jpeg",
    title: "1Día",
    about: "Trabajo realizado para 1Día Tablas, Rediseño de la marca y sus productos #ValentinaMorales.",
}, {
    figure: "media/Luminaria.jpeg",
    title: "Posibilidades del Yeso",
    about: "Luminaria construida a partir de una matríz parámetrica, explota la capacidad del yeso para adoptar la forma de su molde #ValentinaMorales. ",
}, {
    figure: "media/KIPIT.jpeg",
    title: "Kipit",
    about: "Dispositivo que permite mantener la cadena de frío de los alimentos después de corte eléctrico. N° Solicitud Patente Modelo de Utilidad:3397-2017 #AndreaDíaz #ValentinaMorales.  ",
}, {
    figure: "media/MUTU.jpeg",
    title: "Mutu",
    about: "Diseño de Emergencia dirigido a niños en situación de albergue por catástrofe. Encargo CONAF #AndreaDíaz #ValentinaMorales.",
}, {
    figure: "media/contigo.jpg",
    title: "Contigo",
    about: "Trabajo en conjunto con artesanas de Melipeuco #AndreaDíaz.",
}, {
    figure: "media/iluminacion.jpg",
    title: "Luminaria de estaño",
    about: "Construcción fabricada en negativo de esféras #AndreaDíaz.",
}, {
    figure: "media/libertad.mp4",
    title: "Freedom",
    about: "Animación frame por frame, encargo Audiovisual #AndreaDíaz.",
}, {
    figure: "media/ilustracion.jpg",
    title: "Ilustración grafito",
    about: "Ilustración sobre un extracto de Edgar Allan Poe #AndreaDíaz.",
}, {
    figure: "media/4NOKS.png",
    title: "Nuevos Noks de Maggi",
    about: "Propuesta de diseño para Maggi, snack de arroz inflado sazonado y packaing #ValentinaMorales ",
}, {
    figure: "media/jeje.jpg",
    title: "platónico de valecita",
    about: "lo cambio mañana",

}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';


    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
