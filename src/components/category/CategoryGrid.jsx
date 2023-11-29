/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import CardMobile from "../CardItem";
import AppLoader from "../../layouts/AppLoader";

const ItemGrid = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategory} = useParams()

  useEffect(() => {

    const db = getFirestore();

    const queryFilter = query(
      collection(db, "items"),
      where("category", "==", idCategory)
    );

    getDocs(queryFilter)
      .then((res) => {
        if (res.size === 0) {
          console.log("No results");
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  if(loading) {
    return (
      <Box sx={{ display: 'grid', placeContent: 'center' }}>
      <AppLoader />
    </Box>
    )
  }

  return (
    <Box sx={{ marginLeft: "200px", marginTop: "150px", marginRight:'100PX' }}>
      <Typography variant="h5" style={{ color: "#000", marginBottom:'25px' }}> Home / {idCategory}</Typography>
      <Grid container spacing={6}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} sx={{width:200}}>

            <Link to={`/detail/${item.id}`}>
            <CardMobile item={item} />
            </Link>
          </Grid>
          
        ))}
      </Grid>
    </Box>
  );
};

export default ItemGrid;
