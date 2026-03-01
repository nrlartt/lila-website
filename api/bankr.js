export default async function handler(req, res) {
    // Sadece POST isteklerine izin ver
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    const { endpoint, method = 'GET', body } = req.body;

    // Sunucu tarafındaki güvenli API Key'ler (kullanıcılar göremez)
    const API_KEY = process.env.BANKR_API_KEY;
    const PARTNER_KEY = process.env.BANKR_PARTNER_KEY;

    if (!API_KEY) {
        return res.status(500).json({
            success: false,
            error: 'Server configuration error: BANKR_API_KEY not found in environment variables.'
        });
    }

    // İstek yapılacak tam URL
    const url = 'https://api.bankr.bot' + endpoint;

    // Header ayarlamaları (Gerçek şifreyi burada ekliyoruz!)
    const headers = {
        'X-API-Key': API_KEY,
        'Content-Type': 'application/json'
    };

    // Launch token için gerekliyse partner key'i ekle
    if (PARTNER_KEY) {
        headers['X-Partner-Key'] = PARTNER_KEY;
    }

    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const data = await response.json();

        // CORS (İsteğe bağlı - eğer başka domainden de erişilecekse)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');

        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}
