export interface SiteData {
    company: {
        name: string
        phone: string
        whatsapp: string
        address: string
    }
    hero: {
        title: string
        subtitle: string
        ctaText: string
    }
    about: {
        text: string
    }
    services: {
        title: string
        description: string
    }[]
    testimonials: {
        name: string
        text: string
    }[]
}

export async function loadSiteData(): Promise<SiteData> {
    const res = await fetch('/data/site.json')
    return res.json()
}
