export function withPrefixToLinks(sidebar: any, prefix: string): any {
    const add = (link: string) => {
        const needs = !link.startsWith(prefix + '/') && !link.startsWith(prefix);
        if (!needs) return link;
        const left = prefix.endsWith('/') ? prefix.slice(0, -1) : prefix;
        const right = link.startsWith('/') ? link : `/${link}`;
        return `${left}${right}`;
    };

    const mapItems = (items: any[]): any[] =>
        items?.map((item) => {
            if (item.link) item.link = add(item.link);
            if (item.items) item.items = mapItems(item.items);
            return item;
        });

    if (Array.isArray(sidebar)) {
        return mapItems(sidebar);
    }
    if (sidebar && typeof sidebar === 'object') {
        const out: Record<string, any> = {};
        for (const key of Object.keys(sidebar)) {
            out[key] = Array.isArray(sidebar[key]) ? mapItems(sidebar[key]) : sidebar[key];
        }
        return out;
    }
    return sidebar;
}