import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderCrudComponent } from './views/provider-crud/provider-crud.component';
import { HomeComponent } from './views/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { LaborCrudComponent } from './views/labor-crud/labor-crud.component';
import { LaborCreateComponent } from './components/labor/labor-create/labor-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SystemCloseComponent } from './components/template/header/system-close/system-close.component';
import { OsCreateComponent } from './components/os/os-create/os-create.component';
import { OsCrudComponent } from './views/os-crud/os-crud.component';
import { LoginComponent } from './views/login/login.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from "@angular/common/http";
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { LaborReadComponent } from './components/labor/labor-read/labor-read.component';
import { LaborUpdateComponent } from './components/labor/labor-update/labor-update.component';
import { LaborDeleteComponent } from './components/labor/labor-delete/labor-delete.component';
import { OsReadComponent } from './components/os/os-read/os-read.component';
import { OsUpdateComponent } from './components/os/os-update/os-update.component';
import { OsDeleteComponent } from './components/os/os-delete/os-delete.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProviderReadComponent } from './components/provider/provider-read/provider-read.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';
import { ProviderDeleteComponent } from './components/provider/provider-delete/provider-delete.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { OsReadClientComponent } from './components/os/os-create/os-read-client/os-read-client.component';
import { OsReadLaborComponent } from './components/os/os-create/os-read-labor/os-read-labor.component';
import { OsReadProductComponent } from './components/os/os-create/os-read-product/os-read-product.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ClientCreateComponent,
    ClientCrudComponent,
    ClientReadComponent,
    ProviderCreateComponent,
    ProviderCrudComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    LaborCrudComponent,
    LaborCreateComponent,
    SystemCloseComponent,
    OsCreateComponent,
    OsCrudComponent,
    LoginComponent,
    UserCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    LaborReadComponent,
    LaborUpdateComponent,
    LaborDeleteComponent,
    OsReadComponent,
    OsUpdateComponent,
    OsDeleteComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProviderReadComponent,
    ProviderUpdateComponent,
    ProviderDeleteComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserCrudComponent,
    OsReadClientComponent,
    OsReadLaborComponent,
    OsReadProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
