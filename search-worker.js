let data = [];

self.onmessage = e => {
    if (e.data.action === 'setData') {
        data = e.data.data || [];
        return;
    }

    if (e.data.action === 'filter') {
        const results = data.filter(item =>
            item.name_lc.includes(e.data.name) &&
            (!e.data.type || item.type === e.data.type) &&
            item.id_lc.startsWith(e.data.id)
        );

        self.postMessage({ requestId: e.data.requestId, results });
    }
};
