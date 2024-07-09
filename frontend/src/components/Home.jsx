import { useMemo, useEffect, useState } from 'react';
import AxiosInstance from './axios';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const Home = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Responsive settings for columns
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const columns = useMemo(() => [
    {
      accessorKey: 'actions',
      header: 'Actions',
      size: isMobile ? 100 : 50,
      Cell: ({ row }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <IconButton
            color="secondary"
            onClick={() => console.log('Edit', row.original)}
            component={Link} to={`/edit/${row.original.id}`}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => console.log('Delete', row.original)}
            component={Link} to={`/delete/${row.original.id}`}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Recipe Title',
      size: isMobile ? 180 : 150,
    },
    {
      accessorKey: 'ingredients',
      header: 'Ingredients',
      size: isMobile ? 180 : 150,
    },
    {
      accessorKey: 'instructions',
      header: 'Instructions',
      size: isMobile ? 240 : 200,
    },
    {
      accessorKey: 'created',
      header: 'Created On',
      size: isMobile ? 180 : 150,
      Cell: ({ value }) => dayjs(value).format('DD MMM. YYYY')
    }
  ], [isMobile]);

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
