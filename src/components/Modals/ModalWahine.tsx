import axios from 'axios';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

import IUser from '../../interfaces/IUser';
import CurrentUserContext from '../contexts/CurrentUser';

type Props = {
  setActiveModal: Dispatch<SetStateAction<string>>;
};

const ModalWahine: FC<Props> = ({ setActiveModal }) => {
  const { id, wahine } = useContext(CurrentUserContext);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    axios
      .get<IUser>(`http://localhost:3000/api/users/${id}`)
      .then((result) => result.data)
      .then((data) => setUser(data));
  }, [id]);
  console.log(id);
  console.log(wahine);
  return (
    <div className="modalWahine">
      <div className="modalWahine__resume">
        <div className="modalWahine__resume__img">
          <img
            className="modalWahine__resume__img__pic"
            src={user && user.profile_pic}
            alt="picProfil"
          />
        </div>
        <div className="modalWahine__resume__infos">
          <h2>
            {user && user.lastname} {user && user.firstname}
          </h2>
          <h6>{user && user.city}</h6>
          <h6>{user && user.favorite_spot}</h6>
        </div>
      </div>
      <div className="modalWahine__explication">
        <p className="modalWahine__explication__text">
          Devenir wahine c&apos;est te sentir capable de montrer ton spot à d&apos;autres
          surfeuses. Les wahines sont les seules à pouvoir publier des sessions.
          Attention, il faut que tu sois à l&apos;aise à l&apos;eau et aller &quot;au
          large&quot;.
        </p>
      </div>
      <div className="modalWahine__button">
        <button
          className="modalWahine__button__validate"
          onClick={() => setActiveModal('wahineRegistrated')}>
          Devenir Wahine
        </button>
      </div>
    </div>
  );
};

export default ModalWahine;