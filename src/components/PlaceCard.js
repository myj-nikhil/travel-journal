import React from "react";




const PlaceCard = (props) => <>
                                <div className="card">
                                    <img className="card-image" src={props.imageUrl} alt={props.title}/>
                                    
                                    <div className="card-details">                           
                                        
                                        <div className="card-details-location">
                                            <div className="card-details-location-country">
                                                <img src="/images/LocationIcon.png" alt="location icon"/>
                                                <p>{props.location}</p>
                                            </div>
                                            <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                                        </div>
                                        
                                        
                                        <div className="card-details-title"><h2>{props.title}</h2></div>
                                        
                                        
                                        <div className="card-details-dates"><p>{props.startDate} - {props.endDate} </p></div>
                                        
                                        
                                        <div className="card-details-description"><p> {props.description} </p></div>
                                    </div>
                                
                                </div>
                             </>

export default PlaceCard 