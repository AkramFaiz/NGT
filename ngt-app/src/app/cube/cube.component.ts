import { NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  @Input() position?: NgtVector3;

  // has internal state
  hovered = false;
  active = false;

  // registers the wrapped object in the animation loop that runs outside of Angular Zone
  onBeforeRender(cube: Mesh) {
    cube.rotation.x += 0.01;
  }

  ngOnInit(): void {
    
  }
}
