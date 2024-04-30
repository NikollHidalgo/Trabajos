// actividad #1

// //CALLBACK
// function obtenerNombre(callback) {
//     const nombre = "Juan";
//     console.log(`Nombre obtenido: ${nombre}`);
//     setTimeout(() => callback(nombre), 2000);
//   }
  
//   function generarSaludo(nombre, callback) {
//     const saludo = `¡Hola, ${nombre}! ¿Cómo estás?`;
//     console.log(`Saludo generado: ${saludo}`);
//     setTimeout(() => callback(saludo), 1000);
//   }
  
//   function mostrarSaludo(saludo) {
//     console.log(saludo);
//   }
  
//   obtenerNombre(function (nombre) {
//     generarSaludo(nombre, function (saludo) {
//       mostrarSaludo(saludo);
//     });
//   });

//   ------------------------------------------------------------------

// actividad #2

//PROMISE 

// function obtenerNombre() {
//     return new Promise((resolve, reject) => {
//       const nombre = "Nikoll";
//       console.log(`Nombre obtenido: ${nombre}`);
//       setTimeout(() => resolve(nombre), 2000);
//     });
//   }
  
//   function generarSaludo(nombre) {
//     return new Promise((resolve, reject) => {
//       const saludo = `¡Hola, ${nombre}! ¿Cómo estás?`;
//       console.log(`Saludo generado: ${saludo}`);
//       setTimeout(() => resolve(saludo), 1000);
//     });
//   }
  
//   function mostrarSaludo(saludo) {
//     console.log(saludo);
//   }
  
//   obtenerNombre()
//     .then(generarSaludo)
//     .then(mostrarSaludo)
//     .catch(error => console.error("Error al obtener el nombre o generar el saludo:", error));

// ---------------------------------------------------------------------------------------------------

// actividad #3

//PROMISE REJECT Y RESOLVE

// function obtenerNombre() {
//     return new Promise((resolve, reject) => {
//       const nombre = "Sofia"; 
//       if (!nombre || nombre.trim() === "") {
//         reject(new Error("Nombre no válido. Ingrese un nombre."));
//         return;
//       }
//       setTimeout(() => resolve(nombre), 2000);
//     });
//   }
  
//   function generarSaludo(nombre) {
//     return new Promise((resolve, reject) => {
//       const saludo = `¡Hola, ${nombre}! ¿Cómo estás?`;
//       console.log(`Saludo generado: ${saludo}`);
//       setTimeout(() => resolve(saludo), 1000);
//     });
//   }
  
//   function mostrarSaludo(saludo) {
//     console.log(saludo);
//   }
  
//   obtenerNombre()
//     .then(generarSaludo)
//     .then(mostrarSaludo)
//     .catch(error => console.error("Error:", error.message));

// -----------------------------------------------------------------------------

// actividad #4

//ASYNC AWAIT CON RESOLVE Y REJECT

// const data = {
//     nombre:"Fernanda",
//     apellido: "gutierrez",
//     edad: "18"
    
//   };
  
//   function consumirData(){
//     return new Promise ((resolve, reject)=>{
//       setInterval(()=>{
//         resolve(data)
//       }, 2000)
//     })
//   }
  
//   async function respuesta(){
//     try {
//       const mensaje = await consumirData();
//       console.log(mensaje)
//     } catch (error) {
//       console.log(error)
      
//     }
  
//   }
  
//   respuesta();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



