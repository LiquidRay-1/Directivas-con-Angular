import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { FormsModule  } from "@angular/forms";
import { StyleComponent } from './components/style/style.component';
import { ClassComponent } from './components/class/class.component';
import { SwitchComponent } from './components/switch/switch.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'

const routes : Routes = [
  {path:'', component: HomeComponent, title:'home'},
  {path:'class', component: ClassComponent, title:"class"},
  {path:'switch', component: SwitchComponent, title:"switch"},
  {path:'template', component: TemplateComponent, title:"template"},
  {path:'style', component: StyleComponent, title:"style"},
  {path:'usuario/form', component: FormComponent, title:"form"},
  {path:'usuario/dashboard', component: DashboardComponent, title:"dashboard"},
  {path: '**', pathMatch: 'full', redirectTo:""}
]

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    StyleComponent,
    ClassComponent,
    SwitchComponent,
    HomeComponent,
    FormComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
