import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import textureA from "../../assets/BLANK.png";
import textureB from "../../assets/BLANK.png";
import tapeA1 from "../../assets/BLANK.png";
import tapeA2 from "../../assets/BLANK.png";
import tapeB1 from "../../assets/BLANK.png";
import tapeB2 from "../../assets/BLANK.png";
import agents from "../../assets/agents.json";
import defaultAgent from "../../assets/BLANK.png";

const us = makeStyles((theme) => ({
    matchup: {
        position: "relative",
        // width: 1980,
        // height: 1080,
        width: "100%", //
        height: "100%", //
        display: "flex",
        justifyContent: "center", //
        alignItems: "center", //
        // padding: theme.spacing(0, 5.5), //
        "& .a": {
            // left: 44,
            //transform: "rotate(-2deg)",
            "& .texture": { backgroundImage: `url(${textureA})` },

            "& .tape1": {
                position: "absolute",
                height: 109,
                width: 283,
                top: -50,
                left: -50,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${tapeA1})`,
                zIndex: 4,
            },
            "& .tape2": {
                position: "absolute",
                height: 109,
                width: 283,
                bottom: -60,
                left: 380,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${tapeA2})`,
                zIndex: 4,
            },

            "& .headline": {
                flexDirection: "row-reverse",
                "& .logo": {
                    marginLeft: theme.spacing(2),

                    filter: "drop-shadow(-5px 5px 5px rgba(0,0,0,0.5))",
                },
            },
        },

        "& .b": {
            // left: 976,
           // transform: "rotate(1deg)",
            "& .texture": { backgroundImage: `url(${textureB})` },

            "& .tape1": {
                position: "absolute",
                height: 106,
                width: 148,
                right: -40,
                top: -40,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${tapeB1})`,
                zIndex: 4,
            },
            "& .tape2": {
                position: "absolute",
                height: 64,
                width: 131,
                left: -37,
                bottom: -40,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${tapeB2})`,
                zIndex: 4,
            },
            "& .cards": {
                "& .card": {
                    // transform: "scaleX(-1)",
                },
            },

            "& .headline": {
                flexDirection: "row",
                "& .logo": {
                    marginRight: theme.spacing(2),

                    filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))",
                },
            },
        },

        "& .team": {
            // position: "absolute",
            height: 610,
            width: 1650,
            marginRight: 4,
            // top: 237,

            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: theme.spacing(0, 20, 0, 3),
            margin: theme.spacing(0, 2),

            boxShadow: "-5px 5px 20px rgba(0,0,0,.2)",

            "& .texture": {
                position: "center",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                mixBlendMode: "multiply",
                backgroundSize: "cover",
                zIndex: 3,
            },

            "& .headline": {
                display: "flex",
                alignItems: "center",

                transform: "translateY(-5px)",
                zIndex: 2,
                // marginBottom: theme.spacing(2),
                "& .logo": {
                    height: 75,
                    width: 75,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    transform: "translateY(-5px)",
                    // border: "2px solid black",
                    // borderRadius: 10,
                    // backgroundColor: "rgba(0,0,0,.2)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "transparent",
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    fontFamily: "Tungsten",
                    wordBreak: "break-all",
                    lineHeight: "2rem",
                    textAlign: "center",
                },
                "& .team-name": {
                    fontFamily: "Sivar",
                    textAlign: "center",
                    paddingBottom: theme.spacing(1),
                    // fontWeight: "bolder",
                    letterSpacing: 2,
                    zIndex: 2,
                    paddingTop: 2,
                },
            },

            "& .cards": {
                display: "flex",
                justifyContent: "space-between",
                zIndex: 2,
                "& .card": {
                    height: 350,
                    width: 320,
                    backgroundColor: "transparent",
                    // backgroundColor: theme.palette.secondary.main,
                    // backgroundSize: "350%",
                    // backgroundPosition: "center top",
                    backgroundPosition: "0% -5%",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                    transitionProperty: "background-image",
                    transition: "0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                     backgroundImage: `url(${defaultAgent})`,

                    "& .webm": {
                        height: "110%",
                        width: "110%",
                        transform: "translate(0%, 0%)",
                        
                    },
                    // "& .webm": {
                    //     height: "125%",
                    //     width: "auto",
                    //     transform: "translate(-25%, -10%)",
                    // },
                },
            },

            "& .names": {
                display: "flex",
                height: 75,
                marginTop: -200,
                justifyContent: "space-between",
                zIndex: 2,
                "& .name": {
                    width: 208,
                    textAlign: "center",
                    fontFamily: "Anton",
                    color: "transparent",
                    textTransform: "uppercase",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
            },
        },
    },
    logowrap: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1,
        overflow: "hidden",
        opacity: 0.3,
        // mixBlendMode: "multiply",

        "& .logo": {
            position: "absolute",
            width: "100%",
            paddingTop: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        },

        "& .b": {
            bottom: "10%",
            right: "5%",
           // transform: "rotate(-25deg)",
        },
        "& .a": {
            bottom: "0%",
            left: "0%",
           // transform: "rotate(25deg)",
        },
    },
}));

