import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import matchTexture from "../../assets/Sponsor.webm";
import mainbar from "../../assets/lt_bar_top.png";
import subbar from "../../assets/lt_bar_bottom.png";
import globe from "../../assets/BLANK.png";
import { Transition } from "react-spring/renderprops";
import paper from "../../assets/BLANK.png";
import albumCover from "../../assets/kdr-album-cover.jpg";
import LiveVeto from "./LiveVeto";
import logoLockup from "../../assets/Sponsor.gif";
import Livetalents from "./LiveTalents";

import Ticker from "react-ticker";
import LiveGiveaways from "./LiveGiveaways";

const video = {
  src:matchTexture,
  type:'video/webm'
 };

const q = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column-reverse",
        width: "100%",
        height: "100%",
        // alignItems: "center",
        padding: `${theme.spacing(0)}px 5.296875%`,

        "& .main-bar": {
            display: "flex",
            height: 200,
            width: 1755,
            backgroundColor: "transparent",
            // border: "1px solid black",
			marginLeft: 5,

            "& .matchup": {
                flexShrink: 0,
                position: "relative",
                height: 138,
                minWidth: 160,
                width: 248,
                display: "flex",


                "& .texture": {
                    position: "absolute",
                    top: 15,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    backgroundSize: "cover",
                    backgroundImage: `url(${matchTexture})`,
                    mixBlendMode: "multiply",
                },
            },

            "& .longbar": {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: 986,

                "& .main": {
                    height: 68,
					width: 1280,
                    backgroundSize: "cover",
                    backgroundImage: `url(${mainbar})`,
                    display: "flex",
                    alignItems: "center",
					marginTop: theme.spacing(2.29),
                    padding: theme.spacing(0, 1),
                    color: "White",
                    fontFamily: "Antonio",

                    "& .content": {
                        transform: "translateY(2px)",
						fontSize: "3.0rem",
                        width: "100%",
                    },
                },
                "& .sub": {
                    height: 40,
					width: 1280,
                    overflowY: "hidden",
                    backgroundSize: "cover",
                    backgroundImage: `url(${subbar})`,
                    display: "flex",
                    alignItems: "center",
                    padding: theme.spacing(0, 0),
                    fontFamily: "Anton",
                    fontWeight: "lighter",

                    "& .content": {
                        fontSize: "1.2rem",
                        width: "100%",
                        fontWeight: "normal",
                        fontFamily: "monospace",
                        whiteSpace: "nowrap",
						clipPath: `polygon(0% 0%, 96% 0%, 94.7% 100%,0% 100%)`,
                    },
                },
            },

            "& .sponsors": {
                flexShrink: 0,
                position: "relative",
                minWidth: 279,
                width: 279,
                height: "100%",
                backgroundColor: "transparent",
                display: "flex",
				marginTop: theme.spacing(-1.995),
				marginRight: theme.spacing(23.84),
                padding: theme.spacing(2),
				clipPath: `polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)`,

                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                "& .main": {
                    width: "55%",
                    display: "flex",
                    flexDirection: "column",

                    // borderRight: "3px solid rgba(0,0,0,.3)",
                    "& .caption": {
                        color: "#111923",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    },

                    "& .globe": {
                        flex: 1,
                        backgroundSize: "80%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundImage: `url(${globe})`,
                    },
                },
                "& .texture": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    backgroundSize: "cover",
                    backgroundImage: `url(${paper})`,
                    mixBlendMode: "multiply",
                    transform: "scaleY(-1)",
                },
            },
        },
    },

    music: {
        marginTop: theme.spacing(2),
        display: "flex",
        "& .icon": {
            height: 100,
            width: 100,
            backgroundColor: "#Fff",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundImage: `url(${albumCover})`,
        },

        "& .bar": {
            // width: 500,
            display: "flex",
            flexDirection: "column",
            color: "transparent",
            justifyContent: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            // backgroundImage: `url(${subbar})`,
            padding: theme.spacing(0, 4),
            position: "relative",
            zIndex: 1,
            backgroundColor: "#141414",

            "&::after": {
                content: '""',
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                backgroundSize: "cover",
                backgroundImage: `url(${paper})`,
                mixBlendMode: "multiply",
            },
            "& .main": {
                // display: "flex",
                // alignItems: "center",
                // flexBasis: "60%",
                // color: theme.palette.primary.main,
            },

            "& .sub": {
                display: "flex",
                alignItems: "center",
                // flex: 1,
                fontSize: "1.2rem",
            },
        },
    },

    talents: { marginTop: theme.spacing(1.5) },
}));

