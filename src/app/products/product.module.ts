import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { convertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  // declarations: [],
  imports: [
   
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate: [ProductDetailGuard], 
      component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    convertToSpacesPipe 
  ]
})
export class ProductModule { }
