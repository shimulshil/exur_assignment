//importing packages starts here
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
//importing packages ends here

//component styling starts here
const useStyles = makeStyles(theme => ({
  
  card: {
    maxHeight: '200%',
    display: 'block',
    flexDirection: 'column',
    minWidth: '300px',
    marginLeft: '13.5px',
    marginRight: '13.5px',
    float: 'right',
    width: '100px',
    position: 'center',
    borderRadius: '7px',
    justifyContent: 'space-evenly',
    boxSizing: 'border-box',
  },

}));
//component styling ends here

//function starts here
export default function Products() {
  const classes = useStyles();
  const [products, handleProducts] = useState([]);
  useEffect(() => {
    FetchData()
  }, [])
  
  //---------data fetching from the api--------------
  // const FetchData = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/users'); //data source
  //// const data = await fetch('https://pfp-public-productdb-api.azurewebsites.net/api/product/search'); //data source
  //   const products = await data.json()
  //   console.log(products)
  //   handleproducts(products)
  // }

  const FetchData = async () => {
    // const res = await axios.get('https://pfp-public-productdb-api.azurewebsites.net/api/product/search')
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const products = res.data
    console.log(products)
    handleProducts(products) 
  }


  return (
    <React.Fragment>
      <div>
        {products.map((product) => {
          const list = (
            <>
              <Card className={classes.card}>
                <CardContent>
                  {/* <ul>
                    <li>Type: {product.type}</li>
                    <li>Title: {product.title}</li>
                    <li>productus: {product.status}</li>
                    <li>TraceID: {product.traceId}</li>
                  </ul> */}

                  <ul>
                    <li>Id: {product.id}</li>
                    <li>Name: {product.name}</li>
                    <li>UserName: {product.username}</li>
                    <li>phone: {product.phone}</li>
                  </ul>
                  <br />
                </CardContent>
                </Card>
            </>
          );
          return list;
        })}
      </div> 
    </React.Fragment>
  );
}