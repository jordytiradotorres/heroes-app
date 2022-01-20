import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div className="card mb-3" style={{ maxWidth: 300 }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={`./assets/heroes/${id}.jpg`}
              className="img-fluid rounded-start"
              alt={superhero}
              style={{ height: 300, objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
