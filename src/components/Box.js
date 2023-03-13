import React, { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBoxToGreen } from "../actions/boxActions";

const Box = ({ id, ref, handler }) => {

  const dispatch = useDispatch();
  const isCurr = useSelector((state) => state.curr == id);

  console.log("rerendering...",id);
  return (
    <div
      ref={ref}
      className={`box ${isCurr ? "green" : ""}`}
      onClick={() => {
        dispatch(changeBoxToGreen(id));
      }}
      key={id}
    >
      {id}
    </div>
  );
};
export default Box;
