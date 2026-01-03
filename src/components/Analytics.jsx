
import React from "react";
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";
import {
    Card, CardContent, CardHeader, CardTitle, CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    TrendingUp, Users, Activity, CheckCircle,
    ArrowUpRight, ArrowDownRight, Filter, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data
const data = [
    { name: "Mon", fakes: 400, authentic: 2400 },
    { name: "Tue", fakes: 300, authentic: 1398 },
    { name: "Wed", fakes: 200, authentic: 9800 },
    { name: "Thu", fakes: 278, authentic: 3908 },
    { name: "Fri", fakes: 189, authentic: 4800 },
    { name: "Sat", fakes: 239, authentic: 3800 },
    { name: "Sun", fakes: 349, authentic: 4300 },
];

export default function AnalyticsPage() {
    return (
        <div className=" text-white min-h-screen w-full bg-[#020617] p-6 md:p-10 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tighter italic">
                        Intelligence <span className="text-blue-500">Analytics</span>
                    </h1>
                    <p className="text-slate-400 text-sm">System-wide forensic performance and detection rates.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="border-slate-800 bg-slate-900/50 text-slate-300">
                        <Filter className="w-4 h-4 mr-2" /> Filter
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white font-bold">
                        <Download className="w-4 h-4 mr-2" /> Export Report
                    </Button>
                </div>
            </div>

            {/* Top Level KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <StatsCard title="Total Scans" value="12,842" change="+12.5%" icon={<Activity />} trend="up" />
                <StatsCard title="Deepfakes Detected" value="3,402" change="+4.2%" icon={<AlertTriangle />} trend="up" />
                <StatsCard title="Avg. Confidence" value="94.2%" change="-0.4%" icon={<CheckCircle />} trend="down" />
                <StatsCard title="Active Agents" value="573" change="+18%" icon={<Users />} trend="up" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Section */}
                <Card className="lg:col-span-2 bg-slate-900/40 border-slate-800 backdrop-blur-md">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-white">Detection Trends</CardTitle>
                        <CardDescription>Daily breakdown of authentic vs. manipulated media.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-100">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAuth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "8px" }}
                                    itemStyle={{ color: "#f8fafc" }}
                                />
                                <Area type="monotone" dataKey="authentic" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAuth)" />
                                <Area type="monotone" dataKey="fakes" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Distribution Chart */}
                <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-md">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-white">Threat Distribution</CardTitle>
                        <CardDescription>Analysis by media type.</CardDescription>
                    </CardHeader>
                    <CardContent className="h-100">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b" }} />
                                <Bar dataKey="fakes" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function StatsCard({ title, value, change, icon, trend }) {
    return (
        <Card className=" bg-slate-900/60 border-slate-800 shadow-xl overflow-hidden relative text-white">
            <div className={`absolute top-0 left-0 w-1 h-full ${trend === 'up' ? 'bg-blue-500' : 'bg-red-500'}`} />
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div className="p-2 bg-slate-950 rounded-lg text-blue-500 border border-slate-800">
                        {React.cloneElement(icon, { size: 20 })}
                    </div>
                    <Badge className={`bg-transparent border-none flex items-center gap-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {change} {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    </Badge>
                </div>
                <div className="mt-4">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-500">{title}</p>
                    <h3 className="text-2xl font-mono font-black mt-1">{value}</h3>
                </div>
            </CardContent>
        </Card>
    );
}

function AlertTriangle(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
    );
}