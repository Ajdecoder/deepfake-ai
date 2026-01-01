import React, { useState } from "react";
import { 
  Sidebar, 
  Card, 
  Table, 
  Progress as FlowbiteProgress, 
  Modal, 
  Alert,
  Badge,
  Button,
  FileInput,
  Navbar,
  Dropdown,
  Avatar
} from "flowbite-react";
import {
  Home,
  Upload,
  FileText,
  Settings,
  LogOut,
  User,
  Bell,
  CloudUpload,
  Play,
  CheckCircle,
  XCircle,
  Clock,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Download,
  File,
  Music,
  Video,
  AlertTriangle,
  Shield,
  FileCheck,
  FileX,
  History,
  Info,
  Eye
} from "lucide-react";
import { Header } from "./Navbar";

const Dashboard = () => {
  
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
    const interval = setInterval(() => {
      p += 10;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        
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
          detectionPoints: isFake ? Math.floor(Math.random() * 5) + 3 : 0
        };

        setResult(res);
        setHistory((prev) => [res, ...prev.slice(0, 9)]);
        setShowResultModal(true);
      }
    }, 300);
  };

  const clearFile = () => {
    setFile(null);
    setType("");
    setProgress(0);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
     

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        
        <Header/>

        <div className="p-6">
          {/* Upload Section */}
          <Card className="mb-6">
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
                        <Badge color={type === "video" ? "purple" : "blue"} className="gap-1">
                          {type === "video" ? <Video className="h-3 w-3" /> : <Music className="h-3 w-3" />}
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
                        <Upload className="h-4 w-4" />
                        Browse Files
                      </Button>
                    </label>
                  </>
                )}
              </div>

              {file && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium flex items-center gap-2">
                      <File className="h-4 w-4" />
                      File Preview
                    </span>
                    <Badge color="gray">{type}</Badge>
                  </div>
                  {type === "video" && (
                    <video
                      src={URL.createObjectURL(file)}
                      controls
                      className="w-full rounded-lg max-h-96"
                    />
                  )}
                  {type === "audio" && (
                    <audio
                      src={URL.createObjectURL(file)}
                      controls
                      className="w-full"
                    />
                  )}
                </div>
              )}

              <div className="flex gap-3">
                {console.log(file)}
                <Button
                  onClick={startDetection}
                  disabled={!file}
                  className={`flex-1 gap-2 ${!file ? 'opacity-50 cursor-not-allowed' : ''}`}
                  color={'purple'}
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

              {progress > 0 && progress < 100 && (
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Clock className="h-4 w-4 animate-pulse" />
                      Analyzing media...
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      {progress}%
                    </span>
                  </div>
                  <FlowbiteProgress
                    progress={progress}
                    color="blue"
                    size="lg"
                    label="Scanning progress"
                    labelposition="outside"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    Analyzing facial patterns, audio waveforms, and metadata...
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Result Modal */}
          <Modal
            show={showResultModal}
            onClose={() => setShowResultModal(false)}
            size="lg"
          >
            <Modal.Header className="border-b pb-3">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span>Detection Results</span>
              </div>
            </Modal.Header>
            <Modal.Body>
              {result && (
                <div className="space-y-6">
                  <Alert
                    color={result.fake ? "failure" : "success"}
                    icon={result.fake ? XCircle : CheckCircle}
                    className="mb-4"
                  >
                    <span className="font-bold text-lg">
                      {result.fake ? "FAKE MEDIA DETECTED" : "AUTHENTIC MEDIA"}
                    </span>
                    <p className="text-sm mt-1">
                      Confidence level: {result.confidence}%
                    </p>
                  </Alert>

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
                        <p className="font-medium">{result.type.split('/')[1]?.toUpperCase()}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">Analysis Time</p>
                      <p className="font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {result.time}
                      </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">File Size</p>
                      <p className="font-medium">{result.size}</p>
                    </div>
                  </div>

                  {result.techniques && result.techniques.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Detected Techniques:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {result.techniques.map((tech, index) => (
                          <Badge
                            key={index}
                            color={result.fake ? "red" : "green"}
                            className="px-3 py-2 justify-start"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Recommendations:
                    </p>
                    <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
                      {result.fake ? (
                        <>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Exercise caution when sharing this content
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Verify the source of this media
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Consider reporting if malicious intent is suspected
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Content appears to be authentic
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            No manipulation techniques detected
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Proceed with standard verification practices
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer className="border-t pt-3">
              <Button
                onClick={() => setShowResultModal(false)}
                gradientduotone="purpleToBlue"
                className="gap-2"
              >
                Close
              </Button>
              <Button color="light" className="gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Recent Scans */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <History className="h-6 w-6" />
                  Scan History
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last 10 scans - Click any row to view details
                </p>
              </div>
              <Clock className="h-6 w-6 text-gray-400" />
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
                <Table hoverable>
                  <Table.Head>
                    <Table.HeadCell className="w-1/3">File Name</Table.HeadCell>
                    <Table.HeadCell>Type</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Confidence</Table.HeadCell>
                    <Table.HeadCell>Time</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Actions</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {history.map((item) => (
                      <Table.Row 
                        key={item.id}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => {
                          setResult(item);
                          setShowResultModal(true);
                        }}
                      >
                        <Table.Cell className="font-medium text-gray-900 dark:text-white">
                          <div className="flex items-center gap-2 truncate">
                            <File className="h-4 w-4 text-gray-400" />
                            <span className="truncate">{item.name}</span>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <Badge color={item.type.includes("video") ? "purple" : "blue"} className="gap-1">
                            {item.type.includes("video") ? <Video className="h-3 w-3" /> : <Music className="h-3 w-3" />}
                            {item.type.includes("video") ? "Video" : "Audio"}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center gap-2">
                            {item.fake ? (
                              <>
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="text-red-600 font-medium">Fake</span>
                              </>
                            ) : (
                              <>
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-green-600 font-medium">Real</span>
                              </>
                            )}
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center gap-2">
                            <FlowbiteProgress
                              progress={item.confidence}
                              color={item.confidence > 85 ? "green" : item.confidence > 70 ? "yellow" : "red"}
                              size="sm"
                              className="flex-1"
                            />
                            <span className="text-sm font-medium min-w-10">{item.confidence}%</span>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <div className="text-sm flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.time}
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <Button
                            size="xs"
                            color="light"
                            onClick={(e) => {
                              e.stopPropagation();
                              setResult(item);
                              setShowResultModal(true);
                            }}
                            className="gap-1"
                          >
                            <Eye className="h-3 w-3" />
                            View
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </div>
            )}
          </Card>

          {/* Stats Summary */}
          {history.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card>
                <div className="flex items-center">
                  <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mr-4">
                    <FileCheck className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Authentic Files</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {history.filter(h => !h.fake).length}
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        ({Math.round((history.filter(h => !h.fake).length / history.length) * 100)}%)
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-center">
                  <div className="rounded-full bg-red-100 dark:bg-red-900 p-3 mr-4">
                    <FileX className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fake Detections</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {history.filter(h => h.fake).length}
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        ({Math.round((history.filter(h => h.fake).length / history.length) * 100)}%)
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mr-4">
                    <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Confidence</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {history.length > 0 
                        ? Math.round(history.reduce((acc, h) => acc + h.confidence, 0) / history.length)
                        : 0}%
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;