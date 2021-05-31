import { Suspense, useMemo, useRef, useState } from "react"
import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber"
import styles from '../../styles/Canvas.module.css'
import stylesAsset from '../../styles/Asset.module.css'
import { OrbitControls, Stars, Html, Shadow } from '@react-three/drei'
import Scene from './Scene'

let mouseY = 0
let mouseX = 0

function animateTerrain(event){
    mouseY = event.clientY
    mouseX = event.clientX
}


function Points(props) {


    const { size } = useThree()
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(({ mouse }) => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.0004
        mesh.current.position.z =  -(mouse.x * 0.2)
        mesh.current.rotation.y +=  -(mouse.y * 0.003) 
        mesh.current.rotation.z =  (mouse.x * 0.005) + mesh.current.rotation.y
      })
    return (
        <points {...props} ref={mesh} 
            // onClick={(e) => setActive(!active)}
            // onPointerOver={(e) => setHover(!hovered)}
            // onPointerOut={(e) => setHover(false)}
            position={[0.4,0,0]}
            
        >
            <sphereGeometry attach='geometry' args={[1, 32, 50]} />
            <pointsMaterial size={0.005}
                attach='material'
                color={'#105080'}
                opacity={0.4}
                // color= { hovered ? 'yellow' : '#108020'}
                blending= {THREE.AdditiveBlending}   

            />
        </points>
    )
}

function AnimationCanvas() {
    return (
        <Canvas
            resize
            camera={{position: [0, 0, 2.4], fov: 70, near: 0.0001, far: 500}}
        >
            {/* <OrbitControls/> */}
            <Points />
        </Canvas>
    )
}







function AnimatedAsset() {
    return (
        <Canvas
            colorManagement
            camera={{ position: [0, -100, 650] }}
            gl={{ powerPreference: "high-performance", alpha: true, antialias: false, depth: true }}
            // camera={{position: [0, 0, 700], fov: 75, near: 0.00001, far: 10000}}
        >
            <OrbitControls 
                panSpeed={0.8}
                rotateSpeed={0.7}
                enableZoom={false}
                minPolarAngle={Math.PI / 2.5}
                maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={1}/>
            <directionalLight intensity={1} />
            <Suspense fallback={
            <Html center style={{ fontSize:'0.8rem', color: '#5A88FD'}}>
                <p>Loading...</p>
            </Html>
            }>
            <Shadow
                color="black"
                colorStop={0}
                opacity={0.5}
                fog={false} // Reacts to fog (default=false)
                />
            <Scene/>
            </Suspense>
        </Canvas>
    )
}


export const CanvasObject = (params) => {

    return( 
        <div className={styles.canvas_container}>
            <div className={styles.scene}>
                    <AnimationCanvas/>
            </div>
        </div>
    )
}
export const AssetNinja = (params) => {
    return( 
        <div className={stylesAsset.canvas_container}>
            <div className={stylesAsset.scene}>
                    <AnimatedAsset/>
            </div>
        </div>
    )
}
