import { Divider } from "@mui/material";
import GitHubButton from "react-github-btn";

export default function Footer({ visitCount }) {
  return (
    <>
      <div
        style={{
          height: '4em'
        }} />
      <div
        style={{
          // height: "10em",
          color: "gray",
          textAlign: "center",
          width: "100%",
          fontSize: "10px",
          position: "absolute",
          // position: 'sticky',
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
          marginBottom: '2em'
        }}
      >
        <Divider sx={{ mb: 1 }} />
        <span>All information displayed belongs to NIT Hamirpur. This site is not affiliated with the institute. Made with ❤️ by{" "}
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
      </div></>
  );
}
