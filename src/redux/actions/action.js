import { UPDATE_SNACK_QUANTITY } from "../types";

export const snackUpdate = (operator, id) => ({ type: UPDATE_SNACK_QUANTITY, payload: { operator, id }})