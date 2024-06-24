import React, { useEffect, useState } from 'react';
import api from './../../../api';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const [college, setCollege] = useState(null);
    const { id } = useParams(); // Use 'id' to match the parameter in the route

    const collegebyid = async () => {
        try {
            const response = await api.get(`/colleges/searchid/${id}`);

            if (response.data.success) {
                setCollege(response.data.data);
            } else {
                console.log('Error fetching college details');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        collegebyid();
    }, [id]); // Include 'id' in the dependency array

    if (!college) {
        return <p>Loading college details...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{college.collegename}</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p><strong>Address:</strong> {college.address}</p>
                    <p><strong>City:</strong> {college.city}</p>
                    <p><strong>State:</strong> {college.state}</p>
                    <p><strong>Country:</strong> {college.country}</p>
                    <p><strong>Contact:</strong> {college.contact}</p>
                    <p><strong>Email:</strong> {college.email}</p>
                    <p><strong>Website:</strong> <a href={college.website} target="_blank" rel="noopener noreferrer">{college.website}</a></p>
                    <p><strong>Approved Authority:</strong> {college.approvedauthority}</p>
                </div>
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-2">Cutoffs</h2>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cutoff</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {college.cutoffs.map((cutoff, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">{cutoff.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{cutoff.cutoff}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {college.courses.map((course, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                                    <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                                    <p className="text-sm text-gray-600">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollegeDetails;
