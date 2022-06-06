import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedFormsComponent } from './Pages/nested-forms/nested-forms.component';
import { ReactiveFormComponent } from './Pages/reactive-form/reactive-form.component';
import { TemplateDrivenFormsComponent } from './Pages/template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {path: '', component: TemplateDrivenFormsComponent},
  {path: 'template-driven', component: TemplateDrivenFormsComponent},
  {path: 'nested', component: NestedFormsComponent},
  {path: 'reactive', component: ReactiveFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
