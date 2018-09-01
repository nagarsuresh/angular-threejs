import { AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import * as T from 'three';

export abstract class Base3jsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  protected renderer = new T.WebGLRenderer();
  protected scene = null;
  protected camera = null;
  protected width = 1200;
  protected height = 800;

  protected showAxis = true;

  protected requestId: number;

  constructor() {
  }

  ngOnInit() {
    // set scene
    this.scene = new T.Scene();
    this.scene.background = new T.Color(0xababab);
    if (this.showAxis) {
      this.scene.add(this.getAxis());
    }

    // create camera
    this.camera = this.getCamera();

    this.initialize();

  }

  protected abstract initialize();

  protected getCamera() {
    const camera = new T.PerspectiveCamera(75, this.width / this.height, 1, 1000);
    this.adjustCamera(camera);
    return camera;
  }

  protected adjustCamera(camera) {
    camera.position.z = 10;
  }

  protected getAxis() {
    const axes = new T.AxesHelper(10);
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
  }

  ngOnDestroy() {
    window.cancelAnimationFrame(this.requestId);
  }

}
