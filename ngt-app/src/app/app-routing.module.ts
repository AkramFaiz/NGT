import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesRoomComponent } from './clothes-room/clothes-room.component';
import { HomeComponent } from './home/home.component';
import { ShoeRoomComponent } from './shoe-room/shoe-room.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'shoe', component: ShoeRoomComponent },
  { path:'cloth', component: ClothesRoomComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
