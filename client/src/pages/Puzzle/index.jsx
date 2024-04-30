import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CheraFirst, CheraSecond, CheraThird, CholaFirst, CholaSecond, CholaThird, PandyaFirst, PandyaSecond, PandyaThird } from "@assets";
import { Board, Details } from "@components";

const Puzzle = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showFinished, setShowFinished] = useState(false);

  useEffect(() => {
    if(id === "chera") {
      setImages([
        {
          "id": 0,
          "image": CheraFirst,
          "solved": false,
        },
        {
          "id": 1,
          "image": CheraSecond,
          "solved": false,
        },
        {
          "id": 2,
          "image": CheraThird,
          "solved": false,
        },
      ]);
      setDetails("")
    } else if(id === "chola") {
      setImages([
        {
          "id": 0,
          "image": CholaFirst,
          "solved": false,
        },
        {
          "id": 1,
          "image": CholaSecond,
          "solved": false,
        },
        {
          "id": 2,
          "image": CholaThird,
          "solved": false,
        },
      ]);
      setDetails("")
    } else if(id === "pandya") {
      setImages([
        {
          "id": 0,
          "image": PandyaFirst,
          "solved": false,
        },
        {
          "id": 1,
          "image": PandyaSecond,
          "solved": false,
        },
        {
          "id": 2,
          "image": PandyaThird,
          "solved": false,
        },
      ]);
      setDetails("")
    }

  }, [id])

  useEffect(() => {
    if(images.length === 0) return
    if(images.some(img => img.solved)) setShowFinished(true);
    else setShowFinished(false);

    if(images.every(img => img.solved)) setShowDetails(true);
    else setShowDetails(false);
  }, [images])

  return (
    // wrap for entire section
    <div className="screen bg-light-bg flex">

      {/* details section */}
      { showDetails && <Details details={details} id={id} /> }

      <div className="screen center">
        { !images[0]?.solved && <Board image={images[0]} setImages={setImages} /> }
        { images[0]?.solved && !images[1]?.solved && <Board image={images[1]} setImages={setImages} /> }
        { images[1]?.solved && !images[2]?.solved && <Board image={images[2]} setImages={setImages} /> }
      </div>

    </div>
  )
}

export default Puzzle
