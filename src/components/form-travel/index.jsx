import React, { useEffect, useState } from 'react';
import Button from '../buttons/button';
import SelectInput from '../inputs/select-input';
import TextInput from '../inputs/text-input/text-input';
import TextareaInput from '../inputs/textarea-input/textarea-input.jsx';
import './styles.scss';
import { optionsList } from './utils';
import { checkAnswer, handleSubmit } from './validation-form';

const initialValues = {
  name: '',
  firstName: '',
  company: '',
  flightNumber: '',
  arrivalDay: '',
  arrivalHour: '',
  departureDay: '',
  departureHour: '',
  address: '',
  transport: '',
  resort: '',
  brunch: '',
  activities: '',
  otherDetails: ''
};

const FormTravel = ({ translationTexts, setIsSuccess }) => {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    setFormValues(initialValues);
  }, [translationTexts]);

  const { labels } = translationTexts.forms.formTravel;
  const { basics } = translationTexts.forms;

  const handleChange = (e, val = 'value') => {
    const name = e.target.name;
    const value = e.target[val];

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = checkAnswer(formValues);

  return (
    <form
      className="form2"
      onSubmit={(e) =>
        handleSubmit(e, formValues, setFormValues, setIsSuccess, initialValues)
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
        name="company"
        value={formValues.company}
        onChange={handleChange}
        textLabel={labels.company}
      />

      <TextInput
        name="flightNumber"
        value={formValues.flightNumber}
        onChange={handleChange}
        textLabel={labels.flightNumber}
      />

      <TextInput
        type="date"
        name="arrivalDay"
        value={formValues.arrivalDay}
        onChange={handleChange}
        textLabel={labels.arrivalDay}
      />

      <TextInput
        type="time"
        name="arrivalHour"
        value={formValues.arrivalHour}
        onChange={handleChange}
        textLabel={labels.arrivalHour}
      />

      <TextInput
        type="date"
        name="departureDay"
        value={formValues.departureDay}
        onChange={handleChange}
        textLabel={labels.departureDay}
      />
      <TextInput
        type="time"
        name="departureHour"
        value={formValues.departureHour}
        onChange={handleChange}
        textLabel={labels.departureHour}
      />
      <TextInput
        name="address"
        value={formValues.address}
        onChange={handleChange}
        textLabel={labels.address}
      />
      <SelectInput
        name="transport"
        value={formValues.transport}
        onChange={handleChange}
        textLabel={labels.transport}
        options={optionsList([basics.yes, basics.no])}
        defaultText={basics.selectOption}
      />
      <SelectInput
        name="resort"
        value={formValues.resort}
        onChange={handleChange}
        textLabel={labels.resort}
        options={optionsList([basics.yes, basics.no])}
        defaultText={basics.selectOption}
      />
      <SelectInput
        name="brunch"
        value={formValues.brunch}
        onChange={handleChange}
        textLabel={labels.brunch}
        options={optionsList([basics.yes, basics.no])}
        defaultText={basics.selectOption}
      />
      <SelectInput
        name="activities"
        value={formValues.activities}
        onChange={handleChange}
        textLabel={labels.activities}
        options={optionsList([
          labels.both,
          labels.the23,
          labels.the24,
          basics.no
        ])}
        defaultText={basics.selectOption}
      />
      <TextareaInput
        name="otherDetails"
        value={formValues.otherDetails}
        onChange={handleChange}
        textLabel={basics.otherDetails}
      />

      <div className="button-validate-form-guests">
        <Button type="submit" disabled={!isValid} buttonType="validateButton">
          {basics.sendForm}
        </Button>
      </div>
    </form>
  );
};

export default FormTravel;
