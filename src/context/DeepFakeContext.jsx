// Context file (DeepfakeContext.js)
import { createContext, useContext, useState } from "react";

const DeepfakeContext = createContext();

export const DeepfakeProvider = ({ children }) => {
  const [file, setFile] = useState(null);
  const [mediaType, setMediaType] = useState("all");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const value = {
    file, setFile,
    mediaType, setMediaType,
    isAnalyzing, progress,
    result, history,
    isModalOpen, setIsModalOpen,
    setProgress, setIsAnalyzing, setResult, setHistory
  };

  return <DeepfakeContext.Provider value={value}>{children}</DeepfakeContext.Provider>;
};

export const useDeepfake = () => useContext(DeepfakeContext);