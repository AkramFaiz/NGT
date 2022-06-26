import { NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @Input() position?: NgtVector3;
  @Input() navType?: string;

  // has internal state
  hovered = false;
  active = false;

  constructor(private rout: Router){}

  // registers the wrapped object in the animation loop that runs outside of Angular Zone
  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.1;
  }

  ngOnInit(): void {
  }

  hovEvent(type: string): void {
    JSON.parse(type) ? this.hovered = true : this.hovered = false;
  }

  hClicked(type: any): void {
    this.active = !this.active;
    console.log('Clicked', type);
    this.rout.navigate([type]);
  }

}
