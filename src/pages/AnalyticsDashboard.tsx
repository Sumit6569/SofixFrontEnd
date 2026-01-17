import { useEffect, useState } from "react";
import axios from "axios";
import PageLayout from "@/components/layout/PageLayout";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Loader2 } from "lucide-react";
import { API_BASE } from "@/config/appConfig";

const API = API_BASE;

const chartConfig = {
  visits: { label: "Total Visits" },
  leads: { label: "Verified Users" },
  conversions: { label: "QR Scans" },
};

// Demo static datasets (used when backend is unavailable or for previews)
const monthlyDemo = [
  { name: "Jan", visits: 1200, leads: 420, conversions: 180 },
  { name: "Feb", visits: 1500, leads: 530, conversions: 210 },
  { name: "Mar", visits: 1800, leads: 620, conversions: 260 },
  { name: "Apr", visits: 2100, leads: 700, conversions: 300 },
  { name: "May", visits: 2500, leads: 780, conversions: 350 },
  { name: "Jun", visits: 2900, leads: 860, conversions: 415 },
  { name: "Jul", visits: 3300, leads: 930, conversions: 470 },
  { name: "Aug", visits: 3600, leads: 990, conversions: 520 },
  { name: "Sep", visits: 4000, leads: 1050, conversions: 560 },
  { name: "Oct", visits: 4500, leads: 1130, conversions: 615 },
  { name: "Nov", visits: 4800, leads: 1210, conversions: 670 },
  { name: "Dec", visits: 5200, leads: 1280, conversions: 730 },
];

const quarterlyDemo = [
  { name: "Q1", visits: 4500, leads: 1570, conversions: 650 },
  { name: "Q2", visits: 7500, leads: 2340, conversions: 1085 },
  { name: "Q3", visits: 10800, leads: 2970, conversions: 1550 },
  { name: "Q4", visits: 14500, leads: 3570, conversions: 2015 },
];

const yearlyDemo = [
  { name: "2019", visits: 25000, leads: 9500, conversions: 4600 },
  { name: "2020", visits: 30000, leads: 11000, conversions: 5200 },
  { name: "2021", visits: 38000, leads: 14000, conversions: 6800 },
  { name: "2022", visits: 45000, leads: 17500, conversions: 8400 },
  { name: "2023", visits: 58000, leads: 21000, conversions: 9800 },
];

function computeSummaryFromData(d) {
  if (!d || !d.length) return null;
  const totalVisits = d.reduce((s, v) => s + (v.visits || 0), 0);
  const totalLeads = d.reduce((s, v) => s + (v.leads || 0), 0);
  const totalConversions = d.reduce((s, v) => s + (v.conversions || 0), 0);
  const last = d[d.length - 1] || { visits: 0, leads: 0, conversions: 0 };
  const prev = d[d.length - 2] || last;
  const pct = (prev, cur) => (prev ? ((cur - prev) / prev) * 100 : 0);
  return {
    visits: totalVisits,
    visitsGrowth: Math.round(pct(prev.visits || 0, last.visits || 0) * 10) / 10,
    leads: totalLeads,
    leadsGrowth: Math.round(pct(prev.leads || 0, last.leads || 0) * 10) / 10,
    conversions: totalConversions,
    conversionsGrowth:
      Math.round(pct(prev.conversions || 0, last.conversions || 0) * 10) / 10,
  };
}

