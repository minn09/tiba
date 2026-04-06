import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { HabitFormInput } from "@/types/habit";
import { getDayNames } from "@/utils/getDayNames";
import { Button } from "./ui/button";
import { useDeleteHabit } from "@/hooks/useDeleteHabit";


export default function HabitCard({ habit }: { habit: HabitFormInput }) {
  const { mutate: remove, isPending } = useDeleteHabit()
  const date = (() => {
    if (!habit?.createdAt) return "—";
    const d = new Date(habit.createdAt);
    if (isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  })();

  const formattedDays = getDayNames(habit.targetDays || []);

  return (
    <Card className="overflow-hidden border-l-4 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeftColor: habit.color }}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div className="flex gap-4">
          <span className="text-3xl" role="img" aria-label="icon">
            {habit.icon}
          </span>
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold leading-none">
              {habit.name}
            </CardTitle>
            <CardDescription className="text-sm">
              {habit.description}
            </CardDescription>
          </div>
        </div>
        <Badge variant="outline" className="font-medium uppercase tracking-wider text-[10px]">
          {habit.frequency}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            <span>{formattedDays}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Desde el {date}</span>
          </div>
          <div>
            <Button
              variant="destructive"
              disabled={isPending}
              onClick={() => remove(habit.id!)}
            >
              {isPending ? "Eliminando..." : "Delete"}
            </Button>
            <Button>Update</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
