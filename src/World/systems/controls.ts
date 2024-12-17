import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

function createControls(camera: PerspectiveCamera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  return controls;
}

export default createControls;