const AnalyticsDashboard = () => {
  const [timeframe, setTimeframe] = useState("monthly");
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [demoMode, setDemoMode] = useState(false); // when true, show demo static data

  useEffect(() => {
    // If demo mode is active, load the local demo dataset immediately
    if (demoMode) {
      setLoading(true);
      const demo =
        timeframe === "monthly"
          ? monthlyDemo
          : timeframe === "quarterly"
            ? quarterlyDemo
            : yearlyDemo;
      setData(demo);
      setSummary(computeSummaryFromData(demo));
      setError("");
      setLoading(false);
      return;
    }

    setLoading(true);
    axios
      .get(`${API}/api/analytics?period=${timeframe}`)
      .then((res) => {
        // If backend provides chart & summary use it, otherwise fallback to computed summary
        const chart =
          res.data && res.data.chart && res.data.chart.length
            ? res.data.chart
            : null;
        const s =
          res.data && res.data.summary
            ? res.data.summary
            : chart
              ? computeSummaryFromData(chart)
              : null;

        if (chart) {
          setData(chart);
          setSummary(s);
          setError("");
        } else {
          // fallback to demo data and enable demo mode so user knows
          const demo =
            timeframe === "monthly"
              ? monthlyDemo
              : timeframe === "quarterly"
                ? quarterlyDemo
                : yearlyDemo;
          setData(demo);
          setSummary(computeSummaryFromData(demo));
          setError("Using demo data (backend returned empty)");
          setDemoMode(true);
        }
      })
      .catch(() => {
        // On error, fall back to demo data to keep the dashboard visible
        const demo =
          timeframe === "monthly"
            ? monthlyDemo
            : timeframe === "quarterly"
              ? quarterlyDemo
              : yearlyDemo;
        setData(demo);
        setSummary(computeSummaryFromData(demo));
        setError("Failed to load analytics data — showing demo data");
        setDemoMode(true);
      })
      .finally(() => setLoading(false));
  }, [timeframe, demoMode]);

  const renderChart = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
        </div>
      );
    }

    if (error || !data.length) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-3">
          <AlertTriangle className="w-10 h-10 text-yellow-500" />
          <p className="font-semibold">
            {error || "No analytics data available"}
          </p>
        </div>
      );
    }

    return (
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v) => v.toLocaleString()} />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#2563EB"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="#F97316"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="conversions"
              stroke="#16A34A"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    );
  };

  return (
    <PageLayout
      title="Sofixs Analytics Dashboard"
      description="Live system insights, verification stats, and platform performance"
      breadcrumbs={[{ name: "Analytics", href: "/analytics", current: true }]}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          {error ? (
            <div className="text-sm text-yellow-600">{error}</div>
          ) : (
            <div className="text-sm text-muted-foreground">
              Live analytics connected
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button
            className={`px-3 py-1 rounded text-sm ${demoMode ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setDemoMode((prev) => !prev)}
          >
            {demoMode ? "Viewing Demo Data" : "Use Demo Data"}
          </button>
        </div>
      </div>

      <Tabs defaultValue="monthly" onValueChange={setTimeframe}>
        <TabsList className="mb-6">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>

        {["monthly", "quarterly", "yearly"].map((period) => (
          <TabsContent key={period} value={period}>
            <Card>
              <CardHeader>
                <CardTitle>{period.toUpperCase()} Analytics</CardTitle>
                <CardDescription>
                  Real-time Sofixs platform performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[420px]">{renderChart()}</div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {summary && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <StatCard
              title="Total Visits"
              value={summary.visits}
              growth={summary.visitsGrowth}
            />
            <StatCard
              title="Verified Users"
              value={summary.leads}
              growth={summary.leadsGrowth}
            />
            <StatCard
              title="QR Scans"
              value={summary.conversions}
              growth={summary.conversionsGrowth}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Conversions / Visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {summary && summary.visits
                    ? `${((summary.conversions / summary.visits) * 100).toFixed(2)}%`
                    : "—"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lead → Conversion</CardTitle>
                <CardDescription>Conversions / Leads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {summary && summary.leads
                    ? `${((summary.conversions / summary.leads) * 100).toFixed(2)}%`
                    : "—"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Latest Snapshot</CardTitle>
                <CardDescription>Most recent period values</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  Visits:{" "}
                  <strong>
                    {data && data.length
                      ? data[data.length - 1].visits.toLocaleString()
                      : "—"}
                  </strong>
                </div>
                <div className="text-sm">
                  Leads:{" "}
                  <strong>
                    {data && data.length
                      ? data[data.length - 1].leads.toLocaleString()
                      : "—"}
                  </strong>
                </div>
                <div className="text-sm">
                  Conversions:{" "}
                  <strong>
                    {data && data.length
                      ? data[data.length - 1].conversions.toLocaleString()
                      : "—"}
                  </strong>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </PageLayout>
  );
};

const StatCard = ({ title, value, growth }) => {
  const formattedValue =
    typeof value === "number" ? value.toLocaleString() : value || "—";
  const growthText =
    typeof growth === "number"
      ? `${growth >= 0 ? "▲" : "▼"} ${Math.abs(growth).toFixed(1)}%`
      : "—";
  const growthClass =
    typeof growth === "number"
      ? growth >= 0
        ? "text-green-600"
        : "text-red-600"
      : "text-muted-foreground";

  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{formattedValue}</div>
        <div className={`text-sm ${growthClass}`}>
          {growthText} vs last period
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;
