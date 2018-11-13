import { AfterViewInit, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AxesHelper, Camera, Color, DirectionalLight, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';


export enum CameraType {
  Perspective, Orthographic
}

export abstract class Base3jsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  protected renderer = new WebGLRenderer();
  protected scene: Scene = null;
  protected camera: Camera = null;
  protected width = 1200;
  protected height = 800;

  protected showAxis = true;

  protected requestId: number;

  protected backgroundColor = 0xababab;

  protected cameraType: CameraType = CameraType.Perspective;

  frustumSize = 1000;
  protected topLight: DirectionalLight;

  constructor() {
  }

  ngOnInit() {
    // set scene
    this.scene = new Scene();
    this.scene.background = new Color(this.backgroundColor);
    if (this.showAxis) {
      this.scene.add(this.getAxis());
    }

    // create camera
    if (this.cameraType === CameraType.Perspective) {
      this.camera = this.getPerspectiveCamera();
    } else {
      this.camera = this.getOrthographicCamera();
    }

    this.initialize();

  }

  protected addTopLight() {
    const light = new DirectionalLight(0xffffff);
    this.scene.add(light);
    this.topLight = light;
  }

  protected abstract initialize();

  protected getPerspectiveCamera() {
    const camera = new PerspectiveCamera(75, this.width / this.height, 1, 1000);
    this.adjustCamera(camera);
    return camera;
  }

  protected adjustCamera(camera) {
    camera.position.z = 10;
  }

  public getNumberInBetween(from: number, to: number): number {
    return from + (Math.random() * (to - from));
  }



  protected getOrthographicCamera() {
    console.log('width', this.width);
    console.log('height', this.height);

    const aspect = this.width / this.height;
    const frustumSize = 100;

    console.log('->', frustumSize * aspect / - 2);
    const cam = new OrthographicCamera(
      frustumSize * aspect / - 2, // -75
      frustumSize * aspect / 2, // 75
      frustumSize / 2, // 50
      frustumSize / - 2, // 50
      -500, 500);

    cam.position.y = 15;
    cam.position.x = 15;
    cam.position.z = 100;
    // cam.rotateX(-Math.PI / 6);

    cam.lookAt(0, 0, 0);

    // debugger;

    return cam;
  }

  protected getAxis() {
    const axes = new AxesHelper(400);
    return axes;
  }

  ngAfterViewInit() {
    if (!this.rendererContainer) {
      console.error('No viewchild found with #rendererContainer');
      return;
    }
    this.width = this.rendererContainer.nativeElement.clientWidth;
    this.height = this.rendererContainer.nativeElement.clientHeight;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    this.doAnimate();
    this.renderer.render(this.scene, this.camera);
    this.requestId = window.requestAnimationFrame(() => this.animate());
  }

  protected doAnimate() {
    // to be overridde by derived class
    const timer = Date.now() * 0.0001;
    // this.camera.position.x = Math.cos(timer) * 600;
    // this.camera.position.z = Math.sin(timer) * 600;
    // this.camera.lookAt(this.scene.position);
    // console.log(this.scene.position);
    // console.log(this.camera.position);
  }

  ngOnDestroy() {
    window.cancelAnimationFrame(this.requestId);
  }

}
