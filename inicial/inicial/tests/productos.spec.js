const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {

    // Verifica que la ruta GET /productos devuelva un ARREGLO y no este vacío
    it (" /get producto retorna un arreglo y no vacio", async () => {
        const response = await request(server).get("/productos").send()
        const body = response.body

        expect(body).toBeInstanceOf(Array)
        expect(body.length).toBeGreaterThan(0)
    })
    
    // Verifica que devuelva error al consultar GET "/productos/:id" por un producto con id que no existe

    it (" get/productos/:id  no existe id", async () => {
        const response = await request(server).get("/productos/hola").send()
        const {statusCode} = response
        //console.log(response)
        expect(statusCode).toBe(404)
    })

    // Verifica que la ruta POST /productos está agregando un nuevo producto

    it (" POST /productos está agregando un nuevo producto", async () => {
        const NuevoProducto ={
            id:6,
         
            nombre:"rueda"
        }
        const response = await request(server).post("/productos").send(NuevoProducto)
        const body = response.body
        //console.log(response.statusCode)
        //console.log(body)
        expect(body).toContainEqual(NuevoProducto)
    })


    // Verifica si ingresas cualquier ruta diferente a las establecidas recibas un status code 404

    it (" ruta no encontrada", async () => {
        const response = await request(server).get("/faceboke").send()
        const {statusCode} = response
        //console.log(response)
        expect(statusCode).toBe(404)
    })


    // Verifica que al actualizar un producto con id inexistente devuelve error 404


    // Verifica que al eliminar un producto, si envias un id inexistente devuelve error 404


});
