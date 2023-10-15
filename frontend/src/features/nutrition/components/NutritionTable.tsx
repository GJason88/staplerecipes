import { Box } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
  GridToolbar,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  IngredientState,
  getIngredientsRequest,
  updateNutritionRequest,
} from '../../ingredients/ingredientsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { IRootState } from '../../..';

interface Row {
  id: number | null;
  name: string;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export default function NutritionTable() {
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const dispatch = useDispatch();
  const ingredients = useSelector<IRootState, Array<IngredientState>>(
    (state) => state.ingredients.ingredients
  );
  const rows = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        id: ingredient.ingredientId,
        name: ingredient.ingredientName,
        category: ingredient.categoryName,
        calories: ingredient.nutrition.calories,
        protein: ingredient.nutrition.protein,
        carbs: ingredient.nutrition.carbs,
        fat: ingredient.nutrition.fat,
        fiber: ingredient.nutrition.fiber,
      })),
    [ingredients]
  );

  useEffect(() => {
    dispatch(getIngredientsRequest());
  }, [dispatch]);

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };
  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };
  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });
  };
  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  const processRowUpdate = (newRow: Row, oldRow: Row) => {
    if (JSON.stringify(newRow) === JSON.stringify(oldRow)) return newRow;
    const nutrition = {
      calories: newRow.calories,
      carbs: newRow.carbs,
      protein: newRow.protein,
      fat: newRow.fat,
      fiber: newRow.fiber,
    };
    dispatch(updateNutritionRequest({ id: newRow.id, nutrition }));
    return newRow;
  };
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
    {
      field: 'fiber',
      headerName: 'Fiber',
      type: 'number',
      width: 170,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={0}
              icon={<SaveIcon />}
              label='Save'
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={1}
              icon={<CancelIcon />}
              label='Cancel'
              className='textPrimary'
              onClick={handleCancelClick(id)}
              color='inherit'
            />,
          ];
        }
        return [
          <GridActionsCellItem
            key={0}
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            onClick={handleEditClick(id)}
            color='inherit'
          />,
        ];
      },
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
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableRowSelectionOnClick
        disableColumnSelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{ toolbar: { showQuickFilter: true } }}
      />
    </Box>
  );
}
