import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "client",
    component: ClientCrudComponent
  },
  {
    path: "client/create",
    component: ClientCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
