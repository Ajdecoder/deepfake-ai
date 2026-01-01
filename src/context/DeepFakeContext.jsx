import { createContext, useContext, useState } from "react";

const DeepfakeContext = createContext();

export const DeepfakeProvider = ({ children }) => {

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState("");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const [history, setHistory] = useState([]);

  const value = {
    file, setFile,
    fileUrl, setFileUrl,
    fileType, setFileType,

    isAnalyzing, setIsAnalyzing,
    progress, setProgress,

    result, setResult,
    error, setError,

    history, setHistory
  };

  return (
    <DeepfakeContext.Provider value={value}>
      {children}
    </DeepfakeContext.Provider>
  );
};

export const useDeepfake = () => useContext(DeepfakeContext);
