import { Route, Routes } from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";
import Messages from "./components/Messages/Messages";
import Header from "./components/Header/Header";
import Payment from "./components/Payments/Payment";
import JobPreview from "./components/JobSubMenu/JobPreview";
import Applicants from "./components/JobSubMenu/Applicants";
import Match from "./components/JobSubMenu/Match";
import JobMessages from "./components/JobSubMenu/JobMessages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/jobs" element={<Jobs />}>
          <Route path="job-preview" element={<JobPreview />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="match" element={<Match />} />
          <Route path="job-messages" element={<JobMessages />} />
        </Route>

        <Route path="/messages" element={<Messages />}>
          <Route path="job-preview" element={<JobPreview />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="match" element={<Match />} />
          <Route path="job-messages" element={<JobMessages />} />
        </Route>
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