const LiveLowerThirds = () => {
    const c = q();
    const {
        lower_thirds = { headline: "", subtext: "", live: false },
        match_current = {},
        music = { title: "", artist: "", live: false },
        maps = {
            bestOf: "",
            liveOnLowerThirds: false,
            veto: [],
        },
        giveaways = [],
        talents = { casters: [], observers: [] },
    } = useSelector((state) => state.live);
    const {
        EntityParticipantA: a = {},
        EntityParticipantB: b = {},
        aShortname = "TEAMA",
        bShortname = "TEAMB",
    } = match_current;

    const logoCheck = (t = {}) => {
        try {
            let src = require(`../../assets/${t.Nickname.trim()
                .toLowerCase()
                .replace(/ /gi, "_")}.png`);
            return src;
        } catch (err) {
            console.log(err);
            return t.LogoUrl;
        }
    };
    return (
        <div className={c.root}>
            <Transition
                items={lower_thirds.live}
                from={{
                    opacity: 0,
                    clipPath: `polygon(0% 0%, 14.11901% 0%, 14.11901% 100%,0% 100%)`,
                    transform: "translateY(20px)",
                    height: 0,
                    marginTop: 0,
                }}
                enter={[
                    {
                        height: 200,
                        opacity: 1,
                        transform: "translateY(0px)",
                        marginTop: 0,
                    },
                    { clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)` },
                ]}
                leave={[
                    {
                        opacity: 1,
                        clipPath: `polygon(0% 0%, 14.11901% 0%, 14.11901% 100%,0% 100%)`,
                        transform: "translateY(0px)",
                    },
                    { opacity: 0, transform: "translateY(20px)" },
                    { height: 0, marginTop: 0 },
                ]}>
                {(show) =>
                    show &&
                    ((props) => (
                        <div style={props} className="main-bar">
                            <div className="matchup">
                                <div className="texture"></div>
								<video src={matchTexture} autoPlay muted loop> </video>
                            </div>
                            <div className="longbar">
                                <div className="main">
                                    <Typography
                                        className="content"
                                        variant="h3">
                                        {lower_thirds.headline}
                                    </Typography>
                                </div>
                                <div className="sub">
                                    <div className="content">
                                        <Ticker>
                                            {() => (
                                                <>
                                                    <span
                                                        style={{
                                                            marginRight: 16,
                                                        }}>
                                                        {lower_thirds.subtext.replace(
                                                            /\n/gi,
                                                            " | "
                                                        )}
                                                    </span>
                                                </>
                                            )}
                                        </Ticker>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Transition>

            {/* <div className={c.giveaways}>
                <LiveGiveaways onLowerThirds={true} />
            </div> */}

            <Transition
                items={
                    Boolean(giveaways.filter((g) => g.live).length) &&
                    !maps.liveOnLowerThirds
                }
                from={{
                    maxHeight: 200,
                    opacity: 0,
                    clipPath: "polygon(-100% 0%, 0% 0%, 0% 100% , -100% 100%)",
                    transform: "translateY(20px)",
                }}
                enter={{
                    maxHeight: 500,
                    opacity: 1,
                    clipPath:
                        "polygon(-100% 0%, 100% 0%, 100% 100% , -100% 100%)",
                    transform: "translateY(-30px)",
                }}
                leave={[
                    {
                        opacity: 0,
                        clipPath:
                            "polygon(-100% 0%, 0% 0%, 0% 100% , -100% 100%)",
                        transform: "translateY(0px)",
                    },
                    { maxHeight: 0 },
                ]}
                delay={1000}>
                {(show) =>
                    show &&
                    ((props) => (
                        <div style={props} className={c.talents}>
                            <LiveGiveaways onLowerThirds={true} />
                        </div>
                    ))
                }
            </Transition>

            <Transition
                items={music.live && !maps.liveOnLowerThirds}
                from={{
                    height: 0,
                    opacity: 0,
                    clipPath:
                        "polygon(0% 0%, 5.698% 0%, 5.698% 100% , 0% 100%)",
                    transform: "translateY(20px)",
                }}
                enter={[
                    { opacity: 0, height: "auto" },
                    { opacity: 1, transform: "translateY(0px)" },
                    {
                        clipPath:
                            "polygon(0% 0%, 34.188034% 0% , 34.188034% 100%, 0  100%)",
                    },
                ]}
                leave={[
                    {
                        clipPath:
                            "polygon(0% 0%, 5.698% 0%, 5.698% 100% , 0% 100%)",
                    },
                    {
                        opacity: 0,
                        transform: "translatY(20px)",
                    },
                    {
                        marginTop: 0,
                        height: 0,
                    },
                ]}>
                {(show) =>
                    show &&
                    ((props) => (
                        <div style={props} className={c.music}>
                            <div className="icon"></div>
                            <div className="bar">
                                <Typography variant="h4" className="main">
                                    Now Playing: {music.title}
                                </Typography>
                                <Typography variant="subtitle1" className="sub">
                                    Artist: {music.artist}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </Transition>

            <Transition
                items={talents.liveOnLowerThirds && !maps.liveOnLowerThirds}
                // keys
                from={{
                    height: 0,
                    opacity: 0,
                    clipPath: "polygon(-100% 0%, 0% 0%, 0% 100% , -100% 100%)",
                    transform: "translateY(20px)",
                }}
                enter={{
                    height: 150,
                    opacity: 1,
                    clipPath:
                        "polygon(-100% 0%, 100% 0%, 100% 100% , -100% 100%)",
                    transform: "translateY(0px)",
                }}
                leave={[
                    {
                        opacity: 0,
                        clipPath:
                            "polygon(-100% 0%, 0% 0%, 0% 100% , -100% 100%)",
                        transform: "translateY(0px)",
                    },
                    { height: 0 },
                ]}
                delay={1000}>
                {(show) =>
                    show &&
                    ((props) => (
                        <div style={props} className={c.talents}>
                            <Livetalents onLowerThirds={true} />
                        </div>
                    ))
                }
            </Transition>

            <Transition
                items={maps.liveOnLowerThirds}
                // keys
                from={{
                    opacity: 0,
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 200% , 0% 200%)",
                    transform: "translateY(100px)",
                }}
                enter={{
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 200% , 0% 200%)",
                    transform: "translateY(-50px)",
                }}
                leave={{
                    opacity: 0,
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 200% , 0% 200%)",
                    transform: "translateY(200px)",
                }}>
                {(show) =>
                    show &&
                    ((props) => (
                        <div className={c.veto} style={props}>
                            <LiveVeto onLowerThirds={true} />
                        </div>
                    ))
                }
            </Transition>
        </div>
    );
};

export default LiveLowerThirds;
