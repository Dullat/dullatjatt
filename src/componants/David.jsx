import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import { useFrame } from "@react-three/fiber"

const David = (props) => {
  const { nodes, materials } = useGLTF('/dullatjatt/david.glb')
  const redMaterial = new MeshStandardMaterial({ color: 'white', wireframe: false })
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * 0.1
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={redMaterial}
        rotation={[3.129, -0.9, -0.011]}
        scale={0.003}
      />
    </group>
  )
}

export default David

useGLTF.preload('/dullatjatt/david.glb')