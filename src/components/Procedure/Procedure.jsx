import React from "react";

//Material Ui
import { Typography, makeStyles } from "@material-ui/core";

//Styles
import { procedureStyles } from "./styles";

const useStyles = makeStyles(procedureStyles);

const Procedure = ({ procedure, index }) => {
  const { name, code, reclaimed, difference, authorized } = procedure;
  const classes = useStyles();
  return (
    <div className={classes.procedureRoot}>
      <div>
        <Typography variant="subtitle1" component="span">
          Procedimiento {index + 1}
        </Typography>

        <Typography variant="subtitle2" component="p">
          {name}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" component="span">
          Codigo
        </Typography>

        <Typography variant="subtitle2" component="p">
          {code}
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1" component="span">
          Reclamado RD$
        </Typography>

        <Typography variant="subtitle2" component="p">
          RD$ {reclaimed}
        </Typography>
      </div>

      <div>
        <Typography variant="subtitle1" component="span">
          Diferencia RD$
        </Typography>

        <Typography variant="subtitle2" component="p">
          RD$ {difference}
        </Typography>
      </div>

      <div>
        <Typography variant="subtitle1" component="span">
          Autorizado RD$
        </Typography>

        <Typography variant="subtitle2" component="p">
          RD$ {authorized}
        </Typography>
      </div>
    </div>
  );
};

export default Procedure;
