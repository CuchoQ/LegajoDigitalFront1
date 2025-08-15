import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadosActivosComponent } from './empleados/empleados-activos/empleados-activos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosActivosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
