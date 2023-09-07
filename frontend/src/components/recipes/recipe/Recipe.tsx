import axios from 'axios';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
  Box,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { updateCreateDialog } from '../../../redux/components/recipes/recipegridReducer';
import { tags, tools } from '../../../constants';
import CheckboxSelect from './CheckboxSelect';
import IngredientsEditList from './IngredientsEditList';

export default function Recipe() {
  // const [sampleData, setSampleData] = useState({});
  // function fetchData() {
  //   axios
  //     .get('http://localhost:3000/recipes')
  //     .then((response) => {
  //       setSampleData(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        justifyContent: 'left',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
      }}
    >
      <Typography variant='h3' paddingBottom={3}>
        Edit Recipe (Time, Nutrition, Tags, Ingredients and Tools, Instructions)
      </Typography>
      <CheckboxSelect paddingBottom={3} label='Tools' options={tools} />
      <CheckboxSelect paddingBottom={3} label='Tags' options={tags} />
      <Typography variant='h4' paddingBottom={3}>
        Ingredients
      </Typography>
      <IngredientsEditList />
    </Container>
  );
}
