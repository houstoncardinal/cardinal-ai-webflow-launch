import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Target, Megaphone, BarChart } from 'lucide-react';

const MarketingTab = () => {
  return (
    <div className="space-y-6">
      <div className="text-center py-12">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl flex items-center justify-center shadow-xl">
            <TrendingUp className="h-12 w-12 text-white" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-emerald-900 mb-4">Marketing Analytics</h3>
        <p className="text-emerald-700 max-w-md mx-auto text-lg">
          Advanced marketing analytics and campaign management system coming soon. 
          Track performance, analyze trends, and optimize campaigns.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-emerald-700">98.5%</CardTitle>
              <CardDescription className="text-emerald-600 font-medium">Campaign Success Rate</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-emerald-700">2.4M</CardTitle>
              <CardDescription className="text-emerald-600 font-medium">Total Reach</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-emerald-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold text-emerald-700">$847K</CardTitle>
              <CardDescription className="text-emerald-600 font-medium">Revenue Generated</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketingTab;
