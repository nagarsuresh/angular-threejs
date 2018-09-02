import { Component, OnInit } from '@angular/core';
import { Base3jsComponent } from '../../common/base-3js-component';
import { Object3D, Mesh, SphereGeometry, MeshBasicMaterial, TorusGeometry, MeshNormalMaterial, PlaneGeometry } from 'three';

@Component({
  selector: 'app-donuts-rain',
  templateUrl: './donuts-rain.component.html',
  styleUrls: ['./donuts-rain.component.css']
})
export class DonutsRainComponent extends Base3jsComponent {

  showAxis = false;

  donuts: {
    donut: Object3D,
    xRotate: number
    yRotate: number
  }[] = [];
  constructor() {
    super();
  }

  protected initialize() {
    this.createPlane();
    this.createNewDonut();
  }

  private createPlane() {
    const geometry = new PlaneGeometry(1000, 1000, 50, 50);
    const material = new MeshBasicMaterial({ color: 0xFFB38F, wireframe: true });
    const plane = new Mesh(geometry, material);
    plane.rotateX(Math.PI / 2);
    plane.position.y = -100;

    this.scene.add(plane);
  }

  private createNewDonut() {
    const donut = this.getDonut();
    donut.position.y = 15;
    donut.position.x = this.getNumberInBetween(-8, 8);
    donut.position.z = this.getNumberInBetween(-8, 8);
    const negative = Math.random() < 0.5 ? 1 : -1;
    this.donuts.push({
      donut,
      xRotate: negative * this.getNumberInBetween(0.01, 0.05),
      yRotate: negative * this.getNumberInBetween(0.01, 0.05),
    });
    this.scene.add(donut);
  }

  private getDonut(): Mesh {
    const geometry = new TorusGeometry(1, 0.3, 16, 100);
    const color = Math.random() * 0xffffff;
    const material = new MeshBasicMaterial({ color: color, transparent: true, opacity: 0.8});
    const donut = new Mesh(geometry, material);
    return donut;

  }
  doAnimate() {
    if (Math.random() < 0.1) {
      this.createNewDonut();
    }
    this.donuts.forEach(d => {
      d.donut.rotateX(d.xRotate);
      d.donut.rotateY(d.yRotate);
      d.donut.position.y -= 0.1;
    });
  }

  private getNumberInBetween(from: number, to: number): number {
    return from + (Math.random() * (to - from));
  }
}
