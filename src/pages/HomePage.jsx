import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const HomePage = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    
    
    useEffect(() => {
      // Fetch data from JSONPlaceholder
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          setUsers(response.data); // Set the fetched data to state
          setLoading(false);
        })
        .catch((error) => {
          setError('Error fetching data');
          setLoading(false);
        });
    }, []);
    
    if (loading) return <p className='font-bold text-3xl text-center'>Loading...</p>;
    if (error) return <p>{error}</p>;
    
  return (
    <div>
     <h1 className='text-3xl font-bold underline text-center'>All Users</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 space-y-2 ' >
        {users.map((user)=>(
          <div key={user.id} className='text-center shadow-md'>
             <p className='font-bold  '>{user.name}</p>
         <Link to={`/user/${user.id}`}>
         <button
          type="submit"
          className="w-72 bg-blue-500 text-white py-2 mb-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
          View Details
        </button>  
         </Link>            
        </div>
          
        ))}
    </div>
    </div>
  )
}

export default HomePage