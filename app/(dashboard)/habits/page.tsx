import HabitCard from '@/components/HabitCard'
import { createClient } from '@/lib/supabase/server'

export default async function Habits() {
  const supabase = await createClient()
  const { data: habits } = await supabase.from('habits').select()

  return (
    <div>
      <h1>Habits</h1>
      <ul>
        {habits?.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  )
}
