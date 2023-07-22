import React, { useEffect, useState } from 'react';
import Button from '../buttons/button';
import SelectInput from '../inputs/select-input';
import TextInput from '../inputs/text-input/text-input';
import TextareaInput from '../inputs/textarea-input/textarea-input.jsx';
import LanguagesFlags from '../languages-flags';
import './styles.scss';
import { optionsList } from './utils';
import { checkAnswer, handleSubmit } from './validation-form';

const initialValues = {
  participation: '',
  name: '',
  firstName: '',
  email: '',
  accompanied: '',
  name2: '',
  firstName2: '',
  vegetarian: '',
  vegetarian2: '',
  otherDetails: ''
};

const FormGuests = ({ translationTexts, setIsSuccess }) => {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    setFormValues(initialValues);
  }, [translationTexts]);

  const { labels } = translationTexts.forms.formGuests;
  const { basics } = translationTexts.forms;

  const isParticipating =
    formValues.participation === 'Oui' || formValues.participation === 'Yes';

  const isNotParticipating =
    formValues.participation === 'Non' || formValues.participation === 'No';

  const isAccompanied =
    formValues.accompanied === 'Oui' || formValues.accompanied === 'Yes';

  const handleChange = (e, val = 'value') => {
    const name = e.target.name;
    const value = e.target[val];

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = checkAnswer(formValues);
  
  return (
    <>
      <LanguagesFlags />
      <form
        className="form1"
        onSubmit={(e) =>
          handleSubmit(
            e,
            formValues,
            setFormValues,
            setIsSuccess,
            initialValues,
            isValid
          )
        }
      >
        <div className="name-firstname-container">
          <TextInput
            name="name"
            value={formValues.name}
            onChange={handleChange}
            textLabel={basics.firstnameAndName}
            placeholder={basics.name}
          />
          <TextInput
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            textLabel="hidden"
            placeholder={basics.firstName}
          />
        </div>

        <TextInput
          name="email"
          value={formValues.email}
          onChange={handleChange}
          textLabel={basics.email}
          placeholder="email"
          type="email"
        />

        <SelectInput
          name="participation"
          value={formValues.participation}
          onChange={handleChange}
          textLabel={labels.participation}
          options={optionsList([basics.yes, basics.no])}
          defaultText={basics.selectOption}
        />
        {isNotParticipating && (
          <TextareaInput
            name="otherDetails"
            value={formValues.otherDetails}
            onChange={handleChange}
            textLabel={basics.comments}
            placeholder={basics.optional}
          />
        )}
        {isParticipating && (
          <>
            <SelectInput
              name="vegetarian"
              value={formValues.vegetarian}
              onChange={handleChange}
              textLabel={labels.vegetarian}
              options={optionsList([labels.vegMeal, labels.NoneVegMeal])}
              defaultText={basics.selectOption}
            />
            <SelectInput
              name="accompanied"
              value={formValues.accompanied}
              onChange={handleChange}
              textLabel={labels.accompanyingParticipation}
              options={optionsList([basics.yes, basics.no])}
              defaultText={basics.selectOption}
            />
            {isAccompanied && (
              <>
                <div className="name-firstname-container">
                  <TextInput
                    name="name2"
                    value={formValues.name2}
                    onChange={handleChange}
                    textLabel={labels.nameSpouse}
                    placeholder={basics.name}
                  />
                  <TextInput
                    name="firstName2"
                    value={formValues.firstName2}
                    onChange={handleChange}
                    placeholder={basics.firstName}
                    textLabel="hidden"
                  />
                </div>

                <SelectInput
                  name="vegetarian2"
                  value={formValues.vegetarian2}
                  onChange={handleChange}
                  textLabel={labels.vegetarian2}
                  options={optionsList([labels.vegMeal, labels.NoneVegMeal])}
                  defaultText={basics.selectOption}
                />
              </>
            )}
            <TextareaInput
              name="otherDetails"
              value={formValues.otherDetails}
              onChange={handleChange}
              textLabel={basics.otherDetails}
              placeholder={basics.detailsExemple}
            />
          </>
        )}
        <div className="button-validate-form-guests">
          <Button type="submit" disabled={!isValid} buttonType="validateButton">
            {basics.sendForm}
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormGuests;
