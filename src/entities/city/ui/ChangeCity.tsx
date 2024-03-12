'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function ChangeCity() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>
        <span className="">Кострома</span>
      </div>
      {showModal &&
        createPortal(
          <div onClick={() => setShowModal(false)}>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
