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
