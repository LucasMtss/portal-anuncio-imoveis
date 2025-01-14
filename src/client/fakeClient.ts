import Image1 from '@/../public/blog-image-1.png';
import Image2 from '@/../public/blog-image-2.png';
import Image3 from '@/../public/blog-image-3.png';
import properties from '@/../assets/flats.json';
import { IProperty } from '@/interfaces/property';

export class FakeClient {
    constructor() {}

    async getBlogPosts() {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return [
            {
                title: 'ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE',
                readingTime: 2,
                tag: 'Mundo Netimóveis',
                image: Image1,
            },
            {
                title: 'ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS',
                readingTime: 3,
                tag: 'Finanças',
                image: Image2,
            },
            {
                title: 'EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO',
                readingTime: 4,
                tag: 'Sucesso Profissional',
                image: Image3,
            }
        ]
    }

    async getProperties(): Promise<IProperty[]> {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return properties;
    }
}