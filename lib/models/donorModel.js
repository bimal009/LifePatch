import mongoose from 'mongoose';

/**
 * Schema for specifying which organs/tissues the donor is willing to donate.
 */
const organDetailsSchema = new mongoose.Schema({
  kidney: { type: Boolean, default: false },
  liver: { type: Boolean, default: false },
  lung: { type: Boolean, default: false },
  pancreas: { type: Boolean, default: false },
  intestine: { type: Boolean, default: false },
  boneMarrow: { type: Boolean, default: false },
  blood: { type: Boolean, default: false },
  skin: { type: Boolean, default: false },
  amnioticMembrane: { type: Boolean, default: false },
}, { _id: false });

/**
 * Main schema representing a donor in the LifePatch network.
 */
const donorSchema = new mongoose.Schema({
  // Basic Identification
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },

  // Vital & Verification Status
  isAlive: { type: Boolean, required: true },
  isVerified: { type: Boolean, default: false },

  // Organ/Tissue Donation Preferences
  organDonation: organDetailsSchema,

  // Blood Group
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    required: true,
  },

  // Location for AI matching
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },

  // Contact Information
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true }, // now required

  // Images
  userImage: { type: String },        // Profile picture URL or path
  idImage: { type: String },          // Uploaded ID image for verification

  // Medical History
  pastMedicalHistory: { type: String }, // Freeform text field or JSON summary

  // Timestamps
  registeredAt: { type: Date, default: Date.now },

  // AI Matching Fields
  isEligible: { type: Boolean, default: true },
  
});

// Export the model (avoids duplicate model registration in dev)
export default mongoose.models.Donor || mongoose.model('Donor', donorSchema);
