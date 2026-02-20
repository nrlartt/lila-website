/**
 * CommandRegistry: Manages registration and execution of terminal commands.
 */
export class CommandRegistry {
  constructor() {
    this.commands = new Map();
  }

  register(name, description, handler) {
    this.commands.set(name.toLowerCase(), { description, handler });
  }

  get(name) {
    return this.commands.get(name.toLowerCase());
  }

  list() {
    return Array.from(this.commands.entries()).map(([name, cmd]) => ({ name, description: cmd.description }));
  }
}

/**
 * OutputType: Enum for terminal log levels.
 */
export const OutputType = {
  SYSTEM: 'system',
  AGENT: 'agent',
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success'
};

/**
 * TerminalCore: Parser and dispatcher for terminal commands.
 */
export class TerminalCore {
  constructor(registry) {
    this.registry = registry;
    this.history = [];
  }

  execute(input) {
    const raw = input.trim();
    if (!raw) return null;
    this.history.push(raw);

    const parts = raw.split(/\s+/);
    const cmdName = parts[0].startsWith('/') ? parts[0].slice(1) : parts[0];
    const args = parts.slice(1);

    const command = this.registry.get(cmdName);
    if (!command) {
      return { type: OutputType.ERROR, text: `Command not found: ${cmdName}` };
    }

    try {
      return command.handler(args);
    } catch (err) {
      return { type: OutputType.ERROR, text: `Execution error: ${err.message}` };
    }
  }
}
