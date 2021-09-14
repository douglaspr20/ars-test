import React, { useState, useEffect, useContext } from "react";
//Material Ui
import { Button, Typography, makeStyles, Modal, Box } from "@material-ui/core";
//Styles
import { homeStyles } from "./styles";

//Components
import Procedure from "../components/Procedure/Procedure";

//Icons
import EditIcon from "../assets/icons/edit.svg";

//Modal
import ModalForm from "../components/ModalForm";

//Context
import UserContext from "../context/Procedures/ProceduresContext";
//API
import { getProcedures } from "../api/procedures";

const useStyles = makeStyles(homeStyles);

const Home = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const { procedures, getterProcedures } = useContext(UserContext);

  useEffect(() => {
    const findProcedures = async () => {
      const { data } = await getProcedures();

      if (data) {
        getterProcedures(data);
      }
    };

    findProcedures();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h4" component="h1">
        Procedimientos
      </Typography>
      {procedures.length > 0 ? (
        procedures.map((procedure, i) => (
          <Procedure key={i} procedure={procedure} index={i} />
        ))
      ) : (
        <Typography color="primary" variant="h4" component="h1">
          No hay procedimientos guardados aun
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        className={classes.buttonEdit}
        onClick={handleOpenModal}
      >
        <img src={EditIcon} alt="" style={{ marginRight: "16px" }} />
        Editar Procedimientos
      </Button>

      <Modal
        open={openModal}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        BackdropComponent={Box}
      >
        <ModalForm setOpenModal={setOpenModal} />
      </Modal>
    </div>
  );
};

export default Home;
