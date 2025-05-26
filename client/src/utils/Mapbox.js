// import "mapbox-gl/dist/mapbox-gl.css";
// import React, { useEffect, useState } from "react";
// import Map, { Marker } from "react-map-gl";

// const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// // console.log(TOKEN);

// function Mapbox(props) {
//     const [viewPort, setViewPort] = useState({
//         latitude: props?.lat,
//         longitude: props?.long,
//         zoom: 6,
//     });

//     useEffect(() => {
//         setViewPort((prevState) => ({
//             ...prevState,
//             latitude: props?.lat,
//             longitude: props?.long,
//         }));
//     }, [props?.lat, props?.long]);

//     return (
//         // TOKEN ?
//         //     <div>
//         //         <Map
//         //             style={{ width: "100vw", height: 400 }}
//         //             {...viewPort}
//         //             mapboxAccessToken={TOKEN}
//         //             width="100%"
//         //             height="100%"
//         //             transitionDuration="200"
//         //             mapStyle="mapbox://styles/mapbox/streets-v9"
//         //             onViewPortChange={(viewPort) => setViewPort(viewPort)}
//         //         >
//         //             <Marker latitude={props.lat} longitude={props.long}></Marker>
//         //         </Map>
//         //     </div> : null
//         <div >

//             <iframe style={{ width: "100vw", height: 400 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.512872558205!2d75.78453628715822!3d22.62102239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedicaps%20University!5e0!3m2!1sen!2sin!4v1743856957498!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full"></iframe>
//         </div>
//     );
// }

// export default Mapbox;




function Mapbox({ lat, long, addOnStyle }) {
    const mapURL = `https://www.google.com/maps?q=${lat},${long}&z=15&output=embed`;

    return (
        <div className={`w-full h-96 ${addOnStyle}`}>
            <iframe
                src={mapURL}
                className="w-full h-full rounded-xl shadow-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}

export default Mapbox;
