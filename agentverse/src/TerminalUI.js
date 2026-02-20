import { OutputType } from './TerminalCore.js';

/**
 * TerminalUI: Manages the DOM representation of the terminal.
 */
export class TerminalUI {
  constructor(container, core) {
    this.container = container;
    this.core = core;
    this.historyIndex = -1;

    this.initDOM();
    this.setupListeners();
  }

  initDOM() {
    // Output Area
    this.outputArea = document.createElement('div');
    this.outputArea.className = 'term-output';
    
    // Input Row
    const inputRow = document.createElement('div');
    inputRow.className = 'term-input-row';
    
    const prompt = document.createElement('span');
    prompt.className = 'term-prompt';
    prompt.textContent = '>';
    
    this.input = document.createElement('input');
    this.input.className = 'term-input';
    this.input.type = 'text';
    this.input.spellcheck = false;
    this.input.placeholder = 'Type /help for commands...';

    inputRow.appendChild(prompt);
    inputRow.appendChild(this.input);

    // Meta Row
    this.meta = document.createElement('div');
    this.meta.className = 'term-meta';
    this.meta.innerHTML = `
      <span>[ESC] blur</span>
      <span>[/] focus</span>
      <span>v2.1.0-PRO</span>
    `;

    this.container.appendChild(this.outputArea);
    this.container.appendChild(inputRow);
    this.container.appendChild(this.meta);
  }

  setupListeners() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const value = this.input.value;
        this.print(`> ${value}`, OutputType.INFO);
        const result = this.core.execute(value);
        if (result) this.print(result.text, result.type);
        this.input.value = '';
        this.historyIndex = -1;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.navigateHistory(1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.navigateHistory(-1);
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== this.input) {
        e.preventDefault();
        this.input.focus();
      }
      if (e.key === 'Escape') {
        this.input.blur();
      }
    });
  }

  navigateHistory(direction) {
    const history = this.core.history;
    if (history.length === 0) return;
    
    this.historyIndex += direction;
    if (this.historyIndex >= history.length) this.historyIndex = history.length - 1;
    if (this.historyIndex < -1) this.historyIndex = -1;

    if (this.historyIndex === -1) {
      this.input.value = '';
    } else {
      this.input.value = history[history.length - 1 - this.historyIndex];
    }
  }

  print(text, type = OutputType.INFO) {
    const line = document.createElement('div');
    line.className = `term-line ${type}`;
    line.textContent = text;
    this.outputArea.appendChild(line);
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }
}
