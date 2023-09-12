import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Grid = ({ children }: Props) => {
  const renderCards = (count: any) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(children);
    }
    return cards;
  };

  return <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 my-11">{renderCards(20)}</div>;
};

export default Grid;
