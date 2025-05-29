
import { AlertTriangle, Shield, Eye, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ThreatOverview = () => {
  const threats = [
    {
      id: 1,
      type: "SQL Injection",
      severity: "Critical",
      source: "192.168.1.45",
      target: "/api/users",
      timestamp: "2 minutes ago",
      status: "Active"
    },
    {
      id: 2,
      type: "Brute Force",
      severity: "High",
      source: "10.0.0.23",
      target: "/login",
      timestamp: "5 minutes ago",
      status: "Blocked"
    },
    {
      id: 3,
      type: "XSS Attempt",
      severity: "Medium",
      source: "172.16.0.8",
      target: "/dashboard",
      timestamp: "12 minutes ago",
      status: "Monitored"
    },
    {
      id: 4,
      type: "DDoS",
      severity: "High",
      source: "Multiple",
      target: "Main Server",
      timestamp: "15 minutes ago",
      status: "Mitigated"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-500";
      case "High": return "bg-orange-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-red-400 bg-red-900/20";
      case "Blocked": return "text-green-400 bg-green-900/20";
      case "Monitored": return "text-yellow-400 bg-yellow-900/20";
      case "Mitigated": return "text-blue-400 bg-blue-900/20";
      default: return "text-gray-400 bg-gray-900/20";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <span>Active Threats</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="flex items-center justify-between p-4 bg-gray-750 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${getSeverityColor(threat.severity)}`} />
                <div>
                  <div className="font-medium text-white">{threat.type}</div>
                  <div className="text-sm text-gray-400">
                    {threat.source} → {threat.target}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className={getStatusColor(threat.status)}>
                  {threat.status}
                </Badge>
                <div className="text-sm text-gray-400">{threat.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatOverview;
