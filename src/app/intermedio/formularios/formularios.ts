import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormularioRegister
{
    form:FormGroup;
    constructor(private fb:FormBuilder)
    {
        this.form=fb.group(
            {
                email:["",[Validators.required,Validators.email]],
                contrasena:["",[Validators.required]]
            }
        );
    }
}