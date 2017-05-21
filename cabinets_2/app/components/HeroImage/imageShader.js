const THREE = require('three');

const vertShader = `
varying vec2 vUV;

void main() {
  vUV = uv;

  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position =  projectionMatrix * mvPosition;
}
`;

const fragShader = `
uniform sampler2D tex;
uniform float uTime;
uniform vec2 uCursor;
uniform vec2 uWindowSize;
uniform bool uReverse;

varying vec2 vUV;

void main() {
  vec4 outputColor = texture2D(tex, vUV);
  

  if (uReverse) {
    gl_FragColor = outputColor;
    if (vUV.x > uCursor.x - uWindowSize.x/15000.0 && vUV.x < uCursor.x + uWindowSize.x/15000.0) {
      if (vUV.y > uCursor.y - uWindowSize.y/15000.0 && vUV.y < uCursor.y + uWindowSize.y/15000.0) {
        discard;
      }
    }
  }
  else {
    if (vUV.x > uCursor.x - uWindowSize.x/15000.0 && vUV.x < uCursor.x + uWindowSize.x/15000.0) {
      if (vUV.y > uCursor.y - uWindowSize.y/15000.0 && vUV.y < uCursor.y + uWindowSize.y/15000.0) {
        gl_FragColor = outputColor;
      }
    }
  }

  

}
`;

const imageShader = {
  uniforms: {
    tex: { value: null },
    uReverse: { value: false },
    uTime: { value: 0 },
    uCursor: { value: new THREE.Vector2(10000, 10000) },
    uWindowSize: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  },
  vertexShader: vertShader,
  fragmentShader: fragShader,
};

export default imageShader;
