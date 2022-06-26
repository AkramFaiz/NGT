import { Component, Input, OnInit } from '@angular/core';
import { NgtLoader } from '@angular-three/core';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss']
})
export class ShoeComponent implements OnInit {

  @Input() widthPx: string = "300px";
  
  item = this.ngtGLTF.use(GLTFLoader,'/assets/gltfs/scene.gltf');

  constructor(private ngtGLTF: NgtLoader) { }

  ngOnInit(): void {
  }

}
