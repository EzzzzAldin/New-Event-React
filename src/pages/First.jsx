import Program from "../components/Programs/Program";
import ImageF11 from "../shared/assets/imags/firstday-1.jpg";
import ImageF12 from "../shared/assets/imags/firstday-2.jpg";
import ImageF13 from "../shared/assets/imags/firstday-3.jpg";

const DUMMY_PROGRAMS = [
  {
    id: "p1",
    image: ImageF11,
    time: "09:00 AM",
    location: "Room 2",
    title: "Introduction To Design",
    author: "By Junny Green",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p2",
    image: ImageF12,
    time: "10:00 AM",
    location: "Room 4",
    title: "Introduction To Communication",
    author: "By Uzmaki Naruto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
  {
    id: "p3",
    image: ImageF13,
    time: "01:00 PM",
    location: "Room 7",
    title: "Web Dev",
    author: "By Ezz Aldin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventorereiciendis reprehenderit quia suscipit placeat repudiandae et laboreporro.",
  },
];

const First = () => {
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

export default First;
