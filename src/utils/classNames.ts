import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * The `classNames` function combines and optimizes CSS classes using `clsx`
 * and `tailwind-merge`.
 *
 * - `clsx`: Efficiently combines classes, handling conditional values.
 * - `twMerge`: Removes duplicates and resolves conflicts between Tailwind CSS
 * classes, keeping the last class.
 *
 * @param {...ClassValue[]} classnames - One or more class values, which can be
 * strings, arrays, or conditional objects.
 *
 * @returns {string} - A string with the combined and optimized CSS classes.
 *
 * @example
 * // Usage example:
 * const buttonClass = classNames(['bg-blue-500', 'text-white', 'px-4', 'py-2', 'bg-blue-500']);
 * console.log(buttonClass); // "bg-blue-500 text-white px-4 py-2"
 *
 * // Example with class conflicts:
 * const buttonClass = classNames(['bg-red-500', 'bg-blue-500', 'text-white', 'text-black']);
 * console.log(buttonClass); // "bg-blue-500 text-black"
 */
export const classNames = (...classnames: ClassValue[]): string => {
  return twMerge(clsx(classnames))
}
