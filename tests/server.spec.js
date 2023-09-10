const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

});


////////////////////////////////////
describe("Operaciones CRUD", () => {

  // Verifica que la ruta GET /productos devuelva un ARREGLO y no este vacío
  it (" /get producto retorna un arreglo y no vacio", async () => {
      const response = await request(server).get("/cafes").send()
      const body = response.body

      expect(body).toBeInstanceOf(Array)
      expect(body.length).toBeGreaterThan(0)
  })


  //Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
  it (" /get producto retorna un arreglo y no vacio", async () => {
    const response = await request(server)
    .delete("/cafes/666")
    .set('Authorization', 'test')
    const {statusCode} = response
    expect(statusCode).toBe(404)
})

//rueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
  it (" POST /productos está agregando un nuevo producto", async () => {
   const NuevoProducto ={
      id:5,
      nombre:"Cocacola Con Fanta"
    }   
    const response = await request(server).post("/cafes").send(NuevoProducto)
    const body = response.body
    const {statusCode} = response
    expect(body).toContainEqual(NuevoProducto)
    expect(statusCode).toBe(201)
  })

//Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.

it (" POST /productos está agregando un nuevo producto", async () => {
  const CafeAActualizar ={
     id:1,
     nombre:"Test"
   }   
   const response = await request(server).put("/cafes/2").send(CafeAActualizar)
   const {statusCode} = response
   expect(statusCode).toBe(400)
 })

});

