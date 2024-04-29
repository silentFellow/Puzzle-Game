import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CheraFirst, CheraSecond, CheraThird, CholaFirst, CholaSecond, CholaThird, PandyaFirst, PandyaSecond, PandyaThird } from "@assets";
import { Board, Details } from "@components";

const Puzzle = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if(id === "chera") {
      setImages([
        {
          "id": 0,
          "image": CheraFirst,
          "solved": true,
          "interactable": true
        },
        {
          "id": 1,
          "image": CheraSecond,
          "solved": true,
          "interactable": false
        },
        {
          "id": 2,
          "image": CheraThird,
          "solved": true,
          "interactable": false
        },
      ]);
      setDetails("")
    } else if(id === "chola") {
      setImages([
        {
          "id": 0,
          "image": CholaFirst,
          "solved": false,
          "interactable": true
        },
        {
          "id": 1,
          "image": CholaSecond,
          "solved": false,
          "interactable": false
        },
        {
          "id": 2,
          "image": CholaThird,
          "solved": false,
          "interactable": false
        },
      ]);
      setDetails("")
    } else if(id === "pandya") {
      setImages([
        {
          "id": 0,
          "image": PandyaFirst,
          "solved": false,
          "interactable": true
        },
        {
          "id": 1,
          "image": PandyaSecond,
          "solved": false,
          "interactable": false
        },
        {
          "id": 2,
          "image": PandyaThird,
          "solved": false,
          "interactable": false
        },
      ]);
      setDetails("")
    }
  }, [id])

  useEffect(() => {
    if(!images[0] && !images[1] && !images[2]) return
    if(images[0].solved && images[1].solved && images[2].solved) setShowDetails(true);
  }, [images])

  return (
    // wrap for entire section
    <div className="screen bg-light-bg around">

      {/* details section */}
      { showDetails && <Details details={details} id={id} /> }

      <Board image={images[0]} setImages={setImages} />
      <FaLongArrowAltRight size={36} />
      <Board image={images[1]} setImages={setImages} />
      <FaLongArrowAltRight size={36} />
      <Board image={images[2]} setImages={setImages} />

    </div>
  )
}

export default Puzzle
