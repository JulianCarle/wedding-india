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
    participation,
    name,
    firstName,
    email,
    accompanied,
    name2,
    firstName2,
    vegetarian,
    vegetarian2,
    otherDetails
  } = formValues;

  let templateParams = {
    email: email,
    name: `${firstName} ${name}`,
    participation: participation,
    accompanied: accompanied,
    name2: `${firstName2} ${name2}`,
    vegetarian: vegetarian,
    vegetarian2: vegetarian2,
    otherDetails: otherDetails
  };

  try {
    await emailjs.send(
      'service_kg6jo0z',
      'template_wr7fdr8',
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
  const {
    name,
    firstName,
    email,
    participation,
    vegetarian,
    accompanied,
    name2,
    firstName2,
    vegetarian2
  } = formValues;

  const isComing = participation === 'Oui' || participation === 'Yes';

  const firstCondition = name && firstName && email && participation;

  const secondCondition =
    vegetarian && (accompanied === 'Non' || accompanied === 'No');

  const fullCondition =
    firstCondition &&
    vegetarian &&
    (accompanied === 'Oui' || accompanied === 'Yes') &&
    name2 &&
    firstName2 &&
    vegetarian2;

  if (firstCondition && !isComing) {
    return true;
  }

  if (firstCondition && secondCondition && isComing) {
    return true;
  }

  if (fullCondition && isComing) {
    return true;
  }
}
