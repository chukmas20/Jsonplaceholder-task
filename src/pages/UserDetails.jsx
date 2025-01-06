import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const UserDetails = () => {
    const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center font-bold text-2xl ">Loading user details...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return <p>User not found</p>;
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6 p-6">
    <h1 className="text-3xl font-bold underline text-center mb-6">User Details</h1>
    <div className="space-y-4">
      <p>
        <span className="font-semibold text-gray-600">Name:</span> {user.name}
      </p>
      <p>
        <span className="font-semibold text-gray-600">UserName:</span> {user.username}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Email:</span>{" "}
        <a
          href={`mailto:${user.email}`}
          className="text-blue-600 hover:underline"
        >
          {user.email}
        </a>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Street Address: </span>
         {user.address?.street}, {user.address?.suite}
      </p>
    
      <p>
        <span className="font-semibold text-gray-600">City:</span> {user.address?.city}
      </p>
      <p>
        <span className="font-semibold text-gray-600">ZipCode:</span> {user.address?.zipcode}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Latitude:</span> {user.address?.geo.lat}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Longitude:</span> {user.address?.geo.lng}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Website:</span>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {user.website}
        </a>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Company:</span> {user.company.name}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Catch Phrase:</span> {user.company.catchPhrase}
      </p>
      <p>
        <span className="font-semibold text-gray-600">Bs:</span> {user.company.bs}
      </p>
    </div>
  </div>
  )
}

export default UserDetails