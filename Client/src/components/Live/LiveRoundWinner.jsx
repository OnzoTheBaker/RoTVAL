import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Paper from "../../assets/BG.jpg";
import header from "../../assets/winner3.png";
import { Spring, Transition } from "react-spring/renderprops";
import { config } from "react-spring";
import agents from "../../assets/agents.json";
import poop from "../../assets/111111.png";


const useStyles = makeStyles((theme) => ({
    roundWinner: {
        width: 1920,
        height: 1080,

        "& .container": {
            // backgroundColor: "#e72e4b",
            height: "100%",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: theme.spacing(5),

            "& .bg": {
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                backgroundImage: `url(${poop})`,

                //padding: theme.spacing(5),

            },

            "& .content": {
                flex: 1,
                display: "flex",
                position: "relative",
                // alignItems: "flex-end",
                justifyContent: "center",
                // overflow: "hidden",
                zIndex: 10,
                "& .players": {
                    position: "absolute",
                    bottom: 50,
                    display: "flex",
                    height: "55%",
                    perspective: "0px",
                    perspectiveOrigin: "center",
                    transform: "translateY(-40px)",
                    // filter: "drop-shadow(0px 10px 0px #ff4656)",
                    "& .player": {
                        // border: "1px solid black",
                        width: 300,
                        // margin: "0px 20px",
                        "&:nth-of-type(3)": {
                            transform: "translateZ(500px)",
                            zIndex: 99,
                        },
                        "&:nth-of-type(2)": {
                            transform: "translateZ(300px)",
                            zIndex: 88,
                            // filter: "brightness(90%)",
                        },
                        "&:nth-of-type(4)": {
                            transform: "translateZ(300px)",
                            zIndex: 88,
                            // filter: "brightness(90%)",
                        },
                        "&:nth-of-type(1)": {
                            transform: "translateZ(200px)",
                            zIndex: 77,
                            // filter: "brightness(70%)",
                        },

                        "&:nth-of-type(5)": {
                            transform: "translateZ(200px)",
                            zIndex: 77,
                            // filter: "brightness(70%)",
                        },
                    },

                    "& .agent": {
                        height: "100%",
                        width: "100%",
                        backgroundPosition: "bottom center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100% auto",
                        transform: "scale(1.9)",
                    },
                },

                "& .team-logo": {
                    position: "absolute",
                    top: "5%",
                    height: 400,
                    width: 400,
                    backfaceVisibility: "hidden",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                   // marginLeft: -25,
                    filter: "drop-shadow(0px 10px 10px rgba(0,0,0,.5))",
                },

                "& .team-logo1": {
                    position: "absolute",
                    top: "65%",
                    height: 150,
                    width: 150,
                    backfaceVisibility: "hidden",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                   // marginLeft: -25,
                    filter: "drop-shadow(0px 10px 10px rgba(0,0,0,.5))",
                },
                "& .bg1": {
                    height: 1080,
                    width: 1920,
                    backgroundImage: `url(${header})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        marginBottom: -230,
                },

                "& .details": {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    marginTop: -40,
                    alignItems: "center",
                    filter: "drop-shadow(0px 10px 5px rgba(0,0,0,.5))",
                    
                    
                    
                    "& .headline": {
                        //padding: theme.spacing(0, 0),
                        //marginRight: 75,
                        marginTop: 0,
                        fontSize: 75,
                        fontFamily: "The Neue",
                    
                        
                        //backgroundColor: "#e72e4b",
                        zIndex: 55,

    
                    },
                    "& .subtext": {
                        overflow: "visible",
                        zIndex: 56,
                       // marginLeft: 75,
                       fontFamily: "The Neue",
                       fontStretch: "expanded",
                        marginTop: 0,
                        WebkitTextFillColor: "transparent",
                      WebkitTextStroke: "white",
                      WebkitTextStrokeWidth: "2px",
                        fontSize: 90,
                        //marginTop: theme.spacing(1),
                        //padding: theme.spacing(1, 0),
                       // backgroundColor: "#212121",
                    },
                },
            },
        },
    },
}));

const KDRRoundWinner = () => {
    const classes = useStyles();
    const {
        round_winner = { side: "a" },
        match_current_player_agents = { a: [], b: [] },
        match_current
    } = useSelector((state) => state.live);

const gitImageStyle = {
    astra: { transform: "scale(1.9) translateY(-7%) translateX(-6%)" },
    breach: { transform: "scale(1.9) translateX(1%)" },
    brimstone: { transform: "scale(1.9) translateY(-3%)"  },
    chamber: { transform: "scale(1.9) translateY(0%)" },
    cypher: { transform: "scale(1.9) translateY(0%)" },
    fade: { transform: "scale(2) translateY(0%)" },
    jett: { transform: "scale(1.9) translateX(0%) " },
    kayo: { transform: "scale(1.9) translateX(10%)" },
    killjoy: {
        transform: "scale(1.5) translate(-4%, 7%)",
        backgroundSize: "contain",},

    neon: { transform: "scale(1.9) translateY(-4%) translateX(13%)" },
    // omen: { backgroundPosition: "50% -5%" },
    phoenix: { transform: "scale(1.9) translateX(3%)" },
    raze: { transform: "scale(1.9) translateY(-5%)" },
    reyna: { transform: "scale(1.9) translate(-5%, -11%)" },
    sage: { transform: "scale(1.9) translateY(0%)" },
    skye: { transform: "scale(1.9) translateY(-1%) translateX(-5%)" },
    sova: { transform: "scale(1.9) translateX(-5%)" },
    yoru: { transform: "scale(1.9) translateX(-5%)" },
    viper: { transform: "scale(1.9) translateX(5%)" },

      
    };
    const getAgentImage = (id) => {
        try {
            let src = require(`../../assets/${agents[id]}.png`);
            return src;
        } catch (err) {
            return null;
        }
    };

    const gitTeamLogo = (profile) => {
        // prettier-ignore
        try {
            let src = require(`../../assets/${profile?.Nickname.trim().toLowerCase().replace(/ /gi, '_')}.png`);
            return src;
        } catch (err) {
            return profile?.LogoUrl;
        }
    };

    const getScore = () => {
        if(round_winner?.side === 'a'){
            return `${match_current?.EntityParticipantA?.Score} - ${match_current?.EntityParticipantB?.Score} — `
        } else {
            return `${match_current?.EntityParticipantB?.Score} - ${match_current?.EntityParticipantA?.Score} — `
        }
    }

    return (
        <div className={classes.roundWinner}>
            
            <Transition
                items={Boolean(round_winner)}
                from={{ opacity: 0 }}
                enter={{
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                }}
                leave={{
                    opacity: 0,
                    clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
                }}>
                {(items) =>
                    items &&
                    ((props) => (
                        <div style={props} className="container">
                            <Spring
                                from={{
                                    opacity: 0,
                                    clipPath:
                                        "polygon( 100% 0%, 0% 0%, 0% 0&,  100% 0%)",
                                }}
                                to={{
                                    opacity: 1,
                                    clipPath:
                                        "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                                }}
                                delay={10}>
                                {(props) => (
                                    <div style={props} className="bg">
                                   { /*   <video width="1920" height="1080" src={poop} autoPlay muted> </video>*/}
                                        
                                    </div>
                                )}
                            </Spring>
                            <div className="content">
                                <Spring
                                    from={{
                                        transform: "translateY(0px)",
                                        opacity: 0,
                                    }}
                                    to={{
                                        transform: "translateY(0px)",
                                        opacity: 1,
                                    }}
                                    config={config.slow}>
                                    {(props) => (
                                        <div
                            /*                className="team-logo"
                                            style={{
                                         ...props,
                                                backgroundImage: `url(${gitTeamLogo(
                                                    round_winner?.profile
                                                )})`,
                                            }}*/> </div>
                                    )}
                                </Spring>

                                <Transition
                                    items={Boolean(round_winner)}
                                    from={{
                                        perspective: "0px",
                                        opacity: 0,
                                    }}
                                    enter={[
                                        {
                                            perspective: "1px",
                                            opacity: 1,
                                            config: config.fast,
                                        },
                                        {
                                            perspective: "1400px",
                                        },
                                    ]}
                                    leave={{ opacity: 0 }}
                                    config={{ friction: 300 }}
                                    delay={100}>
                                    {(items) =>
                                        items &&
                                        ((props) => (
                                            <div
                                                style={props}
                                                className="players">
                                                {round_winner &&
                                                    match_current_player_agents[
                                                        round_winner?.side
                                                    ].map((player, i) => (
                                                        <div className="player">
                                                            <div
                                                                className="agent"
                                                                style={{
                                                                    backgroundImage: `url(${getAgentImage(
                                                                        player.agent
                                                                    )})`,
                                                                    ...gitImageStyle[
                                                                        agents[
                                                                            player
                                                                                .agent
                                                                        ]
                                                                    ],
                                                                }}></div>
                                                            <div className="name">
                                                                {}
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ))
                                    }
                                </Transition>

                                {/* ============== Details ============== */}

                                

                                <Spring
                                    from={{
                                        transform: "translateY(900px)",
                                        opacity: 0,
                                    }}
                                    to={{
                                        transform: "translateY(0px)",
                                        transform: "translateZ(0px)",
                                        opacity: 1,
                                    }}
                                    delay={800}>
                                    {(props) => (
                                        <div style={props} className="details">
                                            <div
                                            className="bg1"
                                            style={{
                                                ...props,
                                                backgroundImage: `url(${header})`,
                                            }}></div>
                                                                   <div
                                            className="team-logo1"
                                            style={{
                                                ...props,
                                                backgroundImage: `url(${gitTeamLogo(
                                                    round_winner?.profile
                                                )})`,
                                            }}></div>
                                            <Typography
                                                className="headline"
                                                variant="h1"
                                                color="initial">
                                                {round_winner?.profile
                                                    ?.DisplayName}
                                            </Typography>
                                            <Typography
                                                className="subtext"
                                                variant="h4">V I C T O R Y</Typography>
                                        </div>
                                    )}
                                    
                                </Spring>
                            </div>
                        </div>
                    ))
                }
            </Transition>
        </div>
    );
};

 /*           <Typography
    className="subtext"
    variant="h4">{round_winner?.isFinalGame && getScore()}{`VS ${
    round_winner?.loser?.DisplayName
}${!round_winner?.isFinalGame ? ` — Game ${
    match_current
        ?.EntityParticipantA
        ?.Score +
    match_current
        ?.EntityParticipantB?.Score
} 
` : ''}`}</Typography>}*/

export default KDRRoundWinner;