const LiveMatchUp = ({ history }) => {
    const c = us();
    const {
        match_current,
        inverse,
        match_current_player_agents = {
            a: new Array(5).map((item, i) => ({ id: i })),
            b: new Array(5).map((item, i) => ({ id: i })),
        },
    } = useSelector((state) => state.live);
    const { a, b, imgOnly, showLogoAsBG } = match_current_player_agents;
    const {
        EntityParticipantA: ateam,
        EntityParticipantB: bteam,
        aShortname = "TEAMA",
        bShortname = "TEAMB",
    } = match_current;

// ======NOTY =======
 /*
    const gitVideoStyleBitchiz = {
        astra: { transform: "translate(-34%, -20%) scale(0.8)" },
        breach: { transform: "translate(-30%, -11%) scale(0.73)" },
        brimstone: { transform: "translate(-30%, -14.5%) scale(0.7)" },
        chamber: { transform: "translate(-30%, -10%) scale(0.8)" },
        cypher: { transform: "translate(-30%, -11%) scale(0.8)" },
        fade: { transform: "translate(-30%, -20%) scale(0.7)" },
        jett: { transform: "translate(-30%, -13%) scale(0.8)" },
        kayo: { transform: "translate(-30%, -14%) scale(0.7)" },
        neon: { transform: "translate(-25%, -12%) scale(1)" },
        killjoy: { transform: "translate(-30%, -12%) scale(0.8)" },
        omen: { transform: "translate(-30%, -14%) scale(0.7)" },
        phoenix: { transform: "translate(-28%, -12%) scale(1)" },
        raze: { transform: "translate(-30%, -11%) scale(0.8)" },
        reyna: { transform: "translate(-30%, -21%) scale(0.8)" },
        sage: { transform: "translate(-30%, -12%) scale(0.77)" },
        skye: { transform: "translate(-30%, -16%) scale(0.75)" },
        sova: { transform: "translate(-30%, -13%) scale(.8)" },
        viper: { transform: "translate(-30%, -12.5%) scale(0.78)" },
        yoru: { transform: "translate(-30%, -12%) scale(0.75)" },
    };
*/
     // ======ZOOMED CODE=======

    const gitVideoStyleBitchiz = {
        astra: { transform: "translate(0%, -0%) scale(1.2)" },
        breach: { transform: "translate(0%, -0%) scale(1.2)" },
        brimstone: { transform: "translate(0%, -0%) scale(1.2)" },
        chamber: { transform: "translate(0%, -0%) scale(1.2)" },
        cypher: { transform: "translate(0%, -0%) scale(1.2)" },
        fade: { transform: "translate(0%, -0%) scale(1.2)" },
        jett: { transform: "translate(0%, -0%) scale(1.2)" },
        kayo: { transform: "translate(0%, -0%) scale(1.2)" },
        neon: { transform: "translate(0%, -0%) scale(1.2)" },
        killjoy: { transform: "translate(0%, -0%) scale(1.2)" },
        omen: { transform: "translate(0%, -0%) scale(1.2)" },
        phoenix: { transform: "translate(0%, -0%) scale(1.2)" },
        raze: { transform: "translate(0%, -0%) scale(1.2)" },
        reyna: { transform: "translate(0%, -0%) scale(1.2)" },
        sage: { transform: "translate(0%, -0%) scale(1.2)" },
        skye: { transform: "translate(0%, -0%) scale(1.2)" },
        sova: { transform: "translate(0%, -0%) scale(1.2)" },
        viper: { transform: "translate(0%, -0%) scale(1.2)" },
        yoru: { transform: "translate(0%, -0%) scale(1.2)" },
    };

    const gitImageStyleBitchiz = {
        astra: { backgroundPosition: "55% 12%", backgroundSize: "235%" },
        breach: { backgroundPosition: "40% -2%", backgroundSize: "235%" },
        brimstone: { backgroundPosition: "50% 4%", backgroundSize: "235%" },
        chamber: { backgroundPosition: "51% -1%", backgroundSize: "270%" },
        cypher: { backgroundPosition: "50% 2%", backgroundSize: "240%" },
        fade: { backgroundPosition: "43% 2%", backgroundSize: "220%" },
        jett: { backgroundPosition: "30% 2%", backgroundSize: "245%" },
        kayo: { backgroundPosition: "44% 2%", backgroundSize: "245%" },
        neon: { backgroundPosition: "38% 10%", backgroundSize: "255%" },
        killjoy: { backgroundPosition: "65% 0%", backgroundSize: "160%" },
        omen: { backgroundPosition: "48% 1%", backgroundSize: "240%" },
        raze: { backgroundPosition: "47% 8%", backgroundSize: "270%" },
        reyna: { backgroundPosition: "60% 19%", backgroundSize: "280%" },
        sage: { backgroundPosition: "50% 3%", backgroundSize: "230%" },
        skye: { backgroundPosition: "63% 3%", backgroundSize: "220%" },
        phoenix: { backgroundPosition: "44% -1%", backgroundSize: "245%" },
        sova: { backgroundPosition: "55% -2%", backgroundSize: "240%" },
        viper: { backgroundPosition: "42% -2%", backgroundSize: "260%" },
        yoru: { backgroundPosition: "50% 2%", backgroundSize: "260%" },
        
		
    };

    const getAgentVideo = (id) => {
        try {
            let src = require(`../../assets/${agents[id]}.webm`);
            return src;
        } catch (err) {
            return null;
        }
    };

    const getAgentImage = (id) => {
        try {
            let src = require(`../../assets/${agents[id]}.png`);
            return src;
        } catch (err) {
            return null;
        }
    };

    const getTeamLogoBG = (name = "") => {
        try {
            // prettier-ignore
            let src = require(`../../assets/${name.trim().toLowerCase().replace(/ /gi, "_")}.png`);
            console.log(name);
            return src;
        } catch (err) {
            console.log(err);
            return null;
        }
    };

    const gitTeamLogo = (profile) => {
        // prettier-ignore
        try {
            let src = require(`../../assets/${profile?.Nickname.trim().toLowerCase().replace(/ /gi, '_')}.png`);
            console.log(src);
            return src;
        } catch (err) {
            return profile?.LogoUrl;
        }
    };

    return (
        <div className={c.matchup}>
            <div className="team a">
                {/* prettier-ignore */}
                <div className="headline">
                   
                  
                </div>
                <div className="cards">
                    {a.map((player) => (
                        <div key={player.id} className="player">
                            {/* prettier-ignore */}
                            <div className="card"
                                style={{
                                    backgroundImage:
                                        player.agent && !getAgentVideo(player.agent)
                                            ? `url(${getAgentImage(player.agent)})`
                                            : imgOnly && player.agent
                                            ? `url(${getAgentImage(player.agent)})`
                                            : !player.agent 
                                            ? `url(${defaultAgent})`
                                            : "none",
                                    backgroundColor: inverse ? 'transparent' :  'transparent',
                                    ...gitImageStyleBitchiz[agents[player.agent]] || ''
                                }}>
                                {!imgOnly && (
                                    <video
                                        key={player.agent}
                                        loop
                                        autoPlay
                                        className="webm"
                                        style={
                                            gitVideoStyleBitchiz[
                                                agents[player.agent]
                                            ] || {}
                                        }>
                                        <source
                                            src={getAgentVideo(player?.agent)}
                                            type="video/webm"
                                        />
                                    </video>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="names">
                    {a.map((player) => (
                        <Typography
                            color="textSecondary"
                            key={player.id}
                            variant="h4"
                            className="name">
                            {player.name}
                        </Typography>
                    ))}
                </div>

                {/* prettier-ignore */}
                <div className={c.logowrap}>
                    <div className="logo a"
                        style={{
                            backgroundImage: showLogoAsBG ? `url(${getTeamLogoBG(ateam?.Profile?.Nickname)})` : '',
                            backgroundColor: !gitTeamLogo(ateam?.Profile) && (inverse ? 'transparent' : '#transparent')
                        }}></div>
                </div>
                <div className="texture"></div>
                <div className="tape1"></div>
                <div className="tape2"></div>
                <div className="team b">
                {/* prettier-ignore */}

                <div className="headline">
                    
                </div>

                <div className="cards">
                    {b.map((player) => (
                        <div key={player.id} className="player">
                            {/* prettier-ignore */}
                            <div className="card"
                                style={{
                                    backgroundImage:
                                        player.agent && !getAgentVideo(player.agent)
                                            ? `url(${getAgentImage(player.agent)})`
                                            : imgOnly && player.agent
                                            ? `url(${getAgentImage(player.agent)})`
                                            : !player.agent 
                                            ? `url(${defaultAgent})`
                                            : "none",
                                    backgroundColor: inverse ? 'transparent' : 'transparent',
                                    ...gitImageStyleBitchiz[agents[player.agent]] || ''
                                }}>
                                {!imgOnly && (
                                    <video
                                        key={player.agent}
                                        loop
                                        autoPlay
                                        className="webm"
                                        style={
                                            gitVideoStyleBitchiz[
                                                agents[player.agent]
                                            ] || {}
                                        }>
                                        <source
                                            src={getAgentVideo(player?.agent)}
                                            type="video/webm"
                                        />
                                    </video>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="names">
                    {b.map((player) => (
                        <Typography
                            color="textSecondary"
                            key={player.id}
                            variant="h4"
                            className="name">
                            {player.name}
                        </Typography>
                    ))}
                </div>

                {/* prettier-ignore */}
                <div className={c.logowrap}>
                    <div className="logo b"
                        style={{
                            backgroundImage: showLogoAsBG ? `url(${getTeamLogoBG(bteam?.Profile?.Nickname)})` : '',
                            backgroundColor: !gitTeamLogo(bteam?.Profile) && (!inverse ? 'transparent' : 'transparent')
                        }}></div>
                </div>

                <div className="texture"></div>
                <div className="tape1"></div>
                <div className="tape2"></div>
            </div>
            </div>

            
        </div>
    );
};

export default withRouter(LiveMatchUp);
