import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as T from 'three';
import { Base3jsComponent } from '../../common/base-3js-component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends Base3jsComponent {

  ADD = 0.01;
  cube = null;

  constructor() {
    super();
  }

  protected initialize() {
    this.cube = this.getCube();
    this.scene.add(this.cube);
  }

  private getCube() {
    const geometry = new T.BoxGeometry(4, 2, 2);
    const material = new T.MeshBasicMaterial({ color: 0xde400f, wireframe: true });
    const cube = new T.Mesh(geometry, material);
    return cube;
  }


  doAnimate() {
    this.cube.rotation.y += this.ADD;
  }

}
