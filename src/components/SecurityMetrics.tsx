
import { TrendingUp, Users, Eye, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SecurityMetrics = () => {
  const metrics = [
    {
      title: "Threats Blocked",
      value: "1,247",
      change: "+23%",
      icon: Lock,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/20"
    },
    {
      title: "Active Monitoring",
      value: "156",
      change: "+12%",
      icon: Eye,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Security Score",
      value: "94%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Protected Users",
      value: "8,432",
      change: "+8%",
      icon: Users,
      color: "text-orange-400",
      bgColor: "bg-orange-900/20",
      borderColor: "border-orange-500/20"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className={`bg-gray-800 border-gray-700 ${metric.bgColor} ${metric.borderColor}`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-white">
                  {metric.value}
                </p>
                <p className={`text-sm ${metric.color} mt-1`}>
                  {metric.change} from last week
                </p>
              </div>
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SecurityMetrics;
