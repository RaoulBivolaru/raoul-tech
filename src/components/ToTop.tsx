import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import { useWindowScroll } from 'react-use';

const LIMIT = 200;

export default function () {
  const { y } = useWindowScroll();

  const handlePress = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <>
      {y > LIMIT && (
        <FiArrowUpCircle
          onClick={handlePress}
          className="fixed bottom-5 right-5 cursor-pointer text-4xl text-accent"
        />
      )}
    </>
  );
}
