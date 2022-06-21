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
import { NgtMeshModule } from "@angular-three/core/meshes";
import { NgtMeshStandardMaterialModule } from "@angular-three/core/materials";
import { NgtBoxGeometryModule } from "@angular-three/core/geometries";
import { CubeComponent } from './cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoeComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtCanvasModule,
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
