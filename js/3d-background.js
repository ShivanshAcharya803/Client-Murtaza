


let scene, camera, renderer, particles, particleGeometry, particleMaterial;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init3DBackground() {
    const canvas = document.getElementById('bg-canvas');
    
    if (!canvas) return;

    
    scene = new THREE.Scene();
    
    
    camera = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
    );
    camera.position.z = 50;

    
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    
    createParticles();

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    
    animate();
}

function createParticles() {
    const particleCount = 150;
    particleGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    
    
    const teaGreen = new THREE.Color(0xD0F0C0);
    const sageGreen = new THREE.Color(0x9DC183);

    for (let i = 0; i < particleCount; i++) {
        
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        
        positions.push(x, y, z);

        
        const color = Math.random() > 0.5 ? teaGreen : sageGreen;
        colors.push(color.r, color.g, color.b);
    }

    particleGeometry.setAttribute(
        'position', 
        new THREE.Float32BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
        'color', 
        new THREE.Float32BufferAttribute(colors, 3)
    );

    
    particleMaterial = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    
    createConnections();
}

function createConnections() {
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x9DC183,
        transparent: true,
        opacity: 0.15
    });

    const positions = particleGeometry.getAttribute('position').array;
    const linePositions = [];

    
    for (let i = 0; i < positions.length; i += 9) {
        const x1 = positions[i];
        const y1 = positions[i + 1];
        const z1 = positions[i + 2];

        const x2 = positions[i + 3] || positions[0];
        const y2 = positions[i + 4] || positions[1];
        const z2 = positions[i + 5] || positions[2];

        linePositions.push(x1, y1, z1, x2, y2, z2);
    }

    lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / 100;
    mouseY = (event.clientY - windowHalfY) / 100;
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    
    if (particles) {
        particles.rotation.x += 0.0005 + mouseY * 0.0001;
        particles.rotation.y += 0.0005 + mouseX * 0.0001;
    }

    
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init3DBackground);
} else {
    init3DBackground();
}
