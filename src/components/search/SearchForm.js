import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchForm = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [{ heroe }, handleInputChange] = useForm({
    // heroe: '',
    heroe: q,
  });

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();

    navigation(`?q=${heroe}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Encuentra tu heroe"
              className="form-control"
              name="heroe"
              value={heroe}
              onChange={handleInputChange}
            />

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-primary mt-2">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}

          {q === '' && <p className="alert alert-info">Busca tu heroe</p>}

          {q !== '' && heroesFiltered.length === 0 && (
            <p className="alert alert-danger">No se encontraron resultados</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
