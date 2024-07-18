import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSlug(title) {
  // Convert title to lowercase
  const lowerCaseTitle = title.toLowerCase();

  // Replace spaces and non-alphanumeric characters with underscores
  const slug = lowerCaseTitle.replace(/[^a-z0-9]+/g, "_");

  // Get the current date in YYYYMMDD format
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  // Combine slug and date
  return `${slug}_${formattedDate}`;
}

// Example usage
const title = "This is a Sample Title!";
const slug = createSlug(title);
console.log(slug); // Output: this_is_a_sample_title_20240718
