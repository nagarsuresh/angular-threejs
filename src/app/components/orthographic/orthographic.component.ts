import { Component, OnInit } from '@angular/core';
import { Base3jsComponent, CameraType } from '../../common/base-3js-component';
import { Geometry, BoxGeometry, MeshStandardMaterial, Mesh, GridHelper, BoxBufferGeometry, MeshLambertMaterial, Vector3 } from 'three';

@Component({
  selector: 'app-orthographic',
  templateUrl: './orthographic.component.html',
  styleUrls: ['./orthographic.component.css']
})
export class OrthographicComponent extends Base3jsComponent {

  cameraType = CameraType.Orthographic;
  backgroundColor = 0xfafafa;

  box: Mesh;

  constructor() {
    super();
  }

  protected initialize() {
    const gridHelper = new GridHelper(120, 30);
    this.scene.add(gridHelper);
    this.addTopLight();
    this.box = this.getBox();
    // this.addBoxes();
  }


  private addBoxes() {
    const geometry = new BoxBufferGeometry(10, 10, 10);
    const material = new MeshLambertMaterial({ color: 0xffffff, overdraw: 0.5 });
    for (let i = 0; i < 100; i++) {
      const cube = new Mesh(geometry, material);
      cube.scale.y = Math.floor(Math.random() * 2 + 1);
      cube.position.x = Math.floor((Math.random() * 1000 - 500) / 50) * 50 + 25;
      cube.position.y = (cube.scale.y * 50) / 2;
      cube.position.z = Math.floor((Math.random() * 1000 - 500) / 50) * 50 + 25;
      this.scene.add(cube);
    }
  }

  private getBox() {
    const g = new BoxGeometry(5, 5, 5);
    const m = new MeshStandardMaterial({ color: 0xFF0000 });
    const box = new Mesh(g, m);
    this.scene.add(box);
    return box;
  }

  doAnimate() {
    super.doAnimate();
    if (Math.random() * 100 < 10) {
      let x = 1;
      let y = 0;
      if (this.box.position.x >= 75) {
        x = 0;
        y = 1;
      } else if (this.box.position.y <= -50) {
        x = -1;
        y = 0;
      } else if (this.box.position.x <= -75) {
        x = 0;
        y = 1;
      } else if (this.box.position.y >= 50) {
        x = 1;
        y = 0;
      }
      this.box.position.x += x;
      this.box.position.y += y;
      console.log(this.box.position.x, this.box.position.y);
    }
  }

}
