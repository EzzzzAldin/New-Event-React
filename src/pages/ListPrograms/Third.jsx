import Program from "../../components/Programs/Program";
import ImageF31 from "../../shared/assets/imags/thirdday-1.jpg";
import ImageF32 from "../../shared/assets/imags/thirdday-2.jpg";
import ImageF33 from "../../shared/assets/imags/thirdday-3.jpg";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    image: ImageF31,
    time: "09:00 AM",
    location: "Room 2",
    title: "Back-End Dev",
    author: "By Maximilian",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p2",
    image: ImageF32,
    time: "12:00 PM",
    location: "Room 8",
    title: "Math",
    author: "By Alex",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p3",
    image: ImageF33,
    time: "02:00 PM",
    location: "Room 1",
    title: "Introduction To Circuit",
    author: "By Said",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
];

const Third = () => {
  const programs = DUMMY_PROGRAMS.map((program) => (
    <Program
      key={program.id}
      image={program.image}
      time={program.time}
      location={program.location}
      title={program.title}
      author={program.author}
      description={program.description}
    />
  ));

  return <>{programs}</>;
};

export default Third;
