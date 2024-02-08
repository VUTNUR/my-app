import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { TableComponent } from './table/table.component';
import { PricePipe } from './price.pipe';
import { RatingPipe } from './rating.pipe';
import { CarsComponent } from './cars/cars.component';
import { EventsComponent } from './events/events.component';
import { EmployeTableComponent } from './employe-table/employe-table.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { BoredPlayComponent } from './bored-play/bored-play.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { SellerAppComponent } from './seller-app/seller-app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    DirectivesComponent,
    MarksComponent,
    TableComponent,
    PricePipe,
    RatingPipe,
    CarsComponent,
    EventsComponent,
    EmployeTableComponent,
    VehicleComponent,
    AccountComponent,
    FlipkartComponent,
    EmailComponent,
    BoredPlayComponent,
    GalleryComponent,
    StudentComponent,
    CreateVehicleComponent,
    CreateStudentComponent,
    CreateAccountComponent,
    CreateUserComponent,
    StudentFormComponent,
    SellerAppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
