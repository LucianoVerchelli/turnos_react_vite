import {useState, useEffect} from 'react'
import Error from "./Error"
const Formulario = ({pacientes ,setPacientes, paciente, setPaciente}) => {

        // estados del formulario 
const [nombre, setNombre] = useState("")
const [propietario, setPropietario] = useState("")
const [email, setEmail] = useState("")
const [fecha, setFecha] = useState("")
const [sintomas, setSintomas] = useState("")

const [error, setError] = useState(false)

// generador de id 
const generarId = ()=> {
  const random = Math.random().toString(30)
  const fecha = Date.now().toString(30)

  return fecha + random 
  
}

// use efect   cargando los pacientes al formulario al dar editar 
useEffect(()=>{
if(Object.keys(paciente).length >0){
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
setEmail(paciente.email)
setFecha(paciente.fecha)
setSintomas(paciente.sintomas)
}
else{
  
}
}, [paciente])



const  handleSubmit = (e) =>{
 e.preventDefault()

// validacion del formulario 
if([nombre, propietario, email, fecha, sintomas].includes("")) {
 
  setError(true)
  return;
}
   setError(false)

// objeto de paciente. 

const objetoPaciente = {
  nombre,
   propietario,
    email,
     fecha,
      sintomas,
     

}

if(paciente.id){
//editando el registro 
objetoPaciente.id = paciente.id
  const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
setPacientes(pacienteActualizados)
setPaciente({})
}else {
 //nuevo registro 
 objetoPaciente.id = generarId()
 setPacientes([...pacientes, objetoPaciente])

}





// reiniciar el form 
setNombre("")
setPropietario("")
setEmail("")
setFecha("")
setSintomas("")

}

  return (
    <div className='md:w-1/2  lg:w-2/5 '>
   <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
   <p className='text-lg mt-5 text-center mb-10'>
    añade pacientes y {" "}
    <span className='text-indigo-600 font-bold'>Administralos</span>
   </p>
<form className='bg-white shadow-md rounded-lg py-6 px-5 mx-5 ml-5  ' onSubmit={handleSubmit}>

 
  {error && <Error mensaje="todos los campos son obligatorios" /> }
  
  <div className='mb-5'>
    <label htmlFor="mascota"
     className='block text-gray-700 uppercase font-bold'> Nombre Mascota 
    </label>
    <input 

    id='mascota'
    type="text"
    placeholder='Nombre de la mascota'
    className='border-2 w-full p-2 mt-2 placeholder-indigo-200 border-indigo-400 rounded-md'
    value={nombre}
    onChange={ (e)=> setNombre(e.target.value )}

    />
  </div>

  <div className='mb-5'>
    <label htmlFor="propietario"
     className='block text-gray-700 uppercase font-bold'> Nombre Propietario 
    </label>
    <input 
    id='propietario'  
    type="text"
    placeholder='Nombre del propietario'
    className='border-2 w-full p-2 mt-2 placeholder-indigo-200  border-indigo-400 rounded-md'
    value={propietario}
    onChange={ (e)=> setPropietario(e.target.value )}
    />
  </div>

  <div className='mb-5'>
    <label htmlFor="email"
     className='block text-gray-700 uppercase font-bold'> Email
    </label>
    <input 
    id='email'
    type="email"
    placeholder='Email contacto'
    className='border-2 w-full p-2 mt-2 placeholder-indigo-200  border-indigo-400 rounded-md'
    value={email}
    onChange={ (e)=> setEmail(e.target.value )}
    />
  </div>

  <div className='mb-5'>
    <label htmlFor="alta"
     className='block text-gray-700 uppercase font-bold'> Alta
    </label>
    <input 
    id='alta'
    type="date"
    className='border-2 w-full p-2 mt-2 placeholder-indigo-200  border-indigo-400 rounded-md'
    value={fecha}
    onChange={ (e)=> setFecha(e.target.value )}
    />
  </div>

  <div className='mb-5'>
    <label htmlFor="sintomas    "
     className='block text-gray-700 uppercase font-bold'> Sintomas
    </label>
    <textarea  className='border-2 w-full p-2 mt-2 placeholder-indigo-200  border-indigo-400 rounded-md' id='sintomas' placeholder='Describe los sintomas ' 
     value={sintomas}
     onChange={ (e)=> setSintomas(e.target.value )} />

 
  </div>
<input type="submit" className='bg-indigo-600 w-full rounded-md p-2 text-white font-bold hover:bg-indigo-800 cursor-pointer transition-colors' value={paciente.id ?  "EDITAR PACIENTE" :"AGREGAR PACIENTE"}  />
</form>


    </div>
  )
}

export default Formulario
