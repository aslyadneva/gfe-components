import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { FileExplorer } from "./components/file-explorer/FileExplorer";

function App() {
  const data = [
    {
      id: 1,
      name: "README.md",
    },
    {
      id: 2,
      name: "Documents",
      children: [
        {
          id: 3,
          name: "Word.doc",
        },
        {
          id: 4,
          name: "Powerpoint.ppt",
        },
      ],
    },
    {
      id: 5,
      name: "Downloads",
      children: [
        {
          id: 6,
          name: "unnamed.txt",
        },
        {
          id: 7,
          name: "Misc",
          children: [
            {
              id: 8,
              name: "foo.txt",
            },
            {
              id: 9,
              name: "bar.txt",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Accordion
        sections={[
          {
            value: "section1",
            label: "HTML",
            contents:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            value: "section2",
            label: "CSS",
            contents:
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          },
          {
            value: "section3",
            label: "JavaScript ",
            contents:
              "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
          },
        ]}
      />
      <FileExplorer data={data} />
    </>
  );
}

export default App;
