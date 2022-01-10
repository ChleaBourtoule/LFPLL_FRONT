import React, { FC } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

type SessionPublishedProps = {
  setActiveModal: Dispatch<SetStateAction<string>>;
};

const SessionPublished: FC<SessionPublishedProps> = () => {
  return (
    <div className="published">
      <div>
        <h3>Session publiée</h3>
      </div>
      <div className="published__logo">
        <BsCheckCircle style={{ fontSize: '4vw', color: '#4AAEA1' }} />
      </div>
    </div>
  );
};

export default SessionPublished;
