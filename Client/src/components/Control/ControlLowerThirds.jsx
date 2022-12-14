import React, { useState, useContext } from "react";
import {
    makeStyles,
    TextField,
    Button,
    Paper,
    Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { wsContext } from "../WebsocketProvider";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const q = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",

        "& .section": {
            backgroundColor: "transparent",
        },
    },

    apply: {
        margin: theme.spacing(2, 0),
    },
}));

const ControlLowerThirds = () => {
    const ws = useContext(wsContext);
    const live = useSelector((state) => state.live);
    const { lower_thirds, talents, music } = live;
    const [state, set] = useState({
        headline: "Community Rambulan",
        subtext: "Like, share the stream publicly with the hashtags - #ValorantPH #RambulanSaVPH #RiotSEACommunities & tag 3 friends in the comments sections for a chance to win Php 500 GCash. 3 winners will be chosen at the end of the stream!",
        live: false,
    });
    const [t, tt] = useState({
        casters: [],
        observers: [],
        live: false,
    });

    const [m, setM] = useState({
        title: "KDR Retrowave",
        artist: "$aucepekt",
        live: false,
    });

    useEffect(() => {
        if (!lower_thirds) return;
        set(lower_thirds);
    }, [lower_thirds]);

    useEffect(() => {
        if (!music) return;
        setM(music);
    }, [music]);

    useEffect(() => {
        if (talents) {
            tt(talents);
        }
    }, [talents]);

    const setHeadline = ({ currentTarget: { value } }) => {
        set((state) => ({ ...state, headline: value }));
    };
    const setSubtext = ({ currentTarget: { value } }) => {
        set((state) => ({ ...state, subtext: value }));
    };

    const setLive = ({ currentTarget: { value } }) => {
        set((state) => ({ ...state, live: !state.live }));
    };

    const apply = () => {
        ws.set_live_settings({ lower_thirds: state });
    };

    const goLiveT = () => {
        ws.set_live_settings({
            talents: {
                ...t,
                liveOnLowerThirds: !t.liveOnLowerThirds,
                live: !t.liveOnLowerThirds ? true : false,
            },
        });
    };

    const setMusic = ({ currentTarget: { value, name } }) => {
        setM((o) => ({ ...o, [name]: [value] }));
    };
    const goLiveM = () => {
        ws.set_live_settings({
            music: {
                ...m,
                live: !m.live,
            },
        });
    };

    const c = q();
    return (
        <div className={c.root}>
            <TextField
                variant="filled"
                className="headline"
                label={
                    <span style={{ color: "rgba(255,255,255,.5)" }}>
                        headline
                    </span>
                }
                value={state.headline}
                onChange={setHeadline}
            />
            <TextField
                variant="filled"
                className="headline"
                multiline
                label={
                    <span style={{ color: "rgba(255,255,255,.5)" }}>
                        Sub Text
                    </span>
                }
                value={state.subtext}
                onChange={setSubtext}
            />

            <Button
                onClick={setLive}
                className="live"
                variant="contained"
                startIcon={
                    state.live ? <CheckCircleIcon /> : <HighlightOffIcon />
                }
                color={state.live ? "secondary" : "default"}>
                {state.live ? "Live Now" : "Go Live"}
            </Button>

            <Button
                color="primary"
                variant="contained"
                className={c.apply}
                onClick={apply}>
                Apply
            </Button>

            <Paper elevation={3} className="section">
                <Typography variant="subtitle1">Talents</Typography>
                <Button
                    color={t.liveOnLowerThirds ? "primary" : "default"}
                    variant="outlined"
                    className={c.apply}
                    onClick={goLiveT}
                    startIcon={
                        t.liveOnLowerThirds ? (
                            <CheckCircleIcon />
                        ) : (
                            <HighlightOffIcon />
                        )
                    }>
                    {t.liveOnLowerThirds ? "Now Live" : "Go Live"}
                </Button>
            </Paper>
            <Paper elevation={3} className="section" style={{ marginTop: 16 }}>
                <Typography variant="subtitle1">Music</Typography>
                <TextField
                    variant="filled"
                    className="headline"
                    label={
                        <span style={{ color: "rgba(255,255,255,.5)" }}>
                            Title
                        </span>
                    }
                    value={m.title}
                    name="title"
                    onChange={setMusic}
                />
                <TextField
                    variant="filled"
                    className="headline"
                    label={
                        <span style={{ color: "rgba(255,255,255,.5)" }}>
                            Artist
                        </span>
                    }
                    value={m.artist}
                    name="artist"
                    onChange={setMusic}
                />
                <Button
                    color={m.live ? "primary" : "default"}
                    variant="outlined"
                    className={c.apply}
                    onClick={goLiveM}
                    startIcon={
                        m.live ? <CheckCircleIcon /> : <HighlightOffIcon />
                    }>
                    {m.live ? "Now Live" : "Go Live"}
                </Button>
            </Paper>
        </div>
    );
};

export default ControlLowerThirds;
