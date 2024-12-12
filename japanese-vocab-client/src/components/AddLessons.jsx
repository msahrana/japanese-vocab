import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddLessons = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const lesson = form.lesson.value;
    const name = form.name.value;
    const japanes1 = form.japanes1.value;
    const english1 = form.english1.value;
    const japanes2 = form.japanes2.value;
    const english2 = form.english2.value;
    const japanes3 = form.japanes3.value;
    const english3 = form.english3.value;
    const japanes4 = form.japanes4.value;
    const english4 = form.english4.value;

    try {
      const newLesson = {
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
      };
      const {data} = await axios.post(
        "http://localhost:5000/lesson",
        newLesson
      );
      console.log(data);
      toast.success("Lesson Create Successfully!");
      form.reset();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.massage);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:ml-9">
      <h1 className="text-3xl font-bold text-center my-10">Add Lesson:</h1>
      <form
        onSubmit={handleSubmit}
        className="w-2/3 mx-auto border-2 p-6 rounded-md space-y-5"
      >
        <div className="flex flex-col md:flex-row justify-between w-full ">
          <div className="w-full mr-5">
            <label htmlFor="lesson">Lesson Number</label>
            <input
              type="number"
              name="lesson"
              placeholder="Lesson Number"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>

          <div className="w-full mr-5">
            <label htmlFor="name">Lesson Name</label>
            <input
              type="text"
              name="name"
              placeholder="Lesson Name"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
        </div>

        {/* Vocabulary data below */}
        {/* Card-1 */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full mr-5">
            <label htmlFor="name">Vocabulary-1</label>
            <input
              type="text"
              name="japanes1"
              placeholder="Japanese 1st Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Vocabulary-1</label>
            <input
              type="text"
              name="english1"
              placeholder="English 1st Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
        </div>
        {/* Card-2 */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full mr-5">
            <label htmlFor="name">Vocabulary-2</label>
            <input
              type="text"
              name="japanes2"
              placeholder="Japanese 2nd Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Vocabulary-2</label>
            <input
              type="text"
              name="english2"
              placeholder="English 2nd Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
        </div>
        {/* Card-3 */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full mr-5">
            <label htmlFor="name">Vocabulary-3</label>
            <input
              type="text"
              name="japanes3"
              placeholder="Japanese 3rd Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Vocabulary-3</label>
            <input
              type="text"
              name="english3"
              placeholder="English 3rd Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
        </div>
        {/* Card-4 */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full mr-5">
            <label htmlFor="name">Vocabulary-4</label>
            <input
              type="text"
              name="japanes4"
              placeholder="Japanese 4th Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="name">Vocabulary-4</label>
            <input
              type="text"
              name="english4"
              placeholder="English 4th Vocabulary"
              required
              className="border rounded pl-2 px-2 py-1 w-full mt-1 mb-2"
            />
          </div>
        </div>
        {/* Button */}
        <div>
          <button className="btn bg-[#B0A289] w-full text-xl text-white">
            Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLessons;
