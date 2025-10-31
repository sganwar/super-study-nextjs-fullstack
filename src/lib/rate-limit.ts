import { NextRequest } from 'next/server';

const RATE_LIMIT = {
  maxRequests: 10,
  windowMs: 60 * 1000, // 1 minute
};

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(request: NextRequest): { success: boolean; message?: string } {
  // Use headers instead of IP for serverless compatibility
  const identifier = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'anonymous';
  
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  // Clean up old entries
  for (const [key, data] of requestCounts.entries()) {
    if (data.resetTime < windowStart) {
      requestCounts.delete(key);
    }
  }

  const clientData = requestCounts.get(identifier) || { count: 0, resetTime: now + RATE_LIMIT.windowMs };
  
  if (clientData.resetTime < now) {
    // Reset counter if window has passed
    clientData.count = 0;
    clientData.resetTime = now + RATE_LIMIT.windowMs;
  }

  if (clientData.count >= RATE_LIMIT.maxRequests) {
    return { 
      success: false, 
      message: 'Too many requests. Please try again in a minute.' 
    };
  }

  clientData.count++;
  requestCounts.set(identifier, clientData);

  return { success: true };
}
