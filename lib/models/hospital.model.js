// models/Hospital.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Hospital name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  registrationNumber: {
    type: String,
    required: [true, 'Registration number is required'],
    unique: true,
    uppercase: true,
    trim: true,
  },
  contact: {
    email: {
      type: String,
      required: [true, 'Contact email is required'],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    phone: {
      type: String,
      required: [true, 'Contact phone is required'],
      match: [/^[0-9+\-() ]{7,15}$/, 'Phone number is invalid'],
    }
  },
  address: {
    street: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
    }
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  website: {
    type: String,
    match: [/^https?:\/\/[\w\-\.]+\.\w{2,}(\/\S*)?$/, 'Website URL is invalid'],
  },
  logoUrl: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.Hospital || mongoose.model('Hospital', hospitalSchema);
