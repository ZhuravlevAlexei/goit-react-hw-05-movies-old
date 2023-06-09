import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const BASE_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    getDataByAxios(`/movie/${movieId}/credits`, 0, '').then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      } else {
        // console.log('resp: ', resp);
        setMovieCast(resp.data.cast);
      }
    });
  }, [movieId]);

  return (
    <div>
      {movieCast.length === 0 ? (
        <h4 className={css.castTitle}>No cast available.</h4>
      ) : (
        <h4 className={css.castTitle}>Cast</h4>
      )}
      {movieCast.length && (
        <ul className={css.castThumb}>
          {movieCast.map(({ character, id, name, profile_path }) => (
            <li key={id} className={css.castActorCard}>
              {profile_path ? (
                <img
                  src={BASE_IMAGE_ENDPOINT + profile_path}
                  alt="Cast actor "
                  width="180"
                  height="270"
                />
              ) : (
                <img
                  className={css.castBlankImage}
                  src=""
                  alt="Cast actor (no poster) "
                  width="180"
                  height="270"
                />
              )}
              {name}
              <p>Caracter: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;
