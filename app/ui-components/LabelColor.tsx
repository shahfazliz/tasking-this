export default function LabelColor({
    name = '',
    required = false,
    tabIndex = 0,
    defaultValue = '#FFFFFF',
  }) {
    const id = `input-${name}`;
    const displayName = name.split('-').join(' ');
    return (<>
      <label htmlFor={id}>{displayName}</label>
      <input
        id={id}
        name={name}
        required={required}
        tabIndex={tabIndex}
        type='color'
        defaultValue={defaultValue}
      />
    </>);
  }