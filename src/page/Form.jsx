import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gradeLevel: "",
    studentLastName: "",
    studentFirstName: "",
    studentMiddleName: "",
    streetName: "",
    barangay: "",
    city: "",
    province: "",
    zipCode: "",
    placeOfBirth: "",
    dateOfBirth: "",
    religion: "",
    nationality: "",
    sex: "",
    motherLastName: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherContact: "",
    motherEmail: "",
    motherOccupation: "",
    fatherLastName: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherContact: "",
    fatherEmail: "",
    fatherOccupation: "",
    guardianLastName: "",
    guardianFirstName: "",
    guardianMiddleName: "",
    guardianContact: "",
    guardianEmail: "",
    guardianOccupation: "",
    emailConfirmation: "",
    disability: "",
    disabilityDetails: "",
    difficulty: "",
    therapy: "",
    acceptShareData: false,
  });

  const stepTitles = [
    "Student Information",
    "Address Information",
    "Parent / Guardian Information",
    "Additional Information",
    "Finish",
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const studentFieldsDisabled = !formData.gradeLevel;
  const nextStep = () => setStep((current) => Math.min(current + 1, stepTitles.length));
  const prevStep = () => setStep((current) => Math.max(current - 1, 1));

  const handleFinalSubmit = () => {
    setShowConfirm(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/success");
    }, 1500);
  };

  const openConfirm = () => setShowConfirm(true);
  const closeConfirm = () => setShowConfirm(false);

  const ReviewField = ({ label, value }) => (
  <div>
    <label className="block text-xs font-medium text-slate-600 mb-1">
      {label}
    </label>

    <div className="min-h-10.5 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
      {value || "N/A"}
    </div>
  </div>
  );

  return (
    <div className="bg-slate-100 text-slate-900 min-h-screen">
      <main className="max-w-[75%] mx-auto py-10 px-10">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="space-y-10 bg-white p-10 rounded-3xl border border-slate-300 shadow-lg relative overflow-hidden"
        >
          <img
            src="src/assets/logo.jpg"
            alt="bg"
            className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
          />

          <div className="space-y-6 relative z-10">
            <div className="relative mt-6">
              <div className="absolute inset-x-0 top-1/2 h-px bg-slate-300"></div>
              <div
                className="absolute inset-x-0 top-1/2 h-px bg-green-500"
                style={{ width: `${((step - 1) / (stepTitles.length - 1)) * 100}%` }}
              />
              <div className="grid grid-cols-5 gap-4 relative">
                {stepTitles.map((title, index) => {
                  const active = index + 1 === step;
                  const completed = index + 1 < step;
                  return (
                    <div key={title} className="flex flex-col items-center text-center">
                      <div
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                          active || completed
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-slate-300 bg-white text-slate-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                        Step {index + 1}
                      </div>
                      <div className="mt-1 text-xs text-slate-500">{title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold">{stepTitles[step - 1]}</h2>
              <p className="text-sm text-slate-500 mt-2">
                Step {step} of {stepTitles.length}. Complete the fields below to continue.
              </p>
            </div>

            {step === 1 && (
              <div className="space-y-8 mt-8">
                <div className="rounded-3xl border border-slate-100 bg-slate-10 p-6 ">
                  <h3 className="text-lg font-semibold">Grade Level</h3>
                  <p className="text-m font-bold text-slate-500 mt-3">
                    Select a grade level first. The student fields will remain disabled until a choice is made.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 font-bold">
                    {['Pre-school', 'Kinder 1', 'Kinder 2'].map((level) => (
                      <label
                        key={level}
                        className={`cursor-pointer rounded-2xl border px-4 py-3 transition ${
                          formData.gradeLevel === level
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-slate-300 bg-white text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="gradeLevel"
                          value={level}
                          checked={formData.gradeLevel === level}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="studentLastName"
                      value={formData.studentLastName}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      required
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="studentFirstName"
                      value={formData.studentFirstName}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      required
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">Middle Name</label>
                    <input
                      name="studentMiddleName"
                      value={formData.studentMiddleName}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      required
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                   <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    Place of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Religion <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      required
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      disabled={studentFieldsDisabled}
                      required
                      className="mt-1 border border-green-500 rounded px-3 py-2 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>

                  <div className="flex gap-4 items-center col-span-1 text-left">
                    <span className="font-semibold">
                      Sex: <span className="text-red-500">*</span>
                    </span>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sex"
                        value="Male"
                        checked={formData.sex === "Male"}
                        onChange={handleChange}
                        disabled={studentFieldsDisabled}
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sex"
                        value="Female"
                        checked={formData.sex === "Female"}
                        onChange={handleChange}
                        disabled={studentFieldsDisabled}
                      />
                      Female
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    Street Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="streetName"
                    value={formData.streetName}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    Barangay <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="barangay"
                    value={formData.barangay}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-sm font-medium">
                    Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-500 rounded px-3 py-2"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold">Mother's Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="motherLastName"
                        value={formData.motherLastName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="motherFirstName"
                        value={formData.motherFirstName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Middle Name</label>
                      <input
                        name="motherMiddleName"
                        value={formData.motherMiddleName}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="motherContact"
                        value={formData.motherContact}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="motherEmail"
                        type="email"
                        value={formData.motherEmail}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Occupation</label>
                      <input
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Father's Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fatherLastName"
                        value={formData.fatherLastName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fatherFirstName"
                        value={formData.fatherFirstName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Middle Name</label>
                      <input
                        name="fatherMiddleName"
                        value={formData.fatherMiddleName}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fatherContact"
                        value={formData.fatherContact}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="fatherEmail"
                        type="email"
                        value={formData.fatherEmail}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Occupation</label>
                      <input
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                </div>

                  <h3 className="text-lg font-semibold">Guardian's Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="guardianLastName"
                        value={formData.guardianLastName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="guardianFirstName"
                        value={formData.guardianFirstName}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Middle Name</label>
                      <input
                        name="guardianMiddleName"
                        value={formData.guardianMiddleName}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="guardianContact"
                        value={formData.guardianContact}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="guardianEmail"
                        type="email"
                        value={formData.guardianEmail}
                        onChange={handleChange}
                        required
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="text-sm font-medium">Occupation</label>
                      <input
                        name="guardianOccupation"
                        value={formData.guardianOccupation}
                        onChange={handleChange}
                        className="mt-1 border border-green-500 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                </div>
              )}

            {step === 4 && (
              <div className="space-y-8 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col text-left md:col-span-2">
                    <label className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="emailConfirmation"
                      type="email"
                      value={formData.emailConfirmation}
                      onChange={handleChange}
                      className="mt-1 border border-green-500 rounded px-3 py-2 w-full"
                    />
                    <label className="text-xs text-red-500 mt-2 block">
                      Note: Please make sure your email address is correct!
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <input
                    id="acceptShareData"
                    type="checkbox"
                    name="acceptShareData"
                    checked={formData.acceptShareData}
                    onChange={handleChange}
                    className="h-5 w-5 rounded border-green-500 text-green-600"
                  />
                  <label htmlFor="acceptShareData" className="text-sm font-medium">
                    I accept that this information may be shared for enrollment processing.
                  </label>
                </div>

                <div className="flex flex-col gap-10">
                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Does your child have any disability or special learning need?
                    </label>
                    <div className="flex flex-wrap gap-6 mt-2">
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="disability"
                          value="yes"
                          checked={formData.disability === "yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="disability"
                          value="no"
                          checked={formData.disability === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                    </div>
                    <input
                      name="disabilityDetails"
                      type="text"
                      placeholder="Please specify here..."
                      value={formData.disabilityDetails}
                      onChange={handleChange}
                      className="mt-3 border border-green-500 rounded px-3 py-2 w-full max-w-md"
                    />
                  </div>
                </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Does your child have difficulty with mobility, hearing, vision, or learning?
                    </label>
                    <div className="flex flex-wrap gap-6 mt-2">
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="difficulty"
                          value="yes"
                          checked={formData.difficulty === "yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="difficulty"
                          value="no"
                          checked={formData.difficulty === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="difficulty"
                          value="prefer-not"
                          checked={formData.difficulty === "prefer-not"}
                          onChange={handleChange}
                        />
                        Prefer not to say
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col text-left">
                    <label className="text-sm font-medium">
                      Is your child currently receiving therapy or special education services?
                    </label>
                    <div className="flex flex-wrap gap-6 mt-2">
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="therapy"
                          value="yes"
                          checked={formData.therapy === "yes"}
                          onChange={handleChange}
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="therapy"
                          value="no"
                          checked={formData.therapy === "no"}
                          onChange={handleChange}
                        />
                        No
                      </label>
                      <label className="flex items-center gap-2 font-medium">
                        <input
                          type="radio"
                          name="therapy"
                          value="prefer-not"
                          checked={formData.therapy === "prefer-not"}
                          onChange={handleChange}
                        />
                        Prefer not to say
                      </label>
                    </div>
                  </div>
                </div>
            )}

            {step === 5 && (
              <div className="space-y-6 mt-8">

    {/* Header */}
    <div className="rounded-xl border border-slate-700 bg-white p-6">
      <h3 className="text-2xl font-bold text-slate-900">
        Enrollment Review Form
      </h3>

      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2">
        <span className="font-semibold">
          Grade Level:
        </span>

        <span className="font-bold text-blue-700">
          {formData.gradeLevel || "N/A"}
        </span>
      </div>
    </div>

    {/* STUDENT INFORMATION */}
    <div className="rounded-xl border border-slate-1000 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Student Information
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        <ReviewField
          label="First Name"
          value={formData.studentFirstName}
        />

        <ReviewField
          label="Last Name"
          value={formData.studentLastName}
        />

        <ReviewField
          label="Middle Name"
          value={formData.studentMiddleName}
        />

        <ReviewField
          label="Date of Birth"
          value={formData.dateOfBirth}
        />

        <ReviewField
          label="Place of Birth"
          value={formData.placeOfBirth}
        />

        <ReviewField
          label="Religion"
          value={formData.religion}
        />

        <ReviewField
          label="Nationality"
          value={formData.nationality}
        />

        <ReviewField
          label="Sex"
          value={formData.sex}
        />
      </div>
    </div>

    {/* ADDRESS INFORMATION */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Address Information
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        <ReviewField
          label="Street"
          value={formData.streetName}
        />

        <ReviewField
          label="Barangay"
          value={formData.barangay}
        />

        <ReviewField
          label="City"
          value={formData.city}
        />

        <ReviewField
          label="Province"
          value={formData.province}
        />

        <ReviewField
          label="Zip Code"
          value={formData.zipCode}
        />

      </div>
    </div>

    {/* MOTHER INFORMATION */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Mother's Information
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        <ReviewField
          label="First Name"
          value={formData.motherFirstName}
        />

        <ReviewField
          label="Last Name"
          value={formData.motherLastName}
        />

        <ReviewField
          label="Middle Name"
          value={formData.motherMiddleName}
        />

        <ReviewField
          label="Contact Number"
          value={formData.motherContact}
        />

        <ReviewField
          label="Email Address"
          value={formData.motherEmail}
        />

        <ReviewField
          label="Occupation"
          value={formData.motherOccupation}
        />

      </div>
    </div>

    {/* FATHER INFORMATION */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Father's Information
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        <ReviewField
          label="First Name"
          value={formData.fatherFirstName}
        />

        <ReviewField
          label="Last Name"
          value={formData.fatherLastName}
        />

        <ReviewField
          label="Middle Name"
          value={formData.fatherMiddleName}
        />

        <ReviewField
          label="Contact Number"
          value={formData.fatherContact}
        />

        <ReviewField
          label="Email Address"
          value={formData.fatherEmail}
        />

        <ReviewField
          label="Occupation"
          value={formData.fatherOccupation}
        />
        

      </div>
    </div>

    {/* GUARDIAN INFORMATION */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Guardian Information
      </h4>

      <div className="grid md:grid-cols-3 gap-4">

        <ReviewField
          label="First Name"
          value={formData.guardianFirstName}
        />

        <ReviewField
          label="Last Name"
          value={formData.guardianLastName}
        />

        <ReviewField
          label="Middle Name"
          value={formData.guardianMiddleName}
        />

        <ReviewField
          label="Contact Number"
          value={formData.guardianContact}
        />

        <ReviewField
          label="Email Address"
          value={formData.guardianEmail}
        />

        <ReviewField
          label="Occupation"
          value={formData.guardianOccupation}
        />

      </div>
    </div>

    {/* EMAIL */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        Confirmation Email Address
      </h4>

      <ReviewField
        label="Email Address"
        value={formData.emailConfirmation}
      />
    </div>

    {/* MORE INFORMATION */}
    <div className="rounded-xl border border-slate-900 bg-white p-6">
      <h4 className="font-bold text-lg mb-10">
        More Information
      </h4>

      <div className="grid md:grid-cols-2 gap-4">

        <ReviewField
          label="Disability"
          value={formData.disability}
        />

        <ReviewField
          label="Disability Details"
          value={formData.disabilityDetails}
        />

        <ReviewField
          label="Difficulty"
          value={formData.difficulty}
        />

        <ReviewField
          label="Therapy"
          value={formData.therapy}
        />

        <ReviewField
          label="Share Consent"
          value={
            formData.acceptShareData
              ? "Accepted"
              : "Not Accepted"
          }
        />

      </div>
    </div>

  </div>
)}

            <div className="flex justify-between gap-4 mt-10">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-3 rounded-2xl font-bold ${
                  step === 1
                    ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                    : "bg-slate-800 text-white hover:bg-slate-900"
                }`}
              >
                Previous
              </button>

              {step < stepTitles.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !formData.gradeLevel) ||
                    (step === 4 && !formData.acceptShareData)
                  }
                  className={`px-6 py-3 rounded-2xl font-bold ${
                    (step === 1 && !formData.gradeLevel) ||
                    (step === 4 && !formData.acceptShareData)
                      ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-900"
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openConfirm}
                  className="px-6 py-3 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-900"
                >
                  Submit
                </button>
              )}
            </div>
          </div>

          {showConfirm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-md">
                <h4 className="text-lg font-semibold">Confirm Submission</h4>
                <p className="text-sm text-slate-600 mt-2">Are you sure you want to submit your application?</p>
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={closeConfirm}
                    className="px-4 py-2 rounded bg-slate-200"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    className="px-4 py-2 rounded bg-green-500 text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {showPopup && (
            <div className="fixed inset-0 flex items-top justify-top bg-black/40">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-green-600 font-bold">Application has been submitted!</p>
              </div>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
