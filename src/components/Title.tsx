import React from "react";

export const Title = ({ titulo }): React.JSX.Element => {
  return (
    <div className="py-4" >
      <h1 className="text-xl text-center font-semibold mb-2">{titulo}</h1>
      <hr />
    </div>
  );
};
