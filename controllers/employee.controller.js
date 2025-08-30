import employee from "../models/employee.model.js";

//Get All employee details

export const allEmployees = async (req, res) => {
  try {
    const employeedetail = await employee.find();
    return res.json(employeedetail);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get particular employee details

export const employeeDetails = async (req, res) => {
  try {
    const employeedetails = await employee.findById(req.params.id);
    if (employeedetails == null) {
      return res.status(404).json({ message: "Cannot Employee details" });
    } else {
      return res.json(employeedetails);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Create new Employee details
export const createEmployee = async (req, res) => {
  const newEmployee = new employee({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    salary: req.body.salary,
    mobile: req.body.mobile,
  });
  try {
    const employee = await newEmployee.save();
    return res.status(201).json(employee);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Update Employee details

export const editEmployee = async (req, res) => {
  try {
    const updateEmployee = await employee.findOneAndUpdate(
      {
        _id: req.params.id,
      },

      {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        salary: req.body.salary,
        mobile: req.body.mobile,
      },

      { new: true }
    );

    return res.status(200).json(updateEmployee);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const deleteId = req.params.id;
  try {
    await employee.deleteOne({ _id: deleteId });
    res.json({ message: `Employee details deleted` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
