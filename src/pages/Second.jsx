import Program from "../components/Programs/Program";
import ImageF21 from "../shared/assets/imags/secondday-1.jpg";
import ImageF22 from "../shared/assets/imags/secondday-2.jpg";
import ImageF23 from "../shared/assets/imags/secondday-3.jpg";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    image: ImageF21,
    time: "09:00 AM",
    location: "Room 7",
    title: "Image Processing",
    author: "By Reem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p2",
    image: ImageF22,
    time: "10:00 AM",
    location: "Room 5",
    title: "Electronics",
    author: "By Maged",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p3",
    image: ImageF23,
    time: "01:00 PM",
    location: "Room 1",
    title: "Design Websites",
    author: "By Nora",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
];

const Second = () => {
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

export default Second;
