import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashBoardComponent } from '../dash-board/dash-board.component'; 

const routes: Routes = [
  // home page
  { path: '', component: DashBoardComponent },
  // user route, /users displays all the users name
  { path: 'users', component: ListComponent },
  // form route, /form display a from that accepts new user name
  { path: 'form', component: FormComponent },
  // "Catch all" unsupporting routes
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
