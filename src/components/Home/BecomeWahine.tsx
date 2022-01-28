import React, { FC, useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

import becomeWahine from '../../../img/become-wahine.svg';
import CurrentUserContext from '../contexts/CurrentUser';

type Props = {
  setActiveModal: Dispatch<SetStateAction<string>>;
};

const BecomeWahine: FC<Props> = ({ setActiveModal }) => {
  const { id, wahine } = useContext(CurrentUserContext);
  console.log(wahine);
  console.log(id);

  return (
    <div className="becomeWahine">
      <h1 className="becomeWahine__h1">Envie d&apos;accompagner des surfeuses ?</h1>
      <h2 className="">Créer des sessions dans tes spots préférés</h2>
      <div className="becomeWahine__row">
        {id && wahine === 0 ? (
          <button
            className="becomeWahine__btn"
            onClick={() => setActiveModal('modalWahine')}>
            Devenir wahine
          </button>
        ) : (
          <button className="becomeWahine__btn" onClick={() => setActiveModal('connect')}>
            Devenir wahine
          </button>
        )}

        <img className="" src={becomeWahine} alt="Become wahine" />
      </div>
    </div>
  );
};

export default BecomeWahine;
