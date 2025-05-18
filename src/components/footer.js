import { Divider } from "@mui/material";
import GitHubButton from "react-github-btn";

export default function Footer({ visitCount }) {
  return (
    <div
      style={{
        height: "0.5em",
        color: "gray",
        textAlign: "center",
        width: "100%",
        fontSize: "10px",
        position: "absolute",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1em",
      }}
    >
      <Divider sx={{ mb: 1 }} />
      <span>All information displayed belongs to NIT Hamirpur. Made with ❤️ by{" "}
        <a
          href="https://instagram.com/mohak_g22"
          style={{ textDecoration: "none", color: "gray" }}
        >
          Mohak
        </a>
        .</span>
      <GitHubButton
        href="https://github.com/mohakgupt/nith-syllabus"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star mohakgupt/nith-syllabus on GitHub"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
      >
        Star
      </GitHubButton>
      <div id="visits">Visits: {visitCount}</div>
    </div>
  );
}
