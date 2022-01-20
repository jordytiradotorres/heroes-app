import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  // const hero = getHeroById(heroId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, alter_ego, characters, first_appearance } = hero;

  const handleReturn = () => {
    if (navigate.length < 2) {
      return navigate('/');
    }
    // } else {
    return navigate(-1);
    // }
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4">
          <img
            src={`../assets/heroes/${id}.jpg`}
            className="img-fluid img-thumbnail animate__animated animate__fadeInLeft"
            alt={superhero}
          />
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleReturn}
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
