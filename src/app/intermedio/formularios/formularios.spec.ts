import { FormularioRegister } from "./formularios";
import {FormBuilder} from '@angular/forms'

describe("Formularios",()=>
{
    let componente:FormularioRegister;
    beforeEach(()=>
    {
        componente=new FormularioRegister(new FormBuilder());
    });

    it("Debe de crear un formulario con dos campos",()=>
    {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('contrasena')).toBeTruthy();

    });
    it('El email debe de ser obligatorio',()=>
    {
        const control=componente.form.get("email");
        control.setValue("");
        expect(control.valid).toBeFalsy();
    });
    it('El email debe ser un correo valido',()=>
    {
        const control=componente.form.get("email");
        control.setValue("fernando@gmail.com");
        expect(control.valid).toBeTruthy();
    })
})