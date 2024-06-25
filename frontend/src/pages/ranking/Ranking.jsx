import React,{useState,useEffect} from 'react'
import api from '../../api'
const Ranking = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchcolleges = async () => {
        try {
            const response = await api.get('/colleges/byranking');
            setColleges(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
        fetchcolleges();
    }, []);

  return (
    <div>
        <h1>Ranking</h1>
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
            <div>
                {colleges.map((college) => (
                <div key={college._id}>
                    <h2>{college.collegename}</h2>
                    <p>Rank: {college.ranking}</p>
                </div>
                ))}
            </div>
            )}
        </div>
    </div>
  )
}

export default Ranking