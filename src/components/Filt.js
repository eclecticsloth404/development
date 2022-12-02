import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function Filter(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
        {props.cat}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.arr.map((item) => (
          <Form.Check
          id={item.toLowerCase()}
          label={item}
          type='checkbox'
          onChange={() => props.f(item.toLowerCase())}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;