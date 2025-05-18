import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // const [level, setLevel] = useState(0)

  // const [prev, setPrev] = useState(0)
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
    // let body=document.querySelector("body")
    // console.log(pathname.length, prev)
    // if(pathname.length > prev){
    //   body.style.transform="scale(0.96)"
    //   body.classList.add("zoom-body")
    //   setTimeout(()=>{
    //     body.style.transform="none"
    //     body.classList.remove("zoom-body")
    //   }, 190)
    // }
    // else{
    //   body.style.transform="scale(1.1)"
    //   body.classList.add("zoom-body")
    //   setTimeout(()=>{
    //     body.style.transform="none"
    //     body.classList.remove("zoom-body")
    //   }, 190)
    //   // setLevel(level-1)
    // }
    // setPrev(pathname.length)
  }, [pathname]);

  return null;
}