"use server"
import { db } from "@/lib/db"
export async function createHabit(formData: FormData) {
  // Obtain the user id from form data (replace this with session retrieval if needed)
  const possibleUserId = formData.get("user_id")
  if (typeof possibleUserId !== "string" || possibleUserId.trim() === "") {
    throw new Error("user_id is required and must be a non-empty string")
  }
  const userId = possibleUserId

  const nameValue = formData.get("name")
  if (typeof nameValue !== "string" || nameValue.trim() === "") {
    throw new Error("name is required and must be a non-empty string")
  }
  const name = nameValue

  const habit = await db.habits.create({
    name,
    user_id: userId,
  })

  return habit
}
