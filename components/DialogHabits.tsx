"use client"

import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { useCreateHabit } from "@/hooks/useHabits"
import { HabitFormInput, HabitFormOutput, habitSchema } from "@/types/habit"

const items = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
]

const days = [
  { label: "L", value: "1" },
  { label: "M", value: "2" },
  { label: "X", value: "3" },
  { label: "J", value: "4" },
  { label: "V", value: "5" },
  { label: "S", value: "6" },
  { label: "D", value: "7" },
]

export function DialogHabits() {
  const [open, setOpen] = useState(false)
  const { mutateAsync: createHabit, isPending } = useCreateHabit()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<HabitFormInput>({
    resolver: zodResolver(habitSchema),
    mode: "onChange",
    defaultValues: {
      name: "Pedro Duarte",
      description: "",
      color: "#ff0000",
      icon: "🔥",
      frequency: "daily",
      targetDays: [],
    },
  })

  const onSubmit = async (values: HabitFormInput) => {
    await createHabit(values as HabitFormOutput, {
      onSuccess: () => {
        toast.success("¡Hábito creado!")
        setOpen(false)
        reset()
      },
      onError: (e) => {
        toast.error("Error al crear", {
          description: e instanceof Error ? e.message : "Unknown error",
        })
      },
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline">Create habit</Button>} />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create a new habit</DialogTitle>
            <DialogDescription>
              Make changes to your habit here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="space-y-4 py-4">
            {/* NAME */}
            <Field>
              <Label htmlFor="habit-name">Name</Label>
              <Input id="habit-name" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </Field>

            {/* DESCRIPTION */}
            <Field>
              <Label htmlFor="habit-description">Description</Label>
              <Input id="habit-description" {...register("description")} />
            </Field>

            <div className="flex gap-4">
              {/* COLOR */}
              <Field className="flex-1">
                <Label htmlFor="habit-color">Color</Label>
                <Input
                  id="habit-color"
                  {...register("color")}
                  type="color"
                  className="h-10"
                />
              </Field>
              {/* ICON */}
              <Field className="flex-1">
                <Label htmlFor="habit-icon">Icon</Label>
                <Input id="habit-icon" {...register("icon")} />
              </Field>
            </div>

            {/* FREQUENCY */}
            <Field>
              <Label htmlFor="habit-frequency">Frequency</Label>
              <Controller
                name="frequency"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="habit-frequency" className="w-full">
                      <SelectValue placeholder="Select a frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Frequency</SelectLabel>
                        {items.map((item) => (
                          <SelectItem key={item.value} value={item.value!}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.frequency && (
                <p className="text-xs text-red-500">
                  {errors.frequency.message}
                </p>
              )}
            </Field>

            {/* TARGET DAYS */}
            <Field>
              <Label htmlFor="habit-target-days">Target Days</Label>
              <Controller
                name="targetDays"
                control={control}
                render={({ field }) => (
                  <ToggleGroup
                    id="habit-target-days"
                    value={field.value.map(String)}
                    onValueChange={field.onChange}
                    className="flex justify-start gap-2"
                  >
                    {days.map((day) => (
                      <ToggleGroupItem
                        key={day.value}
                        value={day.value}
                        className="h-10 w-10 border"
                      >
                        {day.label}
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                )}
              />
              {errors.targetDays && (
                <p className="text-xs text-red-500">
                  {errors.targetDays.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose
              render={
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              }
            />
            <Button type="submit" disabled={!isValid || isPending}>
              {isPending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
