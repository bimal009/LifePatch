"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import DonorRegistrationForm from "../forms/DonorRegistrationForm";
import HospitalRegistrationForm from "../forms/HospitalRegistrationForm";

const RegistrationPage = () => {
  const [selected, setSelected] = useState("donor");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex justify-center gap-4 mb-6">
        <Button
          variant={selected === "donor" ? "default" : "outline"}
          onClick={() => setSelected("donor")}
        >
          Register as Donor
        </Button>
        <Button
          variant={selected === "hospital" ? "default" : "outline"}
          onClick={() => setSelected("hospital")}
        >
          Register as Hospital
        </Button>
      </div>

      <div className="border rounded-lg p-6 shadow-sm">
        {selected === "donor" && <DonorRegistrationForm />}
        {selected === "hospital" && <HospitalRegistrationForm />}
      </div>
    </div>
  );
};

export default RegistrationPage;
