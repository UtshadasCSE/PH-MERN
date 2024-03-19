import { LineChart, Line, XAxis, YAxis } from "recharts";

const Linechart = () => {
  const studentMarks = [
    {
      id: 1,
      name: "John",
      math: 85,
      science: 78,
      physics: 90,
      english: 82,
    },
    {
      id: 2,
      name: "Alice",
      math: 90,
      science: 85,
      physics: 88,
      english: 80,
    },
    {
      id: 3,
      name: "Emma",
      math: 78,
      science: 92,
      physics: 85,
      english: 85,
    },
    {
      id: 4,
      name: "Michael",
      math: 92,
      science: 88,
      physics: 78,
      english: 90,
    },
    {
      id: 5,
      name: "Sophia",
      math: 80,
      science: 75,
      physics: 82,
      english: 78,
    },
    {
      id: 6,
      name: "William",
      math: 88,
      science: 80,
      physics: 85,
      english: 92,
    },
    {
      id: 7,
      name: "Olivia",
      math: 70,
      science: 82,
      physics: 90,
      english: 85,
    },
    {
      id: 8,
      name: "James",
      math: 75,
      science: 78,
      physics: 82,
      english: 88,
    },
    {
      id: 9,
      name: "Ava",
      math: 82,
      science: 85,
      physics: 75,
      english: 78,
    },
    {
      id: 10,
      name: "Ethan",
      math: 85,
      science: 90,
      physics: 78,
      english: 82,
    },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={studentMarks}>
        <XAxis dataKey={"name"} />
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red" />
        <Line dataKey={"physics"} stroke="yellow" />
        <Line dataKey={"english"} stroke="green" />
      </LineChart>
    </div>
  );
};

export default Linechart;
