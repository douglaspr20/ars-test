import React, { useState, useContext } from "react";
//Material Ui
import { Button, Typography, makeStyles, IconButton } from "@material-ui/core";
//Styles
import { modalStyles } from "./styles";

//API
import { createProcedure, updateProcedureById } from "../../api/procedures";

//Icons
import AddIcon from "../../assets/icons/add.svg";
import CloseIcon from "../../assets/icons/time.svg";
import CheckIcon from "../../assets/icons/check.svg";

//Context
import UserContext from "../../context/Procedures/ProceduresContext";

//API
import { deleteProcedureById } from "../../api/procedures";

//Inputs
import ProcedureForm from "./ProcedureForm";

const useStyles = makeStyles(modalStyles);

const ModalForm = ({ setOpenModal }) => {
  const classes = useStyles();

  const { procedures, getterProcedures } = useContext(UserContext);

  const [newProcedures, setNewProcedures] = useState(procedures);
  const [proceduresToDelete, setProceduresToDelete] = useState([]);

  const handleNewProcedures = () => {
    setNewProcedures([
      ...newProcedures,
      { name: "", code: "", reclaimed: "", difference: "", authorized: "" },
    ]);
  };

  const saveOrUpdateNewProcedures = async (newProcedures) => {
    let proceduresSavesOrUpdates = [];

    for (const [i, procedure] of newProcedures.entries()) {
      if (procedure._id) {
        if (
          procedure.name !== procedures[i].name ||
          procedure.code !== procedures[i].code ||
          procedure.reclaimed !== procedures[i].reclaimed ||
          procedure.difference !== procedures[i].difference ||
          procedure.authorized !== procedures[i].authorized
        ) {
          const { data: procedureUpdated } = await updateProcedureById(
            procedure
          );

          proceduresSavesOrUpdates.push(procedureUpdated);
        } else {
          proceduresSavesOrUpdates.push(procedures[i]);
        }
      } else {
        const { data: newProcedure } = await createProcedure(procedure);

        proceduresSavesOrUpdates.push(newProcedure);
      }
    }

    for (const procedureToDelete of proceduresToDelete) {
      await deleteProcedureById(procedureToDelete);
    }

    getterProcedures(proceduresSavesOrUpdates);
    setOpenModal(false);
  };

  const deleteProcedure = (procedureId) => {
    setNewProcedures(
      newProcedures.filter((procedure) => procedure._id !== procedureId)
    );

    setProceduresToDelete([...proceduresToDelete, procedureId]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.modalHeader}>
        <Typography
          color="primary"
          variant="h4"
          component="h1"
          style={{ marginRight: "15px" }}
        >
          Procedimientos
        </Typography>

        <a
          href="#!"
          style={{ textDecoration: "none" }}
          onClick={handleNewProcedures}
        >
          <Typography
            color="primary"
            variant="subtitle1"
            component="h1"
            className={classes.addProcedure}
          >
            <img src={AddIcon} alt="" />
            Añadir procedimiento
          </Typography>
        </a>
      </div>

      <div className={classes.modalBody}>
        {newProcedures.length > 0 ? (
          newProcedures.map((procedure, i) => {
            return (
              <ProcedureForm
                procedure={procedure}
                procedures={newProcedures}
                setNewProcedures={setNewProcedures}
                key={i}
                index={i}
                deleteProcedure={deleteProcedure}
              />
            );
          })
        ) : (
          <ProcedureForm />
        )}
      </div>

      <div className={classes.modalFooter}>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.cancelButton}
          onClick={() => setOpenModal(false)}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => saveOrUpdateNewProcedures(newProcedures)}
        >
          <img src={CheckIcon} alt="" style={{ marginRight: "16px" }} />
          GUARDAR CAMBIOS
        </Button>
      </div>
      <IconButton
        aria-label="close"
        className={classes.timeButton}
        size="small"
        onClick={() => setOpenModal(false)}
      >
        <img src={CloseIcon} alt="" />
      </IconButton>
    </div>
  );
};

export default ModalForm;
