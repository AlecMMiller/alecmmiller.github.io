import './App.css';
import {SectionTitle} from "./elements/divider"
import {Experience } from "./sections/experience"


function App() {
  const EXPERIENCE = 'Experience'
  const PROJECTS = 'Projects'
  return (
    <div className="App">
      <div className="Section">
          <SectionTitle title={EXPERIENCE} conclusion={false} />
          <Experience />
          <SectionTitle title={EXPERIENCE} conclusion={true} />
      </div>
      <div className="Section">
          <SectionTitle title={PROJECTS} conclusion={false} />
          <SectionTitle title={PROJECTS} conclusion={true} />
      </div>
    </div>
  );
}

export default App;
