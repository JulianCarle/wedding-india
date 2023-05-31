import emailjs from '@emailjs/browser';

export const handleSubmit = async (
  e,
  formValues,
  setFormValues,
  setIsSuccess,
  initialValues
) => {
  e.preventDefault();

  const {
    name,
    firstName,
    company,
    flightNumber,
    arrivalDay,
    arrivalHour,
    departureDay,
    departureHour,
    address,
    transport,
    resort,
    brunch,
    activities,
    otherDetails
  } = formValues;

  let templateParams = {
    name: `${firstName} ${name}`,
    company: company,
    flightNumber: flightNumber,
    arrivalDay: arrivalDay,
    arrivalHour: arrivalHour,
    departureDay: departureDay,
    departureHour: departureHour,
    addressPondy: address,
    transport: transport,
    resort: resort,
    brunch: brunch,
    activities: activities,
    otherDetails: otherDetails
  };

  try {
    await emailjs.send(
      'service_kg6jo0z',
      'template_m6gdjru',
      templateParams,
      'pFDL2Nkh8kizWmeB-'
    );

    setFormValues(initialValues);
    setIsSuccess(true);
  } catch (err) {
    setIsSuccess(false);
    console.error(err);
    return false;
  }
};

export function checkAnswer(formValues) {
  const keysToIgnore = ['otherDetails'];

  return Object.keys(formValues).every(key => {
    if (keysToIgnore.includes(key)) {
      return true;
    }
    const value = formValues[key];
    return value.trim() !== '';
  });
}