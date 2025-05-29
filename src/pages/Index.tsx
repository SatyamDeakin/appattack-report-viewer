
import { Shield, AlertTriangle, Eye, Clock, TrendingUp, Users, Server, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ThreatOverview from "@/components/ThreatOverview";
import AttackTimeline from "@/components/AttackTimeline";
import VulnerabilityPanel from "@/components/VulnerabilityPanel";
import SecurityMetrics from "@/components/SecurityMetrics";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-white">AppAttack Security</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="animate-pulse">
                3 Critical Alerts
              </Badge>
              <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Security Metrics */}
        <SecurityMetrics />

        {/* Threat Overview */}
        <ThreatOverview />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Attack Timeline */}
          <AttackTimeline />
          
          {/* Vulnerability Panel */}
          <VulnerabilityPanel />
        </div>

        {/* System Status */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Server className="h-5 w-5" />
              <span>System Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                <span className="text-green-400">Firewall</span>
                <Badge className="bg-green-500 text-white">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                <span className="text-yellow-400">IDS/IPS</span>
                <Badge className="bg-yellow-500 text-black">Warning</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-900/20 border border-green-500/20 rounded-lg">
                <span className="text-green-400">Endpoint Protection</span>
                <Badge className="bg-green-500 text-white">Secure</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
