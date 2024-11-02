import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  FileQuestion,
  MessageCircle,
  Database,
  Server,
  Activity,
  Settings,
  LogOut,
  Cpu,
  HardDrive,
  Coins,
  TicketCheck,
  Clock,
  Award,
  BookOpen,
  UserRound,
  AlertTriangle,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminDashboard: React.FC = () => {
  // Simulated real-time data
  const [liveUsers, setLiveUsers] = useState(245);
  const [userHistory, setUserHistory] = useState<
    Array<{ time: string; users: number }>
  >([]);
  const [cpuLoad, setCpuLoad] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [aiLoad, setAiLoad] = useState(38);
  const [storageUsed, setStorageUsed] = useState(78);

  // Department contribution data
  const departmentData = [
    { name: "ICT", value: 35, color: "#3498db" },
    { name: "IAT", value: 25, color: "#e74c3c" },
    { name: "ET", value: 20, color: "#2ecc71" },
    { name: "AT", value: 20, color: "#f1c40f" },
  ];

  // Server performance history
  const [serverHistory, setServerHistory] = useState<
    Array<{ timestamp: string; performance: number }>
  >([]);

  console.log(serverHistory);

  // Generate random data for the charts
  useEffect(() => {
    const updateData = () => {
      setLiveUsers((prev) => {
        const change = Math.floor(Math.random() * 11) - 5;
        return Math.max(200, Math.min(300, prev + change));
      });

      setCpuLoad((prev) =>
        Math.max(20, Math.min(95, prev + (Math.random() * 10 - 5)))
      );
      setMemoryUsage((prev) =>
        Math.max(30, Math.min(90, prev + (Math.random() * 10 - 5)))
      );
      setAiLoad((prev) =>
        Math.max(10, Math.min(80, prev + (Math.random() * 10 - 5)))
      );
      setStorageUsed((prev) =>
        Math.max(50, Math.min(95, prev + (Math.random() * 2 - 1)))
      );

      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });

      setUserHistory((prev) => {
        const newHistory = [...prev, { time: timeStr, users: liveUsers }];
        if (newHistory.length > 10) newHistory.shift();
        return newHistory;
      });

      setServerHistory((prev) => {
        const newHistory = [
          ...prev,
          {
            timestamp: timeStr,
            performance: Math.floor(Math.random() * 40) + 60,
          },
        ];
        if (newHistory.length > 10) newHistory.shift();
        return newHistory;
      });
    };

    const interval = setInterval(updateData, 3000);
    return () => clearInterval(interval);
  }, [liveUsers]);

  const websiteStats = {
    totalQuizzes: 847,
    totalVoices: 390,
    totalMaterials: 567,
    aiStats: {
      tokensUsed: "192,450",
      budgetLimit: "500,000",
      costIncurred: "$28.92",
      budgetRemaining: "$71.08",
      responseTime: "1.2s",
      accuracyRate: "98.5%",
      dailyRequests: "2,450",
      activeModels: "3",
      totalErrors: "12",
    },
  };

  // Navigation section remains the same...

  return (
    <div className="admin-dashboard">
      <nav className="admin-dashboard__nav">
        <div className="nav__header">
          <BookOpen size={32} />
          <h1>Study Room </h1>
        </div>

        <div className="nav__links">
          <a href="#" className="active">
            <LayoutDashboard size={20} />
            Dashboard
          </a>
          <a href="#">
            <Users size={20} />
            Users
          </a>
          <a href="#">
            <FileQuestion size={20} />
            Quizzes
          </a>
          <a href="#">
            <MessageCircle size={20} />
            Voices
          </a>
          <a href="#">
            <Database size={20} />
            Knowledge B...
          </a>
          <a href="#">
            <Server size={20} />
            Infrastructure
          </a>
          <a href="#">
            <Activity size={20} />
            Analytics
          </a>
          <a href="#">
            <Settings size={20} />
            Settings
          </a>
        </div>

        <div className="nav__footer">
          <a href="#" className="logout">
            <LogOut size={20} />
            Logout
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="admin-dashboard__main">
        <div className="header">
          <h1>Dashboard Overview</h1>
          <div className="profile">
            <span>Admin</span>
            <div className="img">
              <UserRound />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <Users className="stat-icon" />
            <div className="stat-content">
              <h3>Live Users</h3>
              <p className="stat-number animated">{liveUsers}</p>
              <small className="trend-up">↑ 12% from last hour</small>
            </div>
          </div>
          <div className="stat-card">
            <FileQuestion className="stat-icon" />
            <div className="stat-content">
              <h3>Total Quizzes</h3>
              <p className="stat-number">{websiteStats.totalQuizzes}</p>
              <small className="trend-up">↑ 5% this week</small>
            </div>
          </div>
          <div className="stat-card">
            <MessageCircle className="stat-icon" />
            <div className="stat-content">
              <h3>User Voices</h3>
              <p className="stat-number">{websiteStats.totalVoices}</p>
              <small className="trend-up">↑ 8% this week</small>
            </div>
          </div>
          <div className="stat-card">
            <Database className="stat-icon" />
            <div className="stat-content">
              <h3>Knowledge Base</h3>
              <p className="stat-number">{websiteStats.totalMaterials}</p>
              <small className="trend-up">↑ 3% this week</small>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="charts-grid">
            {/* User Activity Chart */}
            <div className="chart-card">
              <h3>Live User Activity</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={userHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="time"
                    tickFormatter={(tick, index) => (index === 0 ? "" : tick)}
                  />
                  <YAxis domain={[200, 300]} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="var(--color-primary)"
                    fill="var(--color-primary)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Department Contribution Chart */}
            <div className="chart-card">
              <h3>Department Contributions</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Server Metrics */}
        <div className="server-metrics">
          <h2>Server Health</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-header">
                <Cpu size={20} />
                <h3>CPU Load</h3>
              </div>
              <div className="metric-gauge">
                <div
                  className="gauge-fill"
                  style={{
                    width: `${cpuLoad}%`,
                    backgroundColor: `hsl(${120 - cpuLoad * 1.2}, 70%, 45%)`,
                  }}
                />
              </div>
              <p>{cpuLoad.toFixed(1)}%</p>
              <div className="metric-details">
                <div className="detail-item">
                  <span>Processes</span>
                  <span>124</span>
                </div>
                <div className="detail-item">
                  <span>Threads</span>
                  <span>1,240</span>
                </div>
                <div className="detail-item">
                  <span>Peak Load</span>
                  <span>82%</span>
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <HardDrive size={20} />
                <h3>Memory</h3>
              </div>
              <div className="metric-gauge">
                <div
                  className="gauge-fill"
                  style={{
                    width: `${memoryUsage}%`,
                    backgroundColor: `hsl(${
                      120 - memoryUsage * 1.2
                    }, 70%, 45%)`,
                  }}
                />
              </div>
              <p>{memoryUsage.toFixed(1)}%</p>
              <div className="metric-details">
                <div className="detail-item">
                  <span>Total</span>
                  <span>32GB</span>
                </div>
                <div className="detail-item">
                  <span>Used</span>
                  <span>19.8GB</span>
                </div>
                <div className="detail-item">
                  <span>Cache</span>
                  <span>4.2GB</span>
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <BrainCircuit size={20} />
                <h3>AI Load</h3>
              </div>
              <div className="metric-gauge">
                <div
                  className="gauge-fill"
                  style={{
                    width: `${aiLoad}%`,
                    backgroundColor: `hsl(${120 - aiLoad * 1.2}, 70%, 45%)`,
                  }}
                />
              </div>
              <p>{aiLoad.toFixed(1)}%</p>
              <div className="metric-details">
                <div className="detail-item">
                  <span>Models</span>
                  <span>3</span>
                </div>
                <div className="detail-item">
                  <span>Requests</span>
                  <span>245/min</span>
                </div>
                <div className="detail-item">
                  <span>Latency</span>
                  <span>180ms</span>
                </div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <HardDrive size={20} />
                <h3>Storage</h3>
              </div>
              <div className="metric-gauge">
                <div
                  className="gauge-fill"
                  style={{
                    width: `${storageUsed}%`,
                    backgroundColor: `hsl(${
                      120 - storageUsed * 1.2
                    }, 70%, 45%)`,
                  }}
                />
              </div>
              <p>{storageUsed.toFixed(1)}%</p>
              <div className="metric-details">
                <div className="detail-item">
                  <span>Total</span>
                  <span>2TB</span>
                </div>
                <div className="detail-item">
                  <span>Used</span>
                  <span>1.56TB</span>
                </div>
                <div className="detail-item">
                  <span>Free</span>
                  <span>440GB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Platform Stats */}
        <div className="ai-platform">
          <h2>AI Platform Analytics</h2>
          <div className="ai-stats-grid">
            <div className="ai-stat-card">
              <TicketCheck size={24} />
              <div className="ai-stat-content">
                <h3>Tokens Used</h3>
                <p>{websiteStats.aiStats.tokensUsed}</p>
                <small>Budget: {websiteStats.aiStats.budgetLimit}</small>
                <div className="stat-trends">
                  <span className="trend-up">↑ 15% this month</span>
                </div>
              </div>
            </div>

            <div className="ai-stat-card">
              <Coins size={24} />
              <div className="ai-stat-content">
                <h3>Cost Incurred</h3>
                <p>{websiteStats.aiStats.costIncurred}</p>
                <small>Remaining: {websiteStats.aiStats.budgetRemaining}</small>
                <div className="stat-trends">
                  <span className="trend-down">↓ 8% from last month</span>
                </div>
              </div>
            </div>

            <div className="ai-stat-card">
              <Clock size={24} />
              <div className="ai-stat-content">
                <h3>Response Time</h3>
                <p>{websiteStats.aiStats.responseTime}</p>
                <small>Peak: 2.1s</small>
                <div className="stat-trends">
                  <span className="trend-up">98% under SLA</span>
                </div>
              </div>
            </div>

            <div className="ai-stat-card">
              <Award size={24} />
              <div className="ai-stat-content">
                <h3>Accuracy Rate</h3>
                <p>{websiteStats.aiStats.accuracyRate}</p>
                <small>Target: 99%</small>
                <div className="stat-trends">
                  <span className="trend-up">↑ 0.5% this week</span>
                </div>
              </div>
            </div>

            <div className="ai-stat-card">
              <AlertTriangle size={24} />
              <div className="ai-stat-content">
                <h3>System Health</h3>
                <p>{websiteStats.aiStats.totalErrors} errors</p>
                <small>
                  Active Models: {websiteStats.aiStats.activeModels}
                </small>
                <div className="stat-trends">
                  <span className="trend-down">↓ 30% error rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
