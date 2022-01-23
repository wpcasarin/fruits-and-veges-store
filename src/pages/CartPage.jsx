import { useContext, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/Header';
import GlobalContext from '../context/GlobalContext';

function CartPage() {
  const { cartItems, addItemToCart } = useContext(GlobalContext);

  const columns = [
    { field: 'name', headerName: 'Product', width: 150 },
    { field: 'count', headerName: 'Quantity', width: 150 },
    {
      field: 'Add',
      renderCell: (item) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addItemToCart(item.id);
            }}
          >
            Add
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Button
        onClick={() => {
          let mergedSubjects = cartItems.map((subject) => {
            let otherSubject = cartItems.find(
              (element) => element.id === subject.id,
            );
            console.log([{ ...subject, ...otherSubject }]);
          });
        }}
      >
        CLIQUEEEE
      </Button>
      <Header currentPage={3} />
      <Container>
        <div style={{ height: 800, width: '100%' }}>
          <DataGrid rows={cartItems} columns={columns} />
        </div>
      </Container>
    </>
  );
}

export default CartPage;
