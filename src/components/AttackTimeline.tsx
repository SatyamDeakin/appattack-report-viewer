
import { Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AttackTimeline = () => {
  const timelineEvents = [
    {
      time: "14:32",
      event: "SQL Injection detected",
      severity: "critical",
      details: "Malicious query targeting user database"
    },
    {
      time: "14:28",
      event: "Brute force attack blocked",
      severity: "high",
      details: "127 failed login attempts from 10.0.0.23"
    },
    {
      time: "14:15",
      event: "Suspicious file upload",
      severity: "medium",
      details: "Potentially malicious file detected and quarantined"
    },
    {
      time: "14:08",
      event: "Port scan detected",
      severity: "low",
      details: "Automated scan from external IP"
    },
    {
      time: "13:45",
      event: "DDoS attack mitigated",
      severity: "high",
      details: "Traffic spike successfully handled"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "border-red-500 bg-red-500/10";
      case "high": return "border-orange-500 bg-orange-500/10";
      case "medium": return "border-yellow-500 bg-yellow-500/10";
      case "low": return "border-blue-500 bg-blue-500/10";
      default: return "border-gray-500 bg-gray-500/10";
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Clock className="h-5 w-5" />
          <span>Attack Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full border-2 ${getSeverityColor(event.severity)}`} />
                {index < timelineEvents.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-600 mt-2" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">{event.event}</p>
                  <span className="text-xs text-gray-400">{event.time}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{event.details}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttackTimeline;
