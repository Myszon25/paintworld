let scene;
let camera;
let renderer;


scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);


camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,5,10);


renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.getElementById("game")
.appendChild(renderer.domElement);


// ziemia

let ground = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100),
    new THREE.MeshBasicMaterial({
        color:0x55aa55
    })
);

ground.rotation.x = -Math.PI/2;

scene.add(ground);


// światło

let light = new THREE.DirectionalLight(
    0xffffff,
    1
);

light.position.set(10,10,10);

scene.add(light);


// tworzenie obiektów

function createObject(){

let text = document.getElementById("command").value.toLowerCase();


if(text.includes("drzewo")){

    let trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(
            0.3,
            0.5,
            3
        ),
        new THREE.MeshBasicMaterial({
            color:0x8b4513
        })
    );


    trunk.position.y=1.5;


    let leaves = new THREE.Mesh(
        new THREE.SphereGeometry(1.5),
        new THREE.MeshBasicMaterial({
            color:0x228b22
        })
    );


    leaves.position.y=3.5;


    scene.add(trunk);
    scene.add(leaves);

}


if(text.includes("dom")){


let house = new THREE.Mesh(
    new THREE.BoxGeometry(3,2,3),
    new THREE.MeshBasicMaterial({
        color:0xffffff
    })
);


house.position.y=1;

scene.add(house);


}


}


// render

function animate(){

requestAnimationFrame(animate);

renderer.render(
scene,
camera
);

}


animate();
