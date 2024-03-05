import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataCard(props) {
  const [s, l, t, p] = props.credits;
  const [cardata, setCardata] = useState(
    <div style={{ height: 120, width: 178 }}></div>
  );
  setTimeout(() => {
    setCardata(
      props.title && (
        <Link
          className="push-container"
          to={`/sub/${props.id}`}
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
              backgroundColor: "#fafafa",
            }}
            className="subcard"
          >
            <CardActionArea>
              <CardContent sx={{ p: 1 }}>
                <Typography
                  sx={{
                    fontSize: 10,
                    padding: "1px 4px 0px 4px",
                    backgroundColor: "#307ada",
                    color: "white",
                    borderRadius: 2,
                    display: "inline-block",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  {props.code.toUpperCase()}
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fontSize: 16,
                    color: "#424242",
                    height: "3.9em",
                    overflow: "hidden",
                  }}
                >
                  {props.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 10, mt: 1 }}>
                  {`${s} credits (`}
                  {p ? `${p}P)` : `${l}L+${t}T)`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      )
    );
  }, props.t);
  return cardata;
}
