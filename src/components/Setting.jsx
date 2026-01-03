import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, Shield, Bell, Cpu, Globe, 
  Key, Save, RefreshCcw, Trash2, Database 
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="w-full bg-[#020617] text-slate-50 p-6 lg:p-10 space-y-8">
      
      
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter italic">
          System <span className="text-blue-500">Configuration</span>
        </h1>
        <p className="text-slate-500 text-sm mt-1 font-medium">Manage forensic protocols and account security.</p>
      </div>

      <Tabs defaultValue="account" className="w-full space-y-6">
        
        <TabsList className="bg-slate-900/50 border border-slate-800 p-1 h-auto flex flex-wrap md:grid md:grid-cols-4 lg:grid-cols-6 w-full lg:w-max">
          <TabsTrigger value="account" className="data-[state=active]:bg-blue-600 uppercase text-[10px] font-black py-2 px-4">
            <User size={14} className="mr-2" /> Account
          </TabsTrigger>
          <TabsTrigger value="forensics" className="data-[state=active]:bg-blue-600 uppercase text-[10px] font-black py-2 px-4">
            <Cpu size={14} className="mr-2" /> Neural Engine
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-blue-600 uppercase text-[10px] font-black py-2 px-4">
            <Shield size={14} className="mr-2" /> Security
          </TabsTrigger>
        </TabsList>

        
        <TabsContent value="account" className="space-y-6">
          <Card className="bg-slate-900/40 border-slate-800">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Profile Identity</CardTitle>
              <CardDescription className="text-slate-500">Public identification within the forensic network.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="agent-id" className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Agent Callsign</Label>
                  <Input id="agent-id" defaultValue="AGENT_77" className="bg-slate-950 border-slate-800 focus:border-blue-500 h-12 font-mono text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Secure Email</Label>
                  <Input id="email" defaultValue="77@aegis-forensics.io" className="bg-slate-950 border-slate-800 focus:border-blue-500 h-12 text-white" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-800 pt-6">
              <Button className="bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-widest text-xs h-11 px-8">
                <Save size={16} className="mr-2" /> Save Profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        
        <TabsContent value="forensics" className="space-y-6">
          <Card className="bg-slate-900/40 border-slate-800 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Cpu className="text-blue-500" /> Detection Sensitivity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                <div className="space-y-1">
                  <p className="text-sm font-bold">High-Fidelity Mode</p>
                  <p className="text-xs text-slate-500">Increases scan depth; consumes 2x more compute credits.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                <div className="space-y-1">
                  <p className="text-sm font-bold">Auto-Purge Assets</p>
                  <p className="text-xs text-slate-500">Wipe original media from cache immediately after report generation.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-800">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Key className="text-blue-500" size={20} /> Neural API Keys
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input value="sk_forensic_••••••••••••••••" readOnly className="bg-slate-950 border-slate-800 font-mono" />
                <Button variant="outline" className="border-slate-800 px-6">Reveal</Button>
                <Button variant="ghost" className="text-blue-500 hover:bg-blue-500/10">
                  <RefreshCcw size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        
        <TabsContent value="security" className="space-y-6">
           <Card className="bg-slate-900/40 border-slate-800">
            <CardHeader>
              <CardTitle className="text-red-500 font-black uppercase tracking-tighter">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between p-4 border border-red-500/20 bg-red-500/5 rounded-xl">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-200">Delete All Forensic Data</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Permanent Action</p>
                </div>
                <Button variant="destructive" className="font-bold">
                  <Trash2 size={16} className="mr-2" /> Purge Database
                </Button>
              </div>
            </CardContent>
           </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}