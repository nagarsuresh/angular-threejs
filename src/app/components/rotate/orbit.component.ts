import { Component } from '@angular/core';
import {
  Geometry, Matrix4, Mesh, MeshBasicMaterial, MeshStandardMaterial,
  Object3D, Points, PointsMaterial, SphereGeometry, TorusGeometry, Vector3, PointLight, AmbientLight, TextureLoader
} from 'three';
import { Base3jsComponent } from '../../common/base-3js-component';

@Component({
  selector: 'app-rotate',
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.css']
})
export class OrbitComponent extends Base3jsComponent {

  private orbit: Object3D;
  private planet: Object3D;
  showAxis = false;
  backgroundColor = 0x000000;

  constructor() {
    super();
  }

  protected initialize() {
    // this.addTopLight();
    this.addStars();
    this.createLight();
    this.createSun();
    this.createPlanet();
  }

  private createLight() {
    const sunLight = new PointLight(0xffffff, 20, 20, 2);
    this.scene.add(sunLight);
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
  }

  private addStars() {
    const geometry = new Geometry();
    const sprite = new TextureLoader().load('assets/disc.png' );
    const material = new PointsMaterial({ color: 0xffffff, size: 0.1, map: sprite, alphaTest: 1, transparent: true });
    // material.color.setHSL( 1.0, 0.3, 0.7 );
    for (let i = 0; i < 1000; i++) {
      const x = this.getNumberInBetween(-15, 15);
      const y = this.getNumberInBetween(-15, 15);
      const z = this.getNumberInBetween(-15, 15);
      geometry.vertices.push(new Vector3(x, y, z));
    }
    const stars = new Points(geometry, material);
    this.scene.add(stars);
  }

  createPlanet() {
    const orbit = this.getOrbit();
    this.planet = this.getPlanet();
    this.planet.position.y = 7;
    orbit.add(this.planet);
    orbit.rotateX(Math.PI / 1.8);
    // orbit.position.y = 1;
    this.scene.add(orbit);
    this.orbit = orbit;
  }

  private createSun() {
    const geometry = new SphereGeometry(1, 100, 100);
    const color = 0xEE4A08;
    const material = new MeshBasicMaterial({ color: color});
    // const material = new MeshBasicMaterial({ wireframe: true });
    const sun = new Mesh(geometry, material);
    this.scene.add(sun);
  }


  private getOrbit(): Mesh {
    const geometry = new TorusGeometry(7, 0.01, 2, 100, 2 * Math.PI);
    const color = 0xff0000;
    const material = new MeshBasicMaterial({ color: color, wireframe: true, transparent: true, opacity: 0 });
    const orbit = new Mesh(geometry, material);
    return orbit;
  }

  private getPlanet() {
    const geometry = new SphereGeometry(0.5, 50, 50);
    geometry.applyMatrix(new Matrix4().makeScale(1.0, 1.0, 1.5));
    const color = 0x0065AB;
    const material = new MeshStandardMaterial({
      color: color, emissive: color, emissiveIntensity: 0.5, metalness: 0.5,
      roughness: 0.8, wireframe: false
    });
    // const material = new MeshBasicMaterial({
    //   wireframe: true
    // });
    const donut = new Mesh(geometry, material);
    return donut;
  }

  doAnimate() {
    this.orbit.rotateZ(Math.PI / 360);
    this.planet.rotateZ(Math.PI / 120);
  }

  private getNumberInBetween(from: number, to: number): number {
    return from + (Math.random() * (to - from));
  }

}
