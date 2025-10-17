import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: { type: Number, autoIncrement: true, primaryKey: true },
    username: { type: String, required: true, trim: true, unique: true, maxlength: 50 },
    password: { type: String, required: true, trim: true, maxlength: 255 },
    email: { type: String, required: true, trim: true, unique: true, maxlength: 100 },
    full_name: { type: String, trim: true, maxlength: 100 },
    phone: { type: String, trim: true, maxlength: 20 },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;