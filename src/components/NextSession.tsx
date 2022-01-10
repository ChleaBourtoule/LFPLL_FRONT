import React, { FC } from 'react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import ISession from '../interfaces/ISession';

type Props = ISession;

const Session: FC<Props> = ({
  adress,
  date,
  name,
  spot_name,
  region_name,
  name_session,
  carpool,
}) => {
  return (
    <div className="nextsession">
      <div className="nextsession__button">
        <h6 className="nextsession__button__region">{region_name}</h6>
        <h6 className="nextsession__button__surfstyle">{name_session}</h6>
      </div>
      <div className="nextsession__infos">
        <div className="nextsession__infos__spot">
          <h4 className="nextsession__infos__spot__h4">{name}</h4>
          <h6 className="nextsession__infos__spot__h6"> {spot_name} </h6>
          <h6 className="nextsession__infos__spot__adress"> {adress} </h6>
        </div>

        <div className="nextsession__infos__rdv">
          <div className="nextsession__infos__rdv__date">
            <p className="nextsession__infos__rdv__date__p">{date}</p>
            <p>17h15</p>
          </div>
          <div className="nextsession__infos__rdv__covoit">
            {carpool === 1 ? (
              <p>
                Covoiturage <BsFillPatchCheckFill color="#1f8387" />
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <hr className="nextsession__hr" />
      <NavLink to="/session">
        <h5 className="nextsession__details">
          Details <BsBoxArrowInUpRight />
        </h5>
      </NavLink>
    </div>
  );
};

export default Session;
