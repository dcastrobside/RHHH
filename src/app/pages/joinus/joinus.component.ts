import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.scss']
})
export class JoinusComponent implements OnInit {
  
  frmJoinUs: FormGroup ;

  constructor(private fb: FormBuilder) { 

    this.frmJoinUs = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      cv: ['', Validators.required]
    });
  }


  ngOnInit() {
   
  }

}
