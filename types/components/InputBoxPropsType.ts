export interface InputBoxProps {
  // eslint-disable-next-line prettier/prettier

  /** Type of the input. */
  inputType: string;

  /** Name of the input. */
  inputName: string;

  /** Placeholder of the input. */
  placeholder: string;

  /** Value of the input. */
  inputValue: string;

  /** The function to set value of the input. */
  setInput: (value: string) => void;
}
