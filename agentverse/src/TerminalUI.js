import { OutputType } from './TerminalCore.js';

/**
 * TerminalUI: Manages the DOM representation of the OpenClaw terminal.
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
    // If container is empty or we need to ensure structure
    if (this.container.innerHTML.trim() === '' || this.container.id === 'terminal-container') {
      this.container.innerHTML = `
        <div style="font-size: 12px; font-weight: bold; margin-bottom: 10px; letter-spacing: 1px; color: #fff;">
          OPENCLAW KERNEL v2.1
        </div>
        <div class="term-output"></div>
        <div class="term-input-row">
          <span class="term-prompt">></span>
          <input type="text" class="term-input" spellcheck="false" autocomplete="off" />
        </div>
        <div class="term-meta">
          <span>LMB drag pan • wheel zoom</span>
          <span>/ focus • ESC blur</span>
        </div>
      `;
    }

    this.outputArea = this.container.querySelector('.term-output');
    this.input = this.container.querySelector('.term-input');
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
      }
      
      // History navigation
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const history = this.core.history;
        if (history.length > 0) {
          this.historyIndex = this.historyIndex === -1 ? history.length - 1 : Math.max(0, this.historyIndex - 1);
          this.input.value = history[this.historyIndex];
        }
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const history = this.core.history;
        if (this.historyIndex !== -1) {
          this.historyIndex = Math.min(history.length, this.historyIndex + 1);
          this.input.value = this.historyIndex === history.length ? '' : history[this.historyIndex];
          if (this.historyIndex === history.length) this.historyIndex = -1;
        }
      }
    });

    // Global focus handling
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

  print(text, type = OutputType.INFO) {
    const line = document.createElement('div');
    line.className = `term-line ${type}`;
    line.textContent = text;
    this.outputArea.appendChild(line);
    this.outputArea.scrollTop = this.outputArea.scrollHeight;
  }
}
