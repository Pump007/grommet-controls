import { describe, PropTypes } from 'react-desc';

export default (Element) => {
  const DocumentedElement = describe(Element)
    .description(
      `A masked number input, with widgets to increment/decrement the value.
      Additionally, all properties of MaskedInput apply
      `
    ).usage(`
      $ npm install grommet-controls\n 
      import { NumberInput } from 'grommet-controls';\n
      <NumberInput value={...} />
    `);

  DocumentedElement.propTypes = {
    a11yIncrement: PropTypes.string.description('Custom increment button title to be used by screen readers.'),
    a11yDecrement: PropTypes.string.description('Custom increment button title to be used by screen readers.'),
    decimals: PropTypes.number.description('How many digits to allow after the decimal.').defaultValue('null'),
    min: PropTypes.number.description('Minimum value.'),
    max: PropTypes.number.description('Maximum value.'),
    step: PropTypes.number.description('Steps to increase and decrease by.').defaultValue('1'),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).description('The numeric value'),
    disabled: PropTypes.bool.description('Setting to true causes the input to be disabled.'),
    addIcon: PropTypes.element.description('Icon for button to increment by step.'),
    subtractIcon: PropTypes.element.description('Icon for button to subtract a step.'),
    prefix: PropTypes.string.description('What to display in front of the value.'),
    suffix: PropTypes.string.description('What to display at the end of the value.'),
    thousandsSeparatorSymbol: PropTypes.string.description('A character with which to separate thousands.'),
    integers: PropTypes.number.description('Limit on the length of the integer number.').defaultValue('unlimited'),
  };

  return DocumentedElement;
};
