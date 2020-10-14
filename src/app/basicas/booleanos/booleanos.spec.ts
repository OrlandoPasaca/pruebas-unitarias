import { usuarioIngresado } from "./booleanos"

describe("Pruebas de booleanos",()=>
{
    it("Debe de regresar false",()=>
    {
        const res= usuarioIngresado();
        expect(res).not.toBeTruthy();
    })
})