
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Printer, FileText, Download, Share2, 
  ShieldCheck, Fingerprint, Lock, ShieldAlert,
  Calendar, Hash, HardDrive, User
} from "lucide-react";

export default function ReportPage() {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-slate-50 p-6 md:p-12 space-y-8">
      
      {/* Action Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-500 font-black uppercase tracking-widest text-[10px]">
            <Lock size={12} /> Classified Forensic Export
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter italic">
            Case <span className="text-blue-500">#AF-88291</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-800 bg-slate-900/50" onClick={() => window.print()}>
            <Printer className="w-4 h-4 mr-2" /> Print PDF
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-500 font-bold">
            <Download className="w-4 h-4 mr-2" /> Export JSON
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left: Metadata & Evidence Details */}
        <div className="xl:col-span-2 space-y-8">
          <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-md">
            <CardHeader className="border-b border-slate-800/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <FileText className="text-blue-500" /> Executive Summary
                </CardTitle>
                <Badge className="bg-red-500/10 text-red-500 border-red-500/30 font-black">HIGH RISK</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <p className="text-slate-400 leading-relaxed italic">
                Analysis of the submitted asset "deep-fake-test-01.mp4" indicates a high probability of temporal frame manipulation in the facial region. Spectral audio analysis suggests synthetic voice cloning using a Diffusion-based model.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Asset Metadata</h4>
                  <div className="space-y-2">
                    <MetaRow label="File Name" value="deep-fake-test-01.mp4" />
                    <MetaRow label="Size" value="42.8 MB" />
                    <MetaRow label="Format" value="MPEG-4 / H.264" />
                    <MetaRow label="Duration" value="00:12:44" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Integrity Hash</h4>
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 font-mono text-[10px] break-all text-blue-400">
                    SHA-256: 8f92b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Findings Table */}
          <Card className="bg-slate-900/40 border-slate-800">
            <CardHeader>
              <CardTitle className="text-lg">Detailed Spectral Findings</CardTitle>
            </CardHeader>
            <Table>
              <TableHeader className="bg-slate-950">
                <TableRow className="border-slate-800">
                  <TableHead className="text-[10px] uppercase font-black text-slate-500">Timestamp</TableHead>
                  <TableHead className="text-[10px] uppercase font-black text-slate-500">Detection Layer</TableHead>
                  <TableHead className="text-[10px] uppercase font-black text-slate-500 text-right">Probability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <FindingRow time="00:02:12" layer="Facial Morphing" score="98.2%" />
                <FindingRow time="00:04:45" layer="Synthetic Audio Sync" score="84.1%" />
                <FindingRow time="00:08:33" layer="Frame Continuity" score="91.5%" />
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Right Sidebar: Security Stamps */}
        <div className="space-y-6">
          <Card className="bg-slate-900/60 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <CardContent className="pt-6 space-y-6">
              <div className="text-center pb-4 border-b border-slate-800">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">Final Confidence Score</p>
                <div className="text-6xl font-black italic text-blue-400 font-mono tracking-tighter">94%</div>
              </div>
              
              <div className="space-y-4">
                <SecurityStamp icon={<Calendar />} label="Analysis Date" value="Jan 02, 2026" />
                <SecurityStamp icon={<User />} label="Authorized Agent" value="ID-4492" />
                <SecurityStamp icon={<HardDrive />} label="Node Location" value="US-EAST-01" />
                <SecurityStamp icon={<Fingerprint />} label="Signature" value="VERIFIED" success />
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                  <ShieldAlert className="text-red-500 w-5 h-5 mt-1 shrink-0" />
                  <p className="text-[11px] text-slate-400 leading-tight">
                    This document is legally binding. Unauthorized distribution violates protocol 88-B.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }) {
  return (
    <div className="flex justify-between text-xs border-b border-slate-800 pb-2">
      <span className="text-slate-500 font-bold uppercase">{label}</span>
      <span className="text-slate-200 font-mono">{value}</span>
    </div>
  );
}

function FindingRow({ time, layer, score }) {
  return (
    <TableRow className="border-slate-800 hover:bg-slate-900/20 transition-colors">
      <TableCell className="font-mono text-blue-400 text-xs">{time}</TableCell>
      <TableCell className="font-bold text-slate-300 text-sm">{layer}</TableCell>
      <TableCell className="text-right font-black text-red-500 italic">{score}</TableCell>
    </TableRow>
  );
}

function SecurityStamp({ icon, label, value, success }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-slate-500">
        {React.cloneElement(icon, { size: 14 })}
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <span className={`text-xs font-bold ${success ? 'text-green-500' : 'text-slate-300'}`}>{value}</span>
    </div>
  );
}