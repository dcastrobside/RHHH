import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  frmContact: FormGroup ;

  constructor(private fb: FormBuilder) { 

    this.frmContact = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      cv: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
