import { Form } from '@remix-run/react';
import { ReactNode } from 'react';

const chipStyle = {
  display: 'inline-block',
  padding: '0.1rem 1rem',
  borderRadius: '1rem',
  margin: '0.1rem',
  position: 'relative',
  border: '1px solid #11191f',
};

const chipDeleteBtnStyle = {
  position: 'relative',
  top: '2px',
  left: '10px',
  color: 'hsl(195deg, 85%, 41%)',
};

const formStyle = {
  display: 'inline',
};

const buttonStyle = {
  all: 'unset',
};

type PropTypes = {
  onClick: () => {};
  children: ReactNode;
}

export default function Chip({children, actionName, data }) {
  const keys = Object.keys(data);

  return (
    <div style={chipStyle}>
      <span>{children}</span>
      <Form style={formStyle} method='post'>
        {
          keys
            .map((key) => {
              return <input key={key} type='hidden' name={key} value={data[key]} />
            })
        }
        <button
          style={buttonStyle}
          type='submit'
          name='_action'
          value={actionName}
          aria-label={actionName}
        >
          <i style={chipDeleteBtnStyle} className='lni lni-cross-circle'></i>
        </button>
      </Form>
    </div>
  );
}
