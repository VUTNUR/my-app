import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { TableComponent } from './table/table.component';
import { CarsComponent } from './cars/cars.component';
import { EventsComponent } from './events/events.component';
import { EmployeTableComponent } from './employe-table/employe-table.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { BoredPlayComponent } from './bored-play/bored-play.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StudentComponent } from './student/student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'databinding', component:DatabindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'marks', component:MarksComponent},
    {path:'table', component:TableComponent},
    {path:'cars',component:CarsComponent},
    {path:'events',component:EventsComponent},
    {path:'employeTable',component:EmployeTableComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'email', component:EmailComponent},
    {path:'boredPlay', component:BoredPlayComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'student',component:StudentComponent},
    {path:'createVehicle',component:CreateVehicleComponent},
    {path:'createStudent', component:CreateStudentComponent},
    {path:'createAccount', component:CreateAccountComponent},
    {path:'createUser', component:CreateUserComponent}
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
