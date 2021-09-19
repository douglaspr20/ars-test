import React, { useState } from "react";
//Material Ui
import { Typography, makeStyles, IconButton } from "@material-ui/core";

//Styles
import { modalStyles } from "./styles";

//icons
import trashIcon from "../../assets/icons/trash.svg";
const useStyles = makeStyles(modalStyles);

const ProcedureForm = ({
  procedure,
  procedures,
  index,
  deleteProcedure,
  setNewProcedures,
}) => {
  const classes = useStyles();

  const [procedureActually, setProcedureActually] = useState(
    procedure || {
      name: "",
      code: "",
      reclaimed: "",
      difference: "",
      authorized: "",
    }
  );

  const { name, code, reclaimed, difference, authorized } = procedureActually;

  const handleChange = (e) => {
    setProcedureActually({
      ...procedureActually,
      [e.target.name]: e.target.value,
    });
    const updateProcedures = procedures.map((procedure) =>
      procedures.indexOf(procedure) === index ? procedureActually : procedure
    );
    setNewProcedures(updateProcedures);
  };

  const handleBlur = (e) => {
    setProcedureActually({
      ...procedureActually,
      [e.target.name]: e.target.value,
    });
    const updateProcedures = procedures.map((procedure) =>
      procedures.indexOf(procedure) === index ? procedureActually : procedure
    );
    setNewProcedures(updateProcedures);
  };

  return (
    <form noValidate autoComplete="off" className={classes.procedureForm}>
      <IconButton
        aria-label="close"
        className={classes.deleteButton}
        size="small"
        onClick={() => {
          if (procedures[index + 1]) {
            setProcedureActually(procedures[index + 1]);
          }
          deleteProcedure(procedure._id);
        }}
      >
        <img src={trashIcon} alt="" />
      </IconButton>
      <div className={classes.inputContainer}>
        <Typography variant="subtitle1" component="span">
          Procedimiento {index + 1}
        </Typography>
        <input
          placeholder="Ej: 4563523"
          className={classes.input}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={name}
          value={name}
        />
      </div>
      <div className={classes.inputContainer}>
        <Typography variant="subtitle1" component="span">
          Código
        </Typography>
        <input
          placeholder="Ej: 4563523"
          className={classes.input}
          name="code"
          onChange={handleChange}
          onBlur={handleBlur}
          //defaultValue={code}
          value={code}
        />
      </div>
      <div className={classes.inputContainer}>
        <Typography variant="subtitle1" component="span">
          Reclamado RD$
        </Typography>
        <input
          placeholder="Ej: 4563523"
          className={classes.input}
          name="reclaimed"
          onChange={handleChange}
          onBlur={handleBlur}
          //defaultValue={reclaimed}
          value={reclaimed}
        />
      </div>

      <div className={classes.inputContainer}>
        <Typography variant="subtitle1" component="span">
          Diferencia RD$
        </Typography>
        <input
          placeholder="Ej: 4563523"
          className={classes.input}
          name="difference"
          onChange={handleChange}
          onBlur={handleBlur}
          //defaultValue={difference}
          value={difference}
        />
      </div>

      <div className={classes.inputContainer}>
        <Typography variant="subtitle1" component="span">
          Autorizado RD$
        </Typography>
        <input
          placeholder="Ej: 4563523"
          className={classes.input}
          name="authorized"
          onChange={handleChange}
          onBlur={handleBlur}
          // defaultValue={authorized}
          value={authorized}
        />
      </div>
    </form>
  );
};

export default ProcedureForm;
