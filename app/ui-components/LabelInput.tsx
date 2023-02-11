export default function LabelInput({
  name = '',
  placeholder = '',
  required = false,
  tabIndex = 0,
  type = 'text',
  defaultValue = '',
}) {
  const id = `input-${name}`;
  return (<>
    <label htmlFor={id}>{name}</label>
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      tabIndex={tabIndex}
      type={type}
      defaultValue={defaultValue}
    />
  </>);
}