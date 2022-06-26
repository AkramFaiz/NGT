import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoeComponent } from './shoe/shoe.component';

import { NgtCanvasModule} from '@angular-three/core';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule
} from "@angular-three/core/lights";
import { NgtPrimitiveModule} from "@angular-three/core/primitive";
import { NgtMeshModule } from "@angular-three/core/meshes";
import { NgtMeshStandardMaterialModule } from "@angular-three/core/materials";
import { NgtBoxGeometryModule } from "@angular-three/core/geometries";

import { CubeComponent } from './cube/cube.component';
import { ShoeRoomComponent } from './shoe-room/shoe-room.component';
import { ClothesRoomComponent } from './clothes-room/clothes-room.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    CubeComponent,
    ShoeRoomComponent,
    ClothesRoomComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCanvasModule,
    NgtPrimitiveModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtMeshStandardMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
