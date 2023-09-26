
function Pacientes({paciente, setPaciente, eliminarPaciente}) {




const {nombre, propietario, email, fecha, sintomas, id} = paciente 

const handleEliminar = () => {
    const respuesta = Swal.fire({
      title: '¿Estas seguro?',
      text: "Esto no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Listo!Ç',
          'El paciente a sido eliminado del registro.',
          'success',
          eliminarPaciente(id)
        )
      }
    })
  
      
  
}



  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700  uppercase">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">
         {email}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">
         {fecha}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas:{" "}
        <span className="font-normal normal-case">
         {sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-5">
        <button type="button" className="bg-indigo-600 p-2 rounded-md    text-white border-black font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-colors'" onClick={() => setPaciente(paciente)}>Editar</button>
        <button type="button" className="bg-red-400 rounded-md p-2 text-white border-black font-bold uppercase hover:bg-red-800 cursor-pointer transition-colors'" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
}

export default Pacientes;
