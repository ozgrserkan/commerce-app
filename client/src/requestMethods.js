import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjlkNjE3Y2I3Mjc5ZDI5ZjZjODFhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTg2MTI2NywiZXhwIjoxNjQwMTIwNDY3fQ.Gp1XCSs81c_nm2LGrqpJqm8brzWzlwlvor8uC_X29X4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
