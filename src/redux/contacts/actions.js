import { createAction } from "@reduxjs/toolkit";
import { CONTACTS_RESET } from "./constants";
export const resetContacts = createAction(CONTACTS_RESET);
