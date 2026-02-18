import helmet from "helmet";
import cors from "cors";

export const securityMiddleware = [
  helmet({ contentSecurityPolicy: false }),
  cors({ origin: true, credentials: true })
];
