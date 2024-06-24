import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.scss'],
})
export class JoinusComponent implements OnInit {
  frmJoinUs: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: MainService
  ) {
    this.frmJoinUs = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      file: [ undefined, Validators.required],
    });
  }

  base64String:string='';
  onArchivoSeleccionado(event:any) {
    const archivoSeleccionado = event.target.files[0];
    if (archivoSeleccionado && archivoSeleccionado.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64String = (reader.result as string).split(',')[1];
        // Aquí puedes hacer lo que quieras con la base64String
        console.log(this.base64String);
      };
      reader.readAsDataURL(archivoSeleccionado);
    } else {
      // Archivo no es un PDF, puedes mostrar un mensaje de error
      alert('Por favor seleccione un archivo PDF.');
    }
  }
  

  ngOnInit() {}

  sending: boolean = false;

  save() {
    if (!this.frmJoinUs.valid) return;
    this.sending = true;

    let email = this.frmJoinUs.get('correo')?.value;
  
      this.service.uploadFile(this.base64String, email).subscribe({
        next:(response)=>{
          this.router.navigate(['/success']);
        },
        error:(error)=>{
          alert("Hubo un problema al intentar guardar la información.")
        }
      });
     
    
  }
}
