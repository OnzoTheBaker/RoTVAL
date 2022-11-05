import React from "react";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core";

import AdSmGlobe1 from "../../../assets/tech.png";


const q = makeStyles((theme) => ({
    root: {
        height: 271,
        width: 470,
		display: "flex",
            "& .img": {
                backgroundSize: "contain",
                backgroundPosition: "bottom left",
                backgroundRepeat: "no-repeat",
				backgroundImage: `url(${AdSmGlobe1})`,
                display: "flex",
                height: 271,
            },
    },
}));

const AdSmallGlobe = () => {
    const c = q();
    return (
        <div className={c.root}>
            
                        <div className="img"></div>
        </div>
    );
};

export default AdSmallGlobe;
