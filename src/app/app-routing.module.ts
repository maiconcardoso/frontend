import { LoginComponent } from './views/login/login.component';
import { OsCreateComponent } from './components/os/os-create/os-create.component';
import { OsCrudComponent } from './views/os-crud/os-crud.component';
import { LaborCreateComponent } from './components/labor/labor-create/labor-create.component';
import { LaborCrudComponent } from './views/labor-crud/labor-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderCrudComponent } from './views/provider-crud/provider-crud.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: UserCreateComponent
  },
  {
    path: "client",
    component: ClientCrudComponent
  },
  {
    path: "client/create",
    component: ClientCreateComponent
  },
  {
    path: 'provider',
    component: ProviderCrudComponent
  },
  {
    path: 'provider/create',
    component: ProviderCreateComponent
  },
  {
    path: 'product',
    component: ProductCrudComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'labor',
    component: LaborCrudComponent
  },
  {
    path: 'labor/create',
    component: LaborCreateComponent
  },
  {
    path: 'os',
    component: OsCrudComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
