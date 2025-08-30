import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Employee name is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["Developer", "Designer", "Manager", "HR", "Tester", "Intern"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [0, "Salary cannot be negative"],
    },
    mobile: {
      type: String,
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const employee = model("employee", schema);

export default employee;
