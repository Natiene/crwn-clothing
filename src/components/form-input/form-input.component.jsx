import { FormInputLabel, Group, StyledFormInput } from "./form-input.styles";
// import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {

  
  return (
    <Group className="group">
      <StyledFormInput className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
