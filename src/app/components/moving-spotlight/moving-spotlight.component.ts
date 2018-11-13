import { Component } from '@angular/core';
import { BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial, Object3D, SpotLight, Vector3, GridHelper } from 'three';
import { Base3jsComponent } from '../../common/base-3js-component';

@Component({
  selector: 'app-moving-spotlight',
  templateUrl: './moving-spotlight.component.html',
  styleUrls: ['./moving-spotlight.component.css']
})
export class MovingSpotlightComponent extends Base3jsComponent {

  showAxis = false;
  backgroundColor = 0x000000;
  leftLight: MovingLight;
  rightLight: MovingLight;

  protected initialize() {
    this.camera.position.set(0, 10, 20);
    this.addPlane();
    this.addCubes();
    this.addSpotLights();
  }

  private addSpotLights() {
    this.leftLight = new MovingLight('left');
    this.rightLight = new MovingLight('right');

    this.scene.add(this.leftLight.getLight());
    this.scene.add(this.leftLight.getTarget());
    this.scene.add(this.rightLight.getLight());
    this.scene.add(this.rightLight.getTarget());

  }

  private addPlane() {
    const g = new BoxGeometry(2000, 1, 2000);
    const m = new MeshPhongMaterial({ color: 0xA3EDF6, shininess: 100, side: DoubleSide });
    const plane = new Mesh(g, m);
    plane.position.y = -1;
    this.scene.add(plane);
  }

  private addCubes() {
    for (let i = 0; i < 20; i++) {
      this.scene.add(this.getCube());
    }
  }

  private getCube() {
    const w = this.getNumberInBetween(-5, 5);
    const h = this.getNumberInBetween(-5, 5);
    const d = this.getNumberInBetween(-5, 5);
    const g = new BoxGeometry(w, h, d);
    const color = Math.random() * 0xffffff;
    const m = new MeshPhongMaterial({ color: color, shininess: 100, side: DoubleSide });
    const cube = new Mesh(g, m);
    const x = this.getNumberInBetween(-15, 15);
    const z = this.getNumberInBetween(-2, 2);
    cube.position.set(x, 0, z);
    return cube;
  }


  doAnimate() {
    this.leftLight.move();
    this.rightLight.move();
  }

}




class MovingLight {
  private light: SpotLight;
  private target: Object3D;
  private dt = 0.1;
  private positiveVelocity = new Vector3(1, 0, 0).multiplyScalar(this.dt);
  private negativeVelocity = new Vector3(-1, 0, 0).multiplyScalar(this.dt);

  private currentVelocity;

  constructor(private position: 'right' | 'left') {
    this.light = new SpotLight(0xffffff, 2);
    this.target = new Object3D();
    this.light.target = this.target;
    if (this.position === 'left') {
      this.light.position.set(15, 20, 10);
      this.target.position.set(10, 0, 0);
      this.currentVelocity = this.negativeVelocity;
    } else {
      this.light.position.set(-15, 20, 10);
      this.target.position.set(-10, 0, 0);
      this.currentVelocity = this.positiveVelocity;
    }
    this.light.angle = Math.PI / 15;
    this.light.penumbra = 0.05;
    this.light.decay = 2;
    this.light.distance = 200;
  }

  getLight() {
    return this.light;
  }
  getTarget() {
    return this.target;
  }

  public move() {
    this.target.position.add(this.currentVelocity);
    if (this.target.position.x >= 15) {
      this.currentVelocity = this.negativeVelocity;
    }
    if (this.target.position.x <= -15) {
      this.currentVelocity = this.positiveVelocity;
    }
  }

}
