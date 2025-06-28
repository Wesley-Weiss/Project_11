/*Psalms 119:105 Your word is a Lamp to my feet and a light to my path.*/
import QuoteBox from "./QuoteBox"
import { motion} from "framer-motion";
import { useSelector } from "react-redux";
import type { AppState } from "./types";

const bookGradients: Record<string, string> = {
  "Genesis": "linear-gradient(to right, #1E3C72, #2A5298)",
  "Exodus": "linear-gradient(to right, #b92b27, #1565C0)",
  "Leviticus": "linear-gradient(to right, #3CA55C, #B5AC49)",
  "Numbers": "linear-gradient(to right, #360033, #0b8793)",
  "Deuteronomy": "linear-gradient(to right, #e53935, #e35d5b)",
  "Joshua": "linear-gradient(to right, #000046, #1CB5E0)",
  "Judges": "linear-gradient(to right, #414d0b, #727a17)",
  "Ruth": "linear-gradient(to right, #FBD3E9, #BB377D)",
  "1 Samuel": "linear-gradient(to right, #C04848, #480048)",
  "2 Samuel": "linear-gradient(to right, #003973, #E5E5BE)",
  "1 Kings": "linear-gradient(to right, #1D2B64, #F8CDDA)",
  "2 Kings": "linear-gradient(to right, #5C258D, #4389A2)",
  "1 Chronicles": "linear-gradient(to right, #314755, #26a0da)",
  "2 Chronicles": "linear-gradient(to right, #3a6186, #89253e)",
  "Ezra": "linear-gradient(to right, #56ab2f, #a8e063)",
  "Nehemiah": "linear-gradient(to right, #373B44, #4286f4)",
  "Esther": "linear-gradient(to right, #FDC830, #F37335)",
  "Job": "linear-gradient(to right, #355C7D, #6C5B7B)",
  "Psalms": "linear-gradient(to right, #ff9966, #ff5e62)",
  "Proverbs": "linear-gradient(to right, #56CCF2, #2F80ED)",
  "Ecclesiastes": "linear-gradient(to right, #4B79A1, #283E51)",
  "Song of Solomon": "linear-gradient(to right, #FFB6C1, #FF69B4)",
  "Isaiah": "linear-gradient(to right, #373B44, #4286f4)",
  "Jeremiah": "linear-gradient(to right, #C31432, #240B36)",
  "Lamentations": "linear-gradient(to right, #000000, #434343)",
  "Ezekiel": "linear-gradient(to right, #4568dc, #b06ab3)",
  "Daniel": "linear-gradient(to right, #43cea2, #185a9d)",
  "Hosea": "linear-gradient(to right, #f2709c, #ff9472)",
  "Joel": "linear-gradient(to right, #B24592, #F15F79)",
  "Amos": "linear-gradient(to right, #6A9113, #141517)",
  "Obadiah": "linear-gradient(to right, #000000, #434343)",
  "Jonah": "linear-gradient(to right, #56CCF2, #2F80ED)",
  "Micah": "linear-gradient(to right, #AA076B, #61045F)",
  "Nahum": "linear-gradient(to right, #000046, #1CB5E0)",
  "Habakkuk": "linear-gradient(to right, #42275a, #734b6d)",
  "Zephaniah": "linear-gradient(to right, #B79891, #94716B)",
  "Haggai": "linear-gradient(to right, #2980B9, #6DD5FA)",
  "Zechariah": "linear-gradient(to right, #141E30, #243B55)",
  "Malachi": "linear-gradient(to right, #2C3E50, #FD746C)",
  "Matthew": "linear-gradient(to right, #00c6ff, #0072ff)",
  "Mark": "linear-gradient(to right, #f46b45, #eea849)",
  "Luke": "linear-gradient(to right, #4568dc, #b06ab3)",
  "John": "linear-gradient(to right, #43cea2, #185a9d)",
  "Acts": "linear-gradient(to right, #614385, #516395)",
  "Romans": "linear-gradient(to right, #0f2027, #2c5364)",
  "1 Corinthians": "linear-gradient(to right, #C04848, #480048)",
  "2 Corinthians": "linear-gradient(to right, #000046, #1CB5E0)",
  "Galatians": "linear-gradient(to right, #56ab2f, #a8e063)",
  "Ephesians": "linear-gradient(to right, #2980B9, #6DD5FA)",
  "Philippians": "linear-gradient(to right, #f7971e, #ffd200)",
  "Colossians": "linear-gradient(to right, #3a7bd5, #00d2ff)",
  "1 Thessalonians": "linear-gradient(to right, #141e30, #243b55)",
  "2 Thessalonians": "linear-gradient(to right, #1e3c72, #2a5298)",
  "1 Timothy": "linear-gradient(to right, #AA076B, #61045F)",
  "2 Timothy": "linear-gradient(to right, #373B44, #4286f4)",
  "Titus": "linear-gradient(to right, #4ca1af, #c4e0e5)",
  "Philemon": "linear-gradient(to right, #B24592, #F15F79)",
  "Hebrews": "linear-gradient(to right, #1D2B64, #F8CDDA)",
  "James": "linear-gradient(to right, #614385, #516395)",
  "1 Peter": "linear-gradient(to right, #43cea2, #185a9d)",
  "2 Peter": "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  "1 John": "linear-gradient(to right, #ff758c, #ff7eb3)",
  "2 John": "linear-gradient(to right, #c33764, #1d2671)",
  "3 John": "linear-gradient(to right, #6a11cb, #2575fc)",
  "Jude": "linear-gradient(to right, #56ccf2, #2f80ed)",
  "Revelation": "linear-gradient(to right, #8e0e00, #1f1c18)"
};




const App = () => {
  const bookNameOnly = useSelector((state:AppState ) => state.bookNameOnly);
  const gradient = bookGradients[bookNameOnly] || "#ffffff";

  return (
    <motion.div
      id="app"
      className="app d-flex flex-column justify-content-center align-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, background: gradient }}
      transition={{ duration: 2 }}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: gradient,
      }}
    >
      <QuoteBox />
    </motion.div>
  );
};

export default App;
