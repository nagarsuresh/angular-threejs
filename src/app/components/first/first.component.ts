import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import * as T from 'three';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements AfterViewInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new T.WebGLRenderer();
  scene = null;
  camera = null;
  cube = null;
  width = 1200;
  height = 800;
  ADD = 0.01;

  constructor() {
    this.scene = new T.Scene();
    this.scene.background = new T.Color(0xababab);
    this.scene.add(this.getAxis());

    this.camera = new T.PerspectiveCamera(75, this.width / this.height, 1, 1000);
    this.camera.position.z = 5;

    this.cube = this.getCube();

    this.scene.add(this.cube);
  }

  private getAxis() {
    const axes = new T.AxesHelper(5);
    return axes;
  }

  private getCube() {
    const geometry = new T.BoxGeometry(2, 1, 1);
    const material = new T.MeshBasicMaterial({ color: 0xde400f, wireframe: true });
    const cube = new T.Mesh(geometry, material);
    return cube;
  }

  ngAfterViewInit() {
    this.width = this.rendererContainer.nativeElement.clientWidth;
    this.height = this.rendererContainer.nativeElement.clientHeight;
    this.renderer.setSize(this.width, this.height);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    this.cube.rotation.y += this.ADD;
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(() => this.animate());

  }

}
