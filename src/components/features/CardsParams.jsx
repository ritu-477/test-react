import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useLocation } from 'react-router-dom';
import { CARD_DATA } from '../../utils/helper';

const CardsParams = () => {
    return (
        <div className='bg-dark-blue'>
            <div className="container pb-5">
                <h1 className='text-white text-center'>Map Cards</h1>
                <div className="row g-4">
                    {Object.keys(CARD_DATA).map((key) => (
                        <div key={key} className="col-12 col-sm-6 col-md-4">
                            <Link
                                to={`/map-card/${key}`}
                                state={CARD_DATA[key]}
                                className="card-link text-decoration-none">
                                <div className="card h-100 bg-purple">
                                    <div className="card-body">
                                        <h5 className="card-title">{CARD_DATA[key].title}</h5>
                                        <p className="card-text">{CARD_DATA[key].description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Routes>
                    <Route path="/map-card/:id" element={<MapPage />} />
                </Routes>
            </div>
        </div>
    );
};

const MapPage = () => {
    const { id } = useParams();
    const location = useLocation();
    let data = location.state || CARD_DATA[id];

    if (!data) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-danger">No data available</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Go Back to Cards
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="text-primary">{data.title}</h2>
            <p>{data.description}</p>
            <Link to="/" className="btn btn-secondary mt-3">Back to All Cards</Link>
        </div>
    );
};

export default CardsParams;
