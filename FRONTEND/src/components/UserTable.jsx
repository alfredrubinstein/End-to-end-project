// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from './Pagination';

// const UserTable = () => {
//   // ... (estados search, sortKey, sortOrder, isActive, currentPage)

//   const [usersFetched, setUsersFetched] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       setIsLoading(true);

//       try {
//         const response = await axios.get('/users'); // 🎯 URL de tu API
//         setUsersFetched(response.data); // Axios simplifica el acceso a los datos
//       } catch (err) {
//         setError(err.message); 
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // ... (funciones handleSort, filterData, sortData)

//   // ... (lógica de paginación)

//   return (
//     <div className="p-4">
//       {/* ... (input de búsqueda y select de filtro) */}

//       {isLoading ? (
//         <div className="text-center mt-4">🤔 Cargando usuarios...</div>
//       ) : error ? (
//         <div className="text-center mt-4 text-red-500">🚨 {error}</div>
//       ) : (
//         <table className="min-w-full">
//           {/* ... (encabezado de la tabla) */}
//           <tbody>
//             {currentUsers.map((user) => (
//               <tr key={user.id} className="text-center">
//                 {/* ✏️ Asegúrate de que las propiedades de los usuarios coinciden con tu API */}
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.id}</td>
//                 <td className="py-2 px-4 border">{user.phone}</td>
//                 <td className="py-2 px-4 border">{user.age}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className={`py-2 px-4 border ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>{user.status ? '✅' : '❌'}</td>
//                 <td className="py-2 px-4 border">${user.money}</td>
//                 <td className="py-2 px-4 border">{user.isActive ? 'Sí' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* ... (componente de paginación) */}
//     </div>
//   );
// };

// export default UserTable;








//🎯🎯🎯🎯🎯🎯🎯🎯🎯SEGUNDA OPCION🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯
// import React, { useState, useEffect } from 'react';
// import Pagination from './Pagination'; // 🧭 Asegúrate de tener un componente de paginación

// const UserTable = () => {
//   // ... (estados search, sortKey, sortOrder, isActive, currentPage)

//   const [usersFetched, setUsersFetched] = useState([]); // 🔄 Almacenaremos los usuarios obtenidos
//   const [isLoading, setIsLoading] = useState(true);      // ⏳ Indicador de carga
//   const [error, setError] = useState(null);             // ⚠️ Manejo de errores

//   useEffect(() => { 
//     const getUsers = async () => { // 🌐 Aquí haremos la solicitud a la API
//       setIsLoading(true);

//       try {
//         const response = await fetch('https://tu-api-de-usuarios.com/users'); // 🎯 URL de tu API
//         if (!response.ok) { // 🛑 Manejo de errores de respuesta
//           throw new Error('Error fetching users: ' + response.statusText);
//         }
//         const data = await response.json();
//         setUsersFetched(data);
//       } catch (err) {
//         setError(err.message); // 📣 Guardamos el mensaje de error
//       } finally {
//         setIsLoading(false); // ⏳ La carga ha finalizado
//       }
//     };

//     getUsers(); // Ejecutamos la función para obtener los usuarios
//   }, []); // 딱 Una sola vez al montar el componente

//   // ... (funciones handleSort, filterData, sortData) 

//   // 🧮 Lógica de paginación (similar a la original)

//   return (
//     <div className="p-4">
//       {/* ... (input de búsqueda y select de filtro) */}

//       {isLoading ? ( 
//         <div className="text-center mt-4">🤔 Cargando usuarios...</div> 
//       ) : error ? (
//         <div className="text-center mt-4 text-red-500">🚨 {error}</div> 
//       ) : ( 
//         <table className="min-w-full">
//           {/* ... (encabezado de la tabla) */}
//           <tbody>
//             {/* 👥 Aquí usaremos usersFetched en lugar de users */}
//             {currentUsers.map((user) => ( 
//               <tr key={user.id} className="text-center">
//                 {/* ✏️ Asegúrate de que las propiedades de los usuarios coinciden con tu API */}
//                 <td className="py-2 px-4 border">{user.name}</td> 
//                 <td className="py-2 px-4 border">{user.id}</td> 
//                 <td className="py-2 px-4 border">{user.phone}</td>
//                 <td className="py-2 px-4 border">{user.age}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className={`py-2 px-4 border ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>{user.status ? '✅' : '❌'}</td>
//                 <td className="py-2 px-4 border">${user.money}</td>
//                 <td className="py-2 px-4 border">{user.isActive ? 'Sí' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* ... (componente de paginación) */}
//     </div>
//   );
// };

// export default UserTable;
















//🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌OPCION ORIGINAL🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌
import React,{ useState,useEffect } from 'react';
import { fetchUsers,users, sortData, filterData } from './data';
import Pagination from './Pagination';


const UserTable = () => {
  const [usersFetched, setusersFetched] = useState([]);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isActive, setIsActive] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;



useEffect(() => {
  const getUsers = async () => {
    const data = await fetchUsers();
    setusersFetched(data);
  }
},[]);


  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';//esta linea es para que al dar click en el mismo header cambie de ascendente a descendente
    setSortKey(key);
    setSortOrder(order);
  };

  const filteredUsers = filterData(users, search, isActive);
  const sortedUsers = sortData(filteredUsers, sortKey, sortOrder);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);//calcula el total de paginas
  const startIndex = (currentPage - 1) * itemsPerPage;//calcula el inicio de la pagina
  
  //revisar! ,cambiar la forma en que se rellena currentUsers para que se llene con los datos de la api
  const currentUsers = sortedUsers.slice(startIndex, startIndex + itemsPerPage);//muestra los usuarios de la pagina actual

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2" value={isActive} onChange={(e) => setIsActive(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('name')}>Name</th>
            <th className="py-2 px-4 border text-gray-600">ID</th>
            <th className="py-2 px-4 border text-gray-600">Phone</th>
            <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('age')}>Age</th>
            <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('email')}>Email</th>
            <th className="py-2 px-4 border text-gray-600">Status</th>
            <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort('money')}>Money</th>
            <th className="py-2 px-4 border text-gray-600">Active</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.id}</td>
              <td className="py-2 px-4 border">{user.phone}</td>
              <td className="py-2 px-4 border">{user.age}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className={`py-2 px-4 border ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>{user.status}</td>
              <td className="py-2 px-4 border">${user.money}</td>
              <td className="py-2 px-4 border">{user.isActive ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

    </div>
  );
};

export default UserTable;
