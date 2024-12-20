import axios from "axios";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import useRole from "../hooks/useRole";

const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "ja-JP"; // Japanese language
  window.speechSynthesis.speak(utterance);
};

const LessonCard = ({les, onDelete}) => {
  const [role] = useRole();

  const {
    _id,
    lesson,
    name,
    japanes1,
    japanes2,
    japanes3,
    japanes4,
    english1,
    english2,
    english3,
    english4,
  } = les || {};

  const deleteLesson = async () => {
    if (!window.confirm("Are you sure you want to delete this lesson?")) {
      return;
    }
    try {
      const response = await axios.delete(
        `https://japanese-vocab-server-neon.vercel.app/lesson/${_id}`
      );
      if (response.status === 200) {
        toast.success("Lesson deleted successfully!");
        onDelete(_id);
      } else {
        alert("Failed to delete the lesson. Try again.");
      }
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert(
        "An error occurred while deleting the lesson. Check the console for details."
      );
    }
  };

  return (
    <div className="container mx-auto p-10 border-2 rounded-md bg-blue-50">
      <h1 className="text-3xl text-green-500 text-center font-bold">
        Lesson: {lesson}
      </h1>
      <h1 className="text-2xl font-bold text-center mb-6">
        Vocabulary Pronunciation
      </h1>
      <p className="text-center text-3xl text-gray-600 my-5">{name}</p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Vocabulary Cards-1 */}
        <div
          className="card border border-green-300 p-3 cursor-pointer items-center w-36"
          onClick={() => pronounceWord(japanes1)} // Use the actual value
        >
          <h2 className="text-xl font-semibold">{japanes1}</h2>
          <p>{english1}</p>
        </div>

        {/* Vocabulary Cards-2 */}
        <div
          className="card border border-green-300 p-3 cursor-pointer items-center w-36"
          onClick={() => pronounceWord(japanes2)} // Use the actual value
        >
          <h2 className="text-xl font-semibold">{japanes2}</h2>
          <p>{english2}</p>
        </div>

        {/* Vocabulary Cards-3 */}
        <div
          className="card border border-green-300 p-3 cursor-pointer items-center w-36"
          onClick={() => pronounceWord(japanes3)} // Use the actual value
        >
          <h2 className="text-xl font-semibold">{japanes3}</h2>
          <p>{english3}</p>
        </div>

        {/* Vocabulary Cards-4 */}
        <div
          className="card border border-green-300 p-3 cursor-pointer items-center w-36"
          onClick={() => pronounceWord(japanes4)} // Use the actual value
        >
          <h2 className="text-xl font-semibold">{japanes4}</h2>
          <p>{english4}</p>
        </div>
      </div>
      {role === "Admin" && (
        <div className="flex flex-wrap justify-between mt-5">
          <Link
            className="btn bg-orange-200 px-4 py-1 w-1/2"
            to={`/dashboard/update-lesson/${les._id}`}
          >
            Edit
          </Link>

          <button
            onClick={deleteLesson}
            className="btn bg-red-500 px-4 py-1 w-1/2"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonCard;
