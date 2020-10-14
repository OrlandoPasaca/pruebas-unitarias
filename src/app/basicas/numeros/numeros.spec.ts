import { incremetar } from "./numeros"

describe("Pruebas de numero",()=>
{
    it("Debe de retornar 100 si el numero ingresado es mayor a 100",()=>
    {
        const res=incremetar(300);
        expect(res).toBe(100);
    })
    it("Debe de retornar el numero ingresado mas 1 si no es mayor a 100",()=>
    {
        const res=incremetar(99);
        expect(res).toBe(100);
    })
})