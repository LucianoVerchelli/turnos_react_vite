import Pacientes from "./Pacientes"
import {useEffect} from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  // para dar aviso que se registro un paciente nuevo 
  
useEffect(()=>{
  if(pacientes.length >0 ){

}
}, [pacientes])



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

    {pacientes && pacientes.length ? (
      <>
            <h2 className="font-black text-3xl text-center  ">Listado pacientes</h2>
            <p className="text-center  text-xl mt-5 mb-10">
              Administra tus {" "}
                <span className="text-indigo-700 font-bold ">Pacientes y citas</span>
            </p>
      
          {pacientes.map(paciente => (
                <Pacientes 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
       ))}
       </>
    ): (
      <>
      
  <h2 className="font-black text-3xl text-center ">No hay pacientes </h2>
            <p className="text-center  text-xl mt-5 mb-10">
             Comienza agregando pacientes {" "}
                <span className="text-red-400 font-bold ">y apareceran en esta secciòn</span>
            </p>


      </>
    )}





      </div>
  )
}

export default ListadoPacientes
