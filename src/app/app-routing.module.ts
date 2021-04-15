import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { OsDeleteComponent } from './components/os/os-delete/os-delete.component';
import { OsUpdateComponent } from './components/os/os-update/os-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { LaborDeleteComponent } from './components/labor/labor-delete/labor-delete.component';
import { LaborUpdateComponent } from './components/labor/labor-update/labor-update.component';
import { ProviderDeleteComponent } from './components/provider/provider-delete/provider-delete.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
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
import { NgModule, Component } from '@angular/core';
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
    component: UserCrudComponent
  },
  {
    path: 'register/create',
    component: UserCreateComponent
  },
  {
    path: 'register/update/:id',
    component: UserUpdateComponent
  },
  {
    path: 'register/delete/:id',
    component: UserDeleteComponent
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
    path: 'client/update/:id',
    component: ClientUpdateComponent 
  },
  {
    path: 'client/delete/:id',
    component: ClientDeleteComponent
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
    path: 'provider/update/:id',
    component: ProviderUpdateComponent
  },
  {
    path: 'provider/delete/:id',
    component: ProviderDeleteComponent
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
    path: 'labor/update/:id',
    component: LaborUpdateComponent
  },
  {
    path: 'labor/delete/:id',
    component: LaborDeleteComponent
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
    path: 'product/update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'os',
    component: OsCrudComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/delete/:id',
    component: OsDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
