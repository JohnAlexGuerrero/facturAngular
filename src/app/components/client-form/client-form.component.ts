import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from '../../sevices/customers.service';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {
  form!: FormGroup;

  // data para el campo tipo de documento
  identificationDocuments = [
    { id: '1', name: 'Registro Civil' },
    { id: '2', name: 'Tarjeta de Identidad' },
    { id: '3', name: 'Cédula de Ciudadanía' },
    { id: '4', name: 'Tarjeta de Extranjería' },
    { id: '5', name: 'Cedula de Extranjería' },
    { id: '6', name: 'Número de Identificación Tributaria (NIT)' },
    { id: '7', name: 'Pasaporte' }
  ];

  constructor(
    private fb: FormBuilder,
    private customersService: CustomersService
  ){}
  ngOnInit(): void {
    this.initForm();
  }

  // Método para inicializar el formulario
  initForm(){
    this.form = this.fb.group({
      identification: [''], // Identificación del cliente
      dv: [''], // Dígito de verificación (opcional)
      company: [''], // Razón social (opcional)
      trade_name: [''], // Nombre comercial (opcional)
      names: [''], // Nombre del cliente (opcional)
      address: [''], // Dirección
      phone: [''], // Teléfono
      email: [''], // Correo electrónico
      legal_organization_id: [''], // ID de organización legal
      tribute_id: [''], // ID de tributo
      identification_document_id: [''], // ID de documento de identificación
      municipality_id: [''] // ID del municipio
    });
  }

  // Método para enviar el formulario
  onSubmit(){
    this.customersService.addCustomer(this.form.value);
    this.form.reset();
  }
}
