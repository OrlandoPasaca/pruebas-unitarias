import {Jugador2} from './jugador2'

describe("Jugador 2 emit",()=>
{
    let jugador: Jugador2;

    beforeEach(()=>jugador=new Jugador2);

    it("Debe de emitir un evento cuando recibe daño",()=>
    {
        let nuevoHP=0
        jugador.hpCambia.subscribe(hp=>
            {
                nuevoHP=hp;
            })
        jugador.recibeDanio(1000);
        expect(nuevoHP).toBe(0);

    })
})
