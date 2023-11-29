import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import AppLoader from "../../layouts/AppLoader";
/* import ItemDetail from "./ItemDetail"; */

const DetailView = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const { idProduct } = useParams();

  useEffect(() => {
    // Acceder a un documento

    const db = getFirestore();

    const itemRef = doc(db, "items", idProduct);

    getDoc(itemRef).then((res) => {
      if (res.exists) {
        setItem({ id: res.id, ...res.data() });
      }
    }).finally(()=> setLoading(false));
  }, []);

  if(loading) {
    return (
      <Box sx={{ display: 'grid', placeContent: 'center' }}>
      <AppLoader />
    </Box>
    )
  }

  return (
    <>
    <Typography variant="h5" style={{ color: "#000", marginBottom:'5px', marginTop:'150px', marginLeft:'5rem' }}>
       <Link to='/' style={{color:'#000'}}>Home</Link> / <Link to={ `/category/${item.category}`} style={{color:'#000'}}>{item.category}</Link> / {item.name}
    </Typography>
    <Grid container>  
      <Grid item xs={12}>
      <ItemDetail item={item} />
      </Grid>
    </Grid>
    </>
  )

}

export default DetailView;