import HabitCard from '@/components/HabitCard'
import { createClient } from '@/lib/db'
import { cookies } from 'next/headers'
export default async function Habits() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
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
