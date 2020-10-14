import { EMPTY, Observable, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from} from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio= new MedicosService(null);

    beforeEach( () => {
        componente=new MedicosComponent(servicio)
    });


    it('Init: Debe de cargar los medicos', () => {

        spyOn(servicio,"getMedicos").and.callFake(()=>
        {
            return from(['medico1','medico2','medico3']);
        })

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0)
    });

    it("Debe de llamar a la funcion agregarMedico del servicio",()=>
    {
        const espia=spyOn(servicio,"agregarMedico").and.callFake(()=>
        {
            return EMPTY;
        })
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    })
    it("Debe de agregar un nuevo medico al arreglo de medicos",()=>
    {
        const medico={id:1,nombre:"Juan"};
        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    })
    it('Si falla la adicion, la propiedad mensajeError, debe retornar el error',()=>
    {
        const miError="No se puede agregar al medico";

        spyOn(servicio,"agregarMedico").and.returnValue(throwError(miError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    })
    it("Debe de llamar al servidott para borrar un medico",()=>
    {
        spyOn(window,"confirm").and.returnValue(true);
        const espia=spyOn(servicio,"borrarMedico").and.returnValue(EMPTY);
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    })


});
