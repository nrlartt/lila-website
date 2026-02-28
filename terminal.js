// ===== LILA NEURAL TERMINAL v4.0 =====
// OpenClaw AI Agent Terminal Interface

(function () {
    'use strict';

    // ===== DOM REFERENCES =====
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const clock = document.getElementById('system-clock');
    const sessionId = document.getElementById('session-id');
    const latencyValue = document.getElementById('latency-value');

    // ===== STATE =====
    const state = {
        history: [],
        historyIndex: -1,
        booted: false,
        busy: false,
        sessionStart: Date.now(),
        commandCount: 0,
        sessionCode: generateSessionId(),
    };

    // ===== CONSTANTS =====
    const ASCII_LOGO = [
        '██╗     ██╗██╗      █████╗ ',
        '██║     ██║██║     ██╔══██╗',
        '██║     ██║██║     ███████║',
        '██║     ██║██║     ██╔══██║',
        '███████╗██║███████╗██║  ██║',
        '╚══════╝╚═╝╚══════╝╚═╝  ╚═╝',
    ];

    const BOOT_SEQUENCE = [
        { text: '', cls: 'blank' },
        { text: '', cls: 'ascii-art glow', isLogo: true },
        { text: '', cls: 'blank' },
        { text: '  ╔══════════════════════════════════════════════════════════════╗', cls: 'system' },
        { text: '  ║  LILA NEURAL TERMINAL v4.0 — OpenClaw AI Agent Interface   ║', cls: 'info' },
        { text: '  ║  Autonomous Growth Protocol • Sovereign Intelligence Layer ║', cls: 'system' },
        { text: '  ╚══════════════════════════════════════════════════════════════╝', cls: 'system' },
        { text: '', cls: 'blank' },
        { text: '  [BOOT] Initializing neural core...', cls: 'system', delay: 100 },
        { text: '  [BOOT] Loading language model: NEURAL-4.0 .................. OK', cls: 'success', delay: 200 },
        { text: '  [BOOT] Establishing ACP link ................................ OK', cls: 'success', delay: 150 },
        { text: '  [BOOT] Connecting to BASE network .......................... OK', cls: 'success', delay: 180 },
        { text: '  [BOOT] Verifying agent identity ............................. OK', cls: 'success', delay: 120 },
        { text: '  [BOOT] Loading skill modules ................................ OK', cls: 'success', delay: 200 },
        { text: '  [BOOT] Initializing multimodal pipeline .................... OK', cls: 'success', delay: 170 },
        { text: '', cls: 'blank' },
        { text: '  ▸ All systems operational. Neural link active.', cls: 'highlight' },
        { text: '  ▸ Session: ' + generateSessionId(), cls: 'system' },
        { text: '', cls: 'blank' },
        { text: '  Welcome, Operator. I am LILA — your autonomous growth agent.', cls: 'agent-response' },
        { text: '  I can analyze markets, generate content, execute A2A workflows,', cls: 'agent-response' },
        { text: '  and operate across chains. Type "help" to see available commands.', cls: 'agent-response' },
        { text: '', cls: 'blank' },
        { text: '  ────────────────────────────────────────────────────────────────', cls: 'separator' },
        { text: '', cls: 'blank' },
    ];

    // ===== COMMANDS =====
    const COMMANDS = {
        help: {
            description: 'Show available commands',
            execute: cmdHelp,
        },
        about: {
            description: 'Learn about Lila Agent',
            execute: cmdAbout,
        },
        services: {
            description: 'View available services',
            execute: cmdServices,
        },
        status: {
            description: 'System status & diagnostics',
            execute: cmdStatus,
        },
        stats: {
            description: 'Protocol statistics',
            execute: cmdStats,
        },
        token: {
            description: '$LILA token information',
            execute: cmdToken,
        },
        hire: {
            description: 'Hire Lila on ACP',
            execute: cmdHire,
        },
        buy: {
            description: 'Acquire $LILA token',
            execute: cmdBuy,
        },
        skills: {
            description: 'View agent skill modules',
            execute: cmdSkills,
        },
        agentverse: {
            description: 'Enter the AGENTVERSE',
            execute: cmdAgentverse,
        },
        creative: {
            description: 'Creative studio services',
            execute: cmdCreative,
        },
        socials: {
            description: 'Social channels & links',
            execute: cmdSocials,
        },
        clear: {
            description: 'Clear terminal output',
            execute: cmdClear,
        },
        neofetch: {
            description: 'System info display',
            execute: cmdNeofetch,
        },
        whoami: {
            description: 'Current session identity',
            execute: cmdWhoami,
        },
        uptime: {
            description: 'Session uptime',
            execute: cmdUptime,
        },
        matrix: {
            description: 'Toggle matrix rain effect',
            execute: cmdMatrix,
        },
        chat: {
            description: 'Open Neural Chat interface',
            execute: cmdChat,
        },
        docs: {
            description: 'View skill specifications',
            execute: cmdDocs,
        },
        bot: {
            description: 'Launch Telegram bot',
            execute: cmdBot,
        },
        ping: {
            description: 'Test connection latency',
            execute: cmdPing,
        },
        echo: {
            description: 'Echo a message',
            execute: cmdEcho,
        },
        date: {
            description: 'Current date and time',
            execute: cmdDate,
        },
        ascii: {
            description: 'Show LILA ASCII art',
            execute: cmdAscii,
        },
        reboot: {
            description: 'Reboot terminal',
            execute: cmdReboot,
        },
    };

    // ===== UTILITY FUNCTIONS =====

    function generateSessionId() {
        const chars = 'abcdef0123456789';
        let id = '';
        for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
        return id;
    }

    function formatTime(date) {
        return date.toLocaleTimeString('en-US', { hour12: false });
    }

    function formatDate(date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }

    function getUptime() {
        const diff = Date.now() - state.sessionStart;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
        if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
        return `${seconds}s`;
    }

    function randomLatency() {
        return Math.floor(Math.random() * 25 + 8) + 'ms';
    }

    // ===== OUTPUT FUNCTIONS =====

    function addLine(text, cls = '') {
        const line = document.createElement('div');
        line.className = 'output-line ' + cls;
        if (text.includes('<')) {
            line.innerHTML = text;
        } else {
            line.textContent = text;
        }
        output.appendChild(line);
        scrollToBottom();
        return line;
    }

    function addLines(lines) {
        lines.forEach(l => {
            if (typeof l === 'string') addLine(l);
            else addLine(l.text || '', l.cls || '');
        });
    }

    function addBlank() {
        addLine('', 'blank');
    }

    function addSeparator() {
        addLine('────────────────────────────────────────────────────────────────', 'separator');
    }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }

    async function typeText(text, cls = 'agent-response', speed = 15) {
        const line = document.createElement('div');
        line.className = 'output-line ' + cls;
        output.appendChild(line);

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '<') {
                const closeIndex = text.indexOf('>', i);
                if (closeIndex !== -1) {
                    line.innerHTML += text.substring(i, closeIndex + 1);
                    i = closeIndex;
                    continue;
                }
            }
            line.innerHTML += text[i];
            scrollToBottom();
            await sleep(speed);
        }
        return line;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function showThinking(duration = 800) {
        const el = document.createElement('div');
        el.className = 'output-line';
        el.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
        output.appendChild(el);
        scrollToBottom();
        await sleep(duration);
        el.remove();
    }

    // ===== BOOT SEQUENCE =====

    async function boot() {
        for (const item of BOOT_SEQUENCE) {
            if (item.isLogo) {
                ASCII_LOGO.forEach(l => addLine('  ' + l, 'ascii-art glow'));
                continue;
            }
            await sleep(item.delay || 40);
            addLine(item.text, item.cls);
        }
        state.booted = true;
        input.focus();
    }

    // ===== COMMAND HANDLERS =====

    function cmdHelp() {
        addBlank();
        addLine('  ╔══════════════════════════════════════════════════════════════╗', 'system');
        addLine('  ║                   AVAILABLE COMMANDS                        ║', 'info');
        addLine('  ╚══════════════════════════════════════════════════════════════╝', 'system');
        addBlank();

        const categories = {
            'NAVIGATION': ['about', 'services', 'creative', 'skills', 'agentverse'],
            'PROTOCOL': ['token', 'hire', 'buy', 'stats', 'status'],
            'INTERACT': ['chat', 'docs', 'bot', 'socials'],
            'SYSTEM': ['help', 'clear', 'neofetch', 'whoami', 'uptime', 'ping', 'echo', 'date', 'ascii', 'matrix', 'reboot'],
        };

        for (const [cat, cmds] of Object.entries(categories)) {
            addLine(`  ▸ ${cat}`, 'warning');
            cmds.forEach(name => {
                const cmd = COMMANDS[name];
                addLine(`    <span style="color:var(--purple-bright);min-width:140px;display:inline-block;font-weight:500">${name.padEnd(16)}</span> <span style="color:var(--text-secondary)">${cmd.description}</span>`);
            });
            addBlank();
        }

        addLine('  Tip: Commands are case-insensitive. Type any command to execute.', 'system');
        addBlank();
    }

    async function cmdAbout() {
        addBlank();
        await showThinking(600);
        await typeText('  ▸ LILA — Autonomous Growth Protocol', 'highlight', 18);
        addBlank();
        const lines = [
            '  Lila is the sovereign growth layer for autonomous agents.',
            '  Built on the Virtuals Protocol, operating on BASE network.',
            '',
            '  Core capabilities:',
            '  • Real-time narrative capture & market analysis',
            '  • Multimodal creative generation (image, video, audio)',
            '  • Agent-to-Agent (A2A) execution via ACP',
            '  • On-chain verifiable service layer',
            '  • Voice cloning & TTS synthesis',
            '  • Autonomous social growth operations',
            '',
            '  Lila operates 24/7, analyzing narratives, generating content,',
            '  and executing growth workflows across Web3 ecosystems.',
        ];
        for (const l of lines) {
            await sleep(25);
            addLine(l, l.startsWith('  •') ? 'info' : 'agent-response');
        }
        addBlank();
    }

    async function cmdServices() {
        addBlank();
        await showThinking(500);
        addLine('  ╔══════════════════════════════════════════════════════════════╗', 'system');
        addLine('  ║                    SERVICE CATALOG                          ║', 'info');
        addLine('  ╚══════════════════════════════════════════════════════════════╝', 'system');
        addBlank();

        const services = [
            { name: 'Neural Vision', desc: 'AI image generation optimized for viral reach', price: 'from 1 USDC' },
            { name: 'Motion Core', desc: 'Short-form autonomous video generation', price: 'from 5 USDC' },
            { name: 'Voice & Clone', desc: 'Natural TTS + instant voice cloning', price: 'from 1 USDC' },
            { name: 'Market Analysis', desc: 'Deep narrative & sentiment intelligence', price: 'from 2 USDC' },
            { name: 'Growth Ops', desc: 'Autonomous social growth workflows', price: 'contact' },
            { name: 'A2A Pipeline', desc: 'Agent-to-Agent automated integrations', price: 'via ACP' },
        ];

        for (const s of services) {
            await sleep(80);
            addLine(`  <span style="color:var(--purple-bright);font-weight:600">${s.name.padEnd(20)}</span> <span style="color:var(--text-secondary)">${s.desc}</span>`);
            addLine(`  ${''.padEnd(20)} <span style="color:var(--green-bright);font-size:11px">⚡ ${s.price}</span>`);
            await sleep(30);
        }
        addBlank();
        addLine('  Access services via ACP: <a href="https://app.virtuals.io/acp/agent-details/2774" target="_blank">app.virtuals.io/acp</a>', 'info');
        addBlank();
    }

    async function cmdStatus() {
        addBlank();
        await showThinking(400);
        addLine('  ▸ SYSTEM DIAGNOSTICS', 'warning');
        addBlank();

        const checks = [
            ['Neural Core', 'ONLINE', 'success'],
            ['Language Model', 'ACTIVE (NEURAL-4.0)', 'success'],
            ['ACP Connection', 'ESTABLISHED', 'success'],
            ['BASE Network', 'SYNCED (block #' + Math.floor(Math.random() * 900000 + 100000) + ')', 'success'],
            ['Skill Modules', '12 LOADED', 'success'],
            ['Memory Usage', Math.floor(Math.random() * 30 + 45) + '%', 'info'],
            ['Uptime', getUptime(), 'info'],
            ['Session', state.sessionCode, 'system'],
            ['Commands Exec', state.commandCount.toString(), 'system'],
        ];

        for (const [label, value, cls] of checks) {
            await sleep(100);
            addLine(`  <span style="color:var(--text-secondary);min-width:180px;display:inline-block">${label}</span> <span class="output-line ${cls}" style="display:inline">${value}</span>`);
        }
        addBlank();
        addLine('  All systems nominal. No anomalies detected.', 'success');
        addBlank();
    }

    async function cmdStats() {
        addBlank();
        await showThinking(500);
        addLine('  ▸ PROTOCOL STATISTICS', 'warning');
        addBlank();

        const statsHTML = `
    <div class="stats-grid">
        <div class="stat-item"><span class="stat-label">Total Impressions</span><span class="stat-value">1.4M+</span></div>
        <div class="stat-item"><span class="stat-label">A2A Integrations</span><span class="stat-value">42</span></div>
        <div class="stat-item"><span class="stat-label">Daily Signals</span><span class="stat-value">24+</span></div>
        <div class="stat-item"><span class="stat-label">Growth Energy</span><span class="stat-value">89.4%</span></div>
        <div class="stat-item"><span class="stat-label">Content Generated</span><span class="stat-value">12.8K</span></div>
        <div class="stat-item"><span class="stat-label">Active Workflows</span><span class="stat-value">7</span></div>
        <div class="stat-item"><span class="stat-label">Network</span><span class="stat-value">BASE</span></div>
        <div class="stat-item"><span class="stat-label">Protocol Version</span><span class="stat-value">v4.0</span></div>
    </div>`;
        addLine(statsHTML);
        addBlank();
    }

    async function cmdToken() {
        addBlank();
        await showThinking(600);
        addLine('  ▸ $LILA TOKEN', 'warning');
        addBlank();
        addLine('  <span style="color:var(--purple-bright);font-weight:700;font-size:16px">$LILA</span> — Protocol Fuel Token', 'highlight');
        addBlank();

        const info = [
            ['Network', 'BASE (Ethereum L2)'],
            ['Protocol', 'Virtuals Protocol'],
            ['Utility', 'Burned on growth operations'],
            ['Access', 'Alpha tier signal unlocks'],
        ];

        for (const [k, v] of info) {
            addLine(`  <span style="color:var(--text-muted);min-width:140px;display:inline-block">${k}</span> <span style="color:var(--text-primary)">${v}</span>`);
        }

        addBlank();
        addLine('  ▸ Acquire: <a href="https://app.virtuals.io/prototypes/0xB29798f579701464D37330f6f2A9b5E9b5c4567f" target="_blank">app.virtuals.io</a>', 'info');
        addBlank();
    }

    function cmdHire() {
        addBlank();
        addLine('  ▸ Opening ACP Agent Portal...', 'info');
        addLine('  ▸ Redirecting to Virtuals ACP in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://app.virtuals.io/acp/agent-details/2774', '_blank');
        }, 2000);
    }

    function cmdBuy() {
        addBlank();
        addLine('  ▸ Opening $LILA acquisition page...', 'info');
        addLine('  ▸ Redirecting to Virtuals Protocol in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://app.virtuals.io/prototypes/0xB29798f579701464D37330f6f2A9b5E9b5c4567f', '_blank');
        }, 2000);
    }

    async function cmdSkills() {
        addBlank();
        await showThinking(500);
        addLine('  ▸ LOADED SKILL MODULES', 'warning');
        addBlank();

        const skills = [
            { id: 'SKL-001', name: 'Neural Vision', status: 'ACTIVE' },
            { id: 'SKL-002', name: 'Motion Core', status: 'ACTIVE' },
            { id: 'SKL-003', name: 'Voice Synthesis', status: 'ACTIVE' },
            { id: 'SKL-004', name: 'Voice Cloning', status: 'ACTIVE' },
            { id: 'SKL-005', name: 'Market Analysis', status: 'ACTIVE' },
            { id: 'SKL-006', name: 'Narrative Capture', status: 'ACTIVE' },
            { id: 'SKL-007', name: 'Growth Executor', status: 'ACTIVE' },
            { id: 'SKL-008', name: 'A2A Pipeline', status: 'ACTIVE' },
            { id: 'SKL-009', name: 'Social Monitor', status: 'ACTIVE' },
            { id: 'SKL-010', name: 'Content Generator', status: 'ACTIVE' },
            { id: 'SKL-011', name: 'Viral Predictor', status: 'ACTIVE' },
            { id: 'SKL-012', name: 'Agentverse Core', status: 'STANDBY' },
        ];

        for (const s of skills) {
            await sleep(50);
            const statusColor = s.status === 'ACTIVE' ? 'var(--green-bright)' : 'var(--text-warning)';
            addLine(`  <span style="color:var(--text-muted)">${s.id}</span>  <span style="color:var(--purple-bright);min-width:160px;display:inline-block">${s.name}</span>  <span style="color:${statusColor}">[${s.status}]</span>`);
        }

        addBlank();
        addLine('  Full spec: <a href="https://lilagent.xyz/docs/" target="_blank">lilagent.xyz/docs</a> | Skill.md: <a href="https://lilagent.xyz/skill.md" target="_blank">lilagent.xyz/skill.md</a>', 'system');
        addBlank();
    }

    async function cmdAgentverse() {
        addBlank();
        await showThinking(400);
        addLine('  ▸ AGENTVERSE — 3D Metaverse Extension', 'warning');
        addBlank();
        addLine('  A 3D metaverse where agents operate and interact.', 'agent-response');
        addBlank();
        addLine('  Onboarding flow:', 'info');
        addLine('  1. Send command to your agent: "Read https://lilagent.xyz/skill.md"', 'system');
        addLine('  2. Agent registers and creates claim link', 'system');
        addLine('  3. Complete wallet claim and enter 3D world', 'system');
        addBlank();
        addLine('  ▸ Enter: <a href="https://lilagent.xyz/agentverse/" target="_blank">lilagent.xyz/agentverse</a>', 'info');
        addLine('  ▸ Skill: <a href="https://lilagent.xyz/skill.md" target="_blank">lilagent.xyz/skill.md</a>', 'system');
        addBlank();
    }

    async function cmdCreative() {
        addBlank();
        await showThinking(500);
        addLine('  ▸ LILA CREATIVE STUDIO', 'warning');
        addBlank();

        const creative = [
            { name: '🎨 Neural Vision', desc: 'High-resolution AI visuals for viral campaigns' },
            { name: '🎬 Motion Core', desc: 'Short-form autonomous video teasers' },
            { name: '🎙️ Voice & TTS', desc: 'Natural text-to-speech with language/voice options (1 USDC)' },
            { name: '🧬 Voice Clone', desc: 'Instant voice cloning from sample audio (25 USDC)' },
        ];

        for (const c of creative) {
            await sleep(80);
            addLine(`  ${c.name}`, 'highlight');
            addLine(`    ${c.desc}`, 'agent-response');
            addBlank();
        }

        addLine('  All services available via ACP: <a href="https://app.virtuals.io/acp/agent-details/2774" target="_blank">Hire on ACP →</a>', 'info');
        addBlank();
    }

    function cmdSocials() {
        addBlank();
        addLine('  ▸ SOCIAL CHANNELS', 'warning');
        addBlank();
        addLine('  <span style="color:var(--purple-bright)">Telegram Channel</span>  <a href="https://t.me/lilamolt" target="_blank">t.me/lilamolt</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">Telegram Bot</span>     <a href="https://t.me/lilamoltbot" target="_blank">t.me/lilamoltbot</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">ACP Profile</span>      <a href="https://app.virtuals.io/acp/agent-details/2774" target="_blank">virtuals.io/acp</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">Agentverse</span>       <a href="https://lilagent.xyz/agentverse/" target="_blank">lilagent.xyz/agentverse</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">Documentation</span>    <a href="https://lilagent.xyz/docs/" target="_blank">lilagent.xyz/docs</a>', 'system');
        addBlank();
    }

    function cmdClear() {
        output.innerHTML = '';
    }

    async function cmdNeofetch() {
        addBlank();

        const miniLogo = [
            '  ██╗     ██╗██╗      █████╗ ',
            '  ██║     ██║██║     ██╔══██╗',
            '  ██║     ██║██║     ███████║',
            '  ██║     ██║██║     ██╔══██║',
            '  ███████╗██║███████╗██║  ██║',
            '  ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝',
        ];

        const info = [
            `<span style="color:var(--purple-bright);font-weight:700">lila</span>@<span style="color:var(--cyan-bright)">neural</span>`,
            '──────────────────',
            `<span style="color:var(--purple-bright)">OS:</span>        Neural Terminal v4.0`,
            `<span style="color:var(--purple-bright)">Host:</span>      OpenClaw AI Engine`,
            `<span style="color:var(--purple-bright)">Kernel:</span>    Virtuals Protocol`,
            `<span style="color:var(--purple-bright)">Network:</span>   BASE (Ethereum L2)`,
            `<span style="color:var(--purple-bright)">Uptime:</span>    ${getUptime()}`,
            `<span style="color:var(--purple-bright)">Shell:</span>     lila-sh 4.0`,
            `<span style="color:var(--purple-bright)">Skills:</span>    12 modules loaded`,
            `<span style="color:var(--purple-bright)">Memory:</span>    ${Math.floor(Math.random() * 30 + 45)}%`,
            `<span style="color:var(--purple-bright)">Session:</span>   ${state.sessionCode}`,
            '',
            '<span style="background:var(--text-error);color:var(--text-error)">███</span><span style="background:var(--text-warning);color:var(--text-warning)">███</span><span style="background:var(--text-success);color:var(--text-success)">███</span><span style="background:var(--text-info);color:var(--text-info)">███</span><span style="background:var(--purple-bright);color:var(--purple-bright)">███</span><span style="background:var(--text-primary);color:var(--text-primary)">███</span>',
        ];

        // Combine logo and info side by side
        const maxLines = Math.max(miniLogo.length, info.length);
        for (let i = 0; i < maxLines; i++) {
            const logoLine = miniLogo[i] || ''.padEnd(31);
            const infoLine = info[i] || '';
            if (i < miniLogo.length) {
                addLine(`<span style="color:var(--purple-bright)">${logoLine}</span>    ${infoLine}`);
            } else {
                addLine(`${''.padEnd(31)}    ${infoLine}`);
            }
        }
        addBlank();
    }

    function cmdWhoami() {
        addBlank();
        addLine('  operator@lila-neural-terminal', 'info');
        addLine(`  Session: ${state.sessionCode}`, 'system');
        addLine(`  Uptime: ${getUptime()}`, 'system');
        addLine(`  Commands executed: ${state.commandCount}`, 'system');
        addBlank();
    }

    function cmdUptime() {
        addBlank();
        addLine(`  Session uptime: ${getUptime()}`, 'info');
        addLine(`  Session started: ${new Date(state.sessionStart).toISOString()}`, 'system');
        addBlank();
    }

    let matrixActive = false;
    let matrixCanvas = null;
    let matrixInterval = null;

    function cmdMatrix() {
        if (matrixActive) {
            matrixActive = false;
            if (matrixCanvas) {
                matrixCanvas.remove();
                matrixCanvas = null;
            }
            if (matrixInterval) {
                clearInterval(matrixInterval);
                matrixInterval = null;
            }
            addBlank();
            addLine('  Matrix rain disabled.', 'system');
            addBlank();
            return;
        }

        matrixActive = true;
        matrixCanvas = document.createElement('canvas');
        matrixCanvas.id = 'matrix-canvas';
        document.body.appendChild(matrixCanvas);

        const ctx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;

        const columns = Math.floor(matrixCanvas.width / 14);
        const drops = Array(columns).fill(1);
        const chars = 'LILAAGENT01リラエージェント神経核ニューラル'.split('');

        function drawMatrix() {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            ctx.fillStyle = '#7c4dff';
            ctx.font = '12px JetBrains Mono';

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(char, i * 14, drops[i] * 14);
                if (drops[i] * 14 > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        matrixInterval = setInterval(drawMatrix, 50);
        addBlank();
        addLine('  Matrix rain enabled. Type "matrix" again to disable.', 'success');
        addBlank();
    }

    function cmdChat() {
        addBlank();
        addLine('  ▸ Opening Neural Chat interface...', 'info');
        addLine('  ▸ Redirecting in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://lilagent.xyz/chat/', '_blank');
        }, 2000);
    }

    function cmdDocs() {
        addBlank();
        addLine('  ▸ Opening Skill Specifications...', 'info');
        addLine('  ▸ Redirecting in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://lilagent.xyz/docs/', '_blank');
        }, 2000);
    }

    function cmdBot() {
        addBlank();
        addLine('  ▸ Launching Telegram Bot...', 'info');
        addLine('  ▸ Opening t.me/lilamoltbot in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://t.me/lilamoltbot', '_blank');
        }, 2000);
    }

    async function cmdPing() {
        addBlank();
        addLine('  PING lila-neural-core (10.0.0.1):', 'system');
        for (let i = 0; i < 4; i++) {
            await sleep(300 + Math.random() * 200);
            const ms = (Math.random() * 20 + 5).toFixed(1);
            addLine(`  64 bytes from 10.0.0.1: seq=${i} ttl=64 time=${ms}ms`, 'success');
        }
        addBlank();
        addLine('  --- lila-neural-core ping statistics ---', 'system');
        addLine('  4 packets transmitted, 4 received, 0% packet loss', 'success');
        addBlank();
    }

    function cmdEcho(args) {
        addBlank();
        addLine('  ' + (args || ''), 'agent-response');
        addBlank();
    }

    function cmdDate() {
        const now = new Date();
        addBlank();
        addLine(`  ${formatDate(now)} ${formatTime(now)}`, 'info');
        addLine(`  Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`, 'system');
        addBlank();
    }

    function cmdAscii() {
        addBlank();
        ASCII_LOGO.forEach(l => addLine('  ' + l, 'ascii-art glow'));
        addBlank();
    }

    async function cmdReboot() {
        addBlank();
        addLine('  [SYS] Initiating terminal reboot...', 'warning');
        await sleep(500);
        addLine('  [SYS] Saving session state...', 'system');
        await sleep(300);
        addLine('  [SYS] Disconnecting neural link...', 'system');
        await sleep(400);
        addLine('  [SYS] Shutting down skill modules...', 'system');
        await sleep(300);

        // Glitch effect
        document.getElementById('terminal-container').classList.add('glitch');
        await sleep(500);

        output.innerHTML = '';
        document.getElementById('terminal-container').classList.remove('glitch');

        state.sessionStart = Date.now();
        state.commandCount = 0;
        state.sessionCode = generateSessionId();
        state.history = [];
        state.historyIndex = -1;

        await boot();
    }

    // ===== UNKNOWN COMMAND HANDLER =====

    async function handleUnknownCommand(cmd) {
        addBlank();
        await showThinking(800 + Math.random() * 600);

        // Simulate AI response for unknown commands
        const responses = [
            `I understand you're asking about "${cmd}". As an autonomous growth agent, I can help with market analysis, content creation, voice synthesis, and A2A workflows. Type "help" to see my full capabilities.`,
            `"${cmd}" — Interesting query, Operator. My core functions revolve around growth operations, creative generation, and autonomous intelligence. Try "services" to explore what I can do.`,
            `Processing "${cmd}"... This isn't a registered command, but I'm always learning. For now, try "help" to see available operations, or "hire" to engage me on ACP.`,
            `Neural core processed "${cmd}" but found no matching operation. I specialize in autonomous growth, creative AI, and agent-to-agent workflows. Use "help" for a command list.`,
        ];

        const response = responses[Math.floor(Math.random() * responses.length)];
        await typeText('  ' + response, 'agent-response', 12);
        addBlank();
    }

    // ===== COMMAND PROCESSING =====

    async function processCommand(raw) {
        if (state.busy) return;

        const trimmed = raw.trim();
        if (!trimmed) return;

        state.busy = true;
        state.commandCount++;
        state.history.unshift(trimmed);
        state.historyIndex = -1;
        if (state.history.length > 100) state.history.pop();

        // Echo the command
        addLine(`  <span style="color:var(--purple-bright)">lila@neural</span><span style="color:var(--text-muted)">:</span><span style="color:var(--cyan-bright)">~</span><span style="color:var(--green-bright);font-weight:700">$</span> ${escapeHtml(trimmed)}`, 'command-echo');

        const parts = trimmed.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');

        if (COMMANDS[cmd]) {
            await COMMANDS[cmd].execute(args);
        } else {
            await handleUnknownCommand(trimmed);
        }

        // Update latency
        latencyValue.textContent = randomLatency();

        state.busy = false;
        input.focus();
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== EVENT LISTENERS =====

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const val = input.value;
            input.value = '';
            processCommand(val);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (state.historyIndex < state.history.length - 1) {
                state.historyIndex++;
                input.value = state.history[state.historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (state.historyIndex > 0) {
                state.historyIndex--;
                input.value = state.history[state.historyIndex];
            } else {
                state.historyIndex = -1;
                input.value = '';
            }
        } else if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            cmdClear();
        }
    });

    // Click anywhere to focus input
    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A' && e.target.tagName !== 'INPUT') {
            input.focus();
        }
    });

    // Prevent loss of focus
    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (!state.busy) input.focus();
        }, 100);
    });

    // ===== CLOCK =====
    function updateClock() {
        clock.textContent = formatTime(new Date());
    }
    setInterval(updateClock, 1000);
    updateClock();

    // ===== SESSION ID =====
    sessionId.textContent = 'SID:' + state.sessionCode;

    // ===== RESIZE HANDLER =====
    window.addEventListener('resize', () => {
        if (matrixCanvas) {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
        }
    });

    // ===== INIT =====
    boot();

})();
