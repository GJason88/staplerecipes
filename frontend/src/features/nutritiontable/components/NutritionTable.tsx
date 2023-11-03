import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import useIngredients from '../../../hooks/useIngredients';
import { useMemo } from 'react';
import useNutrients from '../../../hooks/useNutrients';

export default function NutritionTable() {
  const ingredients = useIngredients();
  const nutrients = useNutrients();
  const rows = useMemo(
    () =>
      ingredients && Object.keys(nutrients).length
        ? ingredients.map((ingredient) => {
            const protein =
              ingredient.nutrientsFor100G[nutrients.protein.nutrientId];
            const totalCarbs =
              ingredient.nutrientsFor100G[nutrients.totalCarbs.nutrientId];
            const totalFat =
              ingredient.nutrientsFor100G[nutrients.totalFat.nutrientId];
            const calories = protein * 4 + totalCarbs * 4 + totalFat * 9;
            return {
              id: ingredient.ingredientId,
              name: ingredient.ingredientName,
              category: ingredient.categoryName,
              calories: calories,
              protein: protein,
              totalCarbs: totalCarbs,
              totalFat: totalFat,
            };
          })
        : [],
    [ingredients, nutrients]
  );

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Ingredient',
      width: 400,
      editable: false,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 250,
      align: 'left',
      headerAlign: 'left',
      editable: false,
    },
    {
      field: 'calories',
      headerName: 'Calories',
      type: 'number',
      width: 170,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'carbs',
      headerName: 'Carbs',
      type: 'number',
      width: 170,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'protein',
      headerName: 'Protein',
      type: 'number',
      width: 170,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'fat',
      headerName: 'Fat',
      type: 'number',
      width: 170,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
  ];

  return (
    <Box
      sx={{
        m: 2,
        mt: 10,
        height: 800,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        backgroundColor: '#f8f8f8',
        boxShadow: 1,
      }}
    >
      <DataGrid
        sx={{
          fontSize: 24,
        }}
        rows={rows}
        columns={columns}
        editMode='row'
        disableRowSelectionOnClick
        disableColumnSelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{ toolbar: { showQuickFilter: true } }}
      />
    </Box>
  );
}
