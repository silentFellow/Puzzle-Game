import { useNavigate } from "react-router-dom"

const Details = ({ details, id }) => {
  const navigate = useNavigate();
  const lor = "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."

  return (
    <div className="z-20 fixed screen bg-gray-600 center gap-3">
      <div className="h-[33rem] w-[33rem] bg-light-bg rounded-lg p-6">

        {/* details */}
        <div className="w-full h-[90%] text-light-secondary font-bold overflow-auto">
          {details || lor}
        </div>

        {/* button */}
        <div className="w-full h-[10%] flex justify-end items-center">
          <button
            className="p-2 px-4 bg-light-secondary text-light-primary rounded-md hover:opacity-80"
            onClick={() => navigate(`/quiz/${id}`)}
          >
            Move To Quiz
          </button>
        </div>

      </div>
    </div>
  )
}

export default Details
