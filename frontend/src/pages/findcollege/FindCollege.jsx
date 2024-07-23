import React, { useState, useEffect } from 'react';
import api from './../../api';
import './FindCollege.css'; // Assuming you will create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const FindCollege = () => {
    const navigate = useNavigate();
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredColleges, setFilteredColleges] = useState([]);

    const setCollegeid = (college) => {
        navigate(`/collegeInformation/${college._id}`);
    };
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    const fetchColleges = async () => {
        try {
            const response = await api.get('/colleges/namedummy');
            setColleges(response.data.data);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false);
        }
    };
   
    useEffect(() => {
        fetchColleges();
    }, []);

    useEffect(() => {
        setFilteredColleges(
            colleges.filter((college) =>
                college.collegename.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, colleges]);

    return (
        <div className="find-college-container min-h-full">
            <div className="oxford">
                <img src="/oxford.jpg" alt="college" loading="lazy" />
            </div>
            <h1 className="margin-top-20 text-white font-semibold z-50 text-3xl">
                Find College Details here
            </h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a college..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && filteredColleges.length > 0 && (
                    <div className="search-dropdown">
                        {filteredColleges.map((college) => (
                            <div
                                key={college._id}
                                className="dropdown-item"
                                onClick={() => setCollegeid(college)}
                            >
                                {college.collegename}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindCollege;