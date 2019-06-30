import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function FilterSwitches() {
  const [state, setState] = React.useState({
    vegetable: true,
    fruit: false,
    forage: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log({ ...state, [name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={state.vegetable} onChange={handleChange('vegetable')} value="vegetable" />}
          label="Vegetable"
        />
        <FormControlLabel
          control={<Switch checked={state.fruit} onChange={handleChange('fruit')} value="fruit" />}
          label="Fruit"
        />
        <FormControlLabel
          control={
            <Switch checked={state.forage} onChange={handleChange('forage')} value="forage" />
          }
          label="Forage"
        />
      </FormGroup>
    </FormControl>
  );
}
