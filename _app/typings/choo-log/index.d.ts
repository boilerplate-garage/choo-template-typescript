declare module 'choo-log' {
  function log(): (state: any, emitter: any) => void;
  namespace log {}
  export = log;
}
