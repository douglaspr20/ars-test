import React, { useReducer } from "react";
import ProceduresReducer from "./ProceduresReducer";
import ProceduresContext from "./ProceduresContext";

//Procedures Reducer

const ProceduresState = (props) => {
  const initialState = {
    procedures: [],
  };

  const [state, dispatch] = useReducer(ProceduresReducer, initialState);

  const getterProcedures = (procedures) => {
    dispatch({ type: "GET_PROCEDURES", payload: procedures });
  };

  //const createProcedure = ()
  return (
    <ProceduresContext.Provider
      value={{ procedures: state.procedures, getterProcedures }}
    >
      {props.children}
    </ProceduresContext.Provider>
  );
};

export default ProceduresState;
