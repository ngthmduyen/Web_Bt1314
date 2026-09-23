import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingPropertyComponent } from './binding-property-component/binding-property-component';
import { BindingClassComponent } from './binding-class-component/binding-class-component';
import { BindingStyleComponent } from './binding-style-component/binding-style-component';
import { BindingEventComponent } from './binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { Catalog } from './catalog/catalog';
import { ServiceProductHttp } from './service-product-http/service-product-http';
import { GroupCustomer } from './group-customer/group-customer';
const routes: Routes = [
  {path:"binding-property", component:BindingPropertyComponent},
  {path:"binding-class", component:BindingClassComponent},
  {path:"binding-style", component:BindingStyleComponent},
  {path:"binding-event", component:BindingEventComponent},
  {path:"binding-twoway", component:BindingTwoWayComponent},
  {path:"danh-sach-san-pham", component:ProductListComponent},
  {path:"product-dropdown-list", component:ProductDropdownListComponent},
  {path:"product-list-call-service", component:ProductListCallServiceComponent},
  {path:"product-list-call-http-service", component:ProductListCallHttpServiceComponent},
  {path:'service-product-image-event', component:ServiceProductImageEvent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventDetail},
  {path:"catalog", component:Catalog},
  {path:"service-product-http", component:ServiceProductHttp},
  {path:"group-customer", component:GroupCustomer}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
