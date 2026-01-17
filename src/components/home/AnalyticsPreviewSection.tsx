
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowRight } from "lucide-react";

const revenueData = [
  { name: 'Jan', revenue: 65000, expenses: 45000, profit: 20000 },
  { name: 'Feb', revenue: 72000, expenses: 48000, profit: 24000 },
  { name: 'Mar', revenue: 85000, expenses: 52000, profit: 33000 },
  { name: 'Apr', revenue: 93000, expenses: 54000, profit: 39000 },
  { name: 'May', revenue: 105000, expenses: 58000, profit: 47000 },
  { name: 'Jun', revenue: 112000, expenses: 60000, profit: 52000 },
];

const performanceData = [
  { name: 'Q1', target: 180000, achieved: 195000 },
  { name: 'Q2', target: 220000, achieved: 235000 },
  { name: 'Q3', target: 260000, achieved: 255000 },
  { name: 'Q4', target: 300000, achieved: 310000 },
];

// Chart configuration for colors and labels
const revenueConfig = {
  revenue: {
    label: 'Revenue',
    theme: { light: '#0EA5E9', dark: '#0EA5E9' }
  },
  expenses: {
    label: 'Expenses',
    theme: { light: '#F97316', dark: '#F97316' }
  },
  profit: {
    label: 'Profit',
    theme: { light: '#10B981', dark: '#10B981' }
  }
};

const performanceConfig = {
  target: {
    label: 'Target',
    theme: { light: '#9b87f5', dark: '#9b87f5' }
  },
  achieved: {
    label: 'Achieved',
    theme: { light: '#7E69AB', dark: '#7E69AB' }
  }
};

const AnalyticsPreviewSection = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Performance Analytics</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your business performance with our comprehensive analytics dashboard. Get real-time insights into key metrics and make data-driven decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trends */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Revenue Trends</h3>
          <div className="h-[300px]">
            <ChartContainer config={revenueConfig}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="var(--color-revenue)" 
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="var(--color-expenses)" 
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="var(--color-profit)" 
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        {/* Performance vs Target */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Performance vs Target</h3>
          <div className="h-[300px]">
            <ChartContainer config={performanceConfig}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="target" fill="var(--color-target)" />
                <Bar dataKey="achieved" fill="var(--color-achieved)" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-sm font-medium text-gray-500">Happy Clients</h4>
            <p className="text-2xl font-bold text-gray-900 mt-2">500+</p>
            <span className="text-sm text-green-600">↑ 12.5%</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-sm font-medium text-gray-500">Active Projects</h4>
            <p className="text-2xl font-bold text-gray-900 mt-2">24</p>
            <span className="text-sm text-green-600">↑ 8.3%</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-sm font-medium text-gray-500">Client Satisfaction</h4>
            <p className="text-2xl font-bold text-gray-900 mt-2">98%</p>
            <span className="text-sm text-green-600">↑ 2.1%</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-sm font-medium text-gray-500">Team Efficiency</h4>
            <p className="text-2xl font-bold text-gray-900 mt-2">94%</p>
            <span className="text-sm text-green-600">↑ 5.4%</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/analytics">
          <Button className="bg-tech-blue hover:bg-tech-darkblue text-white">
            View Detailed Analytics
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AnalyticsPreviewSection;
