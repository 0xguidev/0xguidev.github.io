declare module 'next-pwa' {
  import { NextConfig } from 'next';

  interface PWAConfig {
    dest?: string;
    disable?: boolean;
    [key: string]: any;
  }

  interface WithPWAConfig extends NextConfig {
    pwa?: PWAConfig;
  }

  function withPWA(config: WithPWAConfig): NextConfig;

  export default withPWA;
}
