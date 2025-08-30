import express from "express";
import {
  allEmployees,
  createEmployee,
  deleteEmployee,
  editEmployee,
  employeeDetails,
} from "../controllers/employee.controller.js";

const route = express.Router();

route.get("/", allEmployees);

route.get("/:id", employeeDetails);

route.post("/", createEmployee);

route.put("/:id", editEmployee);

route.delete("/:id", deleteEmployee);

export default route;
