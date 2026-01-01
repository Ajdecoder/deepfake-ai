import React from 'react'

export default function ScoreChart() {
    return (
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}>
            <Sidebar aria-label="Main navigation" className="h-full">
                <div className="flex items-center justify-between mb-8 px-4">
                    {!sidebarCollapsed && (
                        <div className="flex items-center gap-2">
                            <Shield className="h-6 w-6 text-blue-600" />
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Deepfake<span className="text-blue-600">AI</span>
                            </h1>
                        </div>
                    )}
                    <Button
                        size="xs"
                        color="light"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="ml-auto"
                    >
                        {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>
                </div>

                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={Home} className="mb-2">
                            {!sidebarCollapsed && "Dashboard"}
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={Upload} className="mb-2 active">
                            {!sidebarCollapsed && "Upload & Detect"}
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={FileText} className="mb-2">
                            {!sidebarCollapsed && "Reports"}
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={BarChart3} className="mb-2">
                            {!sidebarCollapsed && "Analytics"}
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={Settings} className="mb-2">
                            {!sidebarCollapsed && "Settings"}
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>

                    <Sidebar.ItemGroup className="mt-auto border-t pt-4">
                        <Sidebar.Item href="#" icon={LogOut}>
                            {!sidebarCollapsed && "Logout"}
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}
