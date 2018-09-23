import { Component } from '@angular/core';
import {
  Geometry, Matrix4, Mesh, MeshBasicMaterial, MeshStandardMaterial,
  Object3D, Points, PointsMaterial,
  SphereGeometry, TorusGeometry, Vector3, PointLight, AmbientLight, TextureLoader, SpotLight, MeshPhongMaterial
} from 'three';
import { Base3jsComponent } from '../../common/base-3js-component';


@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.css']
})
export class SolarSystemComponent extends Base3jsComponent {

  private orbit: Object3D;
  private planet: Object3D;
  showAxis = false;
  backgroundColor = 0x000000;
  sun: Mesh;


  planetsConfig: {
    size: number,
    distance: number,
    color: any,
    pivot?: Object3D,
    speed: number,
    planet?: Object3D,
    texture?: any,
    textureUrl?: string
  }[] = [];

  constructor() {
    super();
    this.planetsConfig.push(
      {
        size: 3,
        distance: 25,
        color: 0x318700,
        speed: 0.008,
        textureUrl: 'assets/mercury.jpg'
      },
      {
        size: 3.5,
        distance: 37,
        color: 0x0065AB,
        speed: 0.002,
        textureUrl: 'assets/venus.jpg'
      },
      {
        size: 5.5,
        distance: 50,
        color: 0x0065AB,
        speed: 0.007,
        textureUrl: 'assets/earth.jpg'
      },
      {
        size: 4,
        distance: 63,
        color: 0x0065AB,
        speed: 0.01,
        textureUrl: 'assets/mars.jpg'
      },
      {
        size: 6,
        distance: 77,
        color: 0x0065AB,
        speed: 0.008,
        textureUrl: 'assets/jupiter.jpg'
      },
      {
        size: 5,
        distance: 92,
        color: 0x0065AB,
        speed: 0.005,
        textureUrl: 'assets/saturn.jpg'
      },
      {
        size: 4,
        distance: 100,
        color: 0x0065AB,
        speed: 0.003,
        textureUrl: 'assets/uranus.jpg'
      },
      {
        size: 3,
        distance: 110,
        color: 0x0065AB,
        speed: 0.009,
        textureUrl: 'assets/neptune.jpg'
      }
    );
  }

  protected initialize() {
    this.camera.position.z = 140;
    this.loadTextures(() => {
      this.createStars();
      this.createSun();
      this.createPlanets();
      this.sun.rotateX(Math.PI / 1.7);
    });
  }


  loadTextures(callback) {
    const loader = new TextureLoader();
    this.loadSingleTexture(0, loader, callback);
  }

  loadSingleTexture(index, loader, callback) {
    if (index === this.planetsConfig.length) {
      callback.call(this);
      return;
    }
    loader.load(this.planetsConfig[index].textureUrl, (texture) => {
      this.planetsConfig[index].texture = texture;
      this.loadSingleTexture(index + 1, loader, callback);
      // const m = new MeshBasicMaterial({ map: texture });
      // const g = new SphereGeometry(13, 100, 100);
      // const s = new Mesh(g, m);
      // // this.sun = sun;
      // this.scene.add(s);
    });

  }


  private createSun() {
    const geometry = new SphereGeometry(13, 100, 100);
    const color = 0xEE4A08;
    const material = new MeshStandardMaterial({ color: color });
    const sun = new Mesh(geometry, material);
    this.sun = sun;
    this.scene.add(sun);

    // add light for the sun
    this.createLight();
  }


  createPlanets() {

    this.planetsConfig.forEach(config => {
      const pivot = new Object3D();
      this.sun.add(pivot);
      config.pivot = pivot;

      const planet = this.getPlanet(config);
      planet.position.y = config.distance;
      pivot.add(planet);
      config.planet = planet;
    });

  }

  private getPlanet(config) {
    const geometry = new SphereGeometry(config.size, 50, 50);
    geometry.applyMatrix(new Matrix4().makeScale(1.0, 1.6, 1));
    // const color = config.color;
    const color = Math.random() * 0xffffff;
    const material = new MeshPhongMaterial({
      map: config.texture
    });
    // const material = new MeshBasicMaterial({ map: config.texture });
    const planet = new Mesh(geometry, material);
    planet.rotateX(-Math.PI / 2);
    // planet.rotateZ(Math.PI / 12);
    return planet;
  }

  doAnimate() {
    // this.pivot.rotation.z += 0.01;
    this.planetsConfig.forEach(config => {
      if (config.pivot) {
        config.pivot.rotateZ(config.speed);
      }
      if (config.planet) {
        config.planet.rotateY(0.05);
      }
    });
  }


  private createLight() {
    const sunLight = new PointLight(0xffffff, 5, 200, 2);
    this.scene.add(sunLight);
    const light = new SpotLight(0xffffff, 10);
    light.penumbra = 1;
    light.angle = Math.PI / 4;
    light.position.set(0, 0, 25);
    light.target = this.sun;
    this.scene.add(light);

    const a = new AmbientLight(0x888888, 1);
    this.scene.add(a);
  }


  private createStars() {
    const geometry = new Geometry();
    const sprite = new TextureLoader().load('assets/disc.png');
    const material = new PointsMaterial({ color: 0xffffff, transparent: true });
    // material.color.setHSL( 1.0, 0.3, 0.7 );
    for (let i = 0; i < 2000; i++) {
      const x = this.getNumberInBetween(-300, 300);
      const y = this.getNumberInBetween(-300, 300);
      const z = this.getNumberInBetween(-200, -100);
      geometry.vertices.push(new Vector3(x, y, z));
    }
    const stars = new Points(geometry, material);
    this.scene.add(stars);
  }


}
