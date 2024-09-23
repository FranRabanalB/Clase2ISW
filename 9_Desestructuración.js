//1. Utiliza desestructuración para extraer las propiedades nombre, apellido y ciudad del objeto usuario.
//2. Extrae el primer interés del arreglo intereses en una variable llamada primerInteres.
//3. Extrae el email y linkedin de los contactos del usuario.
//4. Extrae calle y numero de la dirección, pero renómbralos como calleUsuario y numeroUsuario.

const usuario = {
    nombre: 'Francisca',
    apellido: 'Rabanal',
    edad: 22,
    direccion: {
      calle: 'Villa los Heroes',
      numero: 232,
      ciudad: 'Lota',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'francisca.rabanal2201@alumnos.ubiobio.cl',
      redesSociales: {
        instagram: '@_fran.clown_',
      }
    },
    intereses: ['Video Juegos', 'Música', 'Leer']
};

  // Extrae el nombre, el apellido y la ciudad en variables separadas.
const { nombre, apellido, direccion: { ciudad } } = usuario;


// Extrae el primer interés en una variable llamada "primerInteres".
const [primerInteres] = usuario.intereses;

// Extrae el email y el instagram en variables separadas.
const { contactos: { email, redesSociales: { instagram } } } = usuario;

// Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario".
const { direccion: { calle: calleUsuario, numero: numeroUsuario } } = usuario;

  //Imprime en consola todas las variables que extrajiste.
console.log(nombre);         
console.log(apellido);       
console.log(ciudad);         
console.log(primerInteres);  
console.log(email);          
console.log(instagram);      
console.log(calleUsuario);   
console.log(numeroUsuario);  
