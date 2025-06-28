import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataCard(props) {
  const { c } = props.credits;
  const [cardata, setCardata] = useState(
    <div style={{ height: 120, width: 178 }}></div>
  );
  setTimeout(() => {
    setCardata(
      props.title && (
        <Link
          className="push-container"
          to={`/${props.code.toLowerCase()}`}
          style={{ textDecoration: "none" }}
        >
          <Card
            sx={{
              width:
                window.innerWidth > 385
                  ? 175
                  : window.innerWidth > 340
                    ? 150
                    : "90vw",
              height: 116,
              margin: 0.25,
              // backgroundColor: "#fafafa",
              '&:hover #sub-code': {
                backgroundColor: 'var(--mui-pallete-secondary-main)',
              }
            }}
            className="subcard"
          >
            <CardActionArea>
              <CardContent sx={{ p: 1 }}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: 16,
                    // color: "#424242",
                    height: "5em",
                    overflow: "hidden",
                  }}
                >
                  {props.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    padding: "1px 4px 0px 4px",
                    backgroundColor: 'var(--mui-pallete-primary-main)',
                    color: "white",
                    borderRadius: 2,
                    display: "inline-block",
                    transition: 'background-color 0.2s',
                  }}
                  id="sub-code"
                  color="text.secondary"
                  gutterBottom
                >
                  {props.code.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 10, mx: 1, mt: 1, display: 'inline-block', color: 'gray' }}>•</Typography>
                <Typography variant="body2" sx={{ fontSize: 10, mt: 1, display: 'inline-block' }}>
                  {`${c} credits`}
                  {/* {p ? `${p}P)` : `${l}L+${t}T)`} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link >
      )
    );
  }, props.t);
  return cardata;
}
