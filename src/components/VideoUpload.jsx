"use client";

import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CloudUpload, CheckCircle, Play, Video, Music, Clock, Shield, AlertTriangle, History, FileSearch, Info, RotateCcw, Zap } from "lucide-react";

export default function ForensicDashboard() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [mediaType, setMediaType] = useState("video");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fileInputRef = useRef(null);

  const processFile = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      setMediaType(selectedFile.type.includes("audio") ? "audio" : "video");
    }
  };

  const onContainerClick = () => {
    if (!file && fileInputRef.current) fileInputRef.current.click();
  };

  const runAnalysis = () => {
    if (!file) return;
    setProgress(1);
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        const isFake = Math.random() > 0.5;
        const res = {
          id: Date.now(),
          name: file.name,
          status: isFake ? "Manipulated" : "Authentic",
          confidence: Math.floor(Math.random() * 20) + 78,
          timestamp: new Date().toLocaleTimeString(),
        };
        setResult(res);
        setHistory(prev => [res, ...prev.slice(0, 8)]);
        setIsModalOpen(true);
        setProgress(0);
      } else {
        setProgress(p);
      }
    }, 150);
  };

  return (

    <div className="min-h-screen w-full bg-[#020617] text-slate-50 font-sans antialiased selection:bg-blue-500/30 overflow-x-hidden">
      

      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none w-screen h-screen" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 py-8 space-y-8">
        
        <header className="flex justify-between items-center border-b border-slate-800 pb-6 w-full">
           <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20"><Shield size={24} /></div>
              <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter italic">Aegis <span className="text-blue-500">Forensics</span></h1>
           </div>
           <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">Deployment Zone</p>
                <p className="text-xs font-mono text-blue-400">Node_US_East_01</p>
              </div>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-4 py-1">Active Scan</Badge>
           </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          <div className="xl:col-span-3 space-y-8">
            <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden border-t-blue-500/50 border-t-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Zap size={14} className="text-blue-500" /> Neural Intake Console
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-8">
                <div 
                  onClick={onContainerClick}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={(e) => { e.preventDefault(); setIsDragging(false); processFile(e.dataTransfer.files[0]); }}
                  className={`relative group border-2 border-dashed rounded-3xl p-12 md:p-20 transition-all duration-500 text-center cursor-pointer
                  ${file ? "border-blue-500/50 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.1)]" : 
                    isDragging ? "border-blue-400 bg-blue-500/10 scale-[1.01]" : "border-slate-800 hover:border-slate-700 bg-slate-900/40"}`}
                >
                  {!file ? (
                    <div className="space-y-6 pointer-events-none">
                      <div className="inline-flex p-8 bg-slate-950 rounded-full border border-slate-800 group-hover:border-blue-500/50 transition-all duration-700 shadow-inner">
                        <CloudUpload className={`w-16 h-16 transition-all duration-500 ${isDragging ? "text-blue-400 scale-110" : "text-slate-700"}`} />
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-black text-slate-100 uppercase tracking-tight">Load High-Bitrate Media</p>
                        <p className="text-sm text-slate-500 font-medium tracking-wide">Click terminal to browse or drag forensic assets here</p>
                      </div>
                      <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => processFile(e.target.files[0])} />
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row items-center justify-between bg-slate-950/80 p-8 rounded-2xl border border-blue-500/20 gap-6">
                      <div className="flex items-center gap-6">
                        <div className="p-5 bg-blue-600/10 rounded-2xl border border-blue-500/30">
                          {mediaType === "video" ? <Video className="text-blue-400 w-8 h-8" /> : <Music className="text-blue-400 w-8 h-8" />}
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-slate-100 text-xl truncate max-w-75">{file.name}</p>
                          <p className="text-xs font-mono text-blue-500 tracking-widest uppercase mt-1">Status: Ready for Injection • {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-slate-800 hover:bg-red-500/10 text-slate-500 hover:text-red-500 px-8 rounded-xl h-12" onClick={(e) => { e.stopPropagation(); setFile(null); }}>
                        <RotateCcw size={18} className="mr-2" /> Reset Console
                      </Button>
                    </div>
                  )}
                </div>

                {progress > 0 && (
                  <div className="space-y-4 animate-in fade-in max-w-4xl mx-auto">
                    <div className="flex justify-between items-end">
                      <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] animate-pulse">Deep Spectral Analysis in Progress...</p>
                      <span className="text-4xl font-black text-blue-400 font-mono italic">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2 bg-slate-800 rounded-full" />
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-slate-950/60 p-8 flex flex-col md:flex-row gap-6 border-t border-slate-800">
                <Select value={mediaType} onValueChange={setMediaType}>
                  <SelectTrigger className="bg-slate-900 border-slate-800 w-full md:w-64 text-slate-300 h-14 font-black uppercase tracking-[0.2em] text-[10px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800 text-slate-300">
                    <SelectItem value="video">Temporal Video Scan</SelectItem>
                    <SelectItem value="audio">Spectral Audio Scan</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={runAnalysis} 
                  disabled={!file || progress > 0} 
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.3em] text-[11px] h-14 shadow-2xl shadow-blue-600/20 active:scale-[0.98] transition-all"
                >
                  <Play className="w-5 h-5 mr-3 fill-current" /> Execute Forensic Protocol
                </Button>
              </CardFooter>
            </Card>

            {/* Wide Logs Table */}
            <Card className="bg-transparent border-slate-800 overflow-hidden shadow-lg">
              <Table>
                <TableHeader className="bg-slate-950/80">
                  <TableRow className="border-slate-800 h-12">
                    <TableHead className="text-slate-600 font-black text-[10px] uppercase pl-8">Asset Signature</TableHead>
                    <TableHead className="text-slate-600 font-black text-[10px] uppercase text-center">Neural Verdict</TableHead>
                    <TableHead className="text-slate-600 font-black text-[10px] uppercase text-right pr-8">Confidence</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((item) => (
                    <TableRow key={item.id} className="border-slate-800/50 hover:bg-slate-900/40 h-16 group transition-colors">
                      <TableCell className="font-bold text-slate-300 text-sm tracking-tight pl-8">
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                           {item.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge className={`rounded-full px-6 py-1 text-[10px] font-black uppercase tracking-widest ${item.status === 'Authentic' ? 'bg-green-500/10 text-green-500 border-green-500/30' : 'bg-red-500/10 text-red-500 border-red-500/30'}`} variant="outline">
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono font-black text-blue-400 pr-8 italic">{item.confidence}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Right Sidebar (Spans 1/4 of width) */}
          <div className="xl:col-span-1 space-y-6">
            <Card className="bg-slate-900/40 border-slate-800 overflow-hidden">
               <div className="h-1 w-full bg-blue-500/30" />
               <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                     <Zap size={16} className="fill-current" />
                     <h3 className="text-[11px] font-black uppercase tracking-[0.2em] italic">Telemetry Data</h3>
                  </div>
                  <div className="space-y-5">
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                           <span>CPU Clusters</span>
                           <span className="text-slate-300">Active</span>
                        </div>
                        <div className="flex gap-1">
                           {[1,2,3,4,5,6].map(i => <div key={i} className={`h-6 flex-1 rounded-sm ${i < 4 ? 'bg-blue-600/50' : 'bg-slate-800'}`} />)}
                        </div>
                     </div>
                     <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Global Latency</span>
                        <span className="text-sm font-mono text-green-400 font-black tracking-tighter">0.024 MS</span>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-2xl space-y-3">
               <div className="flex items-center gap-2 text-blue-400">
                  <Info size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Encrypted Storage</span>
               </div>
               <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  All processed assets are automatically encrypted using AES-256 and purged from memory after 15 minutes of inactivity.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Dialog Code remains same */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#020617] border-slate-800 text-slate-50 sm:max-w-112.5 shadow-[0_0_100px_rgba(0,0,0,0.8)] border-t-4 border-t-blue-600">
          <div className="flex flex-col items-center gap-8 py-8">
            <div className={`w-28 h-28 rounded-full flex items-center justify-center border-2 border-dashed p-3 ${result?.status === 'Authentic' ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
               <div className={`w-full h-full rounded-full flex items-center justify-center ${result?.status === 'Authentic' ? 'bg-green-500 text-slate-950 shadow-[0_0_30px_rgba(34,197,94,0.4)]' : 'bg-red-500 text-slate-950 shadow-[0_0_30px_rgba(239,68,68,0.4)]'}`}>
                  {result?.status === 'Authentic' ? <CheckCircle size={56} strokeWidth={3} /> : <AlertTriangle size={56} strokeWidth={3} />}
               </div>
            </div>
            <div className="text-center space-y-2">
               <h2 className="text-4xl font-black italic uppercase tracking-tighter">Scan Verification</h2>
               <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Protocol ID: {result?.id}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
                 <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Final Verdict</p>
                 <p className={`text-xl font-black uppercase italic ${result?.status === 'Authentic' ? 'text-green-500' : 'text-red-500'}`}>{result?.status}</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
                 <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Confidence</p>
                 <p className="text-xl font-mono font-black text-blue-400 italic">{result?.confidence}%</p>
              </div>
            </div>
            <Button className="w-full bg-white text-black hover:bg-slate-200 font-black uppercase tracking-[0.2em] text-[10px] h-14 rounded-2xl shadow-xl transition-all" onClick={() => setIsModalOpen(false)}>
              Securely Close Dashboard
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}