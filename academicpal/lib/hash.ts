// lib/hash.ts
import bcrypt from 'bcryptjs';

/**
 * Hash a plain text password
 * @param password - User's plain password
 * @returns Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

/**
 * Compare plain password with hashed password
 * @param password - Plain password
 * @param hashed - Hashed password from DB
 * @returns Boolean indicating match
 */
export async function comparePassword(password: string, hashed: string): Promise<boolean> {
  return await bcrypt.compare(password, hashed);
}
