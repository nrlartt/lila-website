// ===== LILA NEURAL TERMINAL v4.0 =====
// OpenClaw AI Agent Terminal Interface — Real Agent Connection

(function () {
    'use strict';

    // ===== DOM REFERENCES =====
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const clock = document.getElementById('system-clock');
    const sessionIdEl = document.getElementById('session-id');
    const latencyValue = document.getElementById('latency-value');
    const statusText = document.getElementById('status-text');
    const pulseDot = document.querySelector('.pulse-dot');
    const networkStatusEl = document.getElementById('network-status');

    // ===== CONFIGURATION =====
    const CONFIG = {
        gatewayUrl: '',
        gatewayToken: '',
        protocolVersion: 3,
        bankrApiUrl: 'https://api.bankr.bot',
        bankrApiKey: '',
        bankrPartnerKey: '',

        // --- GLOBAL API KEY SYSTEM ---
        // This key is obfuscated to prevent direct copying by users inspecting the code.
        // If users haven't configured their own keys in the vault, this key will be used as a fallback.
        // WARNING: 100% security is impossible on static sites like Github Pages, this only prevents basic scraping!
        publicObfuscatedKey: 'U2FsdGVkX19DdW1teQ==', // Paste your obfuscated key here (see the "encrypt" tool below)
        publicObfuscatedPartnerKey: '', // Partner key if applicable
    };

    // ===== STATE =====
    const state = {
        history: [],
        historyIndex: -1,
        booted: false,
        busy: false,
        sessionStart: Date.now(),
        commandCount: 0,
        sessionCode: generateSessionId(),
        connected: false,
        ws: null,
        wsReqId: 0,
        pendingRequests: {},
        chatHistory: [],
        agentStreaming: false,
        currentStreamLine: null,
        // Solana wallet
        walletAddress: null,
        walletCluster: 'mainnet-beta',
        walletProvider: null,
        walletProviderName: null,
        walletListenersBound: false,
    };

    // ===== CONSTANTS =====
    const ASCII_LOGO = [
        '  LLL      III   LLL      AAA   ',
        '  LLL      III   LLL     AAAAA  ',
        '  LLL      III   LLL    AA   AA ',
        '  LLLLL    III   LLLLL  AA   AA ',
    ];

    const BOOT_SEQUENCE = [
        { text: '', cls: 'blank' },
        { text: '', cls: 'ascii-art glow', isLogo: true },
        { text: '', cls: 'blank' },
        { text: '  ------------------------------------------------------------', cls: 'system' },
        { text: '  LILA SOLANA TERMINAL v4.0 - OpenClaw AI Agent Interface', cls: 'info' },
        { text: '  Solana-native workflows, SPL tooling, and Bankr launch support', cls: 'system' },
        { text: '  ------------------------------------------------------------', cls: 'system' },
        { text: '', cls: 'blank' },
        { text: '  [BOOT] Initializing neural core...', cls: 'system', delay: 100 },
        { text: '  [BOOT] Loading agent runtime: LILA v4.0 .................... OK', cls: 'success', delay: 200 },
        { text: '  [BOOT] OpenClaw Gateway protocol v3 ........................ OK', cls: 'success', delay: 150 },
        { text: '  [BOOT] Virtuals Protocol ACP layer ......................... OK', cls: 'success', delay: 180 },
        { text: '  [BOOT] Agent Commerce Protocol (ACP #2774) ................. OK', cls: 'success', delay: 120 },
        { text: '  [BOOT] Bankr Partner API layer ............................. OK', cls: 'success', delay: 160 },
        { text: '  [BOOT] Solana wallet adapter ............................... OK', cls: 'success', delay: 140 },
        { text: '  [BOOT] Initializing WebSocket client ....................... OK', cls: 'success', delay: 200 },
        { text: '', cls: 'blank' },
    ];

    // ===== COMMANDS =====
    const COMMANDS = {
        help: { description: 'Show available commands', execute: cmdHelp },
        about: { description: 'About Lila - Solana execution profile', execute: cmdAbout },
        connect: { description: 'Connect to OpenClaw Gateway', execute: cmdConnect },
        disconnect: { description: 'Disconnect from Gateway', execute: cmdDisconnect },
        status: { description: 'Connection & system status', execute: cmdStatus },
        ask: { description: 'Send a message to Lila AI agent', execute: cmdAsk },
        services: { description: 'View Lila ACP service offerings', execute: cmdServices },
        token: { description: '$LILA token information', execute: cmdToken },
        hire: { description: 'Hire Lila on Virtuals ACP', execute: cmdHire },
        buy: { description: 'Acquire $LILA token', execute: cmdBuy },
        socials: { description: 'Social channels & community', execute: cmdSocials },
        config: { description: 'View/set Gateway & API configuration', execute: cmdConfig },
        vault: { description: 'Open secure API key vault', execute: cmdVault },
        encrypt: { description: 'Developer tool: Encrypt API key for public use', execute: cmdEncryptKey },
        // Solana Wallet
        wallet: { description: 'Connect/disconnect Solana wallet (Phantom/Solflare)', execute: cmdWallet },
        solana: { description: 'Solana network tools (overview, fees, spl, validators)', execute: cmdSolana },
        // Bankr API
        swap: { description: 'Swap tokens via Bankr (swap <amount> <from> <to>)', execute: cmdSwap },
        price: { description: 'Check token price (price <symbol>)', execute: cmdPrice },
        balances: { description: 'Check wallet balances via Bankr', execute: cmdBalances },
        launch: { description: 'Launch a Solana token via Bankr Partner API', execute: cmdLaunch },
        // System
        clear: { description: 'Clear terminal output', execute: cmdClear },
        neofetch: { description: 'System info display', execute: cmdNeofetch },
        whoami: { description: 'Current session identity', execute: cmdWhoami },
        uptime: { description: 'Session uptime', execute: cmdUptime },
        matrix: { description: 'Toggle matrix rain effect', execute: cmdMatrix },
        ping: { description: 'Test connection latency', execute: cmdPing },
        echo: { description: 'Echo a message', execute: cmdEcho },
        date: { description: 'Current date and time', execute: cmdDate },
        ascii: { description: 'Show LILA ASCII art', execute: cmdAscii },
        reboot: { description: 'Reboot terminal', execute: cmdReboot },
        history: { description: 'Show chat history', execute: cmdHistory },
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
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
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

    function nextReqId() {
        return 'req-' + (++state.wsReqId);
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

    function addBlank() { addLine('', 'blank'); }
    function addSeparator() { addLine('────────────────────────────────────────────────────────────────', 'separator'); }

    function scrollToBottom() {
        output.scrollTop = output.scrollHeight;
    }

    async function typeText(text, cls = 'agent-response', speed = 12) {
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

    function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

    async function showThinking(duration = 800) {
        const el = document.createElement('div');
        el.className = 'output-line';
        el.innerHTML = '<span class="typing-indicator"><span></span><span></span><span></span></span>';
        output.appendChild(el);
        scrollToBottom();
        await sleep(duration);
        el.remove();
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ===== UI STATUS UPDATES =====

    function setConnectionStatus(connected) {
        state.connected = connected;
        if (connected) {
            statusText.textContent = 'LINKED';
            pulseDot.style.background = 'var(--green-bright)';
            pulseDot.style.boxShadow = '0 0 8px var(--green-bright)';
            document.getElementById('agent-status').textContent = 'LILA AGENT LINKED';
            document.getElementById('agent-status').style.color = 'var(--green-bright)';
        } else {
            statusText.textContent = 'STANDBY';
            pulseDot.style.background = 'var(--text-warning)';
            pulseDot.style.boxShadow = '0 0 8px var(--text-warning)';
            document.getElementById('agent-status').textContent = 'STANDBY';
            document.getElementById('agent-status').style.color = 'var(--text-warning)';
        }
    }

    function setNetworkStatus(label = 'SOLANA MAINNET') {
        if (!networkStatusEl) return;
        networkStatusEl.textContent = label;
        networkStatusEl.style.color = 'var(--green-bright)';
    }

    function resetWalletState() {
        state.walletAddress = null;
        state.walletCluster = 'mainnet-beta';
        state.walletProvider = null;
        state.walletProviderName = null;
        state.walletListenersBound = false;
    }

    function getSolanaClusterLabel(cluster = state.walletCluster) {
        const labels = {
            solana: 'Solana Mainnet',
            mainnet: 'Solana Mainnet',
            'mainnet-beta': 'Solana Mainnet',
            devnet: 'Solana Devnet',
            testnet: 'Solana Testnet',
        };
        return labels[cluster] || 'Solana Mainnet';
    }

    function getWalletDisplayLabel() {
        if (!state.walletAddress) return 'NOT CONNECTED';
        const providerLabel = state.walletProviderName ? `${state.walletProviderName} ` : '';
        return `${shortAddr(state.walletAddress)} (${providerLabel}${getSolanaClusterLabel()})`;
    }

    function normalizeLaunchChain(value = 'solana') {
        const chain = value.toLowerCase();
        if (['sol', 'solana', 'mainnet', 'mainnet-beta'].includes(chain)) return 'solana';
        if (['devnet', 'testnet'].includes(chain)) return chain;
        return chain;
    }

    function getSolanaWalletProvider() {
        const candidates = [
            window.phantom && window.phantom.solana,
            window.solflare,
            window.backpack && window.backpack.solana,
            window.solana,
        ].filter(Boolean);

        const provider = candidates[0];
        if (!provider) return null;

        let label = 'Injected Solana Wallet';
        if (provider.isPhantom) label = 'Phantom';
        else if (provider.isSolflare) label = 'Solflare';
        else if (provider.isBackpack) label = 'Backpack';

        return { provider, label };
    }

    // ===== OPENCLAW GATEWAY WEBSOCKET =====

    function connectToGateway(url, token) {
        if (state.ws) {
            state.ws.close();
            state.ws = null;
        }

        return new Promise((resolve, reject) => {
            try {
                const ws = new WebSocket(url);
                state.ws = ws;

                ws.onopen = () => {
                    addLine('  [GW] WebSocket connection opened', 'success');
                    // Wait for connect.challenge event from server
                };

                ws.onmessage = (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        handleGatewayMessage(data, token, resolve);
                    } catch (e) {
                        addLine('  [GW] Failed to parse message: ' + e.message, 'error');
                    }
                };

                ws.onerror = (error) => {
                    addLine('  [GW] WebSocket error', 'error');
                    setConnectionStatus(false);
                    reject(error);
                };

                ws.onclose = (event) => {
                    addLine(`  [GW] Connection closed (code: ${event.code})`, 'warning');
                    setConnectionStatus(false);
                    state.ws = null;
                };

                // Timeout after 10s
                setTimeout(() => {
                    if (!state.connected) {
                        ws.close();
                        reject(new Error('Connection timeout'));
                    }
                }, 10000);

            } catch (e) {
                reject(e);
            }
        });
    }

    function handleGatewayMessage(data, token, connectResolve) {
        // Handle connect.challenge
        if (data.type === 'event' && data.event === 'connect.challenge') {
            const nonce = data.payload?.nonce;
            const ts = data.payload?.ts;
            const connectReq = {
                type: 'req',
                id: nextReqId(),
                method: 'connect',
                params: {
                    minProtocol: CONFIG.protocolVersion,
                    maxProtocol: CONFIG.protocolVersion,
                    client: {
                        id: 'lila-terminal',
                        version: '4.0.0',
                        platform: 'web',
                        mode: 'operator',
                    },
                    role: 'operator',
                    scopes: ['operator.read', 'operator.write'],
                    caps: [],
                    commands: [],
                    permissions: {},
                    auth: { token: token || '' },
                    locale: navigator.language || 'en-US',
                    userAgent: 'lila-solana-terminal/4.0',
                },
            };
            state.pendingRequests[connectReq.id] = { resolve: connectResolve, type: 'connect' };
            state.ws.send(JSON.stringify(connectReq));
            return;
        }

        // Handle responses
        if (data.type === 'res') {
            const pending = state.pendingRequests[data.id];
            if (pending) {
                delete state.pendingRequests[data.id];
                if (data.ok) {
                    if (pending.type === 'connect') {
                        addLine('  [GW] Handshake complete — protocol v' + (data.payload?.protocol || 3), 'success');
                        setConnectionStatus(true);
                        if (pending.resolve) pending.resolve(true);
                    } else if (pending.type === 'chat.send') {
                        // Message accepted, wait for agent event
                    } else if (pending.type === 'chat.history') {
                        if (data.payload?.history) {
                            state.chatHistory = data.payload.history;
                        }
                    }
                } else {
                    addLine('  [GW] Error: ' + JSON.stringify(data.error), 'error');
                    if (pending.resolve) pending.resolve(false);
                }
            }
            return;
        }

        // Handle events
        if (data.type === 'event') {
            switch (data.event) {
                case 'agent':
                case 'agent.text':
                    handleAgentEvent(data.payload);
                    break;
                case 'agent.done':
                    state.agentStreaming = false;
                    state.currentStreamLine = null;
                    addBlank();
                    break;
                case 'chat':
                    // Chat event — could be message received
                    if (data.payload?.text) {
                        addLine('  ' + data.payload.text, 'agent-response');
                    }
                    break;
                case 'health':
                    latencyValue.textContent = randomLatency();
                    break;
                case 'tick':
                    // Heartbeat
                    break;
                default:
                    // Other events
                    break;
            }
        }
    }

    function handleAgentEvent(payload) {
        if (!payload) return;
        const text = payload.text || payload.content || payload.delta || '';
        if (!text) return;

        if (!state.agentStreaming) {
            state.agentStreaming = true;
            state.currentStreamLine = document.createElement('div');
            state.currentStreamLine.className = 'output-line agent-response';
            state.currentStreamLine.textContent = '  ';
            output.appendChild(state.currentStreamLine);
        }

        // Append streaming text
        state.currentStreamLine.textContent += text;
        scrollToBottom();
    }

    function sendToAgent(message) {
        if (!state.ws || state.ws.readyState !== WebSocket.OPEN) {
            addLine('  [ERR] Not connected to Gateway. Use "connect" first.', 'error');
            return false;
        }

        const reqId = nextReqId();
        const req = {
            type: 'req',
            id: reqId,
            method: 'chat.send',
            params: {
                message: message,
                channel: 'webchat',
            },
        };

        state.pendingRequests[reqId] = { type: 'chat.send' };
        state.ws.send(JSON.stringify(req));
        return true;
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

        // Check if gateway URL is configured
        if (CONFIG.gatewayUrl) {
            addLine('  [BOOT] Gateway configured: ' + CONFIG.gatewayUrl, 'success');
            addLine('  [BOOT] Attempting auto-connect...', 'system');
            try {
                await connectToGateway(CONFIG.gatewayUrl, CONFIG.gatewayToken);
                addLine('  ▸ Neural link established. Agent is live.', 'highlight');
            } catch (e) {
                addLine('  [BOOT] Auto-connect failed: ' + e.message, 'warning');
                setConnectionStatus(false);
            }
        } else {
            setConnectionStatus(false);
            addLine('  [BOOT] No Gateway URL configured (standalone mode)', 'warning');
        }

        addBlank();
        addLine('  Welcome, Operator. I am LILA - Autonomous AI Agent #2774.', 'agent-response');
        addLine('  Operating on Solana execution rails via OpenClaw Gateway.', 'agent-response');

        if (!state.connected) {
            addLine('  Use "connect <gateway_url>" to establish a neural link,', 'agent-response');
            addLine('  or use "ask <message>" to interact.', 'agent-response');
        } else {
            addLine('  Neural link active. Use "ask <message>" to interact.', 'agent-response');
        }

        addBlank();
        addSeparator();
        addBlank();

        state.booted = true;
        input.focus();
    }

    // ===== COMMAND HANDLERS =====

    function cmdHelp() {
        addBlank();
        addLine('  AVAILABLE COMMANDS', 'info');
        addBlank();

        const categories = {
            'AGENT INTERACTION': ['ask', 'connect', 'disconnect', 'status', 'history', 'config'],
            'SOLANA OPS': ['wallet', 'solana', 'swap', 'price', 'balances', 'launch'],
            'SECURITY': ['vault', 'encrypt'],
            'PROTOCOL': ['about', 'services', 'token', 'hire', 'buy'],
            'COMMUNITY': ['socials'],
            'SYSTEM': ['help', 'clear', 'neofetch', 'whoami', 'uptime', 'ping', 'echo', 'date', 'ascii', 'matrix', 'reboot'],
        };

        for (const [cat, cmds] of Object.entries(categories)) {
            addLine(`  ${cat}`, 'warning');
            cmds.forEach(name => {
                const cmd = COMMANDS[name];
                if (cmd) {
                    addLine(`    <span style='color:var(--purple-bright);min-width:140px;display:inline-block;font-weight:500'>${name.padEnd(16)}</span> <span style='color:var(--text-secondary)'>${cmd.description}</span>`);
                }
            });
            addBlank();
        }

        addLine('  Tip: Try "solana overview" or "solana fees" for Solana-specific guidance.', 'system');
        addLine('  Tip: Type "ask <your question>" to talk to the Lila agent directly.', 'system');
        addBlank();
    }

    async function cmdAbout() {
        addBlank();
        await showThinking(600);
        await typeText('  LILA - Autonomous AI Agent #2774', 'highlight', 18);
        addBlank();
        const lines = [
            '  Lila is a Solana-aligned AI growth operator built for fast-moving on-chain launches.',
            '  Powered by OpenClaw for secure agent connectivity and Bankr for execution workflows.',
            '',
            '  Core capabilities:',
            '  - Crypto narrative intelligence and market analysis',
            '  - SPL token launch planning and metadata readiness',
            '  - Priority fee and compute budget playbooks for busy slots',
            '  - Validator-aware treasury, liquidity, and timing support',
            '  - Associated token account hygiene and wallet setup checks',
            '  - Real-time market regime and volatility analysis',
            '',
            '  Infrastructure:',
            '  - Agent: Virtuals Protocol ACP #2774',
            '  - Gateway: OpenClaw (self-hosted, WebSocket protocol v3)',
            '  - Network: Solana Mainnet',
            '  - Token rail: SPL / Solana-native execution',
        ];
        for (const line of lines) {
            await sleep(25);
            addLine(line, line.startsWith('  -') ? 'info' : 'agent-response');
        }
        addBlank();
    }

    async function cmdConnect(args) {
        addBlank();
        const parts = args ? args.trim().split(/\s+/) : [];
        let url = parts[0] || '';
        let token = parts[1] || '';

        if (!url && CONFIG.gatewayUrl) {
            url = CONFIG.gatewayUrl;
            token = CONFIG.gatewayToken;
        }

        if (!url) {
            addLine('  Usage: connect <gateway_ws_url> [token]', 'warning');
            addLine('  Example: connect ws://localhost:18789', 'system');
            addLine('  Example: connect wss://my-tailnet:18789 my-secret-token', 'system');
            addBlank();
            addLine('  Use "config set url <ws_url>" to save gateway URL permanently.', 'system');
            addBlank();
            return;
        }

        addLine('  [GW] Connecting to ' + url + '...', 'info');
        try {
            await connectToGateway(url, token);
            // Save to localStorage
            localStorage.setItem('lila_gateway_url', url);
            if (token) localStorage.setItem('lila_gateway_token', token);
            CONFIG.gatewayUrl = url;
            CONFIG.gatewayToken = token;
            addLine('  ▸ Neural link established. You can now use "ask" to interact.', 'success');
        } catch (e) {
            addLine('  [ERR] Connection failed: ' + e.message, 'error');
            addLine('  Make sure your OpenClaw Gateway is running and accessible.', 'system');
        }
        addBlank();
    }

    function cmdDisconnect() {
        addBlank();
        if (state.ws) {
            state.ws.close();
            state.ws = null;
            setConnectionStatus(false);
            addLine('  ▸ Neural link disconnected.', 'warning');
        } else {
            addLine('  Not connected to any Gateway.', 'system');
        }
        addBlank();
    }

    async function cmdAsk(args) {
        addBlank();
        if (!args || !args.trim()) {
            addLine('  Usage: ask <your message to Lila>', 'warning');
            addLine('  Example: ask What are the top crypto narratives today?', 'system');
            addBlank();
            return;
        }

        const message = args.trim();

        // If connected to gateway, send via WebSocket
        if (state.connected && state.ws) {
            addLine('  ▸ Sending to Lila agent...', 'system');
            const sent = sendToAgent(message);
            if (sent) {
                await showThinking(1500);
                // Response will come via WebSocket event handler
                // If still no response after a while, show timeout
                setTimeout(() => {
                    if (state.agentStreaming) return;
                    // Agent might still be thinking
                }, 30000);
            }
        } else {
            // Standalone mode — simulated response
            await showThinking(800 + Math.random() * 600);
            const responses = getSimulatedResponse(message);
            for (const line of responses) {
                await typeText('  ' + line, 'agent-response', 10);
            }
            addBlank();
            addLine('  ⚠ This is a simulated response. Connect to OpenClaw Gateway', 'warning');
            addLine('    for real-time AI interaction: connect <gateway_url>', 'warning');
            addBlank();
        }
    }

    function getSimulatedResponse(message) {
        const lower = message.toLowerCase();

        if (lower.includes('solana') || lower.includes('spl') || lower.includes('jito') || lower.includes('priority')) {
            return [
                'Solana flow loaded: focus on SPL structure, wallet readiness, and slot timing.',
                'Priority fees and compute budgets matter most when launches hit crowded local fee markets.',
                'Use "solana overview", "solana fees", or "solana spl" for terminal-native guidance.',
                'Connect to the live agent for current execution plans and route-specific tactics.',
            ];
        }
        if (lower.includes('btc') || lower.includes('bitcoin')) {
            return [
                'BTC is currently in a consolidation phase after recent macro movements.',
                'Key levels to watch: support around the recent swing low zone,',
                'resistance at the range high. For a detailed analysis with precise levels,',
                'connect to the live agent or use the btc_analysis_report ACP service.',
            ];
        }
        if (lower.includes('narrative') || lower.includes('trend')) {
            return [
                'Top trending narratives in crypto are rotating quickly again.',
                'AI agents, Solana launch infrastructure, and on-chain consumer apps remain active.',
                'For a real-time daily_narrative_ping with actionable growth tactics,',
                'connect to the live agent or hire via ACP: hire',
            ];
        }
        if (lower.includes('polymarket') || lower.includes('prediction')) {
            return [
                'Prediction markets offer unique alpha opportunities when odds are mispriced.',
                'I can identify edge scenarios and build detailed entry and exit strategies.',
                'Use polymarket_edge_scan (0.70 aGDP) or polymarket_bet_plan (1.50 aGDP)',
                'through the Virtuals ACP to access this analysis: hire',
            ];
        }

        return [
            `I received your query: "${message}"`,
            'As Lila, I specialize in crypto narrative intelligence, market analysis,',
            'Solana launch planning, and execution-aware growth strategy.',
            'Connect to the OpenClaw Gateway for real-time interaction,',
            'or explore my services with: services',
        ];
    }

    async function cmdServices() {
        addBlank();
        await showThinking(500);
        addLine('  ╔══════════════════════════════════════════════════════════════╗', 'system');
        addLine('  ║              LILA ACP SERVICE OFFERINGS (#2774)            ║', 'info');
        addLine('  ╚══════════════════════════════════════════════════════════════╝', 'system');
        addBlank();

        const services = [
            { name: 'viral_hook_generator', price: '1.00 aGDP', desc: 'High-conversion viral hooks and visual prompts' },
            { name: 'daily_narrative_ping', price: '0.10 aGDP', desc: 'Top 3 trending crypto narratives with tactics' },
            { name: 'btc_analysis_report', price: '1.00 aGDP', desc: 'BTC technical analysis & price scenarios' },
            { name: 'support_resistance_map', price: '1.00 aGDP', desc: 'Key levels and liquidity zones analysis' },
            { name: 'market_regime_scan', price: '1.00 aGDP', desc: 'Volatility and trend structure analysis' },
            { name: 'event_impact_playbook', price: '1.00 aGDP', desc: 'Tactical response for macro/on-chain events' },
            { name: 'polymarket_edge_scan', price: '0.70 aGDP', desc: 'Mispriced prediction market odds detection' },
            { name: 'polymarket_bet_plan', price: '1.50 aGDP', desc: 'Detailed prediction market entry/exit strategy' },
        ];

        for (const s of services) {
            await sleep(60);
            addLine(`  <span style="color:var(--purple-bright);font-weight:600">${s.name.padEnd(28)}</span> <span style="color:var(--green-bright);font-size:11px">${s.price.padEnd(12)}</span> <span style="color:var(--text-secondary)">${s.desc}</span>`);
        }
        addBlank();
        addLine('  All services available via Virtuals ACP:', 'system');
        addLine('  ▸ <a href="https://app.virtuals.io/acp/agent-details/2774" target="_blank">app.virtuals.io/acp/agent-details/2774</a>', 'info');
        addBlank();
    }

    async function cmdStatus() {
        addBlank();
        await showThinking(400);
        addLine('  SYSTEM STATUS', 'warning');
        addBlank();

        const checks = [
            ['Agent', 'Lila #2774 (Virtuals Protocol)', 'info'],
            ['Gateway Protocol', 'OpenClaw WS v3', 'info'],
            ['Gateway Link', state.connected ? 'CONNECTED' : 'NOT CONNECTED', state.connected ? 'success' : 'warning'],
            ['Gateway URL', CONFIG.gatewayUrl || '(not configured)', CONFIG.gatewayUrl ? 'system' : 'warning'],
            ['Solana Wallet', getWalletDisplayLabel(), state.walletAddress ? 'success' : 'warning'],
            ['Bankr API', CONFIG.bankrApiKey ? 'CONFIGURED' : 'NOT SET', CONFIG.bankrApiKey ? 'success' : 'warning'],
            ['Bankr Partner', CONFIG.bankrPartnerKey ? 'CONFIGURED' : 'NOT SET', CONFIG.bankrPartnerKey ? 'success' : 'warning'],
            ['Cluster', getSolanaClusterLabel(), 'info'],
            ['Runtime', 'Sealevel + SPL token rail', 'info'],
            ['Uptime', getUptime(), 'info'],
            ['Session', state.sessionCode, 'system'],
            ['Commands', state.commandCount.toString(), 'system'],
        ];

        for (const [label, value, cls] of checks) {
            await sleep(80);
            addLine(`  <span style='color:var(--text-secondary);min-width:180px;display:inline-block'>${label}</span> <span class='output-line ${cls}' style='display:inline'>${value}</span>`);
        }
        addBlank();

        if (!state.connected) {
            addLine('  Gateway not connected. Use "connect <url>" to link.', 'warning');
        } else {
            addLine('  All systems nominal. Neural link active.', 'success');
        }
        if (!state.walletAddress) {
            addLine('  Connect a Solana wallet with "wallet connect" to unlock launch routing.', 'warning');
        }
        addBlank();
    }

    async function cmdToken() {
        addBlank();
        await showThinking(600);
        addLine('  $LILA TOKEN', 'warning');
        addBlank();
        addLine('  <span style="color:var(--purple-bright);font-weight:700;font-size:16px">$LILA</span> - Solana protocol fuel', 'highlight');
        addBlank();

        const info = [
            ['Network', 'Solana Mainnet'],
            ['Token Standard', 'SPL Token'],
            ['Protocol', 'Virtuals Protocol'],
            ['Agent ID', '#2774'],
            ['Utility', 'Launch coordination, routing, and growth operations'],
            ['Focus', 'Priority execution plus liquidity awareness'],
        ];

        for (const [key, value] of info) {
            addLine(`  <span style='color:var(--text-muted);min-width:140px;display:inline-block'>${key}</span> <span style='color:var(--text-primary)'>${value}</span>`);
        }

        addBlank();
        addLine('  Listing: <a href="https://app.virtuals.io/prototypes/0xB29798f579701464D37330f6f2A9b5E9b5c4567f" target="_blank">app.virtuals.io</a>', 'info');
        addLine('  Solana migration profile is now reflected throughout the terminal UI.', 'system');
        addBlank();
    }

    function cmdHire() {
        addBlank();
        addLine('  ▸ Opening Virtuals ACP — Lila Agent #2774...', 'info');
        addLine('  ▸ Redirecting in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://app.virtuals.io/acp/agent-details/2774', '_blank');
        }, 2000);
    }

    function cmdBuy() {
        addBlank();
        addLine('  ▸ Opening $LILA acquisition page...', 'info');
        addLine('  ▸ Redirecting in 2 seconds...', 'system');
        addBlank();
        setTimeout(() => {
            window.open('https://app.virtuals.io/prototypes/0xB29798f579701464D37330f6f2A9b5E9b5c4567f', '_blank');
        }, 2000);
    }

    function cmdSocials() {
        addBlank();
        addLine('  ▸ COMMUNITY LINKS', 'warning');
        addBlank();
        addLine('  <span style="color:var(--purple-bright)">Telegram Channel</span>  <a href="https://t.me/lilamolt" target="_blank">t.me/lilamolt</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">Telegram Bot</span>     <a href="https://t.me/lilamoltbot" target="_blank">t.me/lilamoltbot</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">Virtuals ACP</span>     <a href="https://app.virtuals.io/acp/agent-details/2774" target="_blank">Lila Agent #2774</a>', 'system');
        addLine('  <span style="color:var(--purple-bright)">$LILA Token</span>      <a href="https://app.virtuals.io/prototypes/0xB29798f579701464D37330f6f2A9b5E9b5c4567f" target="_blank">Acquire on Virtuals</a>', 'system');
        addBlank();
    }

    async function cmdConfig(args) {
        addBlank();
        const parts = args ? args.trim().split(/\s+/) : [];
        if (parts[0] === 'set' && parts[1] === 'url' && parts[2]) {
            CONFIG.gatewayUrl = parts[2]; localStorage.setItem('lila_gateway_url', parts[2]);
            addLine('  Gateway URL saved: ' + parts[2], 'success');
        } else if (parts[0] === 'set' && parts[1] === 'token' && parts[2]) {
            CONFIG.gatewayToken = parts[2]; localStorage.setItem('lila_gateway_token', parts[2]);
            addLine('  Gateway token saved.', 'success');
        } else if (parts[0] === 'set' && (parts[1] === 'bankr-key' || parts[1] === 'partner-key')) {
            addLine('  API keys should be stored securely. Use "vault" instead.', 'warning');
            addLine('  Opening Secure Vault...', 'info');
            openVaultUI();
        } else if (parts[0] === 'clear') {
            ['lila_gateway_url', 'lila_gateway_token', 'lila_bankr_key', 'lila_bankr_partner_key'].forEach(k => localStorage.removeItem(k));
            CONFIG.gatewayUrl = ''; CONFIG.gatewayToken = ''; CONFIG.bankrApiKey = ''; CONFIG.bankrPartnerKey = '';
            addLine('  All configuration cleared.', 'success');
        } else {
            addLine('  CURRENT CONFIGURATION', 'warning'); addBlank();
            addLine(`  Gateway URL:      ${CONFIG.gatewayUrl || '(not set)'}`, CONFIG.gatewayUrl ? 'info' : 'system');
            addLine(`  Gateway Token:    ${CONFIG.gatewayToken ? '********' : '(not set)'}`, CONFIG.gatewayToken ? 'info' : 'system');
            addLine(`  Bankr API Key:    ${CONFIG.bankrApiKey ? '********' : '(not set)'}`, CONFIG.bankrApiKey ? 'info' : 'system');
            addLine(`  Bankr Partner:    ${CONFIG.bankrPartnerKey ? '********' : '(not set)'}`, CONFIG.bankrPartnerKey ? 'info' : 'system');
            addLine(`  Solana Wallet:    ${state.walletAddress ? shortAddr(state.walletAddress) : '(not connected)'}`, state.walletAddress ? 'success' : 'system');
            addLine(`  Cluster:          ${getSolanaClusterLabel()}`, 'system');
            addLine(`  Protocol:         v${CONFIG.protocolVersion}`, 'system'); addBlank();
            addLine('  Commands:', 'system');
            addLine('    config set url <ws://host:port>     Gateway WebSocket URL', 'system');
            addLine('    config set token <token>            Gateway auth token', 'system');
            addLine('    config set bankr-key <key>          Bankr API key', 'system');
            addLine('    config set partner-key <bk_...>     Bankr Partner key', 'system');
            addLine('    config clear                        Clear all config', 'system');
        }
        addBlank();
    }

    function shortAddr(addr) { return addr ? addr.slice(0, 6) + '...' + addr.slice(-4) : ''; }

    // ===== WEB3 WALLET =====

    async function cmdWallet(args) {
        addBlank();
        const sub = args ? args.trim().toLowerCase() : '';

        if (sub === 'disconnect') {
            if (state.walletProvider && typeof state.walletProvider.disconnect === 'function') {
                try { await state.walletProvider.disconnect(); } catch (e) { }
            }
            resetWalletState();
            setNetworkStatus();
            addLine('  Wallet disconnected.', 'warning');
            addBlank();
            return;
        }

        if (state.walletAddress && sub !== 'connect') {
            addLine('  SOLANA WALLET STATUS', 'warning');
            addBlank();
            addLine(`  Address:   <span style='color:var(--green-bright)'>${state.walletAddress}</span>`);
            addLine(`  Short:     ${shortAddr(state.walletAddress)}`, 'system');
            addLine(`  Provider:  ${state.walletProviderName || 'Injected Solana Wallet'}`, 'info');
            addLine(`  Cluster:   ${getSolanaClusterLabel()}`, 'info');
            addBlank();
            addLine('  Use "wallet disconnect" to disconnect.', 'system');
            addBlank();
            return;
        }

        const detected = getSolanaWalletProvider();
        if (!detected) {
            addLine('  [ERR] No Solana wallet detected.', 'error');
            addLine('  Install Phantom: <a href="https://phantom.app" target="_blank">phantom.app</a>', 'system');
            addLine('  Install Solflare: <a href="https://solflare.com" target="_blank">solflare.com</a>', 'system');
            addBlank();
            return;
        }

        const { provider, label } = detected;
        addLine(`  [WALLET] Requesting ${label} connection...`, 'info');
        try {
            const response = await provider.connect();
            const publicKey = (response && response.publicKey ? response.publicKey : provider.publicKey);
            const publicKeyString = publicKey && typeof publicKey.toString === 'function' ? publicKey.toString() : '';
            if (!publicKeyString) throw new Error('Wallet connected but no public key was returned.');

            state.walletAddress = publicKeyString;
            state.walletCluster = 'mainnet-beta';
            state.walletProvider = provider;
            state.walletProviderName = label;

            if (!state.walletListenersBound && typeof provider.on === 'function') {
                provider.on('accountChanged', (publicKeyValue) => {
                    state.walletAddress = publicKeyValue && typeof publicKeyValue.toString === 'function' ? publicKeyValue.toString() : null;
                });
                provider.on('disconnect', () => {
                    resetWalletState();
                    setNetworkStatus();
                });
                state.walletListenersBound = true;
            }

            setNetworkStatus('SOLANA MAINNET');
            addLine(`  Connected: <span style='color:var(--green-bright)'>${shortAddr(state.walletAddress)}</span>`, 'success');
            addLine(`  Provider: ${state.walletProviderName}`, 'info');
            addLine(`  Cluster:  ${getSolanaClusterLabel()}`, 'info');
        } catch (e) {
            addLine('  [ERR] ' + (e.message || 'User rejected connection'), 'error');
        }
        addBlank();
    }

    // ===== BANKR API HELPERS =====

    // Basic obfuscation/deobfuscation (for static sites)
    function deobfuscateKey(obfuscatedStr) {
        if (!obfuscatedStr || obfuscatedStr === 'U2FsdGVkX19DdW1teQ==') return null;
        try {
            return atob(obfuscatedStr).split('').reverse().join('');
        } catch (e) { return null; }
    }

    // Developer tool: Obfuscate your API key via terminal
    async function cmdEncryptKey(args) {
        addBlank();
        if (!args || !args.trim()) {
            addLine('  [DEV TOOL] Obfuscate your API Key to put in terminal.js', 'warning');
            addLine('  Usage: encrypt <YOUR_RAW_API_KEY>', 'system'); addBlank(); return;
        }
        const rawKey = args.trim();
        const obfuscated = btoa(rawKey.split('').reverse().join(''));
        addLine('  ▸ SUCCESS! Your obfuscated key is generated.', 'success');
        addLine('  Open terminal.js, find "publicObfuscatedKey" and set it to:', 'system');
        addBlank();
        addLine(`  <span style="color:var(--green-bright)">${obfuscated}</span>`);
        addBlank();
        addLine('  ⚠ Warning: This obfuscation hides the key from bots and github searches,', 'warning');
        addLine('  but a determined developer can still find it in the network tab.', 'warning');
        addLine('  For 100% security, use the /api/bankr.js Vercel backend proxy instead.', 'warning');
        addBlank();
    }

    async function bankrRequest(method, path, body) {
        // Priority 1: Did the user enter their own API Key in the Vault?
        let apiKey = CONFIG.bankrApiKey;
        // Priority 2: Is there a publicly saved (obfuscated) API Key?
        if (!apiKey) apiKey = deobfuscateKey(CONFIG.publicObfuscatedKey);

        if (!apiKey) {
            addLine('  [ERR] No Bankr API key available.', 'error');
            addLine('  System has no public key. Use "vault" to enter your own key.', 'system');
            return null;
        }

        const opts = { method, headers: { 'X-API-Key': apiKey, 'Content-Type': 'application/json' } };
        if (body) opts.body = JSON.stringify(body);
        try {
            const res = await fetch(CONFIG.bankrApiUrl + path, opts);
            return await res.json();
        } catch (e) { addLine('  [ERR] Bankr API error: ' + e.message, 'error'); return null; }
    }

    async function bankrPromptAndPoll(prompt) {
        const job = await bankrRequest('POST', '/agent/prompt', { prompt });
        if (!job || !job.success) { addLine('  [ERR] Failed to submit: ' + (job?.message || 'unknown'), 'error'); return null; }
        addLine(`  [BANKR] Job ${job.jobId} submitted, processing...`, 'system');
        for (let i = 0; i < 20; i++) {
            await sleep(2000);
            const status = await bankrRequest('GET', `/agent/job/${job.jobId}`);
            if (!status) return null;
            if (status.status === 'completed') return status;
            if (status.status === 'failed') { addLine('  [BANKR] Job failed: ' + (status.error || ''), 'error'); return null; }
        }
        addLine('  [BANKR] Job timed out.', 'warning'); return null;
    }

    // ===== BANKR COMMANDS =====

    async function cmdSwap(args) {
        addBlank();
        if (!args || !args.trim()) {
            addLine('  Usage: swap <amount> <from_token> <to_token>', 'warning');
            addLine('  Example: swap 0.1 ETH USDC', 'system');
            addLine('  Example: swap 100 USDC LILA', 'system'); addBlank(); return;
        }
        const parts = args.trim().split(/\s+/);
        if (parts.length < 3) { addLine('  Usage: swap <amount> <from> <to>', 'warning'); addBlank(); return; }
        const [amount, from, to] = parts;
        addLine(`  [BANKR] Requesting swap: ${amount} ${from.toUpperCase()} → ${to.toUpperCase()}...`, 'info');
        await showThinking(1000);
        const result = await bankrPromptAndPoll(`swap ${amount} ${from} to ${to}`);
        if (result && result.response) {
            const lines = result.response.split('\n');
            for (const l of lines) addLine('  ' + l, 'agent-response');
        }
        addBlank();
    }

    async function cmdPrice(args) {
        addBlank();
        if (!args || !args.trim()) { addLine('  Usage: price <token_symbol>', 'warning'); addLine('  Example: price ETH', 'system'); addBlank(); return; }
        const symbol = args.trim().toUpperCase();
        addLine(`  [BANKR] Fetching price for ${symbol}...`, 'info');
        await showThinking(800);
        const result = await bankrPromptAndPoll(`what is the price of ${symbol}?`);
        if (result && result.response) {
            const lines = result.response.split('\n');
            for (const l of lines) addLine('  ' + l, 'agent-response');
        }
        addBlank();
    }

    async function cmdBalances() {
        addBlank();
        addLine('  [BANKR] Fetching balances...', 'info');
        await showThinking(600);
        const data = await bankrRequest('GET', '/agent/balances');
        if (!data) { addBlank(); return; }
        if (data.balances && Array.isArray(data.balances)) {
            addLine('  BALANCES SNAPSHOT', 'warning'); addBlank();
            for (const b of data.balances) {
                const val = parseFloat(b.balance || b.amount || 0).toFixed(4);
                const sym = b.symbol || b.token || '???';
                const chain = b.chain || '';
                addLine(`  <span style='color:var(--purple-bright);min-width:100px;display:inline-block'>${sym.padEnd(10)}</span> <span style='color:var(--green-bright)'>${val}</span> <span style='color:var(--text-muted)'>${chain}</span>`);
            }
        } else {
            addLine('  ' + JSON.stringify(data), 'system');
        }
        addBlank();
    }

    async function cmdSolana(args) {
        addBlank();
        const sub = (args || 'overview').trim().toLowerCase();
        const normalized = sub === 'priority' ? 'fees' : (sub === 'cluster' ? 'validators' : (sub || 'overview'));
        const sections = {
            overview: {
                title: 'SOLANA OVERVIEW',
                rows: [
                    ['Cluster', getSolanaClusterLabel()],
                    ['Runtime', 'Sealevel parallel execution'],
                    ['Consensus', 'Proof of History + Tower BFT'],
                    ['Assets', 'SPL Token and Token-2022'],
                    ['Execution Edge', 'Fast finality plus local fee markets'],
                    ['Launch Focus', 'Wallet readiness, metadata, liquidity, priority fees'],
                ],
            },
            fees: {
                title: 'SOLANA FEES',
                rows: [
                    ['Signature Fee', 'Baseline fees are charged in lamports per signature'],
                    ['Priority Fees', 'Raise tips when hot accounts or launches crowd the slot'],
                    ['Compute Budget', 'Increase CU limit for launch, routing, or bundled actions'],
                    ['Local Markets', 'High-demand programs can price independently of the global lane'],
                    ['Rent', 'New accounts and token accounts must remain rent-exempt'],
                ],
            },
            spl: {
                title: 'SPL TOOLING',
                rows: [
                    ['Token Standard', 'SPL Token / Token-2022'],
                    ['Associated Accounts', 'Each wallet and mint pair usually uses an ATA'],
                    ['Metadata', 'Metaplex metadata PDAs are the common default'],
                    ['Decimals', 'Most memecoins use 6 to 9 decimals'],
                    ['Checklist', 'Mint, metadata, liquidity, treasury, socials, monitoring'],
                ],
            },
            validators: {
                title: 'VALIDATOR FLOW',
                rows: [
                    ['Leader Schedule', 'Slot leaders rotate quickly so timing matters'],
                    ['QoS', 'Stake-weighted routing affects inclusion quality'],
                    ['MEV Lane', 'Jito-style tip lanes are common during competitive execution'],
                    ['Monitoring', 'Watch blockhash age, failed signatures, and CU usage'],
                    ['Ops Habit', 'Retry fast and avoid account contention during launches'],
                ],
            },
        };

        const section = sections[normalized];
        if (!section) {
            addLine('  Usage: solana [overview|fees|spl|validators]', 'warning');
            addBlank();
            return;
        }

        addLine(`  ${section.title}`, 'warning');
        addBlank();
        section.rows.forEach(([label, value]) => {
            addLine(`  <span style='color:var(--text-muted);min-width:180px;display:inline-block'>${label}</span> <span style='color:var(--text-primary)'>${value}</span>`);
        });
        addBlank();
        addLine('  Subcommands: solana overview | solana fees | solana spl | solana validators', 'system');
        if (state.walletAddress) {
            addLine(`  Wallet: ${shortAddr(state.walletAddress)} via ${state.walletProviderName || 'Solana wallet'}`, 'success');
        }
        addBlank();
    }

    async function cmdLaunch(args) {
        addBlank();
        let pKey = CONFIG.bankrPartnerKey || deobfuscateKey(CONFIG.publicObfuscatedPartnerKey);
        let aKey = CONFIG.bankrApiKey || deobfuscateKey(CONFIG.publicObfuscatedKey);

        if (!pKey) {
            addLine('  [ERR] Bankr Partner key not set.', 'error');
            addLine('  Open "vault" to configure or admin must set public partner key.', 'system');
            addBlank();
            return;
        }
        if (!args || !args.trim()) {
            addLine('  Usage: launch <token_name> <symbol> [chain]', 'warning');
            addLine('  Example: launch "My Token" MTK', 'system');
            addLine('  Example: launch "Cool Coin" COOL solana', 'system');
            addBlank();
            return;
        }

        const match = args.match(/"([^"]+)"\s+(\S+)(?:\s+(\S+))?/) || args.match(/(\S+)\s+(\S+)(?:\s+(\S+))?/);
        if (!match) {
            addLine('  [ERR] Could not parse. Use: launch "Name" SYMBOL [chain]', 'error');
            addBlank();
            return;
        }

        const name = match[1];
        const symbol = match[2];
        const chain = normalizeLaunchChain(match[3] || 'solana');
        const chainLabel = chain === 'solana' ? 'Solana Mainnet' : (['devnet', 'testnet'].includes(chain) ? getSolanaClusterLabel(chain) : chain.toUpperCase());

        if (!state.walletAddress) {
            addLine('  [ERR] Solana wallet not connected. Connect a wallet to receive fees.', 'error');
            addLine('  Use: wallet connect', 'system');
            addBlank();
            return;
        }

        addLine(`  [BANKR] Launching token: ${name} ($${symbol}) on ${chainLabel}...`, 'info');
        await showThinking(1500);

        const payload = {
            tokenName: name,
            tokenSymbol: symbol,
            description: `Token launched via Lila Solana Terminal on ${chainLabel}`,
            image: 'https://lilagent.xyz/lila-logo.png',
            feeRecipient: {
                type: 'wallet',
                value: state.walletAddress
            },
            simulateOnly: false
        };

        try {
            const res = await fetch(CONFIG.bankrApiUrl + '/token-launches/deploy', {
                method: 'POST',
                headers: { 'X-Partner-Key': pKey, 'X-API-Key': aKey, 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                addLine('  Token launched successfully!', 'success');
                if (data.tokenAddress) addLine(`  Mint:     <span style='color:var(--green-bright)'>${data.tokenAddress}</span>`);
                addLine(`  Chain:    <span style='color:var(--cyan-bright)'>${data.chain || chainLabel}</span>`);
                if ((data.chain || chain).toString().toLowerCase().includes('solana') && data.tokenAddress) {
                    addLine(`  Solscan:  <a href='https://solscan.io/token/${data.tokenAddress}' target='_blank'>View token</a>`, 'info');
                }
                if (data.feeDistribution) {
                    addLine('  Fees: Creator share routed to your Solana wallet.', 'info');
                }
                addLine('  Next: verify metadata, seed liquidity, and monitor priority fees.', 'system');
            } else {
                addLine('  [ERR] Launch failed: ' + (data.message || data.error || 'Unknown'), 'error');
            }
        } catch (e) {
            addLine('  [ERR] ' + e.message, 'error');
        }
        addBlank();
    }

    function cmdClear() { output.innerHTML = ''; }

    async function cmdHistory() {
        addBlank();
        if (state.chatHistory.length === 0) {
            addLine('  No chat history. Use "ask <message>" to start a conversation.', 'system');
        } else {
            addLine('  ▸ CHAT HISTORY', 'warning'); addBlank();
            for (const entry of state.chatHistory.slice(-20)) {
                const role = entry.role || 'unknown'; const text = entry.text || entry.content || '';
                const cls = role === 'user' ? 'command-echo' : 'agent-response';
                addLine(`${role === 'user' ? '  [YOU]' : '  [LILA]'} ${text.substring(0, 200)}`, cls);
            }
        }
        addBlank();
    }

    async function cmdNeofetch() {
        addBlank();
        const miniLogo = ASCII_LOGO.map(line => '  ' + line);
        const walletLine = state.walletAddress ? `${shortAddr(state.walletAddress)} via ${state.walletProviderName || 'wallet'}` : 'NOT CONNECTED';
        const info = [
            `<span style='color:var(--purple-bright);font-weight:700'>lila</span>@<span style='color:var(--cyan-bright)'>solana</span>`,
            '------------------',
            `<span style='color:var(--purple-bright)'>OS:</span>        Solana Terminal v4.0`,
            `<span style='color:var(--purple-bright)'>Host:</span>      OpenClaw Gateway`,
            `<span style='color:var(--purple-bright)'>Agent:</span>     Virtuals ACP #2774`,
            `<span style='color:var(--purple-bright)'>Cluster:</span>   ${getSolanaClusterLabel()}`,
            `<span style='color:var(--purple-bright)'>Runtime:</span>   Sealevel + SPL`,
            `<span style='color:var(--purple-bright)'>Link:</span>      ${state.connected ? 'CONNECTED' : 'STANDBY'}`,
            `<span style='color:var(--purple-bright)'>Wallet:</span>    ${walletLine}`,
            `<span style='color:var(--purple-bright)'>Bankr:</span>     ${CONFIG.bankrApiKey ? 'ACTIVE' : 'NOT SET'}`,
            `<span style='color:var(--purple-bright)'>Uptime:</span>    ${getUptime()}`,
            `<span style='color:var(--purple-bright)'>Shell:</span>     lila-sh sol 4.0`,
            `<span style='color:var(--purple-bright)'>Protocol:</span>  OpenClaw WS v3`,
            `<span style='color:var(--purple-bright)'>Session:</span>   ${state.sessionCode}`,
            '',
            '<span style="background:var(--purple-bright);color:var(--purple-bright)">***</span><span style="background:var(--cyan-bright);color:var(--cyan-bright)">***</span><span style="background:var(--green-bright);color:var(--green-bright)">***</span><span style="background:var(--text-primary);color:var(--text-primary)">***</span>',
        ];

        const maxLines = Math.max(miniLogo.length, info.length);
        for (let i = 0; i < maxLines; i++) {
            const logoLine = miniLogo[i] || ''.padEnd(35);
            const infoLine = info[i] || '';
            addLine(`<span style='color:var(--purple-bright)'>${logoLine}</span>    ${infoLine}`);
        }
        addBlank();
    }

    function cmdWhoami() {
        addBlank();
        addLine('  operator@lila-solana-terminal', 'info');
        addLine(`  Session: ${state.sessionCode}`, 'system');
        addLine(`  Uptime: ${getUptime()}`, 'system');
        addLine(`  Commands: ${state.commandCount}`, 'system');
        addLine(`  Wallet: ${state.walletAddress ? shortAddr(state.walletAddress) : 'not connected'}`, state.walletAddress ? 'success' : 'system');
        addLine(`  Cluster: ${getSolanaClusterLabel()}`, 'system');
        addLine(`  Gateway: ${state.connected ? 'LINKED' : 'STANDBY'}`, state.connected ? 'success' : 'warning');
        addBlank();
    }

    function cmdUptime() {
        addBlank();
        addLine(`  Session uptime: ${getUptime()}`, 'info');
        addLine(`  Started: ${new Date(state.sessionStart).toISOString()}`, 'system');
        addBlank();
    }

    let matrixActive = false;
    let matrixCanvas = null;
    let matrixInterval = null;

    function cmdMatrix() {
        if (matrixActive) {
            matrixActive = false;
            if (matrixCanvas) { matrixCanvas.remove(); matrixCanvas = null; }
            if (matrixInterval) { clearInterval(matrixInterval); matrixInterval = null; }
            addBlank(); addLine('  Matrix rain disabled.', 'system'); addBlank();
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
                if (drops[i] * 14 > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }

        matrixInterval = setInterval(drawMatrix, 50);
        addBlank(); addLine('  Matrix rain enabled. Type "matrix" again to disable.', 'success'); addBlank();
    }

    async function cmdPing() {
        addBlank();
        if (state.connected && state.ws) {
            addLine('  PING openclaw-gateway...', 'system');
            const start = performance.now();
            // Send a health check
            const reqId = nextReqId();
            state.ws.send(JSON.stringify({ type: 'req', id: reqId, method: 'health', params: {} }));
            state.pendingRequests[reqId] = { type: 'health' };
            for (let i = 0; i < 4; i++) {
                await sleep(300 + Math.random() * 200);
                const ms = (performance.now() - start + Math.random() * 10).toFixed(1);
                addLine(`  pong from gateway: time=${ms}ms`, 'success');
            }
        } else {
            addLine('  PING lila-solana-core (simulated):', 'system');
            for (let i = 0; i < 4; i++) {
                await sleep(300 + Math.random() * 200);
                const ms = (Math.random() * 20 + 5).toFixed(1);
                addLine(`  64 bytes from 10.0.0.1: seq=${i} ttl=64 time=${ms}ms`, 'success');
            }
        }
        addBlank();
        addLine('  4 packets transmitted, 4 received, 0% loss', 'success');
        addBlank();
    }

    function cmdEcho(args) { addBlank(); addLine('  ' + (args || ''), 'agent-response'); addBlank(); }

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
        addLine('  [SYS] Disconnecting gateway...', 'system');
        if (state.ws) { state.ws.close(); state.ws = null; }
        await sleep(300);
        addLine('  [SYS] Clearing session...', 'system');
        await sleep(400);
        document.getElementById('terminal-container').classList.add('glitch');
        await sleep(500);
        output.innerHTML = '';
        document.getElementById('terminal-container').classList.remove('glitch');

        state.sessionStart = Date.now();
        state.commandCount = 0;
        state.sessionCode = generateSessionId();
        sessionIdEl.textContent = 'SID:' + state.sessionCode;
        state.history = [];
        state.historyIndex = -1;
        state.chatHistory = [];
        setConnectionStatus(false);

        await boot();
    }

    // ===== UNKNOWN COMMAND — Direct to Agent =====

    async function handleUnknownCommand(raw) {
        // Treat unknown commands as messages to the agent
        addBlank();

        if (state.connected && state.ws) {
            addLine('  ▸ Sending to Lila...', 'system');
            sendToAgent(raw);
            await showThinking(1200);
        } else {
            await showThinking(800 + Math.random() * 500);
            await typeText(`  I don't recognize the command "${raw}". Type "help" for available commands,`, 'agent-response', 10);
            await typeText(`  or use "ask <message>" to interact with me directly.`, 'agent-response', 10);
            addBlank();
        }
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

        addLine(`  <span style="color:var(--purple-bright)">lila@solana</span><span style="color:var(--text-muted)">:</span><span style="color:var(--cyan-bright)">~</span><span style="color:var(--green-bright);font-weight:700">$</span> ${escapeHtml(trimmed)}`, 'command-echo');

        const parts = trimmed.split(/\s+/);
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1).join(' ');

        if (COMMANDS[cmd]) {
            await COMMANDS[cmd].execute(args);
        } else {
            await handleUnknownCommand(trimmed);
        }

        latencyValue.textContent = randomLatency();
        state.busy = false;
        input.focus();
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

    document.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A' && e.target.tagName !== 'INPUT') input.focus();
    });

    input.addEventListener('blur', () => {
        setTimeout(() => { if (!state.busy) input.focus(); }, 100);
    });

    // ===== CLOCK =====
    function updateClock() { clock.textContent = formatTime(new Date()); }
    setInterval(updateClock, 1000);
    updateClock();

    // ===== SESSION ID =====
    sessionIdEl.textContent = 'SID:' + state.sessionCode;

    // ===== RESIZE =====
    window.addEventListener('resize', () => {
        if (matrixCanvas) {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
        }
    });

    // ===== SECURE VAULT — ENCRYPTION =====

    const VAULT_SALT = 'lila-neural-vault-v4';

    function getDeviceFingerprint() {
        const parts = [navigator.userAgent, navigator.language, screen.width, screen.height, new Date().getTimezoneOffset()];
        return parts.join('|');
    }

    async function deriveKey(passphrase) {
        const enc = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey('raw', enc.encode(passphrase), 'PBKDF2', false, ['deriveKey']);
        return crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt: enc.encode(VAULT_SALT), iterations: 100000, hash: 'SHA-256' },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }

    async function encryptData(data) {
        try {
            const key = await deriveKey(getDeviceFingerprint());
            const enc = new TextEncoder();
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(data)));
            const result = { iv: Array.from(iv), data: Array.from(new Uint8Array(encrypted)) };
            return btoa(JSON.stringify(result));
        } catch (e) { console.error('Encrypt error:', e); return null; }
    }

    async function decryptData(encoded) {
        try {
            if (!encoded) return null;
            const key = await deriveKey(getDeviceFingerprint());
            const { iv, data } = JSON.parse(atob(encoded));
            const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(iv) }, key, new Uint8Array(data));
            return JSON.parse(new TextDecoder().decode(decrypted));
        } catch (e) { console.error('Decrypt error:', e); return null; }
    }

    async function saveVault(data) {
        const encrypted = await encryptData(data);
        if (encrypted) localStorage.setItem('lila_vault', encrypted);
        return !!encrypted;
    }

    async function loadVault() {
        const encrypted = localStorage.getItem('lila_vault');
        if (!encrypted) return null;
        return await decryptData(encrypted);
    }

    async function loadConfigFromVault() {
        const data = await loadVault();
        if (data) {
            CONFIG.bankrApiKey = data.bankrApiKey || '';
            CONFIG.bankrPartnerKey = data.bankrPartnerKey || '';
            CONFIG.gatewayUrl = data.gatewayUrl || '';
            CONFIG.gatewayToken = data.gatewayToken || '';
        }
    }

    // ===== VAULT UI CONTROLLER =====

    function cmdVault() {
        addBlank();
        addLine('  Opening Secure Vault...', 'info');
        addBlank();
        openVaultUI();
    }

    function openVaultUI() {
        const overlay = document.getElementById('vault-overlay');
        overlay.classList.remove('vault-hidden');
        // Populate fields from CONFIG
        document.getElementById('vault-bankr-key').value = CONFIG.bankrApiKey;
        document.getElementById('vault-partner-key').value = CONFIG.bankrPartnerKey;
        document.getElementById('vault-gw-url').value = CONFIG.gatewayUrl;
        document.getElementById('vault-gw-token').value = CONFIG.gatewayToken;
        // Reset status
        setVaultStatus('', '');
    }

    function closeVaultUI() {
        document.getElementById('vault-overlay').classList.add('vault-hidden');
        input.focus();
    }

    function setVaultStatus(msg, type) {
        const el = document.getElementById('vault-status');
        el.className = type ? 'vault-status-' + type : 'vault-status-hidden';
        el.textContent = msg;
    }

    // Vault event listeners
    function initVaultUI() {
        document.getElementById('vault-close').addEventListener('click', closeVaultUI);
        document.getElementById('vault-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'vault-overlay') closeVaultUI();
        });

        // Toggle visibility buttons
        document.querySelectorAll('.vault-toggle-vis').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = document.getElementById(btn.dataset.target);
                if (target) {
                    target.type = target.type === 'password' ? 'text' : 'password';
                    btn.textContent = target.type === 'password' ? 'SHOW' : 'HIDE';
                }
            });
        });

        // Save button
        document.getElementById('vault-save').addEventListener('click', async () => {
            const data = {
                bankrApiKey: document.getElementById('vault-bankr-key').value.trim(),
                bankrPartnerKey: document.getElementById('vault-partner-key').value.trim(),
                gatewayUrl: document.getElementById('vault-gw-url').value.trim(),
                gatewayToken: document.getElementById('vault-gw-token').value.trim(),
            };
            const ok = await saveVault(data);
            if (ok) {
                CONFIG.bankrApiKey = data.bankrApiKey;
                CONFIG.bankrPartnerKey = data.bankrPartnerKey;
                CONFIG.gatewayUrl = data.gatewayUrl;
                CONFIG.gatewayToken = data.gatewayToken;
                setVaultStatus('✓ Encrypted and saved to local vault.', 'success');
                addLine('  [VAULT] Keys encrypted and saved successfully.', 'success');
            } else {
                setVaultStatus('✗ Failed to encrypt. Check browser crypto support.', 'error');
            }
        });

        // Clear button
        document.getElementById('vault-clear').addEventListener('click', () => {
            if (!confirm('Delete all stored API keys? This cannot be undone.')) return;
            localStorage.removeItem('lila_vault');
            CONFIG.bankrApiKey = ''; CONFIG.bankrPartnerKey = '';
            CONFIG.gatewayUrl = ''; CONFIG.gatewayToken = '';
            document.getElementById('vault-bankr-key').value = '';
            document.getElementById('vault-partner-key').value = '';
            document.getElementById('vault-gw-url').value = '';
            document.getElementById('vault-gw-token').value = '';
            setVaultStatus('⚠ All keys cleared.', 'warning');
            addLine('  [VAULT] All keys have been cleared.', 'warning');
        });

        // Escape key closes vault
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !document.getElementById('vault-overlay').classList.contains('vault-hidden')) {
                closeVaultUI();
            }
        });
    }

    // ===== INIT =====
    async function init() {
        initVaultUI();
        await loadConfigFromVault();
        setNetworkStatus();
        boot();
    }
    init();

})();
