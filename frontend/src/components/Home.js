import { useMemo, useEffect, useState } from 'react';
import AxiosInstance from './axios';
import { MaterialReactTable} from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    AxiosInstance.get('recipe/')
      .then((res) => {
        setMyData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'actions', 
        header: 'Actions',
        size: 50,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton
              color="secondary"
              onClick={() => console.log('Edit', row.original)}
              component = {Link} to = {`/edit/${row.original.id}`}

            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => console.log('Delete', row.original)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
      {
        accessorKey: 'name', 
        header: 'Recipe Title',
        size: 150,
      },
      {
        accessorKey: 'ingredients', 
        header: 'Ingredients',
        size: 150,
      },
      {
        accessorKey: 'instructions',
        header: 'Instructions',
        size: 200,
      },
    ],
    [],
  );

  return (
    <div>
      {loading ? <h2>Loading...</h2> : 
        <MaterialReactTable 
          columns={columns} 
          data={myData} 
        />}
    </div>
  );
};

export default Home;
