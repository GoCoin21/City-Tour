import React from "react";
import Tour from "./tour";
import { tourData } from "./tourdata";
import "./tour.css"
export default function TourList({post}){
    const tours = tourData
   return (
      <div className="app">
        {tours.map(tour => {
            return (
                <Tour key={tour.id} tour={tour}/>
            )
        })}
      </div>
   )
    
}