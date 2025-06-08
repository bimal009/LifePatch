import React, { useState } from "react";
import {
  AlertCircle,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  CheckCircle,
} from "lucide-react";

const HospitalRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    contact: {
      email: "",
      phone: "",
    },
    address: {
      street: "",
      city: "",
      province: "",
    },
    location: {
      latitude: "",
      longitude: "",
    },
    website: "",
    logoUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Hospital name is required";
        } else if (value.length < 3) {
          newErrors.name = "Name must be at least 3 characters";
        } else if (value.length > 100) {
          newErrors.name = "Name cannot exceed 100 characters";
        } else {
          delete newErrors.name;
        }
        break;

      case "registrationNumber":
        if (!value.trim()) {
          newErrors.registrationNumber = "Registration number is required";
        } else {
          delete newErrors.registrationNumber;
        }
        break;

      case "contact.email":
        const emailRegex = /\S+@\S+\.\S+/;
        if (!value.trim()) {
          newErrors["contact.email"] = "Contact email is required";
        } else if (!emailRegex.test(value)) {
          newErrors["contact.email"] = "Email is invalid";
        } else {
          delete newErrors["contact.email"];
        }
        break;

      case "contact.phone":
        const phoneRegex = /^[0-9+\-() ]{7,15}$/;
        if (!value.trim()) {
          newErrors["contact.phone"] = "Contact phone is required";
        } else if (!phoneRegex.test(value)) {
          newErrors["contact.phone"] = "Phone number is invalid";
        } else {
          delete newErrors["contact.phone"];
        }
        break;

      case "address.street":
        if (!value.trim()) {
          newErrors["address.street"] = "Street address is required";
        } else {
          delete newErrors["address.street"];
        }
        break;

      case "address.city":
        if (!value.trim()) {
          newErrors["address.city"] = "City is required";
        } else {
          delete newErrors["address.city"];
        }
        break;

      case "location.latitude":
        const lat = parseFloat(value);
        if (!value.trim()) {
          newErrors["location.latitude"] = "Latitude is required";
        } else if (isNaN(lat) || lat < -90 || lat > 90) {
          newErrors["location.latitude"] =
            "Latitude must be between -90 and 90";
        } else {
          delete newErrors["location.latitude"];
        }
        break;

      case "location.longitude":
        const lng = parseFloat(value);
        if (!value.trim()) {
          newErrors["location.longitude"] = "Longitude is required";
        } else if (isNaN(lng) || lng < -180 || lng > 180) {
          newErrors["location.longitude"] =
            "Longitude must be between -180 and 180";
        } else {
          delete newErrors["location.longitude"];
        }
        break;

      case "website":
        const urlRegex = /^https?:\/\/[\w\-\.]+\.\w{2,}(\/\S*)?$/;
        if (value.trim() && !urlRegex.test(value)) {
          newErrors.website = "Website URL is invalid";
        } else {
          delete newErrors.website;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const fieldsToValidate = [
      "name",
      "registrationNumber",
      "contact.email",
      "contact.phone",
      "address.street",
      "address.city",
      "location.latitude",
      "location.longitude",
    ];

    fieldsToValidate.forEach((field) => {
      const value = field.includes(".")
        ? formData[field.split(".")[0]][field.split(".")[1]]
        : formData[field];
      validateField(field, value);
    });

    // Check if there are any errors
    const hasErrors = Object.keys(errors).length > 0;

    if (!hasErrors) {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        console.log("Hospital Registration Data:", formData);
      }, 2000);
    } else {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Registration Successful!
          </h2>
          <p className="text-green-600">
            Your hospital registration has been submitted successfully. You will
            receive a confirmation email shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold text-gray-900">
            Hospital Registration
          </h1>
        </div>
        <p className="text-gray-600">
          Register your hospital with our healthcare network. All fields marked
          with * are required.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors.name ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="Enter hospital name"
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registration Number *
              </label>
              <input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors.registrationNumber
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="Enter registration number"
                style={{ textTransform: "uppercase" }}
              />
              {errors.registrationNumber && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.registrationNumber}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                name="contact.email"
                value={formData.contact.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors["contact.email"] ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="hospital@example.com"
              />
              {errors["contact.email"] && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors["contact.email"]}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="contact.phone"
                value={formData.contact.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors["contact.phone"] ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors["contact.phone"] && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors["contact.phone"]}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            <MapPin className="w-5 h-5 inline mr-2" />
            Address Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors["address.street"]
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="123 Medical Center Drive"
              />
              {errors["address.street"] && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors["address.street"]}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                    errors["address.city"]
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter city"
                />
                {errors["address.city"] && (
                  <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors["address.city"]}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Province/State
                </label>
                <input
                  type="text"
                  name="address.province"
                  value={formData.address.province}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90"
                  placeholder="Enter province/state"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location Coordinates */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            GPS Coordinates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latitude *
              </label>
              <input
                type="number"
                step="any"
                name="location.latitude"
                value={formData.location.latitude}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors["location.latitude"]
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="40.7128"
              />
              {errors["location.latitude"] && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors["location.latitude"]}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longitude *
              </label>
              <input
                type="number"
                step="any"
                name="location.longitude"
                value={formData.location.longitude}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors["location.longitude"]
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
                placeholder="-74.0060"
              />
              {errors["location.longitude"] && (
                <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors["location.longitude"]}
                </div>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You can find your coordinates using Google Maps or GPS services.
          </p>
        </div>

        {/* Optional Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Optional Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="w-4 h-4 inline mr-1" />
                Website URL
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90 ${
                  errors.website ? "border-red-300" : "border-gray-300"
                }`}
                placeholder="https://www.yourhospital.com"
              />
              {errors.website && (
                <div className="flex items-center gap-1 mt-1 text-primary text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.website}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="w-4 h-4 inline mr-1" />
                Logo URL
              </label>
              <input
                type="url"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/90 focus:border-primary/90"
                placeholder="https://example.com/logo.png"
              />
              <p className="text-sm text-gray-500 mt-1">
                URL to your hospital's logo image
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/90"
            onClick={() =>
              setFormData({
                name: "",
                registrationNumber: "",
                contact: { email: "", phone: "" },
                address: { street: "", city: "", province: "" },
                location: { latitude: "", longitude: "" },
                website: "",
                logoUrl: "",
              })
            }
          >
            Reset Form
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || Object.keys(errors).length > 0}
            className="px-8 py-2 bg-primary text-accent rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Registering...
              </>
            ) : (
              "Register Hospital"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegistrationForm;
