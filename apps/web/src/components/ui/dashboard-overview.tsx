import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Minus, Users, DollarSign, Clock, AlertCircle } from 'lucide-react';

type IconType = React.ElementType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export type TrendType = 'up' | 'down' | 'neutral';

export interface DashboardMetricCardProps {
  value: string;
  title: string;
  icon?: IconType;
  trendChange?: string;
  trendType?: TrendType;
  className?: string;
}

const DashboardMetricCard: React.FC<DashboardMetricCardProps> = ({
  value,
  title,
  icon: IconComponent,
  trendChange,
  trendType = 'neutral',
  className,
}) => {
  const TrendIcon = trendType === 'up' ? ArrowUp : trendType === 'down' ? ArrowDown : Minus;
  const trendColorClass =
    trendType === 'up'
      ? "text-green-600 dark:text-green-400"
      : trendType === 'down'
      ? "text-red-600 dark:text-red-400"
      : "text-muted-foreground";

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "cursor-pointer rounded-lg",
        className
      )}
    >
      <Card className="h-full transition-colors duration-200 bg-white border-trueme-gold/20">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-trueme-secondary">
            {title}
          </CardTitle>
          {IconComponent && (
            <IconComponent className="h-4 w-4 text-trueme-gold" aria-hidden="true" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-trueme mb-2">{value}</div>
          {trendChange && (
            <p className={cn("flex items-center text-xs font-medium", trendColorClass)}>
              <TrendIcon className="h-3 w-3 mr-1" aria-hidden="true" />
              {trendChange} {trendType === 'up' ? "augmentation" : trendType === 'down' ? "diminution" : "changement"}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const DashboardOverview = () => {
  return (
    <div className="p-8 bg-trueme-cream border border-trueme-gold/20 rounded-lg max-w-7xl mx-auto shadow-md">
      <h3 className="text-xl font-semibold text-trueme mb-6">Aperçu du Dashboard</h3>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard
          title="Membres Actifs"
          value="2,350"
          icon={Users}
          trendChange="+180"
          trendType="up"
        />
        <DashboardMetricCard
          title="Valeur Collection"
          value="12 450€"
          icon={DollarSign}
          trendChange="+5.2%"
          trendType="up"
        />
        <DashboardMetricCard
          title="Temps Moyen"
          value="4m 32s"
          icon={Clock}
          trendChange="+0.5s"
          trendType="neutral"
        />
        <DashboardMetricCard
          title="Vérifications"
          value="12"
          icon={AlertCircle}
          trendChange="+3"
          trendType="up"
          className="lg:col-span-1"
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
export { DashboardMetricCard };

