"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const DonorRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    isAlive: true,
    bloodGroup: "",
    location: {
      latitude: "",
      longitude: "",
    },
    contactEmail: "",
    contactPhone: "",
    userImage: null,
    idImage: null,
    organDonation: {
      kidney: false,
      liver: false,
      lung: false,
      pancreas: false,
      intestine: false,
      boneMarrow: false,
      blood: false,
      skin: false,
      amnioticMembrane: false,
    },
    pastMedicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox" && name in formData.organDonation) {
      setFormData({
        ...formData,
        organDonation: {
          ...formData.organDonation,
          [name]: checked,
        },
      });
    } else if (name === "latitude" || name === "longitude") {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submit logic
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      {step === 1 && (
        <>
          <h3 className="text-xl font-semibold mb-4">
            Step 1: Personal Information
          </h3>
          <Input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <Input
            name="middleName"
            placeholder="Middle Name"
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <Input
            name="contactEmail"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <Input
            name="contactPhone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="text-xl font-semibold mb-4">
            Step 2: Identity Verification
          </h3>
          <label className="block text-sm font-medium">
            Upload Profile Image
          </label>
          <Input
            type="file"
            name="userImage"
            accept="image/*"
            onChange={handleChange}
          />
          <label className="block text-sm font-medium mt-4">
            Upload National ID Image
          </label>
          <Input
            type="file"
            name="idImage"
            accept="image/*"
            onChange={handleChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="text-xl font-semibold mb-4">
            Step 3: Medical & Donation Details
          </h3>
          <label className="block mb-2">Blood Group</label>
          <select
            name="bloodGroup"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="">Select Blood Group</option>
            {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>

          <label className="block mt-4 mb-2">Organs You Wish to Donate</label>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(formData.organDonation).map((organ) => (
              <label key={organ} className="flex items-center gap-2">
                <Checkbox
                  name={organ}
                  checked={formData.organDonation[organ]}
                  onCheckedChange={(checked) =>
                    handleChange({
                      target: { name: organ, type: "checkbox", checked },
                    })
                  }
                />
                {organ}
              </label>
            ))}
          </div>

          <Textarea
            name="pastMedicalHistory"
            placeholder="Medical History (if any)"
            onChange={handleChange}
            className="mt-4"
          />
        </>
      )}

      {step === 4 && (
        <>
          <h3 className="text-xl font-semibold mb-4">
            Step 4: Location & Final Confirmation
          </h3>
          <Input
            name="latitude"
            placeholder="Latitude"
            value={formData.location.latitude}
            onChange={handleChange}
            required
          />
          <Input
            name="longitude"
            placeholder="Longitude"
            value={formData.location.longitude}
            onChange={handleChange}
            required
          />
        </>
      )}

      <div className="flex justify-between pt-6">
        {step > 1 && (
          <Button type="button" onClick={prevStep} variant="outline">
            Back
          </Button>
        )}
        {step < 4 ? (
          <Button type="button" onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </div>
    </form>
  );
};

export default DonorRegistrationForm;
