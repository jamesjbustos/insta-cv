import FormSection from './FormSection';

function BasicsFormSection({ formData, handleInputChange }) {
  const { name, email, phone, website, location } = formData.basics;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-1">Personal Information</h2>
      <FormSection
        id="name"
        label="Name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => handleInputChange('basics.name', e.target.value)}
      />
      <FormSection
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleInputChange('basics.email', e.target.value)}
      />
      <FormSection
        id="phone"
        label="Phone"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => handleInputChange('basics.phone', e.target.value)}
      />
      <FormSection
        id="address"
        label="Address"
        type="text"
        placeholder="Address"
        value={location.address}
        onChange={(e) =>
          handleInputChange('basics.location.address', e.target.value)
        }
      />
      <FormSection
        id="website"
        label="Website"
        type="url"
        placeholder="Website"
        value={website}
        onChange={(e) => handleInputChange('basics.website', e.target.value)}
      />
    </>
  );
}

export default BasicsFormSection;
