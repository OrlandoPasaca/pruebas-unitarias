import { Jugador } from "./clases";

describe("Pruebas de clase",()=>
{

    let jugador=new Jugador();

    beforeAll(()=>
    {

    })
    beforeEach(()=>
    {
        jugador=new Jugador();
    })
    afterAll(()=>
    {

    })
    afterEach(()=>
    {

    })

    
    it("Debe de retornar 80 de hp si recibe 20 de daño",()=>
    {
        
        const resp=jugador.recibeDanio(20)
        expect(resp).toBe(80);
    })
    it("Debe de retornar 50 de hp si recibe 50 de daño",()=>
    {
        const resp=jugador.recibeDanio(20)
        expect(resp).toBe(80);
    })
    it("Debe de retornar 0 de hp si recibe 100 o mas de daño",()=>
    {
        const resp=jugador.recibeDanio(120)
        expect(resp).toBe(0);
    })
})