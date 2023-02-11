export default function LabelSelect({
  name = '',
  required = false,
  tabIndex = 0,
  defaultValue = '',
  options = []
}) {
  const id = `input-${name}`;
  return (<>
    <label htmlFor={id}>{name}</label>
    <select
      id={id}
      name={name}
      required={required}
      tabIndex={tabIndex}
      defaultValue={defaultValue}
    >
      <Options data={options} />
    </select>
  </>);
}

const Options = ({ data }) => {
  return data.map(({id, name}) => {
    return <option
      key={id}
      value={name}
    >{name}</option>
  });
}