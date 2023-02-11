export default function FieldsetLegend({
  title = '',
  children,
}) {
  return (<fieldset>
    <legend>{title}</legend>
    {children}
  </fieldset>);
}