//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

//Forma de hacer conexion con el backen conXMLHttpRequest
// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     //la clase XMLHttpRequest es nativa del navegador, esta me crea la conexion con el backend.
//     const http = new XMLHttpRequest();
//     //Metodo que recibe dos parametros para realizar la conexion y la accion http.
//     http.open("GET", "http://localhost:3000/perfils");

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });
//   return promise;
// };

// //Fetch API forma larga
// const listaClientes = () => {

//   return fetch("http://localhost:3000/perfil").then(response =>{
//     return response.json();
//   });
// };

//Fetch API forma corta
const listaClientes = () => fetch("http://localhost:3000/perfil").then((response) => response.json())

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4()
    }),
  });
};
const eliminarCliente = (id) => {
  // Se deben poner backticks
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((response) => response.json());
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre,   email }),
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
 
};

export const clientServices = {
  // se puede definir de dos formas
  // lista clientes o listaClientes:listaClientes
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
}