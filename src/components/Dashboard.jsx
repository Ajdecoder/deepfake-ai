"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  Button,
  FileInput,
  Alert,
  Badge,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "flowbite-react";
import {
  CloudUpload,
  CheckCircle,
  XCircle,
  Play,
  Video,
  Music,
  Clock,
  Shield,
  Download,
  AlertTriangle,
  History,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);

  const intervalRef = useRef(null);

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    if (!f) return;
    if (f.type.includes("video")) setType("video");
    else if (f.type.includes("audio")) setType("audio");
    else setType("unknown");
  };

  const startDetection = () => {
    if (!file) {
      alert("Please upload a file first!");
      return;
    }

    setProgress(0);
    setResult(null);

    let p = 0;
    intervalRef.current = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(intervalRef.current);

        const isFake = Math.random() > 0.5;
        const confidence = Math.floor(Math.random() * (98 - 70)) + 70;
        const techniques = isFake
          ? ["Face Swapping", "Lip Sync Manipulation", "Voice Cloning"]
          : ["None Detected"];

        const res = {
          id: Date.now(),
          name: file.name,
          fake: isFake,
          confidence,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
          type: file.type,
          techniques,
          detectionPoints: isFake ? Math.floor(Math.random() * 5) + 3 : 0,
        };

        setResult(res);
        setHistory((prev) => [res, ...prev.slice(0, 9)]);
        setShowResultModal(true);
      }
    }, 120);
  };

  const clearFile = () => {
    setFile(null);
    setType("");
    setProgress(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex justify-center bg-gray-50 dark:bg-gray-900 min-h-screen p-6">
      <div className="w-full max-w-6xl space-y-6">
        {/* Upload Section */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                Upload Media for Analysis
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Supports MP4, MOV, AVI, MP3, WAV formats (Max 2GB)
              </p>
            </div>
            <CloudUpload className="h-8 w-8 text-blue-600" />
          </div>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              {file ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium truncate">{file.name}</span>
                  </div>
                  <div className="inline-flex gap-2">
                    <Button color="light" size="sm" onClick={clearFile}>
                      Remove
                    </Button>
                    {type && (
                      <Badge
                        color={type === "video" ? "purple" : "blue"}
                        className="gap-1"
                      >
                        {type === "video" ? (
                          <Video className="h-3 w-3" />
                        ) : (
                          <Music className="h-3 w-3" />
                        )}
                        {type.toUpperCase()}
                      </Badge>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <CloudUpload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    Drag & drop your file here or
                  </p>
                  <FileInput
                    id="file-upload"
                    className="hidden"
                    onChange={handleFile}
                    accept="video/*,audio/*"
                  />
                  <label htmlFor="file-upload">
                    <Button as="div" color="light" className="cursor-pointer gap-2">
                      Browse Files
                    </Button>
                  </label>
                </>
              )}
            </div>

            {file && <ProgressBar progress={progress} />}

            <div className="flex gap-3 mt-4">
              <Button
                onClick={startDetection}
                disabled={!file}
                className={`flex-1 gap-2 ${!file ? "opacity-50 cursor-not-allowed" : ""}`}
                color="purple"
              >
                <Play className="h-5 w-5" />
                Start Deepfake Detection
              </Button>

              {file && (
                <Button
                  color="light"
                  type="button"
                  onClick={clearFile}
                  disabled={progress > 0 && progress < 100}
                  className="gap-2"
                >
                  <XCircle className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Scan History */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <History className="h-6 w-6" />
              Scan History
            </h5>
          </div>

          {history.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No scans yet. Upload a file to begin analysis.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">File</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">Confidence</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">Time</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900 dark:text-white">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {history.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.type.split("/")[1]?.toUpperCase()}</td>
                      <td className="px-4 py-2">{item.fake ? "Fake" : "Authentic"}</td>
                      <td className="px-4 py-2">{item.confidence}%</td>
                      <td className="px-4 py-2">{item.time}</td>
                      <td className="px-4 py-2 text-blue-600">View</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>

      {/* Result Modal */}
      {result && (
        <Modal show={showResultModal} onClose={() => setShowResultModal(false)} size="lg">
          <ModalHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <span>Detection Results</span>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <Alert
                color={result.fake ? "failure" : "success"}
                icon={result.fake ? XCircle : CheckCircle}
                className="mb-4"
              >
                <span className="font-bold text-lg">
                  {result.fake ? "FAKE MEDIA DETECTED" : "AUTHENTIC MEDIA"}
                </span>
                <p className="text-sm mt-1">Confidence level: {result.confidence}%</p>
              </Alert>

              {/* File info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">File Name</p>
                  <p className="font-medium truncate">{result.name}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">File Type</p>
                  <div className="flex items-center gap-2">
                    {result.type.includes("video") ? (
                      <Video className="h-4 w-4 text-purple-600" />
                    ) : (
                      <Music className="h-4 w-4 text-blue-600" />
                    )}
                    <p className="font-medium">{result.type.split("/")[1]?.toUpperCase()}</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Analysis Time</p>
                  <p className="font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {result.time}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">File Size</p>
                  <p className="font-medium">{result.size}</p>
                </div>
              </div>

              {/* Detected techniques */}
              {result.techniques?.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" /> Detected Techniques:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {result.techniques.map((tech, index) => (
                      <Badge
                        key={index}
                        color={result.fake ? "failure" : "success"}
                        className="px-3 py-2 justify-start"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setShowResultModal(false)} gradientduotone="purpleToBlue">
              Close
            </Button>
            <Button color="light" className="gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ progress }) => (
  <div
    className={`mt-6 transition-all duration-300 ${
      progress === 0 || progress === 100 ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
    }`}
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <Clock className="h-4 w-4 animate-pulse" /> Analyzing media...
      </span>
      <span className="text-sm font-medium text-blue-600">{progress}%</span>
    </div>
    <Progress progress={progress} color="blue" size="lg" label="Scanning progress" />
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
      <AlertTriangle className="h-3 w-3" />
      Analyzing facial patterns, audio waveforms, and metadata...
    </p>
  </div>
);

export default Dashboard;
