import React from "react";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core";

import AdSmLenovo1 from "../../../assets/tac.png";


const q = makeStyles((theme) => ({
    root: {
        height: 271,
        width: 470,
		        display: "flex",
            "& .img": {
                backgroundSize: "contain",
                backgroundPosition: "bottom left",
                backgroundRepeat: "no-repeat",
				backgroundImage: `url(${AdSmLenovo1})`,
                display: "flex",
                height: 271,
            },
    },
}));

const AdSmallLenovo = () => {
    const c = q();
    return (
        <div className={c.root}>
                        <div className="img"></div>
        </div>
    );
};

export default AdSmallLenovo;
