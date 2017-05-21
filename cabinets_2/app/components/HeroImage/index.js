/**
*
* HeroImage
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import imageShader from './imageShader';

const THREE = require('three');

const Wrapper = styled.div`
canvas, img {
  width: 35vw; height: 35vw;
  max-width: 395px; max-height: 395px;
  min-width: 295px; min-height: 295px;
  background: rgba(0,0,0,0);
  user-select: none;
  cursor: pointer;
}

#image-gallery-canvas {
  position: absolute;
}
`;

class HeroImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      canvas: null,
      scene: null,
      camera: null,
      renderer: null,
    };
  }

  componentDidMount() {
    this.runThreeJS();
  }

  runThreeJS() {
    // for dev only
    const canvas = document.querySelector('#image-gallery-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    window.scene = scene;
    window.THREE = THREE;

    scene.add(camera);

    const geometry = new THREE.PlaneBufferGeometry(1.0, 1.0);
    const material = new THREE.ShaderMaterial(imageShader);



    new THREE.TextureLoader().load(this.props.member_texture, (tex) => {
      material.uniforms.tex.value = tex;
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    camera.position.z = 5;
    scene.add(mesh);
    renderer.render(scene, camera);
    
    tick();

    function tick() {
      renderer.render(scene, camera);
      window.requestAnimationFrame(() => tick());
    }

    canvas.addEventListener('mousemove', (evt) => {
      const boundingRect = canvas.getBoundingClientRect();
      const x = (evt.clientX - boundingRect.left) / boundingRect.width;
      const y = (evt.clientY - boundingRect.top) / boundingRect.height;
      console.log(x, y);
      material.uniforms.uCursor.value = new THREE.Vector2(x, 1.0 - y);
    });

    canvas.addEventListener('mouseout', () => {
      material.uniforms.uCursor.value = new THREE.Vector2(10000, 10000);
    });

    canvas.addEventListener('click', () => {
      material.uniforms.uReverse.value = !material.uniforms.uReverse.value;
    });

    window.addEventListener('resize', () => {
      material.uniforms.uWindowSize.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
    })
  }

  tick() {
    console.log(this.state.renderer, this.state.scene, this.state.camera);
    // console.log('why is this this different', this);
    this.state.renderer.render(this.state.scene, this.state.camera);
    window.requestAnimationFrame(() => this.tick());
  }

  render() {
    return (
      <Wrapper>
        <canvas id="image-gallery-canvas"></canvas>
        <img src={this.props.cabinet_texture.src.replace(/\._SS40_/, '')} alt={this.props.cabinet_texture.alt} />
      </Wrapper>
    );
  }
}

HeroImage.propTypes = {
  cabinet_texture: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  member_texture: PropTypes.string.isRequired,
};

export default HeroImage;
