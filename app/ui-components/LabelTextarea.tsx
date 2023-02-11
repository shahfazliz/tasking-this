export default function LabelTextarea({
  cols = 30,
  defaultValue = '',
  name = '',
  placeholder = '',
  required = false,
  rows = 10,
  tabIndex = 0,
}) {
  const id = `input-${name}`;
  return (<>
    <label htmlFor={id}>{name}</label>
    <textarea
      cols={cols}
      defaultValue={defaultValue}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
      tabIndex={tabIndex}
    >
    </textarea>
  </>);
}