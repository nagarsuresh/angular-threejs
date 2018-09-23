import { Component } from '@angular/core';
import {
  BoxBufferGeometry, BoxGeometry, GridHelper, Mesh,
  MeshLambertMaterial, MeshStandardMaterial, PlaneGeometry, MeshBasicMaterial, SphereGeometry
} from 'three';
import { Base3jsComponent, CameraType } from '../../common/base-3js-component';
import { DragControls } from '../../common/drag-controls/index';

@Component({
  selector: 'app-orthographic',
  templateUrl: './orthographic.component.html',
  styleUrls: ['./orthographic.component.css']
})
export class OrthographicComponent extends Base3jsComponent {

  cameraType = CameraType.Orthographic;
  backgroundColor = 0xfafafa;


  boxes: Mesh[] = [];
  constructor() {
    super();
  }

  protected initialize() {
    this.createPlane();
    // const gridHelper = new GridHelper(100, 10);
    // this.scene.add(gridHelper);

    this.addTopLight();

    this.topLight.intensity = 50;


    this.boxes = this.addBoxes();
    this.boxes.forEach(b => {
      this.scene.add(b);
    });
    // blocks.push(this.addBoxes());
    const dragControls = new DragControls(this.boxes, this.camera, this.renderer.domElement);

  }


  private createPlane() {
    const geometry = new PlaneGeometry(500, 1000, 50, 50);
    const material = new MeshBasicMaterial({ color: 0xFFB38F, wireframe: true });
    const plane = new Mesh(geometry, material);
    plane.rotateX(Math.PI / 2);
    // plane.position.y = -10;
    // plane.position.z = 0;

    // this.scene.add(plane);

    // this.camera.lookAt(plane.position);
  }



  private addBoxes(): Mesh[] {
    const boxes = [];
    for (let i = 0; i < 1; i++) {
      const box = this.getBox();
      // box.position.x = this.getNumberInBetween(-75, 75);
      box.position.x = 0;
      box.position.y = 0;
      // box.position.z = this.getNumberInBetween(0, 50);
      box.position.z = 0;
      box.rotateX(Math.PI / 4);
      boxes.push(box);
    }
    return boxes;
  }

  private getBox(): Mesh {
    // const g = new BoxGeometry(5, 5, 5);
    const g = new SphereGeometry(4, 50, 50);
    // const m = new MeshStandardMaterial({ color: Math.random() * 0xFF0000 });
    const m = new MeshStandardMaterial({ color: 0xff0000 });
    const b = new Mesh(g, m);
    return b;
  }

  doAnimate() {
    super.doAnimate();
  }


  rotateLeft() {
    // this.camera.position.x -= 20;
    this.camera.position.x += Math.cos(0.5) * -75;
    this.camera.position.z += Math.sin(0.5) * 75;
    this.camera.lookAt(this.scene.position);

  }

  rotateRight() {
    this.camera.position.x += Math.cos(0.5) * 75;
    this.camera.position.z += Math.sin(0.5) * 75;
    this.camera.lookAt(this.scene.position);
  }

  zoomIn() {
    this.camera.position.z -= 5;
    // this.camera.position.y -= 5;
    this.camera.lookAt(this.scene.position);
  }

  zoomOut() {
    this.camera.position.z += 5;
    this.camera.position.y += 5;
    this.camera.lookAt(this.scene.position);

  }

  addBlock() {
    const b = this.getBox();
    b.position.x = -65;
    b.position.y = 10;
    this.scene.add(b);
    this.boxes.push(b);
    const dragControls = new DragControls(this.boxes, this.camera, this.renderer.domElement);

  }

  restore() {
    // this.camera.position.set(20, 30, 60);
    this.camera.lookAt(this.boxes[0].position);
  }

}
