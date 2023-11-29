/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {useKeenSlider} from 'keen-slider/react'
import '../Slider.css'
import "keen-slider/keen-slider.min.css"
import CardMobile from "../components/CardMobile";
import AppLoader from "./AppLoader";


/* const ItemGrilla = ( {item} ) => {
  return (
    <Link to={`/detail/${item.id}`}>
    <Card sx={{width:'100%', height:'450px'}} >
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img width={276} height={300} style={{objectFit:'contain'}} alt={item.name} src={item.img} loading="lazy"/>
      </CardContent>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{overflow:'auto'}}>
        {item.name}
        </Typography>
        
      </CardContent>
    </Card>
    </Link>
  );
}; */

const HomeGrid = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [sliderRef] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout 
        let mouseOver = false

        const clearNextTimeout = () => {
          clearTimeout(timeout)
        }

        const nextTimeout = () => {
          clearTimeout(timeout)
          if ( mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', ()=> {
          slider.container.addEventListener('mouseover', () => {
            mouseOver=true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () =>{
            mouseOver=false
            nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    }
    ]
  )

  useEffect(()=>{
    const db = getFirestore()

    const itemsRef = collection(db, 'items')



    getDocs(itemsRef).then((res) => {
      if(res.size === 0) {
        console.log('no results')
      }
      setItems(res.docs.map((doc) => ({id: doc.id, ...doc.data()})))

    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, [])



  if(loading){
    return (
      <Box sx={{ display: 'grid', placeContent: 'center' }}>
        <AppLoader />
      </Box>
    )
  }



  const Slider = () => {
    return (
      <Box ref={sliderRef} className='keen-slider'>
       
        
        <div className="keen-slider__slide ">
          <img width={1400} src="/banner1.jpg" alt="banner1" />
        </div>
        <div className="keen-slider__slide ">
        <img src="/banner2.jpg" alt="banner2" />
        </div>
        <div className="keen-slider__slide ">
        <img src="/banner3.jpg" alt="banner3" />
        </div>
      </Box>
    )
  }

  return (
    <Box sx={{ marginLeft: "200px", marginTop: "150px", marginRight: "100PX" }}>
      <Box sx={{ marginLeft: "50px" }}>
        <Slider />
      </Box>
      <Typography
        style={{
          color: "#000",
          marginTop: "25px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        NUESTROS PRODUCTOS
      </Typography>

      <Grid container spacing={6} sx={{ marginTop: "20px" }}>
        {items.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{ width: 200 }}
          >
            {/* <ItemGrilla item={item} /> */}
            <Link to={`/detail/${item.id}`}>
            <CardMobile item={item} />
            </Link>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeGrid;