import { createClient } from '@/utils/supabase/server'
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
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  )
}
