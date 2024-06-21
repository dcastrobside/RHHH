import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  frmContact: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) {

    this.frmContact = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      compania: [''],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sending: boolean = false;
  save() {
    this.sending = false;
    if (!this.frmContact.valid) {
      return;
    }
    let url = environment.contactLogicAppUrl;
    this.sending = true;
    this.http.post(url, this.frmContact.value).subscribe({
      next: (result) => {
        this.sending = false;
        this.router.navigate(['/success'])
      }, error: () => {
        this.sending = false;
        alert("Hubo un problema al registrar la información.")
      }
    })

  }

}
