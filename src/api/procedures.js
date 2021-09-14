import axios from "../config/axios";

const PROCEDURES = "/procedures";

export const getProcedures = async () => {
  try {
    const { data } = await axios.get(`${PROCEDURES}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const createProcedure = async (procedure) => {
  try {
    const { data } = await axios.post(`${PROCEDURES}/add`, procedure);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProcedureById = async (procedureUpdate) => {
  try {
    const { data } = await axios.put(
      `${PROCEDURES}/update/${procedureUpdate._id}`,
      procedureUpdate
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProcedureById = async (procedureId) => {
  try {
    const { data } = await axios.delete(`${PROCEDURES}/delete/${procedureId}`);

    return data;
  } catch (error) {
    throw error;
  }
};
